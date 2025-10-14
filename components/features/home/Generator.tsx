export default function Generator() {
  return (
    <section id="generator" className="px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-amber-600 dark:text-amber-400">
              开始使用
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              试用 AI 编辑器
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              体验Nano Banana的自然语言图像编辑能力。用简单的文字命令变换任何照片
            </p>
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 rounded-large transition-transform-background motion-reduce:transition-none border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-white via-yellow-50/50 to-amber-50/30 dark:from-gray-900 dark:via-yellow-950/20 dark:to-amber-950/10 shadow-xl">
                <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large pb-3 pt-5 px-5 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-md">
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
                        className="lucide lucide-rocket h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400 bg-clip-text text-transparent">
                        提示引擎
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        用 AI 技术编辑变换您的图像
                      </p>
                    </div>
                  </div>
                </div>
                <hr
                  className="shrink-0 border-none w-full h-divider bg-yellow-200 dark:bg-yellow-800"
                  role="separator"
                />
                <div className="relative flex w-full flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased space-y-4 p-5">
                  <div
                    className="inline-flex items-center justify-center h-auto w-full"
                    role="group"
                  >
                    <button
                      className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 [&amp;:not(:first-child):not(:last-child)]:rounded-none [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 rounded-none first:rounded-s-medium last:rounded-e-medium data-[hover=true]:opacity-hover flex-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-semibold"
                      type="button"
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
                        className="lucide lucide-image h-4 w-4"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                        <circle cx="9" cy="9" r="2"></circle>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                      </svg>
                      图生图
                    </button>
                    <button
                      className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 [&amp;:not(:first-child):not(:last-child)]:rounded-none [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none text-default-700 rounded-none first:rounded-s-medium last:rounded-e-medium data-[hover=true]:opacity-hover flex-1 bg-yellow-100 dark:bg-yellow-900/30 hover:bg-yellow-200 dark:hover:bg-yellow-800"
                      type="button"
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
                        className="lucide lucide-bolt h-4 w-4"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                      文生图
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
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
                        className="lucide lucide-sparkles h-4 w-4 text-yellow-600 dark:text-yellow-400"
                        aria-hidden="true"
                      >
                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                        <path d="M20 3v4"></path>
                        <path d="M22 5h-4"></path>
                        <path d="M4 17v2"></path>
                        <path d="M5 18H3"></path>
                      </svg>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        AI模型选择
                      </span>
                    </div>
                    <div
                      data-slot="base"
                      data-filled="true"
                      data-has-value="true"
                      data-has-label="true"
                      className="group inline-flex flex-col relative w-full transition-background motion-reduce:transition-none !duration-150 max-w-full"
                    >
                      <div
                        style={{
                          border: '0',
                          clip: 'rect(0 0 0 0)',
                          clipPath: 'inset(50%)',
                          height: '1px',
                          margin: '-1px',
                          overflow: 'hidden',
                          padding: '0',
                          position: 'absolute',
                          width: '1px',
                          whiteSpace: 'nowrap',
                        }}
                        aria-hidden="true"
                        data-a11y-ignore="aria-hidden-focus"
                        data-testid="hidden-select-container"
                      >
                        <label>
                          Nano Banana
                          <select>
                            <option></option>
                            <option value="nano-banana">
                              Nano Banana
                            </option>
                            <option value="seedream4">SeeDream 4</option>
                          </select>
                        </label>
                      </div>
                      <div data-slot="mainWrapper" className="w-full flex flex-col">
                        <button
                          data-slot="trigger"
                          className="relative px-3 w-full inline-flex shadow-sm tap-highlight-transparent group-data-[focus=true]:bg-default-200 rounded-medium flex-col items-start justify-center gap-0 data-[hover=true]:bg-default-200 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 h-14 min-h-14 py-2 bg-white dark:bg-gray-800 border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 dark:hover:border-yellow-600"
                          type="button"
                          aria-label="AI模型选择"
                          id="react-aria-_R_2iqp6qnqivbH2_"
                          aria-labelledby="react-aria-_R_2iqp6qnqivbH7_ react-aria-_R_2iqp6qnqivbH2_"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <label
                            data-slot="label"
                            className="block absolute z-10 subpixel-antialiased text-foreground-500 pointer-events-none cursor-pointer will-change-auto origin-top-left rtl:origin-top-right !duration-200 !ease-out transition-[transform,color,left,opacity] motion-reduce:transition-none group-data-[filled=true]:text-default-600 group-data-[filled=true]:scale-85 text-small group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px)] pe-2 max-w-full text-ellipsis overflow-hidden"
                            id="react-aria-_R_2iqp6qnqivbH3_"
                          >
                            Nano Banana
                          </label>
                          <div
                            data-slot="innerWrapper"
                            className="inline-flex h-full w-[calc(100%_-_theme(spacing.6))] min-h-4 items-center gap-1.5 box-border group-data-[has-label=true]:pt-4"
                          >
                            <span
                              data-slot="value"
                              className="text-foreground-500 font-normal w-full text-start text-small truncate group-data-[has-value=true]:text-default-foreground"
                              id="react-aria-_R_2iqp6qnqivbH7_"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-sm">Nano Banana</span>
                              </div>
                            </span>
                          </div>
                          <svg
                            aria-hidden="true"
                            fill="none"
                            focusable="false"
                            height="1em"
                            role="presentation"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="1em"
                            data-slot="selectorIcon"
                            className="absolute end-3 w-4 h-4 transition-transform duration-150 ease motion-reduce:transition-none data-[open=true]:rotate-180"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      不同模型具有不同特性和风格
                    </p>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <div className="flex flex-col gap-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          批量生成
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-full">
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
                            className="lucide lucide-crown h-3 w-3"
                            aria-hidden="true"
                          >
                            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                            <path d="M5 21h14"></path>
                          </svg>
                          Pro
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        批量生成模式 - 同时运行多个任务，生成多张输出图片
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="z-0 group relative justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 text-tiny rounded-small [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-warning/20 text-warning-700 dark:text-warning data-[hover=true]:opacity-hover hidden sm:flex items-center gap-1 font-medium"
                        type="button"
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
                          className="lucide lucide-crown h-3.5 w-3.5"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                          <path d="M5 21h14"></path>
                        </svg>
                        升级
                      </button>
                      <label
                        className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none tap-highlight-transparent select-none opacity-disabled pointer-events-none"
                        data-disabled="true"
                      >
                        <input
                          aria-labelledby="_R_acqp6qnqivb_"
                          disabled
                          type="checkbox"
                          data-react-aria-pressable="true"
                          role="switch"
                          className="[--cursor-hit-x:8px] font-inherit text-[100%] leading-[1.15] m-0 p-0 overflow-visible box-border absolute top-0 start-[calc(var(--cursor-hit-x)*-1)] w-[calc(100%+var(--cursor-hit-x)*2)] h-full opacity-[0.0001] z-[1] cursor-pointer disabled:cursor-default"
                          value=""
                        />
                        <span
                          aria-hidden="true"
                          className="px-1 relative inline-flex items-center justify-start flex-shrink-0 overflow-hidden bg-default-200 rounded-full outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background group-data-[selected=true]:bg-warning group-data-[selected=true]:text-warning-foreground w-10 h-6 transition-background opacity-50 cursor-not-allowed"
                        >
                          <span className="z-10 flex items-center justify-center bg-white shadow-small rounded-full origin-right pointer-events-none w-4 h-4 text-tiny group-data-[selected=true]:ms-4 transition-all group-data-[pressed=true]:w-5 group-data-[selected]:group-data-[pressed]:ml-3 group-data-[selected=true]:ml-4"></span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
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
                        className="lucide lucide-images h-4 w-4 text-yellow-500"
                        aria-hidden="true"
                      >
                        <path d="M18 22H4a2 2 0 0 1-2-2V6"></path>
                        <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"></path>
                        <circle cx="12" cy="8" r="2"></circle>
                        <rect width="16" height="16" x="6" y="2" rx="2"></rect>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">
                        参考图像
                      </span>
                      <div className="relative inline-flex shrink-0">
                        0/9
                        <span className="flex z-10 flex-wrap absolute box-border rounded-full whitespace-nowrap place-content-center origin-center items-center select-none font-regular scale-100 opacity-100 subpixel-antialiased data-[invisible=true]:scale-0 data-[invisible=true]:opacity-0 px-1 text-tiny border-2 border-background bg-warning/20 text-warning-700 dark:text-warning top-[5%] right-[5%] translate-x-1/2 -translate-y-1/2"></span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="aspect-square border-2 border-dashed border-yellow-300 dark:border-yellow-700 rounded-lg flex flex-col items-center justify-center hover:border-amber-400 dark:hover:border-amber-600 transition-colors bg-yellow-50/50 dark:bg-yellow-950/20 cursor-pointer">
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/webp"
                          className="hidden"
                          id="batch-image-upload"
                        />
                        <label className="cursor-pointer">
                          <div className="flex flex-col items-center">
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
                              className="lucide lucide-plus h-8 w-8 mb-2 text-amber-500"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            <span className="text-xs text-gray-600 dark:text-gray-400 text-center">
                              添加图片
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                              最大50MB
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
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
                        className="lucide lucide-bolt h-4 w-4 text-yellow-500"
                        aria-hidden="true"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">
                        主提示词
                      </span>
                    </div>
                    <div
                      className="group flex flex-col data-[hidden=true]:hidden w-full"
                      data-slot="base"
                      data-filled="true"
                      data-filled-within="true"
                    >
                      <div
                        data-slot="input-wrapper"
                        className="relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3 group-data-[focus=true]:bg-default-100 h-10 min-h-10 rounded-medium !h-auto transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background py-2 border-2 border-yellow-200 dark:border-yellow-800 hover:border-amber-400 dark:hover:border-amber-600 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm data-[hover=true]:bg-white/90 dark:data-[hover=true]:bg-gray-900/90"
                        style={{ cursor: 'text' }}
                        data-has-multiple-rows="true"
                      >
                        <div
                          data-slot="inner-wrapper"
                          className="inline-flex w-full h-full box-border items-start group-data-[has-label=true]:items-start"
                        >
                          <textarea
                            data-slot="input"
                            className="w-full font-normal !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 file:cursor-pointer file:bg-transparent file:border-0 autofill:bg-transparent bg-clip-text text-small resize-none data-[hide-scroll=true]:scrollbar-hide group-data-[has-value=true]:text-default-foreground transition-height !duration-100 motion-reduce:transition-none bg-transparent pe-0"
                            aria-label="由纳米技术驱动的未来城市，黄金时段照明，超高清细节..."
                            placeholder="由纳米技术驱动的未来城市，黄金时段照明，超高清细节..."
                            id="react-aria-_R_lqp6qnqivb_"
                            data-hide-scroll="true"
                            title=""
                            style={{ height: '100px !important' }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button
                      className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 text-tiny gap-2 rounded-small opacity-disabled pointer-events-none [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover ml-auto bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/30 dark:hover:bg-amber-900/50 text-amber-600 dark:text-amber-400"
                      data-disabled="true"
                      type="button"
                      disabled
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
                        className="lucide lucide-copy h-3 w-3"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                      复制
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-6 min-w-24 h-12 text-medium gap-3 rounded-large opacity-disabled pointer-events-none [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-warning/40 bg-warning data-[hover=true]:opacity-hover w-full text-white font-bold shadow-lg"
                data-disabled="true"
                type="button"
                disabled
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
                  className="lucide lucide-zap h-5 w-5"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
                立即生成
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col relative overflow-hidden text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 rounded-large transition-transform-background motion-reduce:transition-none h-full min-h-[600px] border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-white via-yellow-50/30 to-amber-50/20 dark:from-gray-900 dark:via-yellow-950/10 dark:to-amber-950/10 shadow-xl">
                <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large pb-3 pt-5 px-5 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400 bg-clip-text text-transparent">
                      输出画廊
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      您的闪电般 AI 创作即时显示在这里
                    </p>
                  </div>
                </div>
                <hr
                  className="shrink-0 border-none w-full h-divider bg-yellow-200 dark:bg-yellow-800"
                  role="separator"
                ></hr>
                <div className="relative flex w-full flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased p-5">
                  <div className="flex flex-col items-center justify-center min-h-[500px] border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/30 dark:bg-gray-800/30">
                    <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 mb-4">
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
                        className="lucide lucide-image h-16 w-16 text-gray-400 dark:text-gray-500"
                        aria-hidden="true"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                        <circle cx="9" cy="9" r="2"></circle>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-center font-semibold">
                      准备即时生成
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      输入提示词，释放强大力量
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}