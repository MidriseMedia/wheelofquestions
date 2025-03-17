async function getQuestion(color) {
  const response = await fetch('questions.json');
  const questions = await response.json();
  const randomIndex = Math.floor(Math.random() * questions[color].length);
  const question = questions[color][randomIndex];
  document.getElementById('question').innerText = question;
}