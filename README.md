# VOCs 废气治理售前助手 POC v0.2

## 项目定位

轻量网页 POC，用于验证用户是否愿意：

1. 点击进入；
2. 完成身份/需求分流；
3. 查看样张；
4. 留下联系方式；
5. 表达付费或人工复核意向。

网站名称暂定：

```text
VOCs 废气治理售前助手
```

核心价值：

```text
把“客户说不清需求、现场参数不完整、报价前不知道怎么问”整理成可沟通的工况信息、风险提示和初步方案框架。
```

## 项目结构

```text
2026-06-18_VOCs网页入口POC_Next_v0.2/
├─ package.json
├─ next.config.mjs
├─ tailwind.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
├─ src/
│  ├─ app/
│  │  ├─ api/leads/route.ts
│  │  ├─ flow/page.tsx
│  │  ├─ intent/page.tsx
│  │  ├─ result/page.tsx
│  │  ├─ samples/page.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ BoundaryNote.tsx
│  │  ├─ Header.tsx
│  │  ├─ LeadForm.tsx
│  │  ├─ ResultCard.tsx
│  │  └─ SectionTitle.tsx
│  └─ lib/
│     ├─ data.ts
│     ├─ results.ts
│     └─ types.ts
```

## 页面路由设计

| 路由 | 页面 | 目标 |
| --- | --- | --- |
| `/` | 首页 | 说明定位、痛点、边界，提供主按钮和样张入口 |
| `/flow` | 身份/需求分流页 | 收集 4 个轻量选择题 |
| `/result` | 分流结果页 | 根据身份和需求展示推荐资料包 |
| `/samples` | 样张展示页 | 展示部分样张，不展示完整资料 |
| `/intent` | 留资/付费意向页 | 收集联系方式和意向，第一版 mock 保存 |

边界声明不单独成页，放在首页、样张页和留资页底部。

## 组件拆分

| 组件 | 用途 |
| --- | --- |
| `Header` | 顶部导航 |
| `BoundaryNote` | 工程责任边界提示 |
| `SectionTitle` | 统一区块标题 |
| `ResultCard` | 分流结果展示 |
| `LeadForm` | 留资与付费意向表单 |

## 数据结构

核心类型位于 `src/lib/types.ts`：

- `Role`：用户身份
- `Need`：当前需求
- `ProjectStatus`：是否有真实项目
- `NextAction`：下一步意向
- `LeadPayload`：留资提交数据

基础数据位于 `src/lib/data.ts`：

- 身份选项
- 需求选项
- 项目状态选项
- 下一步选项
- 样张内容
- 首页痛点

结果映射位于 `src/lib/results.ts`：

- 根据身份输出推荐资料包文案；
- 后续可扩展为同时结合身份、需求、是否有真实项目生成更细推荐。

## 可运行方式

```bash
npm install
npm run dev
```

如果当前电脑没有依赖缓存，`npm install` 需要联网。

当前 Codex 执行环境曾对隐藏目录 `.next` 写入受限。Vercel 部署不需要这个本地 workaround；项目默认使用 Next.js 标准构建目录。

如本机仍遇到 `.next` 写入限制，可以临时设置：

```powershell
$env:NEXT_USE_LOCAL_DIST_DIR='1'
npm.cmd run build
```

这会让本地构建输出到 `next-build`，但 Vercel 不需要设置该变量。

## Supabase TODO

第一版留资提交写入 `/api/leads`，当前只 `console.log` 并返回 mock 成功。

后续接 Supabase 时：

1. 安装 `@supabase/supabase-js`。
2. 新增环境变量：
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. 建表 `leads`：
   - `id`
   - `name`
   - `contact`
   - `role`
   - `hasProject`
   - `desiredContent`
   - `intent`
   - `message`
   - `created_at`
4. 在 `src/app/api/leads/route.ts` 中替换 mock 保存逻辑。
