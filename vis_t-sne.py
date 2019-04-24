import os

import pandas as pd
import numpy as np
from sklearn.manifold import TSNE
from sklearn.preprocessing import StandardScaler

import matplotlib.pyplot as plt
import seaborn as sns

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

# visualising using TSNE
tsne = TSNE(n_components=2, perplexity=100., random_state=42)
tsne.fit(X)
Z = tsne.embedding_

plt.title("T-SNE Results")
sns.scatterplot(x=Z[:, 0], y=Z[:, 1], hue=y, palette=["g","r"])
plt.legend(["Clean", "Obfuscated"], loc='center left')
plt.savefig("tsne.jpg")
plt.close() 
plt.show()
