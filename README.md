Git Hub:
========


1) computer <--> github
    git config --global user.name "xxxxxxxx"
    git config --global user.email "xxxxxxxx@gmail.com"
    check:
    ======
        git config --list

2) project <--> repository
    git init
    git remote add origin url
    check:
    ======
        git remote -v

3) adding files(changes->staged changes)
    git add .
    git commit -m "commit message"
    git push --set-upstream origin master -f (for the first time)



Topics:
=======







Heirarchy:
===========


Directives: used to alter DOM
===========
1) Structural directives:
        *ngFor & *ngIf

2) Attribute directives:
        ngClass & ngStyle


Pipes: used to alter data format
======
    | uppercase
    | lowercase