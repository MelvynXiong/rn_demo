# 技术栈

- 前端框架: react@16.6.3、react-native@0.58.6
- UI 组件库: native-base@2.11.0
  1.  根据 github 活跃度和 star 数，在 react-native-elements 和 native-base 两个库之间做选择，其他的库活跃度相对比较低且 stars 数远低于以上两个组件库
  2.  相对于 react-native-elements, native-base 组件更多，且可以方便地定制化主题
- 路由管理: react-navigation@3.2.3
  - 官方推荐的路由管理库
- 状态管理库: redux@4.0.1、react-redux@6.0.0
  - 相对于 mobx, redux 数据流向更加清晰, 更加规范
- 测试: jest@24.1.0

### 主要功能

- 即时通信：收发文字，图片，语音信息

### 目录结构

```
.
├── README.md // 说明文件
├── babel.config.js // babel配置文件
├── index.js  // 入口文件
├── src // 主文件夹
├── tsconfig.json // typescript 配置文件
└── tslint.json // tslint配置文件
```

```
.
├── const // 常量
│   ├── Color.ts // 颜色常量
│   └── index.ts
├── images
│   ├── index.ts // 图片入口
├── index.tsx // 全局入口
├── router.ts // 路由配置文件
├── store // 全局状态
├── utils // 工具文件
│   └── Adapter.ts // 适配不同移动设备
└── views
    ├── ChatPage // 聊天页
    ├── Home.tsx // 主页
    ├── Login.tsx // 登录页
    ├── UserPages // 用户列表页
    ├── WorkOrderPages // 工单列表页
    └── common // 公共组件
        └── BoxShadow.tsx // 阴影组件(重要)
```

### TODO
- 聊天框时间标记的逻辑是怎么样的