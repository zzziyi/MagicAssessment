export const BASE_RESULT_MAP = {
    // ===== N 系 =====
    ENTJ: { name: "法师", en: "Archmage", description: ``},
    XNTJ: { name: "法师", en: "Archmage", description: ``},
    INTJ: { name: "法师", en: "Archmage", description: `
        你善于从混乱中抽离本质，你习惯把世界拆开来看。表面之下的逻辑、规律、因果，你会一遍遍推演、复盘，直到形成一套只属于自己的解释体系。
        \n你做事极其目标导向，为了结果可以调整自己的性格，但这不是迎合，而是伪装策略。你看重效率，厌恶低效与情绪化沟通，说话直接、判断干脆。
        对别人要求高，但对自己更狠，习惯自我加压、自我校正，很少给自己留退路。一方面你不轻易信任他人，对虚伪和欺骗极度敏感，一旦踩线，关系基本归零。
        另一方面你偏好聪明、有逻辑、能独立思考的人，对混乱和愚蠢天然排斥。你显得早熟、冷静，甚至有点疏离，但内在其实有一套非常清晰且稳定的标准。
        \n你是天生的内源法师。因为你本质上是在“构建规则”，而不是依赖直觉乱用力量。你能从复杂现象中抽离出稳定结构，把零散经验整理成体系，再不断优
        化精度与效率。你耐得住长时间的独立研究，不依赖外界反馈，也不容易被情绪干扰。你对不完美的厌恶，会逼着你反复修正细节，直到法术稳定可控。相比
        那些靠天赋或情绪爆发的人，你更像是在打造一套可复制的力量系统—，一旦成型，就很难被超越。
        `},

    ENTX: { name: "奥术学者", en: "Arcanist", description: "" },
    XNTX: { name: "奥术学者", en: "Arcanist", description: "" },
    INTX: { name: "奥术学者", en: "Arcanist", description: "" },

    ENTP: { name: "术士", en: "Warlock", description: `
        你是那种用脑子“拆世界”的人。反应快、点子多，看到任何观点都忍不住去推翻、重组，再给出一个更有趣的版本。你喜欢辩论，嘴上不太留情，毒舌但没恶意，
        本质是在和“逻辑”较劲，而不是和人较劲。但相对应的，因为更专注于问题本身，你对情绪不敏感，容易忽略他人的感受。你热衷创新，思维跳跃，常常能把看
        似不相关的东西连接起来，产生新的想法。你带点小自恋，对自己的脑子有信心，也享受被认可的感觉。行动上不算稳定，容易分心，但一旦被有趣的东西吸引，
        可以迅速投入。规则和条条框框会限制你的发挥，你更愿意在自由的环境和变化中寻找机会。
        \n你是天生的外源术士。因为你本质上是在“连接与重组外界力量”。你不会拘泥于固定体系，而是不断尝试不同来源的力量组合，寻找最有趣、最有效的路径。
        你对新事物的敏感，让你能快速捕捉外界变化，并将其转化为可用资源。你喜欢试验、敢于突破边界，即使失败也能迅速换思路。相比稳定内修的术士，你更
        像是在借用世界本身——不断连接、拆解、重构，把不属于你的力量，变成你可以随意调用的工具。

         ` },
    XNTP: { name: "术士", en: "Warlock", description: ` ` },
    INTP: { name: "术士", en: "Warlock", description: `
        你像一个把世界当作谜题的人。好奇心很重，喜欢探索未知、脑洞大开，把复杂事物拆解成原理再重组。但一旦搞懂底层逻辑，你的兴趣会迅速下降，转向下一个
        问题。所以你的成长不是线性的，而是“脉冲式”：平时可能拖延、发呆、刷手机，一进入状态却能在短时间内吸收大量知识。你更擅长理解和建模，而不是持续执
        行，常常呈现“理论很强、实践偏弱”。不太世俗的你，对权威保持距离，更倾向于把人放在同一水平线上看待。虽然在社交上略显疏离，但在必要时能短暂切换到
        外放模式，谈笑自如，只是这种状态难以长期维持。你看似随性，其实内在有一套属于自己的判断标准，只是不愿被外界框住。
        \n 你是天生的内源术士。因为你的力量并不依赖或利用外界规则，而是来源于对原理的理解与重构。你能从混乱中提炼结构，把看似无序的力量转化为可解释的体
        系。你的突破不在于持续的努力，而在于阶段式的灵感爆发，而对既有结论的厌倦，又不断推动你探索更深层的可能。相比稳定输出的法师，你更像是在挖掘力量的
        源头，一旦理解，本身就成为力量的一部分。
        ` },

    ENXJ: { name: "先知", en: "Seer", description: "" },
    XNXJ: { name: "先知", en: "Seer", description: "" },
    INXJ: { name: "先知", en: "Seer", description: "" },

    ENXP: { name: "占卜师", en: "Dreamwalker", description: "" },
    XNXP: { name: "占卜师", en: "Dreamwalker", description: "" },
    INXP: { name: "占卜师", en: "Dreamwalker", description: "" },

    ENXX: { name: "占星师", en: "Astrologer", description: "" },
    XNXX: { name: "占星师", en: "Astrologer", description: "" },
    INXX: { name: "占星师", en: "Astrologer", description: "" },

    ENFJ: { name: "精灵祭祀", en: "Elf Priest", description: "" },
    XNFJ: { name: "精灵祭祀", en: "Elf Priest", description: "" },
    INFJ: { name: "精灵祭祀", en: "Elf Priest", description: "" },

    ENFX: { name: "精灵", en: "Elf", description: "" },
    XNFX: { name: "精灵", en: "Elf", description: "" },
    INFX: { name: "精灵", en: "Elf", description: "" },

    ENFP: { name: "吟游诗人", en: "Bard", description: `
        你很真实，很少伪装，喜欢按自己的感觉去行动，说喜欢就靠近，不喜欢就远离，这让你在他人眼中既好懂又有感染力。你热烈、外放，容易与人建立连接，
        也因此拥有广泛的人际关系。你擅长激发氛围，让别人放松、信任你，很多人会自然而然被你吸引。但你也容易把信任交出去，对他人的动机判断不够谨慎，
        有时会被利用。你情绪浓度高，来得快也去得快，更多沉浸在自身体验里，反而不总能细腻察觉他人的情绪变化。不过你身上的真诚与活力，往往会让周围
        的人愿意包容你、保护你。
        \n 你是天生的外源吟游诗人。因为你的力量本就来自外界——来自人群、情绪与共鸣。你不需要刻意构建规则，而是通过表达与互动，自然调动周围的能量。
        你的感染力让你能够影响他人的情绪状态，将氛围转化为力量来源。你善于连接不同的人与故事，把零散的经历编织成能被传颂的动人叙事，像是行走的“共鸣
        放大器”——在人群中汲取灵感，又将其放大回馈世界。

        ` },
    XNFP: { name: "吟游诗人", en: "Bard", description: "" },
    INFP: { name: "吟游诗人", en: "Bard", description: "" },

    // ===== X 系 =====
    EXTJ: { name: "指挥官", en: "Commander", description: "" },
    XXTJ: { name: "指挥官", en: "Commander", description: "" },
    IXTJ: { name: "指挥官", en: "Commander", description: "" },

    EXTX: { name: "执行官", en: "Executor", description: "" },
    XXTX: { name: "执行官", en: "Executor", description: "" },
    IXTX: { name: "执行官", en: "Executor", description: "" },

    EXTP: { name: "战术家", en: "Tactician", description: "" },
    XXTP: { name: "战术家", en: "Tactician", description: "" },
    IXTP: { name: "战术家", en: "Tactician", description: "" },

    EXXJ: { name: "守卫者", en: "Guardian", description: "" },
    XXXJ: { name: "守卫者", en: "Guardian", description: "" },
    IXXJ: { name: "守卫者", en: "Guardian", description: "" },

    EXXX: { name: "均衡者", en: "Harmonist", description: `` },
    XXXX: { name: "均衡者", en: "Harmonist", description: `
        你像水一样存在于人群之中。不执一形，不固一态，更多时候顺势而为，根据环境与需求自然调整自己。在需要果断时，你能迅速做出清晰判断；
        在需要包容时，又能放下锋芒，维持关系的稳定。你不极端，也不执念，习惯在不同立场之间找到一个可行的平衡点。你既能独处思考，也能融入
        群体，在不同圈子中都能自如切换。面对问题，你既能理性分析利弊，也能理解情绪与人心；既关注现实的可行性，也保留对更远可能的判断。你
        不追求成为最突出的人，却往往是让整体运转顺畅的关键。你不强调存在感，但一旦缺失，很多关系与结构都会变得不稳定。你看似普通，其实内
        在是一种稳定、流动、可调节的秩序本身。
        \n作为均衡者，这种性格的价值，在于“承接与调和”，你能在极端之间找到连接点，让冲突不过度升级，让不同的人有继续合作的空间。你不依赖
        单一优势，而是通过灵活切换来适应变化，因此在复杂环境中更具韧性。相比那些锋芒毕露或高度单一的人，你更像是系统的底层支撑——不显山露水，
        却让一切得以持续运转
     ` },
    IXXX: { name: "均衡者", en: "Harmonist", description: `` },

    EXXP: { name: "游侠", en: "Ranger", description: "" },
    XXXP: { name: "游侠", en: "Ranger", description: "" },
    IXXP: { name: "游侠", en: "Ranger", description: "" },

    EXFJ: { name: "魔法导师", en: "Mentor", description: "" },
    XXFJ: { name: "魔法导师", en: "Mentor", description: "" },
    IXFJ: { name: "魔法导师", en: "Mentor", description: "" },

    EXFX: { name: "感知者", en: "Perceiver", description: "" },
    XXFX: { name: "感知者", en: "Perceiver", description: "" },
    IXFX: { name: "感知者", en: "Perceiver", description: "" },

    EXFP: { name: "表演师", en: "Illusionist", description: "" },
    XXFP: { name: "表演师", en: "Illusionist", description: "" },
    IXFP: { name: "表演师", en: "Illusionist", description: "" },

    // ===== S 系 =====
    ESTJ: { name: "骑士", en: "Knight", description: "" },
    XSTJ: { name: "骑士", en: "Knight", description: "" },
    ISTJ: { name: "骑士", en: "Knight", description: "" },

    ESTX: { name: "士兵", en: "Soldier", description: "" },
    XSTX: { name: "士兵", en: "Soldier", description: "" },
    ISTX: { name: "士兵", en: "Soldier", description: "" },

    ESTP: { name: "战士", en: "Warrior", description: "" },
    XSTP: { name: "战士", en: "Warrior", description: "" },
    ISTP: { name: "战士", en: "Warrior", description: "" },

    ESXJ: { name: "猎手", en: "Hunter", description: "" },
    XSXJ: { name: "猎手", en: "Hunter", description: "" },
    ISXJ: { name: "猎手", en: "Hunter", description: "" },

    ESXX: { name: "风行者", en: "Windrunner", description: "" },
    XSXX: { name: "风行者", en: "Windrunner", description: "" },
    ISXX: { name: "风行者", en: "Windrunner", description: "" },

    ESXP: { name: "刺客", en: "Assassin", description: "" },
    XSXP: { name: "刺客", en: "Assassin", description: "" },
    ISXP: { name: "刺客", en: "Assassin", description: "" },

    ESFJ: { name: "神官", en: "Cleric", description: "" },
    XSFJ: { name: "神官", en: "Cleric", description: "" },
    ISFJ: { name: "神官", en: "Cleric", description: `
        你细心体贴，能注意到别人忽略的细节，愿意为身边的人付出时间与精力，只为了让一切运转得更顺畅。你做事踏实可靠，讲原则、有道德感，重视秩序与稳定，
        也很在意群体的和谐氛围。不喜欢冲突的你，更倾向于包容与维系关系，这让你在人群中显得温和而值得信赖。但另一面，你的配得感偏低，容易忽视自己的需求，
        把“应该”和“责任”放在第一位。你不太愿意主动改变现状，只有被现实逼到一定程度才会行动。长期压抑情绪时，内心也会积累负面想法，但你往往会因此自责，
        进一步收紧自己。你不是没有情绪，而是习惯把它们藏起来。
        \n 这种性格很适合成为神官。因为你的核心是维系与守护。你天生的敏感让你自然而然能察觉到他人的状态和情感需求，能及时发现问题并给予支持，让团队在
        关键时刻恢复与稳定。你对秩序与责任的重视，使你能持续、稳定地提供帮助，而不是短暂爆发。你愿意为他人承担负担，把“让别人好起来”当作自己的价值来源。
        神官不需要最耀眼，但必须最可靠——而你正是那种在关键时刻始终站在原地、默默修复一切的人。
        ` },

    ESFX: { name: "灵药师", en: "Herbalist", description: "" },
    XSFX: { name: "灵药师", en: "Herbalist", description: "" },
    ISFX: { name: "灵药师", en: "Herbalist", description: "" },

    ESFP: { name: "花灵", en: "Flora Spirit", description: `
        你喜欢尽情享受当下，对生活充满期待和热情，总是以积极的姿态投入到各种事情中。你擅长与人相处，用友善和包容来促进和谐的人际关系，所以你和
        他人的关系来得快也热烈。你重视体验与感觉，愿意回应他人的需求，也不忍心伤害别人，这让你显得温和、随和。但也有可能导致情感上的“过度连接”，
        陷入“想让所有人都开心”的状态，在客观上反而带来模糊与误解。但是，你不是没有原则，而是更容易被当下的情绪与关系牵动。另一方面，关注新鲜体
        验的你，专注力容易被分散，对长期目标的耐心不足，容易满足于当下。
        
        你是天生的花灵。因为你的力量本质上来自情绪与生命力的流动。你能敏锐感知环境的氛围，把自己的状态自然地扩散出去，像花香一样感染周围。你对
        连接的渴望，让你成为情感的桥梁，将不同个体柔和地联结在一起。你不依赖规则或理性推演，而是通过感受与共鸣与世界互动。花灵并不需要控制一切，
        而是让生命自然生长——而你，正是那种顺应流动、让美好发生的人。
        ` },
    XSFP: { name: "花灵", en: "Flora Spirit", description: "" },
    ISFP: { name: "花灵", en: "Flora Spirit", description: "" }
};
