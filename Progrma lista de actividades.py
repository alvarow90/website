#!/usr/bin/env python
# coding: utf-8

# In[12]:


import pandas as pd 


# In[13]:


#Importamos el archivo con actividades
archivo_inicial=pd.read_csv("po.csv")
archivo_inicial


# In[14]:


#Ordenamos por dificultad
print(archivo_inicial.sort_values(by=['Dificultad'],ascending=[True]))


# In[15]:


#Extraemos valores
r=[]
archivo_inicial["Nombre"].values
r=archivo_inicial["Nombre"].values


# In[16]:


r


# In[3]:


#Creamos el procedimiento para ver las actividades hechas y no hechas
for i in r:
    print(i)
    a=input("¿Terminado?")
print(x)


# In[1]:





# In[ ]:




