def chopchopextra(string):
    if "/" in string:
        resto = string.split('/', 1)[0]
    else:
        resto = string.rstrip("\n")

    return resto.upper()


def chopchopsete(dic):
    return [word for word in dic if (len(word) == 7 and '-' not in word)]


# AAA#A##
# 1 - (I), L
# 2 - Z
# 3 - E
# 4 - (A), H
# 5 - S
# 6 - B, (G)
# 7 - (T), J
# 8 - B
# 9 - (Q), G
# 0 - O
# ['I', 'Í', 'Z', 'E', 'É', 'Ê', 'A', 'Á', 'Ã', 'S', 'B', 'T', 'B', 'Q', 'O', 'Ó', 'Õ']

letras = set('IÍZEÉÊAÁÃSBTBQOÓÕ')


def chopchopleet(dic):
    return [word for word in dic if any(i in word[3] for i in letras) and any(i in word[5] for i in letras) and any(i in word[6] for i in letras)]


dicionario = "data\pt-BR.dic"

data = open(dicionario, encoding="utf8").readlines()

for i in range(len(data)):
    data[i] = chopchopextra(data[i])

seteletras = chopchopsete(data)

leet = chopchopleet(seteletras)

for word in leet:
    print(word)
