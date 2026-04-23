// descriptionBuilder.js

import { BASE_RESULT_MAP } from "./typeDetails.js";

const ALIGNMENT_DESCRIPTION_MAP = {
  L: "你倾向于将力量用于守护、秩序与修复。",
  X: "你不拘泥于阵营，更关注真实与选择本身。",
  D: "你对既有秩序保持怀疑，更倾向于打破与重塑。"
};

const ENERGY_DESCRIPTION_MAP = {
  E: "你的力量外放明显，倾向主动影响环境与他人。",
  X: "你在表达与内敛之间保持平衡。",
  I: "你的力量更多向内积聚，在沉默中构建优势。"
};

export function buildResult(typeCode) {
  const energy = typeCode[0];
  const baseType = typeCode.slice(1, 4);
  const alignment = typeCode[4];

  const base = BASE_RESULT_MAP[baseType];
  return {
    name: base.name,
    en: base.en,
    description: [
      ENERGY_DESCRIPTION_MAP[energy],
      ALIGNMENT_DESCRIPTION_MAP[alignment],
      base.description
    ].join("\n\n")
  };
}