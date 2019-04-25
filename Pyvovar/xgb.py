from preprocess_data import preproc
import xgboost as xgb
import pandas as pd
import os

def main():
    parent_dir = os.path.abspath\
    (os.path.join(os.path.dirname(__file__), '..'))
    
    clean_data = pd.read_csv\
    (os.path.join(parent_dir, 'data/features/features_clear.csv'))\
    .drop(columns=["Unnamed: 0", "file_name"])

    obfuscated_data = pd.read_csv\
    (os.path.join(parent_dir, 'data/features/features_obfuscated.csv'))\
    .drop(columns=["Unnamed: 0", "file_name"])
    
    X_train, X_test, y_train, y_test = preproc(clean_data, obfuscated_data)

    # specify parameters via map
    param = {'max_depth':2, 'eta':1, 'silent':1, 'objective':'binary:logistic' }
    num_round = 2
    bst = xgb.train(param, X_train, num_round)
    # make prediction
    preds = bst.predict(X_test)


if __name__ == "__main__":
    main()