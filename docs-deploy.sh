#!/bin/bash
# 部署文件夹到指定分支

branchName="gh-pages"

branch=$(git branch -l $branchName)

# 如果不存分支，则创建独立分支
if $([ -z "${branch}" ]); then
	git checkout --orphan $branchName
else
  git checkout $branchName
fi

# 从master，把错误屏蔽
t=$(git checkout master -- docs 2>&1)

# if [ $? == 1 ]; then
# 	# git checkout master
#  	# exit 1
#  	echo "建议在 master 分支把 docs 文件夹加到 .gitignore 里"
# fi

# 删除 (.|..|.git|docs) 以外文件
rm -rf `ls -a | egrep -v '(^\.$|^\.\.$|^.git$|^docs$)'`

# mv docs/* .

git add .
git commit -m "Deploy docs"

git checkout master

# git checkout $branchName -- docs
# git reset HEAD -- docs
