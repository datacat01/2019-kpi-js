from preprocess_data import preproc
from sklearn import ensemble
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt
import xgboost as xgb
import numpy as np
import pandas as pd
import os
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.utils import shuffle

def preproc(data_clear, data_obfuscated):
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

    data_clear = pd.read_csv(path_clear).drop(columns=["Unnamed: 0", "file_name"])
    data_obfuscated = pd.read_csv(path_obfuscated).drop(columns=["Unnamed: 0", "file_name"])

    #X_train, X_test, y_train, y_test = preproc(data_clear, data_obfuscated)
    
    y = np.zeros(data_clear.shape[0])
    data_clear['predicted'] = y
    y = np.ones(data_obfuscated.shape[0])
    data_obfuscated['predicted'] = y

    data = pd.concat([data_clear, data_obfuscated], axis=0, ignore_index=True)   
    data = shuffle(data)
    y = np.array(data["predicted"])
    X = data.drop(columns=["predicted"])
    data_dmatrix = xgb.DMatrix(data=X,label=y)
    scl = StandardScaler()
    X = scl.fit_transform(X)
    X_train, X_test, y_train, y_test = train_test_split(X, y)  

    classifier = xgb.XGBClassifier(objective ='reg:linear',
        colsample_bytree = 0.3, learning_rate = 0.1,
        max_depth = 5, alpha = 10, n_estimators = 10)
    classifier.fit(X_train, y_train)
    preds = classifier.predict(X_test)
    
    params = {"silent": 1, "objective":"reg:logistic",
        'colsample_bytree': 0.3,'learning_rate': 0.1,
        'max_depth': 5, 'alpha': 10}

    cv_results = xgb.cv(
        dtrain=data_dmatrix, 
        params=params, nfold=3,
        num_boost_round=50,
        early_stopping_rounds=10,
        metrics="rmse",
        as_pandas=True,
        seed=123)

    print(cv_results.head().shape)

    """
    original_params = {'n_estimators': 1000,
        'max_leaf_nodes': 4, 'max_depth': None,
        'random_state': 2, 'min_samples_split': 5}
    
    plt.figure()

    for label, color, setting in \
        [('No shrinkage', 'orange',
            {'learning_rate': 1.0, 'subsample': 1.0}),
            ('learning_rate=0.1', 'turquoise',
            {'learning_rate': 0.1, 'subsample': 1.0}),
            ('subsample=0.5', 'blue',
            {'learning_rate': 1.0, 'subsample': 0.5}),
            ('learning_rate=0.1, subsample=0.5', 'gray',
            {'learning_rate': 0.1, 'subsample': 0.5}),
            ('learning_rate=0.1, max_features=2', 'magenta',
            {'learning_rate': 0.1, 'max_features': 2})]:
        params = dict(original_params)
        params.update(setting)

    clf = ensemble.GradientBoostingClassifier(**params)
    clf.fit(X_train, y_train)
        # compute test set deviance
    test_deviance = np.zeros((params['n_estimators'],), dtype=np.float64)

    for i, y_pred in enumerate(clf.staged_decision_function(X_test)):
        # clf.loss_ assumes that y_test[i] in {0, 1}
        test_deviance[i] = clf.loss_(y_test, y_pred)
    
    
    plt.plot((np.arange(test_deviance.shape[0]) + 1)[::5], test_deviance[::5],
            '-', color=color, label=label)

    plt.legend(loc='upper left')
    plt.xlabel('Boosting Iterations')
    plt.ylabel('Test Set Deviance')

    plt.show()
    """

if __name__ == "__main__":
    main()