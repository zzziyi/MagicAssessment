const questions = [
    {
    question: "你最希望你的伴侣看重你什么品质/优点？",
    options: [
      { text: "外形条件", scores: { } },
      { text: "社交情商", scores: { } },
      { text: "学习能力", scores: { } },
      { text: "人品道德", scores: { } },
      { text: "工作能力", scores: { } },
      { text: "家境家教", scores: { } },
      { text: "情绪稳定", scores: { } },
      { text: "父母满意", scores: { } }
    ]
  },
  {
  question: "你心目中理想伴侣最重要的品质/优点",
  options: [
      { text: "外形优", scores: { } },
      { text: "人品佳", scores: { } },
      { text: "能力强", scores: { } },
      { text: "性格好", scores: { } },
      { text: "门当户对", scores: { } },
      { text: "三观一致", scores: { } },
      { text: "毫无保留的爱", scores: { } },
      { text: "自己父母满意", scores: { } },

    ]
  },
  {
  question: "除了违法乱纪，以下哪个行为，哪个朋友做了之后，你会绝对会断交（最不能容忍）",
  options: [
      { text: "不真诚，欺骗", scores: { } },
      { text: "双标", scores: { } },
      { text: "情绪化", scores: { } },
      { text: "自私", scores: { } },
      { text: "私生活混乱", scores: { } },
      { text: "吹牛装逼", scores: { } },
      { text: "嫉妒", scores: { } }
    ]
  },
  {
    question: "在恋爱中你更倾向于？",
    options: [
      { text: "主导这段关系", scores: { dominance: 3 } },
      { text: "平等相处，凡事商量着来", scores: { dominance: 1, rational: 1 } },
      { text: "配合对方心意，较少反驳", scores: { dominance: 0, attachment: 1 } }
   ]
  },
  {
    question: "在关系中，你更接近哪种状态？",
    options: [
      { text: "希望彼此保持一定距离和空间", scores: { attachment: 0, rational: 1 } },
      { text: "比较平衡，既亲密也独立", scores: { attachment: 2 } },
      { text: "更依赖对方的回应和陪伴", scores: { attachment: 3, emotion: 1 } }
    ]
  },
  {
    question: "你对“绝对忠诚”的看法更接近？",
    options: [
      { text: "非常重要，是底线", scores: { boundary: 3 } },
      { text: "重要，但也看具体情况", scores: { boundary: 2 } },
      { text: "没有人能做到绝对的忠诚", scores: { boundary: 1 } }
    ]
  },
  {
    question: "当发现一段关系有明显问题时，你会？",
    options: [
      { text: "即使不舒服也会坚持一段时间", scores: { emotion: 2 } },
      { text: "不论是否会争吵，尝试沟通和调整", scores: { rational: 2, attachment: 1 } },
      { text: "更倾向于主动及时止损", scores: { rational: 3 } }
    ]
  }
]

const scores = {
  emotion: 0,       // 情绪
  appearance: 0,    // 颜值
  rational: 0,      // 理智
  reality: 0,       // 现实
  attachment: 0,    // 关系模式:依赖
  boundary: 0,      // 道德底线
  dominance: 0      // 掌控欲
};
