from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report
from sklearn.preprocessing import StandardScaler
from preprocess_data import preproc
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score, f1_score
from sklearn.utils import shuffle
import pandas as pd
import numpy as np
import os


def main():
    parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__),".."))

    path_clear = os.path.join(parent_dir, 'data/features/features_clear.csv')
    path_obfuscated = os.path.join(parent_dir, 'data/features/features_obfuscated.csv')

    data_clear = pd.read_csv(path_clear).drop(columns=["Unnamed: 0", "file_name"])
    data_obfuscated = pd.read_csv(path_obfuscated).drop(columns=["Unnamed: 0", "file_name"])

    X_train, X_test, y_train, y_test = preproc(data_clear, data_obfuscated)
    
    logreg = LogisticRegression()
    logreg.fit(X_train, y_train)    
    y_pred = logreg.predict(X_test)
    
    print('Accuracy of logistic regression classifier on test set:{}'\
        .format(accuracy_score(y_test, y_pred)))
    C = confusion_matrix(y_test, y_pred)
    print("confusion matrix: ")
    print(C)
    print(classification_report(y_test, y_pred))

if __name__ == "__main__":
    main() 