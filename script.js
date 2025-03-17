async function getQuestion(color) {
  const response = await fetch('questions.json');
  const questions = await response.json();
  const randomIndex = Math.floor(Math.random() * questions[color].length);
  const selectedQuestion = questions[color][randomIndex];

  // Display the selected question properly
  document.getElementById('question').innerText = selectedQuestion.question;

  // Create the "Answer" button if it doesn't exist
  let answerButton = document.getElementById('answerButton');
  if (!answerButton) {
    answerButton = document.createElement('button');
    answerButton.id = 'answerButton';
    answerButton.innerText = 'Answer';
    answerButton.style.marginTop = '15px';
    answerButton.style.padding = '10px 20px';
    answerButton.style.fontSize = '18px';
    answerButton.style.cursor = 'pointer';
    answerButton.style.backgroundColor = '#ffffff';
    answerButton.style.border = '1px solid #000';
    answerButton.style.borderRadius = '5px';

    // Append the button below the question
    document.body.appendChild(answerButton);
  }

  // Remove previous answer display if it exists
  let answerText = document.getElementById('answerText');
  if (answerText) {
    answerText.remove();
  }

  // Set up event listener to show the answer when clicked
  answerButton.onclick = function() {
    // Remove the button after clicking
    answerButton.remove();

    // Create and display the answer text
    answerText = document.createElement('h2');
    answerText.id = 'answerText';
    answerText.innerText = 'Answer: ' + selectedQuestion.answer;
    answerText.style.marginTop = '10px';
    answerText.style.color = '#ffffff';
    document.body.appendChild(answerText);
  };
}