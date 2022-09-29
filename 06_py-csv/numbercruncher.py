import random, csv

jobTitles = []
percentage = []

with open('occupations.csv') as f:
    reader = csv.reader(f)
    for row in reader:
        jobTitles.append(row[0])
        percentage.append(row[1])
print(jobTitles)
print(percentage)
random.choice(jobTitles, percentage)