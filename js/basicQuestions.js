const questions = [
    //----------------E/I------------------
    {
    question: "在结束了高强度工作后，周末更让你恢复能量的是？",
    options: [
      { text: "参加各类活动", scores: { Extraversion: 3 } },
      { text: "和家人或老朋友见面聊天", scores: { Extraversion: 2 } },
      { text: "自己待着做喜欢的事情", scores: { Extraversion: 1 } }
    ]
    },
    {
    question: "在很放松的聚会中你的舒适区是？",
    options: [
      { text: "不光和老朋友玩，还会主动去认识新朋友", scores: { Extraversion: 3 } },
      { text: "喜欢去找熟人聊天，在熟悉的小圈子里会主动引导话题", scores: { Extraversion: 2 } },
      { text: "不抗拒甚至更享受一个人待着，除非被拉入对话否则更喜欢当倾听者", scores: { Extraversion: 1 } }
    ]
    },
    {
    question: "在游戏中你？",
    options: [
      { text: "不抗拒甚至喜欢和路人组队聊天", scores: { Extraversion: 3 } },
      { text: "比起和陌生人玩或者自已一个人，更愿意和熟悉的组队聊天", scores: { Extraversion: 2 } },
      { text: "有熟悉的搭子就一起玩，没有的话一个人也能玩得很起劲", scores: { Extraversion: 1 } },
    ]
    },
    {
    question: "你状态最好的时候通常是？",
    options: [
      { text: "和别人互动频繁时", scores: { Extraversion: 3 } },
      { text: "自己有完整思考空间的时候", scores: { Extraversion: 1 } },
      { text: "两者结合", scores: { Extraversion: 2 } },
    ]
    },
    //----------------N/S------------------
    {
    question: "当你和朋友聊到停不下来时，你更容易被哪种方向带着走？",
    options: [
      { text: "围绕具体事情深入展开，关注细节和过程，很少偏离实际内容", scores: { Sensing: 3 } },
      { text: "会在具体事情和延伸想法之间切换，但通常能拉回到现实内容", scores: { Sensing: 2 } },
      { text: "很容易从一个点发散，被新的联想带走，话题经常越聊越远", scores: { Sensing: 1 } },
    ]
    },
    {
    question: "朋友告诉你一件事情，你会优先思考",
    options: [
      { text: "细节是否准确，比如时间和地点的准确性，有时候蛛丝马迹也能推断事情真相", scores: { Sensing: 3 } },
      { text: "细节和整体对你来说同等重要，没有特别的偏好", scores: { Sensing: 2 } },
      { text: "事情的整体框架和逻辑，只需要最重要的几个细节即可", scores: { Sensing: 1 } },
    ]
    },
    {
    question: "你觉得下面哪个更容易学会",
    options: [
      { text: "数学，物理，化学", scores: { Sensing: 1 } },
      { text: "语文，英语，历史", scores: { Sensing: 3 } },
      { text: "难度差不多", scores: { Sensing: 2 } },
    ]
    },
    {
    question: "你学习一个你感兴趣的东西时更倾向",
    options: [
      { text: "先研究具体案例", scores: { Sensing: 3 } },
      { text: "先理解整体逻辑", scores: { Sensing: 1 } },
      { text: "两者都有，看情况", scores: { Sensing: 2 } },
    ]
    },
    //----------------T/F------------------
    {
    question: "如果你和对方意见不同，你更难接受",
    options: [
      { text: "对方坚持错误的逻辑", scores: { Thinking: 3 } },
      { text: "伤害对方让对方难堪", scores: { Thinking: 1 } },
      { text: "两者都有，看情况", scores: { Thinking: 2 } }
    ]
    },
    {
    question: "处理纠纷时你更接近",
    options: [
      { text: "先将事情逻辑理清楚", scores: { Thinking: 3 } },
      { text: "先帮亲近的人平缓心情", scores: { Thinking: 1 } },
      { text: "两者都有，看情况", scores: { Thinking: 2 } }
    ]
    },
    {
    question: "服务人员提供服务时，你更倾向",
    options: [
      { text: "优先考虑对方是否辛苦，尽量减少麻烦对方", scores: { Thinking: 1 } },
      { text: "在考虑对方情况和自己需求之间做平衡", scores: { Thinking: 2 } },
      { text: "优先考虑事情是否需要，正常提出请求", scores: { Thinking: 3 } }
    ]
    },
    {
    question: "一个要好的朋友经常向你抱怨感情问题，你内心知道双方都有大问题，但当下你还是顺着他的话安抚。在这样做时，你内心的想法更接近",
    options: [
      { text: "更关注问题本身应该怎么解决，他哪里做得不对我很清楚，只是暂时不说出来", scores: { Thinking: 3 } },
      { text: "发自内心地在体谅和分担他的痛苦，甚至不自觉放下了客观的对错，只希望他情绪可以好一点", scores: { Thinking: 1 } },
      { text: "感性和理性的拉扯让我倾向保持中立，知道他做的不太好，但又因为我们的关系而选择宽容一些", scores: { Thinking: 2 } },
    ]
    },
    //----------------J/P------------------
    {
    question: "单独旅游或者和最亲近的人旅游时你是",
    options: [
      { text: "提前看攻略，至少对要去的地方心中有数，如果做了计划就尽可能按照计划来", scores: { Judging: 3 } },
      { text: "稍微做点攻略和计划，也可能会很精细，不过大概只有一半按照计划来", scores: { Judging: 2 } },
      { text: "计划赶不上变化，到了目的地再查旅游攻略，也可以随便走走看看", scores: { Judging: 1 } },
    ]
    },
    {
    question: "你更讨厌",
    options: [
      { text: "混乱无序", scores: { Judging: 3 } },
      { text: "看具体情况", scores: { Judging: 2 } },
      { text: "被安排死", scores: { Judging: 1 } },
    ]
    },
    {
    question: "如果你的伴侣或者朋友经常迟到，你内心真实的态度是",
    options: [
      { text: "不喜欢，守时很重要，经常迟到会影响其他人的安排", scores: { Judging: 3 } },
      { text: "看情况，只要不是特别重要的事情都可以接受", scores: { Judging: 2 } },
      { text: "正常，意外经常发生，以后把时间提前一些告诉他就行", scores: { Judging: 1 } },
    ]
    },
    {
    question: "面对一个长期任务，你更可能”",
    options: [
      { text: "分阶段规划完成", scores: { Judging: 3 } },
      { text: "随进展灵活推进", scores: { Judging: 1 } },
      { text: "两者都有，看情况", scores: { Light: 2 } },
    ]
    },
    //----------------L/D------------------
    {
    question: "你是否认同“什么年龄该做什么事”",
    options: [
      { text: "认同", scores: { Light: 3 } },
      { text: "中立", scores: { Light: 2 } },
      { text: "不认同", scores: { Light: 1 } },
    ]
    },
    {
    question: "当你是否经常对现有的社会规则感到不满",
    options: [
      { text: "不会，大部分的规则已经是最优解了", scores: { Light: 3 } },
      { text: "是的，这个社会就是个巨大的草台班子", scores: { Light: 1 } },
      { text: "两者都有，看情况", scores: { Light: 2 } }
    ]
    },
    {
    question: "如果你入职了一家新公司，当你接手了新的工作后发现原来的流程有漏洞时，你更可能",
    options: [
      { text: "先去理解漏洞的原因并尝试修复它", scores: { Light: 3 } },
      { text: "自己建立一个新的流程去取代它", scores: { Light: 1 } },
      { text: "直接告诉上司，听从上级安排", scores: { Light: 2 } }
    ]
    },
    {
    question: "你对现状满意吗",
    options: [
      { text: "75%以上满意", scores: { Light: 3 } },
      { text: "还行，不能说不满意，但也不是很满意", scores: { Light: 2 } },
      { text: "不太满意", scores: { Light: 1 } }
    ]
    }
]

const scores = {
    Extraversion:0,
    Introversion:0,
    Intuition:0,
    Sensing:0,
    Thinking:0,
    Feeling:0,
    Judging:0,
    Perceiving:0,
    Light:0,
    Dark:0
};
