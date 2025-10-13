export default function Features() {
  return (
    <section id="features" className="px-6 py-20 sm:py-28 lg:px-8 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600 dark:text-amber-400">
            核心功能
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            为什么选择Nano Banana？
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Nano Banana是 LMArena 上最先进的 AI 图像编辑器。用自然语言理解彻底改变您的照片编辑方式
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border text-slate-950 shadow-lg dark:bg-slate-950 dark:text-slate-50 relative overflow-hidden border-yellow-200 dark:border-yellow-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-900 dark:to-yellow-950/20">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg">
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
                    className="lucide lucide-cpu h-6 w-6 text-white"
                    aria-hidden="true"
                  >
                    <path d="M12 20v2"></path>
                    <path d="M12 2v2"></path>
                    <path d="M17 20v2"></path>
                    <path d="M17 2v2"></path>
                    <path d="M2 12h2"></path>
                    <path d="M2 17h2"></path>
                    <path d="M2 7h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="M20 17h2"></path>
                    <path d="M20 7h2"></path>
                    <path d="M7 20v2"></path>
                    <path d="M7 2v2"></path>
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">自然语言编辑</div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400">
                  使用简单的文字提示编辑图像。Nano Banana AI 像图像版 GPT 一样理解复杂指令
                </p>
              </div>
            </div>
            <div className="rounded-3xl border text-slate-950 shadow-lg dark:bg-slate-950 dark:text-slate-50 relative overflow-hidden border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-amber-50 dark:from-gray-900 dark:to-amber-950/20">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
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
                    className="lucide lucide-workflow h-6 w-6 text-white"
                    aria-hidden="true"
                  >
                    <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                    <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                    <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">角色一致性</div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400">
                  在编辑过程中保持完美的角色细节。这个模型在保留面部和身份特征方面表现卓越
                </p>
              </div>
            </div>
            <div className="rounded-3xl border text-slate-950 shadow-lg dark:bg-slate-950 dark:text-slate-50 relative overflow-hidden border-orange-200 dark:border-orange-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-orange-950/20">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-500 shadow-lg">
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
                    className="lucide lucide-gauge h-6 w-6 text-white"
                    aria-hidden="true"
                  >
                    <path d="m12 14 4-4"></path>
                    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">场景保留</div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400">
                  无缝融合编辑内容与原始背景。场景融合能力优于 Flux Kontext
                </p>
              </div>
            </div>
            <div className="rounded-3xl border text-slate-950 shadow-lg dark:bg-slate-950 dark:text-slate-50 relative overflow-hidden border-yellow-200 dark:border-yellow-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-900 dark:to-yellow-950/20">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg">
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
                    className="lucide lucide-code-xml h-6 w-6 text-white"
                    aria-hidden="true"
                  >
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">一键编辑</div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400">
                  一次尝试就能获得完美效果。Nano Banana轻松解决一键图像编辑难题
                </p>
              </div>
            </div>
            <div className="rounded-3xl border text-slate-950 shadow-lg dark:bg-slate-950 dark:text-slate-50 relative overflow-hidden border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-amber-50 dark:from-gray-900 dark:to-amber-950/20">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
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
                    className="lucide lucide-layers h-6 w-6 text-white"
                    aria-hidden="true"
                  >
                    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                    <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                    <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">多图上下文</div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400">
                  同时处理多张图像。支持高级多图编辑工作流
                </p>
              </div>
            </div>
            <div className="rounded-3xl border text-slate-950 shadow-lg dark:bg-slate-950 dark:text-slate-50 relative overflow-hidden border-orange-200 dark:border-orange-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-orange-950/20">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-500 shadow-lg">
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
                    className="lucide lucide-target h-6 w-6 text-white"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">AI UGC 创作</div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400">
                  创建一致的 AI 影响者和 UGC 内容。完美适用于社交媒体和营销活动
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
