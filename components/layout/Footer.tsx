export default function Footer() {
  return (
    <footer className="border-t border-yellow-200 dark:border-yellow-800 bg-gradient-to-b from-white to-yellow-50 dark:from-gray-900 dark:to-yellow-950/20">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2"></div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start">
            <img
              alt="AI Editor"
              loading="lazy"
              width="32"
              height="32"
              decoding="async"
              data-nimg="1"
              className="h-8 w-8"
              src="/logo.png"
              style={{ color: 'transparent' }}
            />
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              2025 nanobanana.ai All rights reserved.
            </span>
          </div>
          <nav className="mt-4 flex justify-center space-x-6 text-sm md:justify-start">
            <a
              href="/privacy"
              className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400"
            >
              隐私政策
            </a>
            <a
              href="/terms"
              className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400"
            >
              服务条款
            </a>
            <a
              href="/refund"
              className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400"
            >
              退款政策
            </a>
            <a
              href="/refund-application"
              className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400"
            >
              退款申请
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
