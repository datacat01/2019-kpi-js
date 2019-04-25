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
    """Retreive dataset
    
    Arguments:
        path {str} -- path to folder with features
    
    Returns:
        X, y, features_names, file_names
    """

    path_clear = os.path.join(path, 'features_clear.csv')
    path_obfuscated = os.path.join(path, 'features_obfuscated.csv')
    
    df_clear = pd.read_csv(path_clear, index_col=[0])
    df_clear['class'] = np.zeros(len(df_clear))
    file_names = df_clear['file_name']
    df_clear = df_clear.drop(columns='file_name')

    df_obfuscated = pd.read_csv(path_obfuscated, index_col=[0])
    df_obfuscated['class'] = np.ones(len(df_obfuscated))
    df_obfuscated = df_obfuscated.drop(columns='file_name')

    features_names = list(df_clear)
    features_names = features_names[:18]

    df = pd.concat([df_clear, df_obfuscated], ignore_index=False)
    X = df.drop(columns=['class'])
    y = df['class']
    scaler = StandardScaler()
    X = scaler.fit_transform(X)

    return X, y, features_names, file_names

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



def predict_and_score(model, X_train, X_test, y_train, y_test, features_names, file_names, model_type):
    """Fit a model with best params found through GridSearchCV, print accuracy,
     feature importance, F1 score, comfusion matrix, misclassified files
    
    Arguments:
        model {dict} -- best estimator
        model_type {str} -- ramdom forest / decision tree
    """

    #predict
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)

    #misclassified
    index = 0
    misclassifiedIndexes = []
    for label, predict in zip(y_test, y_pred):
        if label != predict: 
            misclassifiedIndexes.append(index)
        index +=1
    
    print('Misclassified are : ')
    for i in misclassifiedIndexes:
        print(file_names.loc[i])

    #accuracy
    accuracy = accuracy_score(y_test, y_pred)
    print('Accuracy: %.3f' % (accuracy * 100.0))

    #F1 score
    print('F1 score: %3f' % f1_score(y_test, y_pred, average='binary'))

    #feature importances
    df_feature_imp = pd.DataFrame({'Feature importance': model.feature_importances_})
    df_feature_imp['Feature'] = features_names
    print(df_feature_imp)

    #confusion matrix
    plot_confusion_matrix(y_test, y_pred, model_type)
    plt.show()



def classify_decision_tr(X_train, X_test, y_train, y_test, features_names, file_names):
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
    predict_and_score(model, X_train, X_test, y_train, y_test, features_names, file_names, 'Desicion tree')


def classify_random_forest(X_train, X_test, y_train, y_test, features_names, file_names):
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
    predict_and_score(model, X_train, X_test, y_train, y_test, features_names, file_names, 'Random forest')




def main():

    parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__),".."))
    path = os.path.join(parent_dir, 'data/features/')

    x, y, features_names, file_names = load_and_split(path) 
    X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=2)

    print('----------DECISION-TREE-------------')
    classify_decision_tr(X_train, X_test, y_train, y_test, features_names, file_names)
    print('----------RANDOM-FOREST-------------')
    classify_random_forest(X_train, X_test, y_train, y_test, features_names, file_names)


if __name__ == '__main__':
    main()