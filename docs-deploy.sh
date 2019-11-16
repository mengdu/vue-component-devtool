#!/bin/bash
# 部署文件夹到指定分支

targetBranch="master"
deployBranch="gh-pages"
delpoyFolder="docs"
tempFolder="_temp"

branch=$(git branch -l $deployBranch)

# 如果不存分支，则创建独立分支
if $([ -z "${branch}" ]); then
	git checkout --orphan $deployBranch
	# 删除 (.|..|.git|docs) 以外文件
  rm -rf `ls -a | egrep -v "(^\.$|^\.\.$|^.git$|^${delpoyFolder}$)"`
else
  git checkout $deployBranch
	mkdir $tempFolder
	mv -f `ls -a | egrep -v "(^\.$|^\.\.$|^.git$|^${tempFolder}$)"` $tempFolder
fi

# 从源分支获取文件夹，把错误屏蔽
t=$(git checkout master -- $delpoyFolder 2>&1)

# if [ $? == 1 ]; then
# 	# git checkout master
#  	# exit 1
#  	echo "建议在 master 分支把 docs 文件夹加到 .gitignore 里"
# fi

# 删除 (.|..|.git|docs) 以外文件
# rm -rf `ls -a | egrep -v '(^\.$|^\.\.$|^.git$|^docs$)'`

mv -f $tempFolder/* .
mv -f $delpoyFolder/* .

rm -d $tempFolder docs

git add .
git commit -m "Deploy docs"

git checkout master

# git checkout $deployBranch -- docs
# git reset HEAD -- docs
