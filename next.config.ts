import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts'); // 路径指向上面文件

const nextConfig: import('next').NextConfig = {};
export default withNextIntl(nextConfig);