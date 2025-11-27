# setup git di proyek
git init 
git remote add origin https://github.com/alifharyanto/secret-uprak.git
# lalu tambahkan 1 file
git add .
git commit -m "pesan"
git push origin main

# check info
git status
git remote -v

# jika belum ada master/main
git checkout -b master
git checkout -b main

# jika sudah ada
git checkout master
git checkout main

# check status log
git status
git log --oneline

# hapus git link di proyek lokal 
git remote remove origin

# hapus full git di proyel lokal  --- recomended
Remove-Item -Recurse -Force .git