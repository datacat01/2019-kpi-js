from sklearn.ensemble import GradientBoostingClassifier
from sklearn.model_selection import GridSearchCV
import preprocess_data as preproc
import model_evaluation as me
from sklearn import ensemble
import pandas as pd
import numpy as np
import os


def main():

    parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__),".."))
    X_train, X_test, y_train, y_test = preproc.load_and_preprocess(parent_dir)
        
    params = {
        'learning_rate': [0.1, 0.5, 0.9],
        'n_estimators': [50, 70, 100],
        'max_depth': [3, 5, 10],
    }    

    xgb = GradientBoostingClassifier()
    gsearch = GridSearchCV(estimator=xgb,
        param_grid=params, cv=5)
    gsearch.fit(X_train, y_train)
    model = gsearch.best_estimator_
    y_pred = model.predict(X_test)
    me.plot_confusion_matrix(y_pred, y_test)
    me.f1score(y_pred, y_test)
    me.accuracy(y_pred, y_test)


if __name__ == "__main__":
    main()