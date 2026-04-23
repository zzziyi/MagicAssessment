import { getFactorLevels, getFactorLetters, buildTypeCode } from "./typeBuilder.js";
import { buildResult } from "./descriptionBuilder.js";

function getAlignmentText(L) {
    const map = {
        L: "光明",
        D: "黑暗",
        X: "自由"
    };
    return map[L] || "";
}

function getEnergyText(E) {
    const map = {
        E: "外倾",
        I: "内倾",
        X: "均衡"
    };
    return map[E] || "";
}

function renderResult() {
   const scores = JSON.parse(localStorage.getItem("basicResult"));

   const typeImageEl = document.getElementById("typeImage");
   const typeNameEl = document.getElementById("typeName");
   const typeAlignmentEl = document.getElementById("typeAlignment");
   const typeEnergyEl = document.getElementById("typeEnergy");
   const typeDescriptionEl = document.getElementById("typeDescription");
   
   if (!scores) {
    console.warn("No basicResult found in localStorage");

    if (typeNameEl) typeNameEl.textContent = "暂无测试结果";
    if (typeAlignmentEl) typeAlignmentEl.textContent = "";
    if (typeEnergyEl) typeEnergyEl.textContent = "";
    if (typeDescriptionEl) typeDescriptionEl.textContent = "请先完成测试，再进入结果页。";
    if (typeImageEl) typeImageEl.alt = "暂无角色形象";
    return;
  }

     const levels = getFactorLevels(scores);
     const letters = getFactorLetters(levels);
     const typeCode = buildTypeCode(letters);
     const result = buildResult(typeCode);
    
     const alignment = getAlignmentText(letters.L);
     const energy = getEnergyText(letters.E);

    //  const typeCode = "XXXXX";
    //  const result = buildResult(typeCode);
    //  const alignment = '黑暗';
    //  const energy = '内倾';
    

    const baseType = typeCode.slice(1, 4);
    typeImageEl.src = `images/characters/${baseType}.png`;
    typeImageEl.alt = `${result?.name || baseType} 角色形象`;

    typeImageEl.onerror = function () {
      this.src = "images/characters/default.png";
    };

    typeNameEl.textContent = result?.name +' '+ result?.en || "未知类型";
    typeAlignmentEl.textContent = `阵营：${alignment}`;
    typeEnergyEl.textContent = `能量：${energy}`;
    typeDescriptionEl.textContent = result?.description || "暂无描述。";

}

window.addEventListener("DOMContentLoaded", () => {
  renderResult();

  document.getElementById("restartBasicTestBtn")?.addEventListener("click", () => {
    localStorage.removeItem("basicResult");
    window.location.href = "index.html";
  });
});


