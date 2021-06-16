const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let spacer = "\n-----------------------\n";
let question = 'Who was the first American woman in space? ';
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];;
let candidateAnswers = [];
let questions = [
  "Who was the first American woman is space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  console.log();
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question("1) " + question);  
  for(i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question((i + 1) + ") " + questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade;  
  console.log(spacer);
  for(i = 0; i < questions.length; i++) {
    console.log(`For question ${i + 1}) you entered: ${candidateAnswers[i]}.`);
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log("That is the correct answer.");
      grade++;
    } else {
      console.log(`Incorrect, the correct answer is: ${correctAnswers[i]}`);
    }
    console.log();
  }
  console.log(spacer);

  grade = grade / questions.length * 100;
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(spacer);
  console.log("Hello " + candidateName + " Welcome to Candidate Testing.");
  console.log(spacer);
  
  askQuestion();
  let finalGrade = gradeQuiz(this.candidateAnswers);

  console.log("Overall Grade: " + finalGrade + "%");
  if(finalGrade < 80) {
    console.log("Status: FAILED");
  } else {
    console.log("Status: PASSED");
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};