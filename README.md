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
    | currency
    | date:'hh:mm'
    | date:'dd-MM-yyyy'




Possible API Calls:
===================

1) all details          get               get(url)
2) specific data        get               get(url/id)
3) filtering            get               get(url?filter=term)
4) sorting              get               get(url?sortBy=column&order=asc/desc)
5) pagination           get               get(url?limit=limit&page=page)


6) create              post                  post(url,data)
7) update              put                   put(url/id,data)
8) delete              delete                delete(url/id)