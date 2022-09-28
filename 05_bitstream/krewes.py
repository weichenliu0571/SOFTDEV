
import random

file1 = open("krewes.txt", 'r')
str1 = file1.read()
print(str1)

pd = ["2", "7", "8"]
for i in range(pd):
    while (str1.find(i) != -1):
        indiv

def select_random_period():
    periods = list(krewes.keys())
    return random.choice(periods)

def select_random_student(period):
    return random.choice(krewes[period])
'''
period = select_random_period()
student = select_random_student(period)
print(student + " of period " + str(period) + " was randomly chosen")
'''