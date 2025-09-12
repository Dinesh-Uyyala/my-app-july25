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



45) Switch between branches(new)
    check current branch( git branch )
    create branch in GitHub
    git fetch
    git checkout branchName(use this for existing)

5)  Pull request
    pull request
    approve
    merge

6)  Merge conflicts
    checkout to the branch
    git pull origin branchName
    accept current/ accept incoming/ accept both
    git push

7) switch to another branch
    commit or push to switch
    git stash --include-untracked
    do the changes
    switch to old branch
    git stash pop 

8) Delete commit
    git log abcd5242 abg6565
    git reset abg6565

9) move commit to another branch
    git cherry-pick abg6565

10) two branches  code into one branch
    create 3rd branch and checkout
    git pull origin feature/one
    git pull origin feature/two




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




Forms:
======
1) Template Driven Forms --> ngModel
2) Reactive Forms
    1) FormGroup
    2) Nested FormGroup
    3) Dynamic Forms
    4) Form Array
    5) Form Validations
    6) Custom Validations






Form validations:
=================

ts:
===
  name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)])

html:
=====
    <div *ngIf="CONTROL?.touched && CONTROL?.invalid">
        <p *ngIf="CONTROL?.errors?.['required']">Name is Required</p>
        <p *ngIf="CONTROL?.errors?.['minlength']">Name is minimum 6  characters</p>
        <p *ngIf="CONTROL?.errors?.['maxlength']">Name is maximum of 10 characters</p>
    </div>

Control:
========
1) FormGroup : userForm.get('name')
2) Nested FormGroup: userForm.get('address')?.get('pin')
3) FormArray: cardsFormArray.controls[i]?.get('expiry')






Life Cycle Hooks:
=================
1) ngonchanges -- trigger when parent-child value changes
2) ngonint -- initialization
3) ngdocheck -- when changes happen
4) ngaftercontentinit -- when content comes to component
5) ngaftercontentchecked -- when content changes to component
6) ngafterviewinit -- when view renders
7) ngafterviewchecked -- when view value changes
8) ngondestroy -- when component destroys



RxJS Operators:
===============
from, of --> creational operators
map --> to alter every data / element
filter --> to select some data


forkJoin --> to do multiple API calls

return forkJoin(
    this.http.get('api1'),
    this.http.get('api2'),
    this.http.get('api3'),
)

concatMap --> sequential API calls

return concatMap(
    this.http.get('api1'),
    this.http.get('api2'),
    this.http.get('api3'),
)

switchMap --> switch between API calls(calls new API call)
exhaustMap --> switch between API calls(calls old API call)
debounceTime --> delays API call