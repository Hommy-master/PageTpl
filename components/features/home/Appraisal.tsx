export default function Appraisal() {
    return (
        <section className="px-6 py-20 sm:py-28 lg:px-8 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-amber-600 dark:text-amber-400">
              用户评价
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              创作者的声音
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border bg-white text-slate-950 shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 border-yellow-200">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500"></div>
                  <div>
                    <div className="font-semibold tracking-tight text-base">AIArtistPro</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">数字创作者</div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400">
                  "这个编辑器完全改变了我的工作流程。角色一致性令人难以置信 - 远超 Flux Kontext！"
                </p>
              </div>
            </div>
            <div className="rounded-3xl border text-slate-950 shadow-lg dark:bg-slate-950 dark:text-slate-50 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-white to-amber-50 dark:from-gray-900 dark:to-amber-950/20">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"></div>
                  <div>
                    <div className="font-semibold tracking-tight text-base">ContentCreator</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">UGC 专家</div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400">
                  "创建一致的 AI 影响者从未如此简单。它在编辑过程中保持完美的面部细节！"
                </p>
              </div>
            </div>
            <div className="rounded-3xl border text-slate-950 shadow-lg dark:bg-slate-950 dark:text-slate-50 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-orange-950/20">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500"></div>
                  <div>
                    <div className="font-semibold tracking-tight text-base">PhotoEditor</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">专业编辑师</div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400">
                  "这个工具基本解决了一键编辑问题。场景融合非常自然逼真！"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}