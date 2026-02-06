---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: '个人摄影作品的症候式阅读研究'
info: 'A symptomatic reading study of individual photographic works:A psychographic feature mapping architecture based on multimodal deep learning.'
exportFilename: A symptomatic reading study of individual photographic works:A psychographic feature mapping architecture based on multimodal deep learning.
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
glowSeed: 233
routerMode: hash
---

<div class="flex flex-col items-center justify-center h-full text-center">
  <h1 class="text-4xl font-bold leading-relaxed mb-4">
    个人摄影作品的症候式阅读研究： <br/>
    <span class="text-2xl font-light text-neutral-400">基于多模态深度学习的心理特征映射架构</span>
  </h1>
  <p class="text-sm opacity-60 italic mb-10 font-serif">
    A symptomatic reading study of individual photographic works: <br/>
    A psychographic feature mapping architecture based on multimodal deep learning.
  </p>
  
  <div class="flex items-center justify-center gap-12 mt-8">
    <div class="flex items-center gap-4 bg-white/5 pr-6 pl-2 py-2 rounded-full border border-white/10">
      <img src="/RyanJoy头像.jpg" class="w-12 h-12 rounded-full object-cover border-2 border-primary" />
      <div class="text-left">
        <div class="text-xs text-gray-400">汇报人</div>
        <div class="font-bold text-base">RyanJoy</div>
      </div>
    </div>
    
  <div class="flex items-center gap-4">
    <div class="text-left">
      <div class="text-xs text-gray-400">成员</div>
      <div class="font-bold text-base">XXX</div>
    </div>
  </div>
  </div>
</div>

<!--
大家好！今天我们汇报的主题是“个人摄影作品的症候式阅读研究”。

我们是怎么想到这个idea的？

其实我们之前还经历过很多选题：
- Cyber算命机；
- 个人手办一体生成；
- AI拍摄机位指导；

在对AI拍摄机位指导这一选题进行论文调研的过程中，无意读到了很多AI心理分析的论文，这就带给我们了新的课题。

> 我们受到“房树人”心理侧写实验的启发，他们使用绘画的方式来进行心理特征映射，我们就在想，能不能把这一个映射桥梁、做的更加现代化？

> 考虑到随着数字影像技术的普及，摄影已超越单纯的记录功能，成为个体潜意识表达与社会身份建构的重要媒介。所以“个人摄影作品”就是我们映射到心理的媒介了。

进而确定了我们的这个选题。
-->

---
class: px-10 py-10
glowSeed: 12
---

# 1. idea如何收敛的？

<span>从"概括"到"症候式"的思维演进</span>

<div class="mt-8 relative space-y-6">
  <div class="absolute top-4 left-6 bottom-4 w-0.5 bg-gray-700/50 rounded-full"></div>

  <div v-click="1" class="relative pl-16">
    <div class="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
    <div class="font-mono text-blue-400 text-sm mb-1">2025-10-14</div>
    <div class="text-gray-200">
      在最开始，我们有了大致的 idea 构想，便以“概括”的形式给出了第一版题目：
      <div v-click="2" class="mt-2 p-3 bg-blue-500/10 border-l-4 border-blue-500 text-sm italic text-gray-300">
        《基于个人拍摄照片的风格与偏好，进行个人摄影作品心理特征倾向分析》
      </div>
    </div>
  </div>

  <div v-click="3" class="relative pl-16">
    <div class="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
    <div class="font-mono text-purple-400 text-sm mb-1">2025-11-05</div>
    <div class="text-gray-200">
      这天，在 MYT 同学那里听到了“症候式”：
      <div v-click="4" class="mt-2 p-3 bg-purple-500/10 border-l-4 border-purple-500 text-sm italic text-gray-300">
        《基于个人拍摄照片的症侯式阅读》
      </div>
    </div>
  </div>

  <div v-click="5" class="relative pl-16">
    <div class="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-green-500 border-4 border-gray-900 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
    <div class="font-mono text-green-400 text-sm mb-1">2025-11-12</div>
    <div class="text-gray-200">
      经过对“症候式”的确认以及 idea 的高度抽象概括，我得到了最终的题目：
      <div v-click="6" class="mt-2 p-3 bg-green-500/10 border-l-4 border-green-500 text-base font-bold text-white">
        《个人摄影作品的症侯式阅读研究》
      </div>
    </div>
  </div>
</div>

<!--
其实我们题目的迭代过程，还是比较曲折的

[click]

- 2025-10-14: 这时候我们刚刚想到所谓的”摄影作品到作者心理“的映射研究，当时我有一个大概的构想，所以就用“概括”的形式写了一个初版题目。

[click]

  - 《基于个人拍摄照片的风格与偏好，进行个人摄影作品心理特征倾向分析》；

[click]

- 2025-11-05: 我们在课上描述了一下期望中的结果，钰涛同学提到了“症候式”，这确实抓住了我们课题的核心。

[click]

  - 《基于个人拍摄照片的症侯式阅读》；

[click]

- 2025-11-12: 经过对“症候式”的确认以及idea的高度抽象概括，我得到了最终的题目

[click]

  - 《个人摄影作品的症侯式阅读研究》。

所以“症候式”到底是什么意思？
-->

---
class: py-10
---

## 1.1 什么是“症候式阅读”？

<span>Symptomatic Reading：从文学到影像的迁移</span>

<div class="max-w-3xl mx-auto mt-6 relative">
  <div class="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-500/30 to-orange-500/30 -z-10"></div>

  <div v-click="1" class="relative pl-20 mb-6">
    <div class="absolute left-0 top-0 w-16 h-16 rounded-full bg-gray-900 border-2 border-blue-500/30 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
      <div i-carbon:book class="text-2xl text-blue-400" />
    </div>
    
  <div class="bg-gray-800/40 backdrop-blur-sm border border-blue-500/20 p-5 rounded-r-xl rounded-bl-xl">
    <div class="text-blue-300 font-bold mb-2">文学领域定义</div>
    <blockquote class="text-gray-300 italic text-sm">
      它不是读“表面说了什么”，而是读<span class="text-blue-200 font-bold border-b border-blue-500/50 pb-0.5">“为什么是这样？背后隐藏了什么结构、动机、意识形态或未被作者自觉到的痕迹”</span>。
    </blockquote>
  </div>
  </div>

  <div v-click="2" class="pl-20 mb-6">
     <div class="flex items-center gap-3 text-gray-500 text-sm">
        <div i-carbon:arrow-down class="text-xl animate-bounce text-gray-400" />
        <span class="italic opacity-60">Theory Migration</span>
     </div>
  </div>

  <div v-click="3" class="relative pl-20">
    <div class="absolute left-0 top-0 w-16 h-16 rounded-full bg-gray-900 border-2 border-orange-500/30 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
      <div i-carbon:camera class="text-2xl text-orange-400" />
    </div>

  <div class="bg-gray-800/40 backdrop-blur-sm border border-orange-500/20 p-5 rounded-r-xl rounded-bl-xl">
    <div class="text-orange-300 font-bold mb-2">摄影领域迁移</div>
    <div class="text-xs text-gray-400 mb-2">由于摄影作品具备天然的“症候特性”——摄影作者不可能完全控制画面会泄露出的东西。这就让我们可以自然的迁移过来：</div>
    <blockquote class="bg-orange-500/10 p-3 rounded text-gray-200 text-sm border-l-2 border-orange-400">
      把摄影画面当作作者无意识的痕迹，透过<span class="text-orange-200 font-bold">画面构图、取景偏好、色调选择、主体选择</span>等多重因素，去解读背后的心理倾向和认知结构。
    </blockquote>
  </div>
  </div>
</div>

<!--
那么在这里我就有必要再解释一下“症候式阅读“迁移到我们课题的合理性。

[click]

原本“症候式阅读”是用在文学领域：
> 它不是读“表面说了什么”，而是读“为什么是这样？背后隐藏了什么结构、动机、意识形态或未被作者自觉到的痕迹”。

[click]

但是在某种方面，我始终觉得和我们的课题有一定的相关性，所以我在思考如何“迁移”

[click]

由于摄影作品具备天然的“症候特性”——摄影作者不可能完全控制画面会泄露出的东西。这就让我们可以自然的迁移过来：
> 把摄影画面当作作者无意识的痕迹，透过画面构图、取景偏好、色调选择、主体选择等多重因素，去解读背后的心理倾向和认知结构。

所以“症候式”在摄影-心理分析领域是不突兀的。
-->

---
class: flex justify-center items-center gap-20 px-40 text-xl
---

<div
  absolute text-6xl
  :class="$clicks < 1 ? 'text-white' : 'translate-y--18 scale-40 text-white/30'"
  transition duration-500 ease-in-out
>
  <span>说了这么多，我们做的是什么？</span>
</div>

<div flex flex-col items-center>
  <v-clicks>
    <div mt-4>
      <h1 flex items-center text="5xl!">
        <span>就是一个Cyber算命机吗？</span>
      </h1>
    </div>
  </v-clicks>
</div>

<!--
说到这里，可能大家还不是特别清楚我们在做什么？我们解决了什么事情？我们实现了哪些功能？

[click]

我们跟最开始说到的“Cyber算命机”又有哪些区别？

所以在这里我把论文里的摘要拿了过来
-->

---
class: py-10
glowSeed: 45
---

## 1.2 摘要

<span>挖掘照片表象之下隐匿的心理特征与审美偏好</span>

<div class="flex gap-8 mt-8 h-[80%] items-stretch">
  
  <div class="w-5/12 flex flex-col justify-between">
    <div class="bg-gray-900/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
      <div class="flex items-center gap-2 mb-4 text-gray-200 font-bold">
        <div i-carbon:idea class="text-yellow-400"/> 研究背景
      </div>
      <p class="text-sm leading-7 text-gray-300 text-justify">
        随着数字影像技术的普及，摄影已超越单纯的记录功能，成为个体潜意识表达与社会身份建构的重要媒介。
      </p>
      <div class="mt-4 border-l-2 border-primary pl-4 text-sm text-gray-400 italic">
       本项目提出“个人摄影作品的症候式阅读”这一研究范式，旨在通过计算机视觉与多模态大模型技术，挖掘照片表象之下隐匿的心理特征与审美偏好。研究构建了一套自动化分析系统，通过整合美学评估、语义对齐、情绪识别及色彩心理学统计等，生成高维度的“心理特征矩阵”。
      </div>
    </div>

  <div class="flex flex-wrap gap-3.2 mt-4">
      <div class="key-tag text-indigo-300 bg-indigo-500/10 border-indigo-500/30">症候式阅读</div>
      <div class="key-tag text-purple-300 bg-purple-500/10 border-purple-500/30">计算心理学</div>
      <div class="key-tag text-blue-300 bg-blue-500/10 border-blue-500/30">多模态</div>
      <div class="key-tag text-pink-300 bg-pink-500/10 border-pink-500/30">摄影分析</div>
    </div>
  </div>

  <div class="w-7/12 grid grid-cols-2 gap-4">
    
  <div v-click="1" class="tech-card group border-green-500/30 hover:bg-green-900/20">
    <div class="absolute right-3 top-3 opacity-20 group-hover:opacity-100 transition-opacity">
      <div i-carbon:image-reference class="text-3xl text-green-400"/>
    </div>
    <div class="text-green-300 font-bold text-lg mb-1">美学评估</div>
    <div class="text-xs font-mono text-green-400/60 mb-2">NIMA Model</div>
    <div class="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
      量化图像的主观“美感”分数，评估技术与构图质量。
    </div>
    <div class="interaction-layer from-green-900/90 to-black/90 text-green-300">
      <div class="text-2xl font-bold flex items-center gap-2">
        <span class="text-sm">Score:</span> 8.4
      </div>
      <div class="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
        <div class="h-full bg-green-500 w-[84%]"></div>
      </div>
    </div>
  </div>

  <div v-click="2" class="tech-card group border-blue-500/30 hover:bg-blue-900/20">
    <div class="absolute right-3 top-3 opacity-20 group-hover:opacity-100 transition-opacity">
      <div i-carbon:link class="text-3xl text-blue-400"/>
    </div>
    <div class="text-blue-300 font-bold text-lg mb-1">语义对齐</div>
    <div class="text-xs font-mono text-blue-400/60 mb-2">OpenAI CLIP</div>
    <div class="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
      打通图像与文本的理解壁垒，识别潜在语义符号。
    </div>
    <div class="interaction-layer from-blue-900/90 to-black/90 text-blue-200">
      <div class="text-xs italic opacity-70">Image to Text:</div>
      <div class="font-bold">"Lonely sunset"</div>
      <div class="text-xs mt-1 bg-blue-500/30 px-2 py-0.5 rounded-full inline-block">Prob: 92%</div>
    </div>
  </div>

  <div v-click="3" class="tech-card group border-yellow-500/30 hover:bg-yellow-900/20">
    <div class="absolute right-3 top-3 opacity-20 group-hover:opacity-100 transition-opacity">
      <div i-carbon:face-satisfied class="text-3xl text-yellow-400"/>
    </div>
    <div class="text-yellow-300 font-bold text-lg mb-1">情绪识别</div>
    <div class="text-xs font-mono text-yellow-400/60 mb-2">EmotionNet</div>
    <div class="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
      识别面部微表情与整体氛围的情绪效价。
    </div>
    <div class="interaction-layer from-yellow-900/90 to-black/90 text-yellow-300">
        <div class="flex items-center gap-2">
          <div i-carbon:face-dizzy /> <span>Anxiety</span>
        </div>
        <div class="text-xs text-gray-400 mt-1">Valence: -0.4</div>
    </div>
  </div>

  <div v-click="4" class="tech-card group border-pink-500/30 hover:bg-pink-900/20">
    <div class="absolute right-3 top-3 opacity-20 group-hover:opacity-100 transition-opacity">
      <div i-carbon:color-palette class="text-3xl text-pink-400"/>
    </div>
    <div class="text-pink-300 font-bold text-lg mb-1">色彩统计</div>
    <div class="text-xs font-mono text-pink-400/60 mb-2">OpenCV / HSV</div>
    <div class="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
      计算色相分布、饱和度方差及冷暖色调占比。
    </div>
    <div class="interaction-layer from-pink-900/90 to-black/90">
        <div class="flex gap-1 h-6 w-full mb-1">
          <div class="w-1/3 bg-red-400"></div>
          <div class="w-1/3 bg-orange-400"></div>
          <div class="w-1/3 bg-blue-900"></div>
        </div>
        <div class="text-xs text-pink-200">Warm Tone: 65%</div>
    </div>
  </div>

  </div>
</div>

<style>
.key-tag {
  @apply px-3 py-1.5 rounded text-center text-xs border font-bold;
}
.tech-card {
  @apply relative p-5 rounded-xl border bg-gray-900/40 transition-all duration-300 overflow-hidden flex flex-col justify-center;
}
/* 交互层的样式：默认隐藏并下移，Hover时上浮并显示 */
.interaction-layer {
  @apply absolute inset-0 bg-gradient-to-t flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm;
}
</style>

<!--
这主要介绍一下我们做了什么：

本项目提出“个人摄影作品的症候式阅读”这一研究范式，旨在通过计算机视觉与多模态大模型技术，挖掘照片表象之下隐匿的心理特征。研究构建了一套自动化分析系统，通过整合

[click]

美学评估（NIMA）：这里的输出指标是分数

[click]

语义对齐（CLIP）：比如“Lonely sunset”

[click]

情绪识别（EmotionNet）：在这里我用了一个无单位的程度数值来表示情绪偏好

[click]

色彩心理学统计（OpenCV）：比如这里的颜色统计

通过整合上述多个维度，生成高维度的“心理特征矩阵”。本研究打通了影像风格与心理特质之间的量化路径，为计算心理学、艺术治疗及人机交互领域提供了新的理论视角与技术路线。

到这里大家可能知道我们大概是要干什么的，但是一些细节可能还是比较模糊，下面交给任俊业来进行进一步的汇报。
-->

---
class: py-10
---

# 2. 思维迭代与方向收敛

<span>我们并非一开始就找到了正确答案，而是在实际开发中，边干边调整</span>

<div class="mt-12 grid grid-cols-3 gap-6 h-[60%]">
  
  <div v-click="1" class="group relative flex flex-col h-full bg-white/5 rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300">
    <div class="flex justify-between items-start mb-4">
      <div class="text-xl font-bold flex items-center gap-2 text-gray-100 group-hover:text-red-400 transition-colors">
        <div i-carbon:explore class="text-2xl" /> 探索
      </div>
      <div class="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-red-400">
        2025-10-14
      </div>
    </div>
    
  <div class="text-sm text-gray-400 leading-relaxed mb-6">
    试图覆盖绘画心理学、摄影治疗、计算美学，甚至犯罪侧写。
    </div>

  <div v-click="2" class="mt-auto bg-red-900/20 border border-red-500/20 p-4 rounded-lg">
    <div class="text-xs font-bold text-red-300 mb-1 flex items-center gap-1">
      <div i-carbon:warning-alt /> 问题
    </div>
    <div class="text-xs text-red-200/80">
      范围太广，涉及临床诊断，伦理风险高，数据难以量化。
    </div>
  </div>
</div>

<div v-click="3" class="group relative flex flex-col h-full bg-white/5 rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300">
  <div class="flex justify-between items-start mb-4">
    <div class="text-xl font-bold flex items-center gap-2 text-gray-100 group-hover:text-orange-400 transition-colors">
      <div i-carbon:center-circle class="text-2xl" /> 收敛
    </div>
    <div class="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-orange-400">
      2025-11-05
    </div>
  </div>
  
<div class="text-sm text-gray-400 leading-relaxed mb-6">
    放弃“诊断”，转向“映射”，收缩研究范围。
  </div>

<div v-click="4" class="mt-auto bg-orange-900/20 border border-orange-500/20 p-4 rounded-lg">
      <div class="text-xs font-bold text-orange-300 mb-1 flex items-center gap-1">
        <div i-carbon:bullhorn /> 核心
      </div>
      <div class="text-xs text-orange-200/80">
        建立“影像风格”与“心理特质 (Big-Five)”的统计学关联。
      </div>
    </div>
  </div>

  <div v-click="5" class="group relative flex flex-col h-full bg-white/5 rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
    <div class="flex justify-between items-start mb-4">
      <div class="text-xl font-bold flex items-center gap-2 text-gray-100 group-hover:text-green-400 transition-colors">
        <div i-carbon:rocket class="text-2xl" /> 定型
      </div>
      <div class="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-green-400">
        2025-11-12
      </div>
    </div>
    
  <div class="text-sm text-gray-400 leading-relaxed mb-6">
      确定最终题目：《个人摄影作品的症候式阅读研究》。
    </div>

  <div v-click="6" class="mt-auto bg-green-900/20 border border-green-500/20 p-4 rounded-lg">
      <div class="text-xs font-bold text-green-300 mb-1 flex items-center gap-1">
        <div i-carbon:flag-filled /> 目标
      </div>
      <div class="text-xs text-green-200/80">
        一个可交互、非侵入式的多模态心理特征分析系统。
      </div>
    </div>
  </div>

</div>

<!--
再就是我们落地方向的逐步收敛。

我们并非一开始就找到了正确答案，而是在实际开发中，边干边调整。

[click]

还是回到最开始，在 2025-10-14，我们在探索阶段。
由于问题想的太过简单，试图覆盖绘画心理学、摄影治疗、计算美学，甚至犯罪侧写。

[click]

- 这就带来了**问题**：范围太广，涉及临床诊断，伦理风险高，数据难以量化。

[click]

到 2025-11-05 ，我们经历了一段时间的实际开发过程，这就让我有思路把“要干的事情”收敛到一个目标：

[click]

- 放弃“诊断”，转向“映射”。
- **确立核心**：建立“影像风格”与“心理特质 (Big-Five)”的关联。

[click]

最后就是 2025-11-12 ，我尝试了系统化落地并进行了最终的确定

[click]

- 确定题目：《个人摄影作品的症候式阅读研究》
- 最终我交付了一个可交互、非侵入式的多模态心理特征分析系统。(demo)
-->

---
class: py-10
---

# 3. 怎么实现的？

## 3.1 技术选型

<span>本项目采用多模型、多维度、多阶段的技术路线</span>

<div class="grid grid-cols-2 gap-5 mt-8">
  
  <div v-click="1" class="flex items-start gap-4 p-4 rounded-xl border border-yellow-500/50 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)] transition-all hover:scale-[1.02]">
    <div class="bg-yellow-500/20 p-2.5 rounded-lg shrink-0">
      <div i-logos:python class="text-2xl" />
    </div>
    <div>
      <div class="font-bold text-yellow-300 text-base mb-1">基础环境</div>
      <div class="text-xs text-yellow-100/80 leading-relaxed">
        前端以 Python 为主环境，结合 PyTorch 与 HuggingFace 生态。
      </div>
    </div>
  </div>

  <div v-click="4" class="flex items-start gap-4 p-4 rounded-xl border border-purple-500/50 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all hover:scale-[1.02]">
    <div class="bg-purple-500/20 p-2.5 rounded-lg shrink-0">
      <div i-carbon:data-analytics class="text-2xl text-purple-400" />
    </div>
    <div>
      <div class="font-bold text-purple-300 text-base mb-1">分析阶段</div>
      <div class="text-xs text-purple-100/80 leading-relaxed">
        采用 PCA, UMAP, KMeans, HDBSCAN 实现可解释聚类与映射。
      </div>
    </div>
  </div>

  <div v-click="2" class="flex items-start gap-4 p-4 rounded-xl border border-blue-500/50 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all hover:scale-[1.02]">
    <div class="bg-blue-500/20 p-2.5 rounded-lg shrink-0">
      <div i-carbon:image-search class="text-2xl text-blue-400" />
    </div>
    <div>
      <div class="font-bold text-blue-300 text-base mb-1">图像特征</div>
      <div class="text-xs text-blue-100/80 leading-relaxed">
        CLIP, ViT/ResNet, NIMA, EmotionNet/AffectNet，<br/>
        获取“美学—风格—情绪—语义-色彩”五类关键特征。
      </div>
    </div>
  </div>

  <div v-click="5" class="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 opacity-75 hover:opacity-100 transition-all">
    <div class="bg-gray-700/50 p-2.5 rounded-lg shrink-0 grayscale opacity-80 group-hover:grayscale-0">
      <div i-carbon:view class="text-2xl text-pink-400" />
    </div>
    <div>
      <div class="font-bold text-gray-300 text-base mb-1 group-hover:text-pink-300 transition-colors">可解释性</div>
      <div class="text-xs text-gray-500 leading-relaxed">
        依赖 SHAP、注意力可视化等工具。
      </div>
    </div>
  </div>

  <div v-click="3" class="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 opacity-75 hover:opacity-100 transition-all">
    <div class="bg-gray-700/50 p-2.5 rounded-lg shrink-0 grayscale opacity-80 group-hover:grayscale-0">
      <div i-carbon:chart-histogram class="text-2xl text-green-400" />
    </div>
    <div>
      <div class="font-bold text-gray-300 text-base mb-1 group-hover:text-green-300 transition-colors">统计与存储</div>
      <div class="text-xs text-gray-500 leading-relaxed">
        OpenCV 提供基础统计；FAISS/Milvus 用于向量存储与检索。
      </div>
    </div>
  </div>

  <div v-click="6" class="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 opacity-75 hover:opacity-100 transition-all">
    <div class="bg-gray-700/50 p-2.5 rounded-lg shrink-0 grayscale opacity-80 group-hover:grayscale-0">
      <div i-carbon:container-services class="text-2xl text-gray-400" />
    </div>
    <div>
      <div class="font-bold text-gray-300 text-base mb-1 group-hover:text-white transition-colors">工程侧</div>
      <div class="text-xs text-gray-500 leading-relaxed">
        FastAPI, Docker/K8s, Postgres, Prometheus 构建监控系统。
      </div>
    </div>
  </div>

</div>

<!--
本项目采用多模型、多维度、多阶段的技术路线：

[click]

- 前端以 `Python` 为主环境，结合 `PyTorch` 与 `HuggingFace` 生态；

[click]

- 图像维度依托 `CLIP`、`ViT/ResNet`、`NIMA`、`EmotionNet/AffectNet` 与图像描述模型获取“美学—风格—情绪—语义—色彩”五类关键特征；

[click]

- 基础图像统计由 `OpenCV` 提供；
- 向量特征统一存储于 `FAISS/Milvus`，用于相似检索与聚类；

[click]

- 分析阶段采用 `PCA`、`UMAP`、`KMeans`、`HDBSCAN` 等方法实现可解释聚类与映射；

[click]

- 可解释性依赖 `SHAP`、注意力可视化等工具；

[click]

- 工程侧通过 `FastAPI`、`Docker/K8s`、`Postgres`、`Prometheus/Grafana` 构建可扩展且可监控的系统。

这里看起来比较枯燥，所以我花了一个结构图
-->

---
class: py-10
---

## 3.2 技术框架图

<div v-click="1" class="flex gap-2 h-[400px] mt-6 items-stretch">
  
  <div class="w-full relative h-full bg-gray-900/50 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] overflow-hidden flex items-center justify-center group">
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    
  <img src="/技术框架图.png" class="relative z-10 max-w-[95%] max-h-[95%] object-contain transition-transform duration-500 group-hover:scale-[1.05] cursor-crosshair" />
          
  
  <div class="absolute top-3 left-3 w-2 h-2 bg-white/20 rounded-full"></div>
  <div class="absolute top-3 right-3 w-2 h-2 bg-white/20 rounded-full"></div>
  <div class="absolute bottom-3 left-3 w-2 h-2 bg-white/20 rounded-full"></div>
  <div class="absolute bottom-3 right-3 w-2 h-2 bg-white/20 rounded-full"></div>
</div>

  <div class="w-1/3 flex flex-col justify-center relative pl-4">
    <div class="absolute left-[27px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-green-500/20 via-yellow-500/20 to-gray-500/20 -z-10 rounded-full"></div>

  <div class="space-y-3">
    
  <div v-click="1" class="flex items-start gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-white/5" :class="$clicks === 1 ? 'bg-white/5' : 'bg-transparent'">
      <div class="w-6 h-6 rounded-full bg-gray-900 border-2 border-green-500/50 flex items-center justify-center text-[10px] font-mono text-green-400 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.3)] group-hover:scale-110 transition-transform" :class="$clicks === 1 ? 'scale-110' : 'scale-100'">01</div>
      <div>
        <strong class="block text-green-400 text-sm mb-0.5 group-hover:translate-x-1 transition-transform" :class="$clicks === 1 ? 'translate-x-1' : 'translate-x-0'">数据层</strong>
        <div class="text-xs text-gray-400 leading-tight">收集并整理原始图片数据。</div>
      </div>
    </div>
    
  <div v-click="2" class="flex items-start gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-white/5" :class="$clicks === 2 ? 'bg-white/5' : 'bg-transparent'">
      <div class="w-6 h-6 rounded-full bg-gray-900 border-2 border-blue-500/50 flex items-center justify-center text-[10px] font-mono text-blue-400 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform" :class="$clicks === 2 ? 'scale-110' : 'scale-100'">02</div>
      <div>
        <strong class="block text-blue-400 text-sm mb-0.5 group-hover:translate-x-1 transition-transform" :class="$clicks === 2 ? 'translate-x-1' : 'translate-x-0'">预处理层</strong>
        <div class="text-xs text-gray-400 leading-tight">图像标准化（裁剪、归一化、打标签）。</div>
      </div>
    </div>

  <div v-click="3" class="flex items-start gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-white/5" :class="$clicks === 3 ? 'bg-white/5' : 'bg-transparent'">
      <div class="w-6 h-6 rounded-full bg-gray-900 border-2 border-yellow-500/50 flex items-center justify-center text-[10px] font-mono text-yellow-400 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.3)] group-hover:scale-110 transition-transform" :class="$clicks === 3 ? 'scale-110' : 'scale-100'">03</div>
      <div>
        <strong class="block text-yellow-400 text-sm mb-0.5 group-hover:translate-x-1 transition-transform" :class="$clicks === 3 ? 'translate-x-1' : 'translate-x-0'">模型层</strong>
        <div class="text-xs text-gray-400 leading-tight">NIMA(美感)、CLIP(语义)、EmotionNet(情绪) 特征提取。</div>
      </div>
    </div>

  <div v-click="4" class="flex items-start gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-white/5" :class="$clicks === 4 ? 'bg-white/5' : 'bg-transparent'">
      <div class="w-6 h-6 rounded-full bg-gray-900 border-2 border-purple-500/50 flex items-center justify-center text-[10px] font-mono text-purple-400 shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform" :class="$clicks === 4 ? 'scale-110' : 'scale-100'">04</div>
      <div>
        <strong class="block text-purple-400 text-sm mb-0.5 group-hover:translate-x-1 transition-transform" :class="$clicks === 4 ? 'translate-x-1' : 'translate-x-0'">分析层</strong>
        <div class="text-xs text-gray-400 leading-tight">映射高维特征为可解释的心理学意义。</div>
      </div>
    </div>

  <div v-click="5" class="group flex items-start gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-white/5" :class="$clicks === 5 ? 'bg-white/5' : 'bg-transparent'">
      <div class="w-6 h-6 rounded-full bg-gray-900 border-2 border-gray-400/50 flex items-center justify-center text-[10px] font-mono text-gray-300 shrink-0 shadow-[0_0_10px_rgba(156,163,175,0.3)] group-hover:scale-110 transition-transform" :class="$clicks === 5 ? 'scale-110' : 'scale-100'">05</div>
      <div>
        <strong class="block text-gray-300 text-sm mb-0.5 group-hover:translate-x-1 transition-transform" :class="$clicks === 5 ? 'translate-x-1' : 'translate-x-0'">表达层</strong>
        <div class="text-xs text-gray-400 leading-tight">生成可视化报告与交互界面。</div>
      </div>
    </div>

  </div>
  </div>
</div>

<!--
[click]

首先在数据准备上，我参考NIMA的数据集收集了 25万 张图片；

[click]

然后批量对数据进行 裁剪、元数据解析操作；输出标准化图像和元数据信息给处理模块；

[click]

这里处理模块会拿到“美学分数、512维的风格向量、语义化标签、情绪特征值、色彩分布“等数值数据；

[click]

之后这些专业化的数值数据会输送给综合分析机，通过PCA主成分分析、聚类分析、做可视化图表来把用户不友好的数据转换成用户友好的心理洞察；

[click]

最后就是呈现一个可视化的分析报告。
-->

---
class: flex justify-center items-center gap-20 px-40 text-xl
---

<div
  absolute text-6xl
  :class="$clicks < 1 ? 'text-white' : 'translate-y--18 scale-40 text-white/30'"
  transition duration-500 ease-in-out
>
  <span>为什么这么设计技术框架？</span>
</div>

<div flex flex-col items-center>
  <v-clicks>
    <div mt-4>
      <h1 flex items-center text="4xl!">
        <span>因为对心理特征的分析需要是多样性的，单一维度的分析是片面的。<br/>1. 多维互补<br/>2. 保证可解释性<br/>3. 鲁棒性更强<br/>4. 模块化便于验证与迭代</span>
      </h1>
    </div>
  </v-clicks>
</div>

<!--
那，我们为什么这么设计技术框架呢？

[click]

因为对心理特征的分析需要是多样性的，单一维度的分析是片面的。

1. 多维互补：不同模型关注的线索不同（构图、语义、情绪、美学、色彩），多模型并行可减少单维偏差，让心理倾向分析更全面可靠。
2. 保证可解释性：所有中间特征（美学分数、情绪分布、关键词、风格向量）均显式输出，可用可解释方法构建“证据链”，避免黑盒结论。
3. 鲁棒性更强：当单一维度受干扰（如噪声、过曝），其他维度仍能提供补充，从而保持分析稳定性。
4. 模块化便于验证与迭代：美学、情绪、语义、风格等模块可独立评估、独立替换，也便于后期做消融实验。
5. 工程可扩展性：向量库 + 服务化 API + 容器化部署，使系统既能用于研究验证，也可扩展到大规模照片分析。


接下来就是具体的开发了。
-->

---
class: py-10
---

# 4. 实验过程记录

## 4.1 MVP(最小可行性产品)尝试

<div class="mt-4 mb-4 text-sm text-gray-300">
  在最开始，我们创造了一个<span style="color:yellow; font-weight:bold;">基于规则的</span>、用来进行最小可行性验证演示的<span style="color:yellow; font-weight:bold;">专家系统</span>。所谓“专家”主要体现在对主观性信息进行了<span style="color:yellow; font-weight:bold;">“字典预设”和“函数映射”</span>。
</div>

````md magic-move
```python
def load_psych_mapping_weights(self):
    """加载心理学映射权重"""
    return {
      'openness': {
          'color_variance': 0.15,
          'composition_complexity': 0.20,
          'subject_diversity': 0.25,
          'rule_breaking': 0.20,
          'abstract_content': 0.20
      },
      'conscientiousness': {
              'composition_stability': 0.30,
              'rule_following': 0.25,
              'technical_perfection': 0.20,
              'color_consistency': 0.15,
              'subject_clarity': 0.10
      },# ... 其他大五人格维度
    }
```

```python
# 函数映射
def get_feature_value(self, feature_name, tech, aesthetic, semantic):
    feature_mapping = {
        'color_variance': tech.get('technical_consistency', 0.5),
        'composition_complexity': aesthetic.get('composition_stability', 0.5),
        'subject_diversity': semantic.get('content_diversity', 0.5),
        'rule_breaking': 1.0 - aesthetic.get('rule_adherence', 0.5),
        'abstract_content': semantic.get('abstract_thinking', 0.5),# ... 更多映射
        'rule_following': aesthetic.get('rule_adherence', 0.5),
        'technical_perfection': tech.get('technical_consistency', 0.5),
        'color_consistency': tech.get('technical_consistency', 0.5),
    }
    
    return feature_mapping.get(feature_name, 0.5)
```

````

<div v-click="2" class="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded text-sm text-blue-200">
  这么做的原因是我试图建立一个“计算心理学”的量化框架，为之后的具体落地提供先验的框架构想。
</div>

<div v-click="4"></div>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md transition-all duration-500"
     :class="$clicks === 3 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'">
  
  <div class="relative w-3/4 max-h-[90%] flex flex-col bg-gray-900/90 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20 transform transition-all duration-500"
       :class="$clicks === 3 ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'">
    
  <div class="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
    <div class="font-bold text-lg text-white flex items-center gap-2">
      <div i-carbon:result class="text-green-400"/> MVP 输出结果展示
    </div>
    <div class="text-xs text-gray-400">Result Preview</div>
  </div>

  <div class="p-6 flex justify-center bg-black/20 overflow-auto">
    <img 
      src="/MVP输出.png" 
      class="w-full object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-150 cursor-crosshair"
      @mousemove="(e) => {
          // 获取当前鼠标在图片内的坐标
          const { offsetX, offsetY, target } = e
          // 计算百分比
          const x = (offsetX / target.clientWidth) * 100
          const y = (offsetY / target.clientHeight) * 100
          // 动态修改变换原点
          target.style.transformOrigin = `${x}% ${y}%`
      }"
    />
  </div>

  </div>

</div>

<!--
为了尽快验证我们的构想，我们创造了一个基于规则的、用来进行最小可行性验证演示的专家系统。所谓“专家”主要体现在对主观性信息进行了“字典预设”

如下面的代码示意，我们预先制定了一些规则，给主观性评判因素规定好要走的路径。

[click]

我们同时进行了“函数映射”

这里主要的目的就是模拟“大模型”的推理过程，人为定义一些公式来满足我们MVP的需求。

[click]

这么做的目的是我试图建立一个“计算心理学”的量化框架，为之后的更详细的落地提供先验的框架构想。

我们的最小可行性产品的输出我也贴出来了

[click]

如图所示。主要是用了三个统计量表来可视化后台拿到的“键值对”数据。
-->

---
class: py-10
---

## 4.2 困难与挑战

<span>模型复现顺利，但回归模型构建尚存难点</span>

<div class="grid grid-cols-2 gap-10 mt-8">
  
  <div v-click="1" class="space-y-4">
    <div class="flex items-center gap-3 p-3 bg-green-500/10 rounded-xl border border-green-500/20 text-green-400 font-bold text-lg shadow-[0_0_15px_rgba(34,197,94,0.1)]">
      <div class="p-2 bg-green-500/20 rounded-lg shrink-0">
        <div i-carbon:checkmark-filled class="text-xl" />
      </div>
      模型复现顺利
    </div>

<p class="text-sm text-gray-400 px-2">对语义、风格、情绪、色彩等模块的模型均已正确复现。例如 NIMA 美学评分：</p>

<div class="bg-gradient-to-br from-gray-900/80 to-black/80 p-5 rounded-2xl border border-green-500/20 flex items-center justify-between gap-6 relative overflow-visible">
  
  <div class="text-center relative group">
    <div class="relative z-0 hover:z-20 transition-all"> <img 
        src="/NIMA-dog.jpg" 
        class="h-28 w-auto rounded-lg object-cover mb-2 mx-auto border-2 border-white/10 shadow-lg transition-transform duration-200 hover:scale-150 cursor-crosshair"
        @mousemove="(e) => {
            const { offsetX, offsetY, target } = e
            const x = (offsetX / target.clientWidth) * 100
            const y = (offsetY / target.clientHeight) * 100
            target.style.transformOrigin = `${x}% ${y}%`
        }"
      />
    </div>
    <span class="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">Input Sample</span>
  </div>

  <div class="flex flex-col items-center justify-center text-green-500/50">
    <div i-carbon:arrow-right class="text-3xl animate-pulse"/>
    <span class="text-[10px] uppercase tracking-widest mt-1 opacity-60">Processing</span>
  </div>

  <div class="text-center relative group">
    <div class="relative z-0 hover:z-20 transition-all"> <img 
        src="/NIMA-output.png" 
        class="h-28 w-auto rounded-lg object-contain mb-2 mx-auto bg-white/5 border-2 border-green-500/30 shadow-lg shadow-green-500/10 transition-transform duration-200 hover:scale-350 cursor-crosshair"
          @mousemove="(e) => {
            const { offsetX, offsetY, target } = e
            const x = (offsetX / target.clientWidth) * 100
            const y = (offsetY / target.clientHeight) * 100
            target.style.transformOrigin = `${x}% ${y}%`
        }"
      />
    </div>
    <span class="text-xs font-mono text-green-400/70 bg-green-500/10 px-2 py-1 rounded">Scored Output</span>
  </div>

</div>
  </div>

  <div v-click="2" class="space-y-4">
    <div class="flex items-center gap-3 p-3 bg-red-500/10 rounded-xl border border-red-500/20 text-red-400 font-bold text-lg shadow-[0_0_15px_rgba(239,68,68,0.1)]">
      <div class="p-2 bg-red-500/20 rounded-lg shrink-0">
         <div i-carbon:warning-filled class="text-xl" />
      </div>
      核心难点
    </div>
    
<p class="text-sm text-gray-400 px-2">目前的困难集中在从特征到心理结论的映射构建上。</p>

<div class="bg-red-900/10 border border-red-500/30 p-4 rounded-xl space-y-3 relative overflow-hidden">
  <div class="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(239,68,68,0.05)_50%,transparent_75%,transparent_100%)] bg-[size:20px_20px] opacity-50"></div>
  
  <div class="relative">
    <div class="text-xs text-red-200 mb-1 flex items-center opacity-80">
      <div i-carbon:data-blob class="mr-1.5"/> 已就绪：特征向量
    </div>
    <div class="font-mono text-xs bg-black/40 py-2 px-3 rounded-lg text-gray-100 border border-white/10 shadow-inner flex justify-center overflow-x-auto">


  $X_{user} = [ \mu_{aesthetic}, \dots, \mu_{color}, \dots, V_{style\_mean}, \dots ]$


  </div>
  </div>

  <div class="relative p-3 bg-red-500/10 border-l-2 border-red-500 rounded-r-lg">
    <div class="flex items-start gap-2">
      <div i-carbon:help-desk class="text-red-400 text-lg shrink-0 mt-0.5" />
      <div>
        <span class="font-bold text-red-300 text-sm block mb-0.5">未解决：回归模型构建</span>
        <ul class="list-disc pl-3 text-xs text-red-200/80 space-y-0.5 leading-tight">
          <li>缺乏带有准确心理学标注的摄影数据集。</li>
          <li>映射函数的数学形式尚在探索中。</li>
        </ul>
      </div>
    </div>
  </div>
</div>
  </div>

</div>

<!--
经过MVP开发之后，我们大概就确定这个idea在逻辑上是能搭建成功的；

然后我就开始了我的尝试，当然出现了很多困难。

[click]

对于所有模块的模型，复现功能都是相对简单的，这里我们拿NIMA美学模型做例子。

可以看到已经成功用模型预测出大家对这张图片可能会给什么评分，这里对这张边牧的评价是：大概观测人员会给出5分。

[click]

但是当我想要按照我最开始的想法来进行调整模型时，就会出现一些问题。

我根据之前的理论，拿到了照片作者的”特征向量矩阵“，但是之后的通过什么手段映射到”心理学特征“上还存在一些数据集上的内容。

但是不管如何，我还是做出来了一个看起来不错，emm，最起码功能逻辑和我最初构想差不太多的系统，一会我们来看一下
-->

---
class: py-10
---

## 4.3 生图 prompts 修改

<div class="mt-4 mb-4 text-sm text-gray-300">
  在之前，上课我们生成的都是动物形象，这里我调整了提示词，并单独加了一个图像控制的参数单元，这次效果就比较有创造力了。
</div>

````md magic-move
```python
# before
生成可爱的动物{feat}形象
例如：如果用户焦虑，角色可能是"蜗牛"；如果用户平静，可能是"鲸鱼"。
```

```python
# after
**核心任务变更：**
不再生成现实动物，而是生成一个**"心理潮玩IP{feat}形象" (Art Toy)**。
这个角色应当是抽象的、超现实的，类似于 Pop Mart 或设计师玩具（Designer Toys）。
例如：如果用户焦虑，角色可能是"长满柔软尖刺的紫色球体"；如果用户平静，可能是"半透明的水滴状精灵"。
```

```python
try {
  // Highly specific style prompt for "Art Toy" / "Vinyl Figure" style
  // Combining user image analysis (visualFeatures) with the style reference.
  const stylePrompt = `
    Design a 3D collectible art toy figure.
    Style: Pop Mart, Vinyl Toy, Blind Box Character, Hiroshi Yoshii style.
    Visuals: ${visualFeatures}.
    Atmosphere: ${mood} mood, ${color} color, ${style} style, ${semantics} semantics, ${aesthetics} aesthetics.
    Render: C4D, Octane Render, 8k resolution, soft studio lighting, clean pastel background.
    Material: Combination of matte vinyl, glossy plastic, and soft flocking/velvet.
    Features: Cute but abstract, distinct geometric shapes, minimalist but expressive, high quality, 3D character design.
    View: Front facing portrait, centered.
  `;
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image",
    contents: {
      parts: [{ text: stylePrompt }]
    },})
}
```
````

<div 
  v-click="3" 
  class="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
>
  <img 
    src="/生图提示词对比.jpg" 
    class="h-[60%] rounded-xl shadow-2xl"
  />
</div>

<!--
再就是我们代表人物性格的动物肖像模块，这里在上节课的讨论中给我了一些启发，我就对prompt进行了一些修改

现在是之前的提示词，比较简陋，只有一个feature来限定；

[click]

这是本次修改后的，emm，其实看起来也没有特别完善对吧，其实我当时的想法是不要给定太多规则，失去了随机性其实也不好玩了

但是为了保证和“心理特征”有相关性呢，我又加了一个函数

[click]

可以看到，这里面我限制了肖像的风格，并给出了照片的视觉特征、元信息，告知了渲染方式和材料，使用的是nano banana模型

[click]

这里我贴出了一个对比，用的是王岩同学的图片吧，如果我没记错的话。

上次是一个小松鼠，这次就是一个自由创造的“形象IP”了，我觉得还是比较有创造性的。
-->

---
layout: center
class: transform scale-200
---

# 5. 总结一下

<!--
最后就是总结了
-->

---
class: py-10
---

## 5.1 目前的效果

<div class="flex justify-center mt-4">
  <div class="relative h-[380px] rounded-xl overflow-hidden border-2 border-primary shadow-2xl shadow-primary/20">
    <img src="/finalSystem-DEMO.gif" class="h-full object-contain" />
  </div>
</div>

<div class="mt-6 text-center text-sm text-gray-400 italic">
  演示：系统整合了多模态分析，从单张图片到生成分析报告的完整流程。
</div>

<!--
这里就是我对这个系统的使用演示，从选取图片、系统分析、出报告这一整个流程是跑通了的

但其实里面的情绪分析我做的还不是很好，还有就是如果要落地，肯定是不能继续使用Gemini的生图服务。

现在这个效果跟我预期的有一些差别，不过已经达到理想状态的60%了吧！

这个 GIF图 可能看的不太清楚，我一会可以打开系统实机演示一下。
-->

---
class: py-10
---

## 5.2 系统结构与总结

<div class="flex flex-col items-center gap-6 mt-6 h-full">
  <div class="h-[350px] relative">
     <img src="/系统结构图.png" class="h-full object-contain rounded-lg border border-white/10 transition-transform duration-300 hover:scale-150 cursor-crosshair" @mousemove="(e) => {
      // 获取当前鼠标在图片内的坐标
      const { offsetX, offsetY, target } = e
      // 计算百分比
      const x = (offsetX / target.clientWidth) * 100
      const y = (offsetY / target.clientHeight) * 100
      // 动态修改变换原点
      target.style.transformOrigin = `${x}% ${y}%`
  }"/>
  </div>

  <div class="text-xs text-gray-400 max-w-3xl leading-relaxed text-justify px-4">
    提取出来的向量特征会统一存入专门的向量存储，用于相似检索与聚类分析；分析阶段通过降维和聚类的方法把复杂特征可视化并分群，便于解释和观察；可解释性则借助像 SHAP 和注意力可视化的手段，告诉我们模型为什么会做出某种判断。工程实现上，我们用轻量的接口服务、容器化部署、关系型数据库以及监控体系来保证系统可扩展、可维护、可监控。
  </div>
</div>

<!--
这就是我们这整个系统的结构设计，其实前面已经都讲完了，这里就只做一个总览。

可以看到设计还是比较完善和精密的，每一个环节都不多余。

可能比较大的缺点就是，我把落地的过程想的太简单了吧。
-->

---
title: Thank you
glowSeed: 230
poweredBy: true
layout: end
class: text-center pb-20
---

# Thank You

<div class="mt-4 text-gray-400">
  个人摄影作品的症候式阅读研究
</div>

<div class="mt-4 text-gray-400">
  2025-12-03
</div>

<!--
以上就是我们组《个人摄影作品的症候式阅读研究》汇报，谢谢大家！
-->
