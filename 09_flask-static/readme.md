# GODA (Julia Lee, Aaron Gershkovich, Weichen Liu)

```
Q: What happens when you access this file
     via
      http://localhost:5000/static/foo 
     ?
     
A: We thought that the site would crash

Real Answer: It downloaded foo because it was not a html file, so it can't be displayed on the site. 
```

```
<!-- Q: What happens when you access this file via
         http://localhost:5000/static/foo.html 
                 ?
     A: It will download foo.html .
     Real Answer: It changes the way the site is displayed.
-->
```