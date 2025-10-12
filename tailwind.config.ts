import {nextui} from '@nextui-org/react';
import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // ❶ 关键：让 Tailwind 扫描 NextUI 的样式源
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'], // 与 next-themes 属性保持一致
  theme: {extend: {}},
  plugins: [nextui()], // ❷ 注册插件
};
export default config;