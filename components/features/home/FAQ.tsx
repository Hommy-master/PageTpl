export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-20 sm:py-28 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base font-semibold leading-7 text-amber-600 dark:text-amber-400">
          常见问题
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          常见问题解答
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        <details className="group border border-yellow-200 dark:border-yellow-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
          <summary className="cursor-pointer px-6 py-4 font-medium text-gray-900 dark:text-white hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-colors flex items-center justify-between">
            <h3 className="text-lg">Nano Banana是什么？</h3>
            <svg
              className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>
          <div className="px-6 pb-4">
            <p className="text-gray-600 dark:text-gray-400">
              这是一个革命性的 AI
              图像编辑模型，使用自然语言提示变换照片。这是目前最强的图片编辑模型，具有非常高的一致性。在角色编辑和场景保留方面提供优于
              Flux Kontext 的性能。
            </p>
          </div>
        </details>
        <details className="group border border-yellow-200 dark:border-yellow-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
          <summary className="cursor-pointer px-6 py-4 font-medium text-gray-900 dark:text-white hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-colors flex items-center justify-between">
            <h3 className="text-lg">它是如何工作的？</h3>
            <svg
              className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>
          <div className="px-6 pb-4">
            <p className="text-gray-600 dark:text-gray-400">
              只需上传图像并用自然语言描述您想要的编辑。AI
              能理解像"将生物放在雪山上"或"想象整个脸部并创建它"这样的复杂指令。它处理您的文字提示并生成完美编辑的图像。
            </p>
          </div>
        </details>
        <details className="group border border-yellow-200 dark:border-yellow-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
          <summary className="cursor-pointer px-6 py-4 font-medium text-gray-900 dark:text-white hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-colors flex items-center justify-between">
            <h3 className="text-lg">它比 Flux Kontext 好在哪里？</h3>
            <svg
              className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>
          <div className="px-6 pb-4">
            <p className="text-gray-600 dark:text-gray-400">
              这个模型在角色一致性、场景融合和一键编辑方面表现出色。用户反馈它在保留面部特征和将编辑内容与背景无缝集成方面"完全击败"了
              Flux Kontext。它还支持多图上下文，非常适合创建一致的 AI 影响者。
            </p>
          </div>
        </details>
        <details className="group border border-yellow-200 dark:border-yellow-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
          <summary className="cursor-pointer px-6 py-4 font-medium text-gray-900 dark:text-white hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-colors flex items-center justify-between">
            <h3 className="text-lg">我可以用于商业项目吗？</h3>
            <svg
              className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>
          <div className="px-6 pb-4">
            <p className="text-gray-600 dark:text-gray-400">
              可以！它非常适合创建 AI UGC
              内容、社交媒体活动和营销材料。许多用户利用它来创建一致的 AI
              影响者和产品摄影。高质量的输出适合专业使用。
            </p>
          </div>
        </details>
        <details className="group border border-yellow-200 dark:border-yellow-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
          <summary className="cursor-pointer px-6 py-4 font-medium text-gray-900 dark:text-white hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-colors flex items-center justify-between">
            <h3 className="text-lg">它能处理什么类型的编辑？</h3>
            <svg
              className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>
          <div className="px-6 pb-4">
            <p className="text-gray-600 dark:text-gray-400">
              编辑器能处理复杂的编辑，包括面部完成、背景更改、对象放置、风格转换和角色修改。它擅长理解像"放在暴风雪中"或"创建整个脸部"这样的上下文指令，同时保持照片般逼真的质量。
            </p>
          </div>
        </details>
        <details className="group border border-yellow-200 dark:border-yellow-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
          <summary className="cursor-pointer px-6 py-4 font-medium text-gray-900 dark:text-white hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-colors flex items-center justify-between">
            <h3 className="text-lg">在哪里可以试用Nano Banana？</h3>
            <svg
              className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>
          <div className="px-6 pb-4">
            <p className="text-gray-600 dark:text-gray-400">
              您可以在 LMArena 或通过我们的网页界面试用Nano
              Banana。只需上传您的图像，输入描述您想要的编辑的文字提示，然后观看Nano Banana AI
              以惊人的准确性和一致性变换您的照片。
            </p>
          </div>
        </details>
      </div>
    </div>
  </section>
  )
}