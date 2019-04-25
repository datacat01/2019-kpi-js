import pandas as pd
import numpy as np
import seaborn as sn
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix
from sklearn.metrics import f1_score
import matplotlib.pyplot as plt

def plot_confusion_matrix(y_true, y_pred):
    cm = confusion_matrix(y_true, y_pred, labels=[0,1])
    df_cm = pd.DataFrame(cm)
    ax = plt.axes()
    sn.heatmap(df_cm, annot=True, annot_kws={"size": 14}, fmt='g', cmap='Blues', ax=ax)
    ax.set_title('Confusion matrix')
    plt.show()

def accuracy(y_test, y_pred):
    accuracy = accuracy_score(y_test, y_pred)
    print('Accuracy: %.3f' % (accuracy * 100.0))

def f1score(y_test, y_pred):
    #F1 score
    print('F1 score: %3f' % f1_score(y_test, y_pred, average='binary'))