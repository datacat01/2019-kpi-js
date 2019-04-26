import os

import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix, accuracy_score, f1_score


import matplotlib.pyplot as plt
import seaborn as sns

import lightgbm as lgb

df_dir = os.path.abspath((os.path.dirname(""))) + "/data/features"

"""
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
"""
df_clean = pd.read_csv(df_dir+"/extended_features/target_cln_obfuscatorio.csv", header=None)
df_obfuscated1 = pd.read_csv(df_dir +"/extended_features/target_obf_javascriptobfuscator.csv", header=None)
df_obfuscated2 = pd.read_csv(df_dir +"/extended_features/target_obf_obfuscatorio.csv" , header=None)
df_obfuscated = pd.concat([df_obfuscated1, df_obfuscated2], ignore_index=True)

df_clean.drop(columns=[0, 41], inplace=True)
df_clean["target"] = np.zeros(len(df_clean))
df_obfuscated.drop(columns=[0, 41], inplace=True)
df_obfuscated["target"] = np.ones(len(df_obfuscated))

df = pd.concat([df_clean, df_obfuscated])

X = df.drop(columns=["target"])


#droping a string column (CHECK IF EXISTS)
#X = X.drop(columns=["file_name"])

scl = StandardScaler()

#file_names = df.file_name.values
#indexes = df.index.values


X = scl.fit_transform(X)
y = df["target"]

x_train, x_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42)


def plot_confusion_matrix(y_true, y_pred, norm=True):

    cm = confusion_matrix(y_true, y_pred, labels=[0,1])
    if norm:
        cm = cm/len(y_pred)
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
params['num_leaves'] = 15
params['min_data'] = 50
params['max_depth'] = 20

clf = lgb.train(params, d_train, 700)

#lightgbm evaluating
y_pred_proba=clf.predict(x_test)
y_pred = [int(y >= 0.5) for y in y_pred_proba]

print("Accuracy:", accuracy_score(y_test, y_pred))
print("F1 dcore:", f1_score(y_test, y_pred))
print("Confusion Matrix for LightGBM")
plot_confusion_matrix(y_test, y_pred)
plt.show()
plot_confusion_matrix(y_test, y_pred, norm=False)
plt.show()

#feature importances
print("Feature Importances:")
imprts = clf.feature_importance()
ft_names = df.columns[:-2].values
feature_importances = sorted(zip(imprts,ft_names), reverse=True)
for imp in feature_importances:
    print(imp)
