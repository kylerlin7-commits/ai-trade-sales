# AI 外贸拓客助手

这是一个面向外贸销售 / 海外拓客的静态单页应用，包含 4 个核心能力：

- Google 线索搜索：支持接入 Google Programmable Search JSON API，在页面内搜索公开客户线索
- 线索导入加工：把搜索结果导入到线索池，进入客户工作台继续完善画像和推进动作
- Agent 技能切换：内置 `customer-analysis`、`hf-product-match`、`hf-product-coach`、`payment-sales-intel`、`ppt-master-calw`
- GitHub Pages 友好：纯静态文件结构，无需构建即可托管

## 文件结构

- `index.html`：页面结构
- `styles.css`：样式文件
- `main.js`：主交互逻辑
- `app.js`：旧版脚本，当前已不再使用

## Google 搜索接入

在页面的“配置中心”中填写以下两项：

1. `Google API Key`
2. `Search Engine ID (cx)`

填写后，参数会保存在浏览器本地 `localStorage`，随后可在“线索发现”页直接搜索并导入结果。

推荐做法：

- 为 API Key 加上 HTTP Referrer 限制
- 仅允许你的 GitHub Pages 域名调用
- 用更聚焦的 `cx` 来收敛搜索范围，减少噪音结果

## 本地预览

可用任意静态服务预览，例如：

```bash
node -e "const http=require('http');const fs=require('fs');const path=require('path');const root=process.cwd();const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg'};http.createServer((req,res)=>{let p=req.url.split('?')[0];if(p==='/') p='/index.html';const file=path.join(root, decodeURIComponent(p));fs.readFile(file,(err,data)=>{if(err){res.statusCode=404;res.end('Not found');return;}res.setHeader('Content-Type', mime[path.extname(file)]||'text/plain; charset=utf-8');res.end(data);});}).listen(8123);"
```

然后打开 `http://127.0.0.1:8123/`。

## GitHub Pages 发布

如果你已经有 GitHub 仓库：

```bash
git init
git add .
git commit -m "feat: rebuild AI lead hunter"
git branch -M main
git remote add origin <你的仓库URL>
git push -u origin main
```

如果要用 GitHub Pages 托管：

1. 在仓库设置中启用 `GitHub Pages`
2. Source 选择 `Deploy from a branch`
3. Branch 选择 `main`，目录选择 `/root`

## 当前限制

- 没有后端代理时，Google API Key 会运行在前端，因此必须做来源限制
- 搜索结果导入后仍需要销售手动补齐联系人、决策链和真实交易链路
- 若要做企业级版本，建议把 Google 搜索、线索富化和 Agent 调用统一迁到后端服务
