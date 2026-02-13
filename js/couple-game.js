const questions = [
  {
    q: "เดทที่แรกของเราคือที่ไหน",
    c: ["หัวหิน", "พัทยา", "ราชบุรี"],
    correct: 0, // ตอบ 1
  },
  {
    q: "ถ้าเลือกไปเที่ยวด้วยกันได้ 1 ที่ตอนนี้ อยากไปไหน",
    c: ["ทะเล", "ภูเขา", "น้ำตก"],
    correct: 1, // ตอบ 2
  },
  {
    q: "ทริปแรกที่ออกรถมอไซต์มาขับไปเที่ยวไหนกัน",
    c: ["เขาใหญ่", "อยุธยา", "ราชบุรี"],
    correct: 1, // ตอบ 2
  },
  {
    q: "ช่วงเวลาไหนที่อยู่ด้วยกันแล้วมีความสุขที่สุด",
    c: ["เช้า", "เย็น", "ทุกช่วงเวลา"],
    correct: 2, // ตอบ 3
  },
  {
    q: "ถ้าวันหนึ่งเราทะเลาะกันหนัก ๆ ตัวอยากให้เค้าจัดการยังไง",
    c: [
      "เลิกไปเลย น่ารำคาน",
      "จับมือแน่นๆ แล้วรีบเคลียใจทันที",
      "ปล่อยไป..เดี๋ยวก็หายเอง"
    ],
    correct: 1, // ตอบ 2
  }
];

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 3) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
