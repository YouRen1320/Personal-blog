# 博客系统

这是一个基于MongoDB、Node.js和Python的博客系统，支持用户注册、登录、发布文章、评论等功能。

## 功能特点

- 用户注册和登录
- 文章发布、编辑和删除
- 文章评论功能
- 响应式设计，适配各种设备

## 技术栈

- 前端：HTML, CSS, JavaScript
- 后端：Node.js, Express
- 数据库：MongoDB
- 包管理：pnpm
- 静态文件服务：Python HTTP Server

## 从零开始的环境配置与项目运行指南

本指南将帮助你从零开始配置环境并运行此项目，即使你是一位完全的新手。

### 1. 安装必要的软件

#### 1.1 安装 Node.js

1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载并安装 LTS（长期支持）版本
3. 安装时选择默认选项即可
4. 安装完成后，打开命令提示符（Windows）或终端（Mac/Linux）
5. 输入以下命令验证安装：
   ```bash
   node -v
   npm -v
   ```
   如果显示版本号，则安装成功

#### 1.2 安装 pnpm

1. 打开命令提示符或终端
2. 输入以下命令安装 pnpm：
   ```bash
   npm install -g pnpm
   ```
3. 验证安装：
   ```bash
   pnpm -v
   ```
   如果显示版本号，则安装成功

#### 1.3 安装 Python

1. 访问 [Python 官网](https://www.python.org/downloads/)
2. 下载并安装最新版本的 Python（确保勾选"Add Python to PATH"选项）
3. 安装完成后，打开命令提示符或终端
4. 输入以下命令验证安装：
   ```bash
   python --version
   ```
   如果显示版本号，则安装成功

#### 1.4 安装 MongoDB

##### Windows 用户：

1. 访问 [MongoDB 官网](https://www.mongodb.com/try/download/community)
2. 下载 MongoDB Community Server
3. 运行安装程序，选择"Complete"安装类型
4. 确保勾选"Install MongoDB as a Service"选项
5. 完成安装后，MongoDB 服务应该会自动启动
6. 验证安装：
   - 打开命令提示符
   - 输入 `mongod --version` 检查 MongoDB 是否安装成功

##### Mac 用户：

1. 使用 Homebrew 安装（如果没有 Homebrew，请先安装它）：
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   ```
2. 启动 MongoDB 服务：
   ```bash
   brew services start mongodb-community
   ```

##### Linux 用户：

1. 按照 [MongoDB 官方文档](https://docs.mongodb.com/manual/administration/install-on-linux/) 的说明进行安装
2. 启动 MongoDB 服务：
   ```bash
   sudo systemctl start mongod
   ```

### 2. 获取项目代码

1. 安装 Git（如果尚未安装）：
   - Windows: 从 [Git 官网](https://git-scm.com/download/win) 下载并安装
   - Mac: 在终端中输入 `brew install git`
   - Linux: 在终端中输入 `sudo apt-get install git`（Ubuntu/Debian）或 `sudo yum install git`（CentOS/RHEL）

2. 克隆项目代码：
   ```bash
   git clone <项目仓库地址>
   cd <项目目录>
   ```

### 3. 配置并启动后端

1. 进入后端目录：
   ```bash
   cd backend
   ```

2. 安装依赖：
   ```bash
   pnpm install
   ```

3. 配置数据库连接（如果需要）：
   - 打开 `backend/config/db.js` 文件
   - 修改 MongoDB 连接字符串（默认为 `mongodb://localhost:27017/blog`）

4. 启动后端服务：
   ```bash
   pnpm dev
   ```

5. 如果一切正常，你应该会看到类似以下的输出：
   ```
   Server is running on port 5000
   Connected to MongoDB
   ```

### 4. 配置并启动前端

1. 打开一个新的命令提示符或终端窗口（保持后端服务运行）

2. 进入前端目录：
   ```bash
   cd frontend
   ```

3. 启动前端服务：
   ```bash
   python -m http.server 8000
   ```

4. 如果一切正常，你应该会看到类似以下的输出：
   ```
   Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
   ```

### 5. 访问网站

1. 打开浏览器，访问 http://localhost:8000
2. 你应该能看到网站的首页

### 6. 使用网站

1. 点击右上角的登录图标进行注册或登录
2. 登录后可以发布、编辑和删除文章
3. 在文章详情页可以查看和发表评论

## 常见问题与解决方案

### 1. 无法连接到 MongoDB

**症状**：启动后端服务时出现 "MongoDB connection error" 或类似错误。

**解决方案**：
- 确保 MongoDB 服务已启动
  - Windows: 打开服务管理器，查找并启动 "MongoDB" 服务
  - Mac: 在终端中输入 `brew services list` 检查 MongoDB 状态，如果未运行，输入 `brew services start mongodb-community`
  - Linux: 在终端中输入 `sudo systemctl status mongod` 检查状态，如果未运行，输入 `sudo systemctl start mongod`
- 检查 MongoDB 连接字符串是否正确

### 2. 前端无法连接到后端 API

**症状**：点击按钮或提交表单时，浏览器控制台显示网络错误。

**解决方案**：
- 确保后端服务正在运行（在命令提示符中应该能看到 "Server is running on port 5000"）
- 检查前端代码中的 API 基础 URL 是否正确（默认为 `http://localhost:5000/api` 或 `http://127.0.0.1:5000/api`）
- 如果修改了后端端口，请相应更新前端代码中的 API 基础 URL

### 3. 用户认证失败

**症状**：登录后无法执行需要认证的操作（如发布文章）。

**解决方案**：
- 确保正确登录（登录后应该能看到用户名显示在页面上）
- 检查浏览器控制台是否有 token 相关的错误
- 尝试重新登录

### 4. pnpm 命令未找到

**症状**：运行 `pnpm` 命令时出现 "command not found" 错误。

**解决方案**：
- 重新安装 pnpm：`npm install -g pnpm`
- 如果仍然失败，尝试关闭并重新打开命令提示符或终端

### 5. Python HTTP 服务器启动失败

**症状**：运行 `python -m http.server 8000` 时出现错误。

**解决方案**：
- 确保端口 8000 未被其他程序占用
- 尝试使用不同的端口：`python -m http.server 8080`，然后访问 http://localhost:8080

## 项目结构

```
project/
├── backend/           # 后端代码
│   ├── config/        # 配置文件
│   ├── controllers/   # 控制器
│   ├── models/        # 数据模型
│   ├── routes/        # 路由
│   └── server.js      # 入口文件
├── frontend/          # 前端代码
│   ├── css/           # 样式文件
│   ├── jpg/           # 图片资源
│   └── webs/          # HTML页面
└── README.md          # 项目文档
```

## API文档

> **注意**：所有API的基础URL为 `http://localhost:5000/api` 或 `http://127.0.0.1:5000/api`，两者是等效的。

### 用户API

#### 注册
```http
POST /api/auth/register
```

请求体：
```json
{
  "username": "string",
  "password": "string"
}
```

#### 登录
```http
POST /api/auth/login
```

请求体：
```json
{
  "username": "string",
  "password": "string"
}
```

### 文章API

#### 创建文章
```http
POST /api/posts
```

请求头：
```
Authorization: Bearer <token>
```

请求体：
```json
{
  "title": "string",
  "content": "string"
}
```

#### 获取所有文章
```http
GET /api/posts
```

#### 获取单篇文章
```http
GET /api/posts/:id
```

#### 更新文章
```http
PUT /api/posts/:id
```

请求头：
```
Authorization: Bearer <token>
```

请求体：
```json
{
  "title": "string",
  "content": "string"
}
```

#### 删除文章
```http
DELETE /api/posts/:id
```

请求头：
```
Authorization: Bearer <token>
```

### 评论API

#### 创建评论
```http
POST /api/comments
```

请求头：
```
Authorization: Bearer <token>
```

请求体：
```json
{
  "post": "string",
  "content": "string"
}
```

#### 获取文章评论
```http
GET /api/comments/post/:postId
```

#### 更新评论
```http
PUT /api/comments/:id
```

请求头：
```
Authorization: Bearer <token>
```

请求体：
```json
{
  "content": "string"
}
```

#### 删除评论
```http
DELETE /api/comments/:id
```

请求头：
```
Authorization: Bearer <token>
```

## 贡献指南

欢迎提交问题和功能请求。如果您想贡献代码，请先创建一个issue讨论您想要更改的内容。

## 许可证

[MIT](LICENSE) 