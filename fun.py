from unicodedata import normalize

def chopchopextra(string):
    if "/" in string:
        resto = string.split('/', 1)[0]
    else:
        resto = string.rstrip("\n")

    return resto.upper()


def chopchopsete(dic):
    return [word for word in dic if (len(word) == 7 and '-' not in word and '\'' not in word)]


def chopchopacentos(string):
    return normalize('NFKD', string).encode('ASCII', 'ignore').decode('ASCII')


# Formato das palavras: AAA#A##
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

letras = set('IÍÌZEAÁÃÀÂSBTBQOÓÕÒÔ')

def chopchopleet(dic):
    return [word for word in dic if any(i in word[3] for i in letras) and any(i in word[5] for i in letras) and any(i in word[6] for i in letras)]


correspondentes = {
    'I':'1',
    'Z':'2',
    'E':'3',
    'A':'4',
    'S':'5',
    'G':'6',
    'T':'7',
    'B':'8',
    'Q':'9',
    'O':'0'
}


def final(string):
    lista = list(string)
    lista[3] = correspondentes.get(string[3])
    lista[5] = correspondentes.get(string[5])
    lista[6] = correspondentes.get(string[6])

    return ''.join(lista)

