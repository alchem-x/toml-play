# TOML Play

TOML 语法与 JSON 对照表，展示常见的 TOML 语法及其对应的 JSON 表示形式。

## 在线预览

https://alchem-x.github.io/toml-play/

## 技术栈

- Next.js 16 (CSR 模式)
- Zustand
- TailwindCSS
- Bun

## 开发

```bash
# 安装依赖
bun install

# 启动开发服务器
bun run dev
```

访问 http://localhost:3000

## 构建

```bash
# 构建静态资源
NEXT_PUBLIC_BASE_PATH=/toml-play bun run build
```

静态资源输出到 `dist/` 目录。

## 部署

部署到 GitHub Pages：

```bash
./deploy.sh
```

这会构建项目并将静态资源推送到 `gh-pages` 分支。

## 项目结构

```
src/
├── app/
│   ├── page.tsx      # 主页面组件
│   ├── layout.tsx    # 布局
│   └── globals.css   # 全局样式
└── store/
    └── tomlStore.ts  # Zustand store (示例数据)
```
