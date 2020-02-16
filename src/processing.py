from re import fullmatch

import unicodedata


def is_match(word, dic):
    if len(word) >= 7:
        return word[3] in dic and word[5] in dic and word[6] in dic
    return False


def has_seven_alphabet_chars(word):
    return fullmatch('[A-zÀ-ú]{7}[/]*', word)


def clean_word(word):
    return word.split('/', 1)[0]


def clean_and_normalize_word(word):
    return unicodedata.normalize('NFKD', word.split('/', 1)[0]).encode('ASCII', 'ignore').decode('ASCII').upper()


def convert_to_leet(word, dic):
    leet = list(word)
    n = [3, 5, 6]
    for i in n:
        leet[i] = dic[word[i]]

    return ''.join(leet)
