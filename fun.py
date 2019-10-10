from unicodedata import normalize

"""Word format: AAA#A##
Associations
1 - I (L should also be possible)
2 - Z
3 - E
4 - A (H should also be possible)
5 - S
6 - G (B should also be possible)
7 - T (J should also be possible)
8 - B
9 - Q (G should also be possible)
0 - O
"""

associations = {
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

letters = sorted(set(x for x in associations))

def clean_extra_characters(string):
    if "/" in string:
        clean = string.split('/', 1)[0]
    else:
        clean = string.rstrip("\n")

    return clean.upper()

def find_seven_letter_words(dic):
    return [word for word in dic if (len(word) == 7 and '-' not in word and '\'' not in word)]

def normalize_words(string):
    return normalize('NFKD', string).encode('ASCII', 'ignore').decode('ASCII')

def find_leet_possibilities(dic):
    return [word for word in dic if any(i in word[3] for i in letters) and any(i in word[5] for i in letters) and any(i in word[6] for i in letters)]

def convert_to_leet(string):
    word = list(string)
    word[3] = associations.get(string[3])
    word[5] = associations.get(string[5])
    word[6] = associations.get(string[6])

    return ''.join(word)

