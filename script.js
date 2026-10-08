function checkQuiz() {

const answers = {
q1:"a",
q2:"a",
q3:"a",
q4:"a",
q5:"b",
q6:"b",
q7:"c",
q8:"b",
q9:"a",
q10:"b",
q11:"a",
q12:"b",
q13:"c",
q14:"a",
q15:"b"
};

let score = 0;

for(let key in answers){
let selected = document.querySelector(
`input[name="${key}"\]:checked`
);

if(selected && selected.value === answers[key]){
score++;
}
}

if(score >= 12){
window.location.href = "success.html";
}else{
document.getElementById("score").innerHTML =
`<h2>Skor Anda: ${score}/15</h2>
<p>Maaf, minimal harus 12 benar untuk mendapatkan BEKO 🐸</p>`;
}
}