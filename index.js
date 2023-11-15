//including dependencies
const inquirer = require("inquirer");
const questions = require("./lib/questions");
const { Circle, Square, Triangle } = require("./lib/shapes");

//this function calls inquirer, then uses the answer hash to create the object and generate the SVG file. 
function init() {
  inquirer.prompt(questions).then((answers) => {
    let userAnswers = answers;
    // console.log(userAnswers);
    switch (userAnswers.shape) {
      case "Circle":
        userShape = new Circle(
          userAnswers.filename,
          userAnswers.shapeColor,
          userAnswers.textColor,
          userAnswers.logoText
        );
        break;
      case "Square":
        userShape = new Square(
          userAnswers.filename,
          userAnswers.shapeColor,
          userAnswers.textColor,
          userAnswers.logoText
        );
        break;
      case "Triangle":
        userShape = new Triangle(
          userAnswers.filename,
          userAnswers.shapeColor,
          userAnswers.textColor,
          userAnswers.logoText
        );
        break;
      //this should never be used, but if there is an error it defaults to using a circle.
      default:
        userShape = new Circle(
          userAnswers.filename,
          userAnswers.shapeColor,
          userAnswers.textColor,
          userAnswers.logoText
        );
        break;
    }
    //call the function inside of the created object to write the SVG file. 
    userShape.writeToFile();
  });
}

// Function call to initialize app

init();
