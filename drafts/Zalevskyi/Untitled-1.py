#%% Change working directory from the workspace root to the ipynb file location. Turn this addition off with the DataScience.changeDirOnImportExport setting
import os
try:
	os.chdir(os.path.join(os.getcwd(), 'Zalevskyi'))
	print(os.getcwd())
except:
	pass

#%%
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.manifold import TSNE
import os


#%%
parent_dir = os.path.abspath(os.path.join('','..'))
path = os.path.join(parent_dir, 'data/features/')
path_features_clear = os.path.join(path, 'features_clear.csv')
path_features_obfuscated = os.path.join(path, 'features_obfuscated.csv')
    
df_clear = pd.read_csv(path_features_clear, index_col=0)
df_obfuscated = pd.read_csv(path_features_obfuscated, index_col=0)


#%%
df_clear.describe()


#%%
tsne = TSNE(perplexity=40, random_state=0)
embs_clear = tsne.fit_transform(df_clear)
embs_obfuscated = tsne.fit_transform(df_obfuscated)


#%%
plot_data = (embs_clear, embs_obfuscated)
FS = (10, 10)
groups = ["clear", "obfuscated"]
fig, ax = plt.subplots(figsize=FS)

ax.scatter(embs_clear[:, 0], embs_clear[:, 1], alpha=.1, label=groups[0])
ax.scatter(embs_obfuscated[:, 0], embs_obfuscated[:, 1], alpha=.1, label=groups[1])
ax.legend(loc=4)


