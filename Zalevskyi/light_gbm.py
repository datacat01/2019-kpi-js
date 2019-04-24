import os

import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_spli
from sklearn.metrics import confusion_matrix, accuracy_score, f1_score


import matplotlib.pyplot as plt
import seaborn as sns

import lightgbm as lgb

df_dir = os.path.abspath((os.path.dirname(""))) + "/data/features"

# merging tцo df to one
clear_df = pd.read_csv(
    df_dir + "/features_clear.csv").drop(columns=["Unnamed: 0"])
target = np.zeros(len(clear_df))
clear_df["target"] = target

obf_df = pd.read_csv(
    df_dir + "/features_obfuscated.csv").drop(columns=["Unnamed: 0"])
target = np.ones(len(obf_df))
obf_df["target"] = target

df = pd.concat([clear_df, obf_df], axis=0, ignore_index=True)
X = df.drop(columns=["target"])
scl = StandardScaler()
X = scl.fit_transform(X)
y = df["target"]

x_train, x_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42)


def plot_confusion_matrix(y_true, y_pred, norm=True):

    cm = confusion_matrix(y_true, y_pred, labels=[0,1])
    if norm:
        cm
    df_cm = pd.DataFrame(cm)
    ax = plt.axes()
    sns.heatmap(df_cm, annot=True,annot_kws={"size": 14}, fmt='g', cmap='Blues', ax=ax)
    ax.set_title('Confusion matrix')

#lightgbm training
d_train = lgb.Dataset(x_train, label=y_train)

params = {}
params['learning_rate'] = 0.003
params['boosting_type'] = 'gbdt'
params['objective'] = 'binary'
params['metric'] = 'binary_logloss'
params['sub_feature'] = 0.5
params['num_leaves'] = 10
params['min_data'] = 50
params['max_depth'] = 10

clf = lgb.train(params, d_train, 100)

#lightgbm evaluating
y_pred_proba=clf.predict(x_test)
y_pred = [int(y >= 0.5) for y in y_pred_proba]

print("Accuracy:", accuracy_score(y_test, y_pred))
print("F1 dcore", f1_score(y_test, y_pred))
print("Confusion Matrix")
plot_confusion_matrix(y_test, y_pred)

cm = confusion_matrix(y_test, y_pred)

print(cm)

cm[0,:] = cm[0,:]/(len(y_pred) - sum(y_pred))
cm[1,:]= cm[1,:]/(sum(y_pred))

print(cm)