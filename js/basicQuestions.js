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
      { text: "不抗拒甚至更享受一个人待着，除非被拉入对话否则更喜欢当倾听者", scores: { Extraversion: 1 } },
      { text: "喜欢去找熟人聊天，在熟悉的小圈子里会主动引导话题", scores: { Extraversion: 2 } },
      { text: "不光和老朋友玩，还会主动去认识新朋友", scores: { Extraversion: 3 } }
    ]
    },
    {
    question: "在游戏或旅游中你？",
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
      { text: "能接受只有细节，也能接受只说整体框架，没有特别的偏好", scores: { Sensing: 2 } },
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
    question: "你开始学习一个你感兴趣的东西时更倾向",
    options: [
      { text: "先研究具体案例，按照步骤来，确保每一步都理解清楚，然后再更好地理解整体原理", scores: { Sensing: 3 } },
      { text: "先理解整体逻辑和原理，然后通过具体案例练习和验证，且每一步不一定会按照既定流程", scores: { Sensing: 1 } },
      { text: "在整体逻辑和具体案例之间反复切换，会看案例看到一半就去看逻辑了，也会看逻辑看到一半就去案例了", scores: { Sensing: 2 } },
    ]
    },
    //----------------T/F------------------
    {
    question: "如果你和对方意见不同，你更难接受",
    options: [
      { text: "对方坚持错误的逻辑", scores: { Thinking: 3 } },
      { text: "对方伤害了我的感情让我难堪", scores: { Thinking: 1 } },
      { text: "两者都不太舒服，但是程度都不深，勉强都可以忍受", scores: { Thinking: 2 } }
    ]
    },
    // {
    // question: "处理纠纷时你更接近",
    // options: [
    //   { text: "先将事情逻辑理清楚", scores: { Thinking: 3 } },
    //   { text: "先帮亲近的人平缓心情", scores: { Thinking: 1 } },
    //   { text: "两者都有，看情况", scores: { Thinking: 2 } }
    // ]
    // },
    {
    question: "当你的朋友/弟弟妹妹很沮丧地和你说：“唉，我科目三考砸了，要被爸妈说了。”，你的第一反应是",
    options: [
      { text: "他现在心情一定很沮丧，我得好好安慰他，我觉得他已经做得很棒了", scores: { Thinking: 1 } },
      { text: "我看看能不能分析一下原因，看看要怎么提升，帮助他下次考过", scores: { Thinking: 3 } },
      { text: "转移一下他的注意力，现在说什么都没有用了", scores: { Thinking: 2 } }
    ]
    },
    {
    question: "如果规则是合理的，但是会让个别人难受，你更倾向",
    options: [
      { text: "觉得规则是合理的，但心里还是会替那些人不舒服", scores: { Thinking: 2 } },
      { text: "既然规则是合理的，就应当遵守", scores: { Thinking: 3 } },
      { text: "先看能不能照顾个体，不然不公平", scores: { Thinking: 1 } }
    ]
    },
    {
    question: "一个要好的朋友经常向你抱怨感情问题，你内心知道双方都有大问题，但当下你还是顺着他的话安抚。在这样做时，你内心的想法更接近",
    options: [
      { text: "更关注问题本身应该怎么解决，他哪里做得不对我很清楚，且不会因为他是我朋友而改变想法", scores: { Thinking: 3 } },
      { text: "发自内心地在体谅和分担他的痛苦，甚至不自觉放下了客观的对错，只希望他情绪可以好一点", scores: { Thinking: 1 } },
      { text: "感性和理性的拉扯让我倾向保持中立，知道他做的不太好，但又因为我们的关系而选择宽容一些，觉得他的做法也情有可原", scores: { Thinking: 2 } },
    ]
    },
    //----------------J/P------------------
    {
    question: "单独旅游或者和最亲近的人旅游时你是",
    options: [
      { text: "提前看攻略，至少对要去的地方心中有数，如果做了计划就尽可能按照计划来", scores: { Judging: 3 } },
      { text: "稍微做点攻略和计划，也可能会很精细，不过大概只有一半按照计划来", scores: { Judging: 2 } },
      { text: "计划赶不上变化，到了目的地再查旅游攻略，也可以随便走走看看，说不定有惊喜", scores: { Judging: 1 } },
    ]
    },
    {
    question: "大部分时间，你的衣柜更接近？",
    options: [
      { text: "规整叠放，会按照某种规律（功能/颜色/季节）按顺序摆放，所有东西一目了然，整整齐齐", scores: { Judging: 3 } },
      { text: "挺整齐的，有粗略按照特定顺序摆放，大部分衣服都会稍微叠一下", scores: { Judging: 2 } },
      { text: "除了挂起来的衣物，其他的衣服摆放比较随性，放置在一起，偶尔需要花一些时间翻找", scores: { Judging: 1 } },
    ]
    },
    // {
    // question: "你更讨厌",
    // options: [
    //   { text: "混乱无序", scores: { Judging: 3 } },
    //   { text: "被安排死", scores: { Judging: 1 } },
    //   { text: "两者都勉强可以接受", scores: { Judging: 2 } },
    // ]
    // },
    {
    question: "如果你的伴侣或者朋友经常迟到，有时候迟到二十分钟，偶尔两三个小时，但他不是故意的，在没有损失金钱的情况下，你内心真实的态度是",
    options: [
      { text: "不喜欢，守时很重要，经常迟到会影响我后续的安排", scores: { Judging: 3 } },
      { text: "看情况，迟到半个小时以内都勉强可以接受", scores: { Judging: 2 } },
      { text: "无所谓，因为意外经常发生，只要不是很重要的事情迟到几个小时就行", scores: { Judging: 1 } },
    ]
    },
    // {
    // question: "面对一个长期任务，你更可能",
    // options: [
    //   { text: "分阶段规划完成", scores: { Judging: 3 } },
    //   { text: "随进展灵活推进", scores: { Judging: 1 } },
    //   { text: "两者都有，看情况", scores: { Judging: 2 } },
    // ]
    // },
    {
       question: "面对一个比较重要的决定，有多个还不错的选择，你有十天的决定时间，你会：",
       options: [
         { text: "收集尽可能全面的信息，对比以后在第4-7天选出自己认为的最优解，结果的质量比较重要", scores: { Judging: 3 } },
         { text: "尽快收集信息进行对比，并可以快速在第1-3天做出决定，时间就是金钱，决策的速度比较重要", scores: { Judging: 2 } },
         { text: "在截止日期前都会收集信息和观望，在第8-10天再做决定,保留可修正性和灵活性比较重要", scores: { Judging: 1 } }
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
    question: "你是否经常对现有的社会规则感到不满",
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
