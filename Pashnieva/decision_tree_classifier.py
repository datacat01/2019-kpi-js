import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sn
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import tree
from sklearn.model_selection import GridSearchCV
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix


def load_and_split(path):

    path_clear = os.path.join(path, 'features_clear.csv')
    path_obfuscated = os.path.join(path, 'features_obfuscated.csv')
    
    df_clear = pd.read_csv(path_clear, index_col=[0])
    df_clear['class'] = np.zeros(len(df_clear))
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

    return X, y, features_names

def plot_confusion_matrix(y_true, y_pred):

    cm = confusion_matrix(y_true, y_pred, labels=[0,1])
    df_cm = pd.DataFrame(cm)
    ax = plt.axes()
    sn.heatmap(df_cm, annot=True, annot_kws={"size": 14}, fmt='g', cmap='Blues', ax=ax)
    ax.set_title('Confusion matrix')


def classify_and_score(X_train, X_test, y_train, y_test, features_names):

    params = {'criterion':('gini', 'entropy'), 
              'min_samples_split':[2,3,4,5], 
              'max_depth':[9,10,11,12],
              'class_weight':('balanced', None),
              'presort':(False,True),
             }
    
    tr = tree.DecisionTreeClassifier()

    #find best params for the model
    gsearch = GridSearchCV(tr, params)
    gsearch.fit(X_train, y_train)
    model = gsearch.best_estimator_
    print("Model's params:\n" + str(model))

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
    print('Misclassified are : ' + str(misclassifiedIndexes))

    #accuracy
    accuracy = accuracy_score(y_test, y_pred)
    print("accuracy = %.5f" % (accuracy * 100.0))

    #feature importances
    df_feature_imp = pd.DataFrame({'Feature importance': model.feature_importances_})
    df_feature_imp['Feature'] = features_names
    print(df_feature_imp)

    #confusion matrix
    plot_confusion_matrix(y_test, y_pred)
    plt.show()




def main():

    parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__),".."))
    path = os.path.join(parent_dir, 'data/features/')

    x, y, features_names = load_and_split(path) 
    X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=2)
    classify_and_score(X_train, X_test, y_train, y_test, features_names)


if __name__ == '__main__':
    main()