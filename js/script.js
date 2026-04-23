function renderQuestions() {
  const form = document.getElementById("quizForm");

  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";

    let html = `<h2 class="question-title">${q.question}</h2><div class="options">`;

    q.options.forEach((opt, i) => {
      html += `
        <label>
          <input type="radio" name="q${index}" value="${i}">
          <span>${opt.text}</span>
        </label>
      `;
    });

    html += `</div>`;
    div.innerHTML = html;
    form.appendChild(div);
  });
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function submitTest() {
  let scores = {
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

  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);

    if (!selected) {
      alert("请完成所有题目！");
      return;
    }

    const answerIndex = selected.value;
    const option = questions[i].options[answerIndex];

    for (let key in option.scores) {
      scores[key] += option.scores[key];
    }
  }

  localStorage.setItem("basicResult", JSON.stringify(scores));

  window.location.href = "result.html";
}

shuffle(questions);
renderQuestions();