'''
Erasers :: Weichen Liu, Faiza
SoftDev
K05 -- reading and using a file
2022-09-28
time spent: 0.3 hrs
'''


import random

file1 = open("krewes.txt", 'r')
krewes = file1.read()
print(krewes)

classes = {2:[],7:[],8:[]}

def _sort():
    krewes1 = krewes.split('$$$')
    for i in krewes1:
        pd = i[0]
        ans = i.split('@@@')
        '''TESTING print(ans) '''
        _name = ans[1]
        _ducky = ans[2]
        classes[int(pd)].append([_name, _ducky])
    return

def _random():
    pd = random.choice(list(classes.keys()))
    names = random.choice(classes[pd])

    return (f"{pd} : {names[0]} : {names[1]}")


_sort()
print(_random())
