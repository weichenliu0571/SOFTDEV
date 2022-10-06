'''
Goda (Aaron Gershkovich,Julia Lee, Weichen Liu)
SoftDev
K08
2022-10-04
Time Spent:

DISCO
- No print statement in v1, therefore we don't print the __name__ in the terminal. 
- __name__ is supposed to be a variable in flask.
- __main__ is name if not otherwise defined
- V2 worked as expected - it printed the string and then the name under it
- The debugger is activated and we are given a pin for the debugger.
'''

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("about to print __name__...")
    print(__name__)   #where will this go?
    return "No hablo queso!"

app.debug = True
app.run()
