def chopchopchop(string):
    if "/" in string:
        resto = string.split('/', 1)[0]
    else:
        resto = string.rstrip("\n")

    return resto


def chopsete(words):
    return [word for word in words if (len(word) == 7 and '-' not in word)]


dicionario = "data\pt-BR.dic"

data = open(dicionario, encoding="utf8").readlines()

for i in range(len(data)):
    data[i] = chopchopchop(data[i])

data = chopsete(data)

for i in range(len(data)):
    print(data[i])
