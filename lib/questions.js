const colorList = require("./colors");
const shapeList = ["Circle", "Square", "Triangle"];


function removeSpace(str) {
  str = str.replace(/\s/g, "");
  return str;
}

const questions = [
    {
      type: "input",
      name: "filename",
      message:
        "What would you like to name the output SVG file? Please do not include the file extension.",
      validate(value) {
        const pass = value.match(/^[0-9a-z_\-]{3,220}$/);
        if (pass) {
          return true;
        }
        return `Please enter a valid file name following the requirements below: 
        
        * Is between 3 and 220 characters. 
        * Contains ONLY the characters below: 
             - any numbers 0-9
             - any letters a-z
             - underscores 
             - dashes`;
      },
    },
    {
      type: "list",
      name: "shape",
      message: "What shape would you like to use for your logo?",
      choices: shapeList,
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color would you like to use for the shape?",
      validate(color) {
        const inputColor = removeSpace(color.toLowerCase());
        if (inputColor === "white") {
          return "Please choose a color other than white for the shape. ";
        } else if (colorList.includes(inputColor)) {
          return true;
        }
  
        return "We could not match your color selection to a valid value. Please try again. ";
      },
      filter(color) {
        const inputColor = removeSpace(color.toLowerCase());
        return inputColor;
      },
    },
  
    {
      type: "input",
      name: "textColor",
      message: "What color would you like to use for the text?",
      validate(color) {
        const inputColor = removeSpace(color.toLowerCase());
        if (colorList.includes(inputColor)) {
          return true;
        }
        return "We could not match your color selection to a valid value. Please try again. ";
      },
  
      filter(color) {
        const inputColor = removeSpace(color.toLowerCase());
        return inputColor;
      },
    },
  
    {
      type: "input",
      name: "logoText",
      message:
        "Please enter up to three characters to include as text on the logo",
      validate(value) {
        if (value.length < 1) {
          return "Please enter at least one character to include as text on the logo";
        } else if (value.length > 3) {
          return "Your text was too long. Please enter up to three characters to include as text on the logo";
        }
        return true;
      },
      filter(text) {
        const newText = text.toUpperCase();
        return newText;
      },
    },
  ];

  module.exports = questions