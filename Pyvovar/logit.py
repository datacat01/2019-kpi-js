
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.utils import shuffle
import matplotlib.pyplot as plt
import statsmodels.api as sm
import pandas as pd
import numpy as np
import os


def preprocess_data(data_clear, data_obfuscated):
    y = np.zeros(data_clear.shape[0])
    data_clear['predicted'] = y
    y = np.ones(data_obfuscated.shape[0])
    data_obfuscated['predicted'] = y

    data = pd.concat([data_clear, data_obfuscated], axis=0, ignore_index=True)   
    data = shuffle(data)
    y = np.array(data["predicted"])
    X = data.drop(columns=["predicted"])
    scl = StandardScaler()
    X = scl.fit_transform(X)
    return train_test_split(X, y)    


def main():
    parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__),".."))
    path_clear = os.path.join(parent_dir, 'data/features/features_clear.csv')
    path_obfuscated = os.path.join(parent_dir, 'data/features/features_obfuscated.csv')
    data_clear = pd.read_csv(path_clear).drop(columns=["Unnamed: 0"])
    data_obfuscated = pd.read_csv(path_obfuscated).drop(columns=["Unnamed: 0"])

    X_train, X_test, y_train, y_test = preprocess_data(data_clear, data_obfuscated)
    
    logreg = LogisticRegression()
    logreg.fit(X_train, y_train)    
    y_pred = logreg.predict(X_test)
    print('Accuracy of logistic regression classifier on test set: {:.2f}'\
        .format(logreg.score(X_test, y_test)))
    C = confusion_matrix(y_test, y_pred)
    print("confusion matrix: ")
    print(C)
    print(classification_report(y_test, y_pred))


if __name__ == "__main__":
    main() 