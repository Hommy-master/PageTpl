export default function Showcase() {
  return (
    <section id="showcase" className="px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600 dark:text-amber-400">
            案例展示
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            闪电般的 AI 创作
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            见证Nano Banana毫秒级生成作品
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="rounded-3xl border bg-white text-slate-950 shadow-lg dark:bg-slate-950 dark:text-slate-50 overflow-hidden group hover:shadow-2xl transition-all duration-300 border-yellow-200 dark:border-yellow-800">
              <div className="relative aspect-video overflow-hidden">
                <img
                  alt="AI 生成山景"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: 'transparent',
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  src="/showcase/1.png"
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
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
                    className="lucide lucide-zap h-3 w-3"
                    aria-hidden="true"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                  Nano Banana速度
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-900 dark:to-yellow-950/20">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  超快速山景生成
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Nano Banana优化神经引擎仅需 0.8 秒即可创建
                </p>
              </div>
            </div>
          </div>
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="rounded-3xl border bg-white text-slate-950 shadow-lg dark:bg-slate-950 dark:text-slate-50 overflow-hidden group hover:shadow-2xl transition-all duration-300 border-yellow-200 dark:border-yellow-800">
              <div className="relative aspect-video overflow-hidden">
                <img
                  alt="AI 生成花园"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: 'transparent',
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  src="/showcase/2.png"
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
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
                    className="lucide lucide-zap h-3 w-3"
                    aria-hidden="true"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                  Nano Banana速度
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-900 dark:to-yellow-950/20">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  瞬间花园创作
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Nano Banana技术毫秒级渲染复杂场景
                </p>
              </div>
            </div>
          </div>
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="rounded-3xl border bg-white text-slate-950 shadow-lg dark:bg-slate-950 dark:text-slate-50 overflow-hidden group hover:shadow-2xl transition-all duration-300 border-yellow-200 dark:border-yellow-800">
              <div className="relative aspect-video overflow-hidden">
                <img
                  alt="AI 生成海滩"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: 'transparent',
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  src="/showcase/3.png"
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
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
                    className="lucide lucide-zap h-3 w-3"
                    aria-hidden="true"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                  Nano Banana速度
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-900 dark:to-yellow-950/20">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  实时海滩合成
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Nano Banana以光速提供照片级逼真效果
                </p>
              </div>
            </div>
          </div>
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="rounded-3xl border bg-white text-slate-950 shadow-lg dark:bg-slate-950 dark:text-slate-50 overflow-hidden group hover:shadow-2xl transition-all duration-300 border-yellow-200 dark:border-yellow-800">
              <div className="relative aspect-video overflow-hidden">
                <img
                  alt="AI 生成极光"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: 'transparent',
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  src="/showcase/4.png"
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
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
                    className="lucide lucide-zap h-3 w-3"
                    aria-hidden="true"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                  Nano Banana速度
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-900 dark:to-yellow-950/20">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  快速极光生成
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Nano Banana AI 即时处理高级特效
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
            亲自体验Nano Banana的强大功能
          </p>
          <a
            href="#generator"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
          >
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
              className="lucide lucide-zap h-4 w-4"
              aria-hidden="true"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            试用Nano Banana生成器
          </a>
        </div>
      </div>
    </section>
  );
}
