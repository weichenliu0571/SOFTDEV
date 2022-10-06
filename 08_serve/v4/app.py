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
- If you set the variable __name__ equal to a random string that isn't __main__ 
the file doesn't run, but also doesn't return an error message.

'''
from flask import Flask

app = Flask(__name__) #create instance of class Flask

# __name__ = "A"

@app.route("/")       #assign fxn to route
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)
    return "No hablo queso!"

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()
