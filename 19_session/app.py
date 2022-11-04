# AEIOU : BRIAN, WEICHEN, VANSH
# SoftDev
# K19 -- SESSIONS
# 2022-11-03
# time spent : 0.5 hrs

flask import Flask, redirect, url_for, render_template, request, session

app = Flask(__name__)

app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

users = {'m':'donky'} # hardcode users

@app.route("/", methods = ["POST", "GET"])
def login():
    if request.method == "POST":
        user = request.form["username"]
        password = request.form.get['password']
        if user not in users.keys():
            return redirect(url_for("login"), error = "WRONG USERNAME OR WRONG PASSWORD")
        if password != users(user):
            return redirect(url_for("login"), error = "WRONG PASSWORD" )
        session["username"] = user
        return redirect(url_for("user"))
    else:
        if "user" in session:
            return redirect(url_for("user"))
        return render_template("login.html")

@app.route("/user")
def user():
    if "username" in session:
        user = session["username"]
        return render_template("response.html", name = user)
    else:
        return redirect(url_for("user"))

@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("login"))

if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
