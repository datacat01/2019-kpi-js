from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.utils import shuffle
import pandas as pd
import numpy as np

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