This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev

```

# 暂定的目录结构
my-app/
├── app/                    # Next.js App Router
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── providers/          # Provider 组件
│   │   ├── index.ts
│   │   ├── nextui.tsx
│   │   └── next-intl.tsx
│   └── layout.tsx
├── components/             # React 组件
│   ├── ui/                # 基础 UI 组件
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── forms/                 # 表单相关组件
│   │   ├── LoginForm.tsx
│   │   ├── ContactForm.tsx
│   │   └── SearchForm.tsx
│   ├── layout/                # 布局组件
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   └── features/           # 功能模块组件
│   │   ├── auth/
│   │   │   ├── UserProfile.tsx
│   │   │   └── LoginButton.tsx
│   │   └── home/
│   │   │   └── StatsCard.tsx
│   └── shared/                # 共享业务组件
│   │   ├── UserAvatar.tsx
│   │   └── PriceDisplay.tsx
├── lib/                   # 业务逻辑和工具函数
│   ├── utils/
│   │   ├── formatters.ts
│   │   └── validators.ts
│   ├── consts/
│   │   └── nav.ts
│   ├── api/
│   │   ├── client.ts
│   │   ├── users.ts
│   │   └── products.ts
│   ├── validation/
│   │   ├── auth.ts
│   │   └── users.ts
│   └── types/
│       ├── api.ts
│       └── app.ts
├── hooks/                 # 自定义 React Hooks
│   ├── use-auth.ts
│   └── use-local-storage.ts
├── styles/                # 样式文件
│   └── globals.css
├── public/                # 静态资源
│   ├── images/
│   └── icons/
├── .eslintrc.json         # ESLint 配置
├── .prettierrc.json       # Prettier 配置
├── tsconfig.json          # TypeScript 配置
├── next.config.js         # Next.js 配置
├── package.json           # 依赖管理
└── README.md              # 项目说明


