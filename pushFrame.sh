#!/bin/bash

# 接收messageA
messageA=$1
TRY_TIMES=3

# 提交react-visual-drag-demo项目代码至Github
echo "提交react-visual-drag-demo项目代码..."
git add .
git commit -m "$messageA"
# git push
# 设置git push尝试的次数

# 提交代码到远程分支
attempts=0

while true; do
  if [[ $attempts -gt 2 ]]; then
    echo "Push failed after $attempts attempts. Aborting."
    exit 1
  fi

  git push

  if [[ $? -eq 0 ]]; then
    echo "Push succeeded."
    break
  else
    echo "Push failed. Retrying..."
    attempts=$((attempts+1))
  fi
done

# 构建并重命名dist文件夹
echo "构建并重命名dist文件夹..."
npm run build
mv dist react-visual-drag-demo

# 将react-visual-drag-demo拷贝至WXL570CN.github.io项目
echo "将react-visual-drag-demo拷贝至WXL570CN.github.io项目..."
if [ -d "../WXL570CN.github.io/react-visual-drag-demo" ]; then
    rm -rf ../WXL570CN.github.io/react-visual-drag-demo
fi
cp -R react-visual-drag-demo/ ../WXL570CN.github.io/react-visual-drag-demo/

# 提交WXL570CN.github.io项目代码至Github
echo "提交WXL570CN.github.io项目代码..."
cd ../WXL570CN.github.io
git add .
git commit -m "更新拖拽Demo"
git push

# 删除react-visual-drag-demo项目中的react-visual-drag-demo
echo "删除 react-visual-drag-demo 项目中的react-visual-drag-demo..."
cd ../react-visual-drag-demo
rm -rf react-visual-drag-demo
