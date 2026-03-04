# GIT BASIC

**1. Git System Initialization**
``` sh
$ git init
```
**2. Save into staging area (temporary changes)**
``` sh
$ git add
```
**3. Commit (permanent changes)**
``` sh
$ git commit [option] [argument]
```
&nbsp;&nbsp;option:
- ``-m`` : menambahkan pesan commit
``` sh
$ git commit -m "type: description"
```
- ``--amend`` : memperbaiki pesan commit yang baru saja terjadi
**commitPanjang**
``` sh
$ git commit 
```
**4. Remote Repository**
``` sh
$ git remote [option] [argument]
#view remote list
$ git remote
#add remote repository 
$ git remote [remote_name] [remote_url]
#view remote url
$ git remote get-url [remote_name]
```
**3. Remote Repository**