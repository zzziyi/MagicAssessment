export function getLevel(score){
    if(score >=4 && score <=6) return "L";
    if(score >=7 && score <=9) return "M";
    if(score >=10 && score <=12) return "H";
    return null;
}

export function getFactorLevels(scores){
    return{
        E: getLevel(scores.Extraversion),
        S: getLevel(scores.Sensing),
        T: getLevel(scores.Thinking),
        J: getLevel(scores.Judging),
        L: getLevel(scores.Light)
    }
}

const FACTOR_LETTER_MAP = {
  E: {
    L: "I", M: "X", H: "E"
  },
  S: {
    L: "N", M: "X", H: "S"
  },
  T: {
    L: "F", M: "X", H: "T"
  },
  J: {
    L: "P", M: "X", H: "J"
  },
  L: {
    L: "D", M: "X", H: "L"
  }
};

export function getFactorLetters(levels) {
  return {
    E: FACTOR_LETTER_MAP.E[levels.E],
    S: FACTOR_LETTER_MAP.S[levels.S],
    T: FACTOR_LETTER_MAP.T[levels.T],
    J: FACTOR_LETTER_MAP.J[levels.J],
    L: FACTOR_LETTER_MAP.L[levels.L]
  };
}

export function buildTypeCode(letters) {
  return `${letters.E}${letters.S}${letters.T}${letters.J}${letters.L}`;
}
