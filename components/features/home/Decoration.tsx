export default function Decoration() {
    return (
        <section className="relative overflow-hidden px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] "></div>
        <div className="absolute inset-y-0 left-1/2 -z-10 -translate-x-1/2 w-[150%]"></div>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-20 sm:hidden -z-10">
          <img
            alt="Banana decoration"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            className="w-48 h-auto"
            src="/_next/image?url=%2Fbanana-decoration.png&amp;w=640&amp;q=75"
            style={{ color: 'transparent' }}
          />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-amber-700 dark:text-amber-300 bg-yellow-100/80 dark:bg-yellow-900/30 backdrop-blur-sm border border-yellow-300 dark:border-yellow-700">
                🍌 超越 Flux Kontext 的 AI 模型
                <a
                  href="#generator"
                  className="font-semibold text-orange-600 dark:text-orange-400 ml-2"
                >
                  <span className="absolute inset-0" aria-hidden="true"></span>立即试用{' '}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 dark:from-yellow-400 dark:via-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              Nano Banana
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-300 font-medium">
              用简单的文字提示变换任何图像。Nano Banana的先进模型提供超越 Flux Kontext
              的一致性角色编辑和场景保留。体验 AI 图像编辑的未来。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <a
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:scale-105 active:scale-95 hover:shadow-lg h-12 rounded-full px-10 gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-yellow-500 dark:to-amber-500 hover:from-yellow-500 hover:to-amber-500 dark:hover:from-yellow-600 dark:hover:to-amber-600 text-white shadow-lg"
                href="/zh/generator"
              >
                开始编辑
                <img
                  alt="Banana"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="inline-block"
                  src="banana-icon.png"
                  style={{ color: 'transparent' }}
                />
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:scale-105 active:scale-95 border-2 bg-white/80 backdrop-blur-sm hover:text-slate-900 hover:border-slate-300 dark:bg-slate-950/80 dark:hover:text-slate-50 dark:hover:border-slate-600 h-12 rounded-full px-10 border-amber-300 dark:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-950/30"
              >
                查看示例
              </a>
            </div>
            <div className="mt-12 flex justify-center gap-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-bolt h-5 w-5 text-yellow-500"
                  aria-hidden="true"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
                <span className="font-semibold">一键编辑</span>
              </div>
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-activity h-5 w-5 text-amber-500"
                  aria-hidden="true"
                >
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                </svg>
                <span className="font-semibold">多图支持</span>
              </div>
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-cloud-lightning h-5 w-5 text-orange-500"
                  aria-hidden="true"
                >
                  <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"></path>
                  <path d="m13 12-3 5h4l-3 5"></path>
                </svg>
                <span className="font-semibold">自然语言</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}