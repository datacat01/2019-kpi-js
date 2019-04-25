from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report
from sklearn.preprocessing import StandardScaler
import preprocess_data as preproc
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score, f1_score
from sklearn.utils import shuffle
import pandas as pd
import numpy as np
import model_evaluation as me
import os


def main():
    parent_dir = os.path.abspath(
        os.path.join(os.path.dirname(__file__),".."))
    X_train, X_test, y_train, y_test = preproc.load_and_preprocess(parent_dir)
    
    logreg = LogisticRegression()
    logreg.fit(X_train, y_train)    
    y_pred = logreg.predict(X_test)
    
    me.plot_confusion_matrix(y_test, y_pred)
    me.f1score(y_test, y_pred)
    me.accuracy(y_test, y_pred)


if __name__ == "__main__":
    main() 