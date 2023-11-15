//require the list of colors.
const colorList = require("./colors");
const shapeList = ["Circle", "Square", "Triangle"];

//a quick function to remove spaces from a string to normalize color names
function removeSpace(str) {
  str = str.replace(/\s/g, "");
  return str;
}

//the meat for the inquirer module.
const questions = [
  {
    type: "input",
    name: "filename",
    message:
      "What would you like to name the output SVG file? Please do not include the file extension: ",

    //validating the input to make sure it's a valid file name. Relatively restrictive as we want to make this platform-agnostic.
    //220 characters is based on the windows path+filename limit.
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
      //we want the shape to be a different color from the default white/transparent background.
      if (inputColor === "white") {
        return "Please choose a color other than white for the shape. ";
        
      //validating that the color entered exists on the list of colors. These are all the color words recognized by the SVG standard
      } else if (colorList.includes(inputColor)) {
        return true;
      }

      return "We could not match your color selection to a valid value. Please try again. ";
    },
    //normalizing the color name to lowercase and remove spaces to match what's on the color list.
    filter(color) {
      const inputColor = removeSpace(color.toLowerCase());
      return inputColor;
    },
  },

  {
    type: "input",
    name: "textColor",
    message: "What color would you like to use for the text?",

    //same validaation as above without the check for white, as white is a perfectly fine text color. 
    validate(color) {
      const inputColor = removeSpace(color.toLowerCase());
      if (colorList.includes(inputColor)) {
        return true;
      }
      return "We could not match your color selection to a valid value. Please try again. ";
    },
    //same normalization as above
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
    //validate that we have between 1-3 characters and filtering them so they are uppercase.
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

module.exports = questions;
