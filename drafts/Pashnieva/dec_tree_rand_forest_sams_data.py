import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sn
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn import tree
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, f1_score


def load_and_split(path):

    path_clear = os.path.join(path, 'target_cln_obfuscatorio.csv')
    path_obfuscated1 = os.path.join(path, 'target_obf_obfuscatorio.csv')
    path_obfuscated2 = os.path.join(path, 'target_obf_javascriptobfuscator.csv')
    
    
    df_clear = pd.read_csv(path_clear, header=None)
    df_clear = df_clear.drop(columns=[df_clear.columns[0]])
    print(df_clear.shape)
    df_clear[len(df_clear.columns)] = 0

    df_obfuscated1 = pd.read_csv(path_obfuscated1, header=None)
    df_obfuscated2 = pd.read_csv(path_obfuscated2, header=None)
    df_obfuscated = pd.concat([df_obfuscated1, df_obfuscated2], ignore_index=True)

    df_obfuscated = df_obfuscated.drop(columns=[df_obfuscated.columns[0]])
    print(df_obfuscated.shape)
    df_obfuscated[len(df_obfuscated.columns)] = 1


    df = pd.concat([df_clear, df_obfuscated], ignore_index=True)
    X = df.drop(columns=[len(df.columns)])
    y = df[len(df.columns)]
    scaler = StandardScaler()
    X = scaler.fit_transform(X)

    return X, y

def plot_confusion_matrix(y_true, y_pred, model_type):
    """Plot confusion matrix
    
    Arguments:
        y_true {numpy array} -- real values
        y_pred {numpy array} -- estimated values
        model_type {str} -- ramdom forest / decision tree
    """

    cm = confusion_matrix(y_true, y_pred, labels=[0,1])
    df_cm = pd.DataFrame(cm)
    ax = plt.axes()
    sn.heatmap(df_cm, annot=True, annot_kws={"size": 14}, fmt='g', cmap='Blues', ax=ax)
    ax.set_title('Confusion matrix for ' + model_type)



def predict_and_score(model, X_train, X_test, y_train, y_test, model_type):
    """Fit a model with best params found through GridSearchCV, print accuracy,
     feature importance, F1 score, comfusion matrix, misclassified files
    
    Arguments:
        model {dict} -- best estimator
        model_type {str} -- ramdom forest / decision tree
    """

    #predict
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)


    #accuracy
    accuracy = accuracy_score(y_test, y_pred)
    print('Accuracy: %.3f' % (accuracy * 100.0))

    #F1 score
    print('F1 score: %3f' % f1_score(y_test, y_pred, average='binary'))


    #confusion matrix
    plot_confusion_matrix(y_test, y_pred, model_type)
    plt.show()



def classify_decision_tr(X_train, X_test, y_train, y_test):
    """Decision tree classification function
    """

    params = {'criterion':['gini', 'entropy'], 
              'min_samples_split':[2,3,4,5], 
              'max_depth':[9,10,11,12],
              'class_weight':['balanced', None],
              'presort':[False,True],
             }

    
    tr = tree.DecisionTreeClassifier(random_state=2)

    #find best params for the model
    gsearch = GridSearchCV(tr, params)
    gsearch.fit(X_train, y_train)
    model = gsearch.best_estimator_
    print('Decision tree params:\n' + str(model))

    #do the rest (prediction, accuracy, f1, plot confusion matrix)
    predict_and_score(model, X_train, X_test, y_train, y_test, 'Desicion tree')


def classify_random_forest(X_train, X_test, y_train, y_test):
    """Random forest classification function
    """

    params={
            'criterion':['gini', 'entropy'],
            'min_samples_split':[2,3,4,5], 
            'max_depth':[9,10,11,12],
            'class_weight':['balanced', None],
            'n_estimators':[200, 500],
            'max_features':['auto', 'sqrt', 'log2']
            }
            
    rfc = RandomForestClassifier(random_state=2)

    #find best params for the model
    gsearch = GridSearchCV(estimator=rfc, param_grid=params, cv=5)
    gsearch.fit(X_train, y_train)
    model = gsearch.best_estimator_
    print('Random forest classifier params:\n' + str(model))
    
    #do the rest (prediction, accuracy, f1, plot confusion matrix)
    predict_and_score(model, X_train, X_test, y_train, y_test, 'Random forest')




def main():

    parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__),".."))
    path = os.path.join(parent_dir, 'data/features/extended_features')

    x, y = load_and_split(path) 
    X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=2)

    print('----------DECISION-TREE-------------')
    classify_decision_tr(X_train, X_test, y_train, y_test)
    print('----------RANDOM-FOREST-------------')
    classify_random_forest(X_train, X_test, y_train, y_test)


if __name__ == '__main__':
    main()