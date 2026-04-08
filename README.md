# RoboPetCare Demo

一个不依赖后端和构建工具的前端交互 Demo，用来演示宠知伴初版 App 的手机端与平板端界面。

## 文件结构

- `index.html`：页面入口
- `styles.css`：视觉风格与响应式布局
- `app.js`：Mock 数据、页面渲染与交互逻辑

## 预览方式

在项目根目录执行：

```powershell
python -m http.server 8000 --directory robopetcare-demo
```

然后打开：

```text
http://127.0.0.1:8000
```

如果只是快速看静态页面，也可以直接打开 `robopetcare-demo/index.html`。
