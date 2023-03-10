### 使用 bash pushFrame.sh [提交日志] [是否拉代码并合并]
git add .
git status
sleep 1s
git commit --no-verify -m "$1:$2"
if [ $3 ];
then
  git fetch
  sleep 2s
  git merge origin/dev
  exit
fi

# feat：添加新特性

# fix：修复bug

# docs：仅仅修改了文档

# style：仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑

# refactor：代码重构，没有添加新功能或者修复

# bugtest：增加测试用例

# chore：改变构建流程、或者增加依赖库、工具等

# revert：回滚到上一个版本  
