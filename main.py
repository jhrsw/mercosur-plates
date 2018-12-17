from fun import *

dicionario = "data\pt-BR.dic"

data = open(dicionario, encoding="utf8").readlines()

for i in range(len(data)):
    data[i] = chopchopextra(data[i])

for i in range(len(data)):
    data[i] = chopchopacentos(data[i])

seteletras = chopchopsete(data)

leet = chopchopleet(seteletras)

for i in range(len(leet)):
    leet[i] = final(leet[i])

for word in leet:
    print(word)

save = open("placas.txt", "w")


for word in leet:
    save.write(word+'\n')
