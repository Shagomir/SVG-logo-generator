const inquirer = require("inquirer");

const questions = require("./lib/questions");


const { Circle, Square, Triangle } = require("./lib/shapes");



function init() {
  inquirer.prompt(questions).then((answers) => {
    let userAnswers = answers;
    // console.log(userAnswers);
    switch (userAnswers.shape) {
      case "Circle":
        userShape = new Circle (userAnswers.filename, userAnswers.shapeColor, userAnswers.textColor, userAnswers.logoText)
        break;
      case "Square":
        userShape = new Square (userAnswers.filename, userAnswers.shapeColor, userAnswers.textColor, userAnswers.logoText)
        break;
      case "Triangle":
        userShape = new Triangle (userAnswers.filename, userAnswers.shapeColor, userAnswers.textColor, userAnswers.logoText)
        break;
      default: userShape = new Circle (userAnswers.filename, userAnswers.shapeColor, userAnswers.textColor, userAnswers.logoText)
        break;
    }
    userShape.writeToFile()
  });
}

// Function call to initialize app

init();
