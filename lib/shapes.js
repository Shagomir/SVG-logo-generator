//adding required fs - we do some file system manipulation and creation in here.
const fs = require("fs");

//shape class with general functions
class Shape {
  constructor(filename, shapeColor, textColor, logoText) {
    (this.filename = filename),
      (this.logoText = logoText),
      (this.shapeColor = shapeColor),
      (this.textColor = textColor),
      (this.shapeStr = `circle cx="150" cy="100" r="80"`); //initialzing with circle in case of error or if Shape class is used.
  }
  //render function for testing.
  render() {
    const str = `<${this.shapeStr} fill="${this.shapeColor}" />`;
    return str;
  }
  //function to generate the XML contents of the svg file.
  generateSVG() {
    const SVGstr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <${this.shapeStr} fill="${this.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
  
  </svg>`;
    return SVGstr;
  }
  //setColor function for testing
  setColor(newShapeColor) {
    this.shapeColor = newShapeColor;
  }
  //this is the function that creates the SVG output. It calls the generateSVG function from the class to create the file.
  writeToFile() {
    //check if our output folder exists. If it doesn't, make it.
    //From https://stackoverflow.com/questions/21194934/how-to-create-a-directory-if-it-doesnt-exist-using-node-js
    const dir = "./output";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    //write the file to the output folder.
    fs.writeFile(`./output/${this.filename}.svg`, this.generateSVG(), (err) =>
      err
        ? console.log(err)
        : console.log(
            `${this.filename}.svg has been created. Please check the Outputs folder.`
          )
    );
  }
}

//these classes just specify the shape to use in the SVG.
class Circle extends Shape {
  constructor(filename, shapeColor, textColor, logoText) {
    super(filename, shapeColor, textColor, logoText),
      (this.shapeStr = `circle cx="150" cy="100" r="80"`); //shape from the example SVG
  }
}

class Square extends Shape {
  constructor(filename, shapeColor, textColor, logoText) {
    super(filename, shapeColor, textColor, logoText);
    this.shapeStr = `rect x="70" y="20" width="160" height="160"`; //using a rectangle that occupies the same general space as the circle.
  }
}

class Triangle extends Shape {
  constructor(filename, shapeColor, textColor, logoText) {
    super(filename, shapeColor, textColor, logoText);
    this.shapeStr = `polygon points="250,20 200,180 20,100"`; //a triangle at a dynamic angle, looks really cool.
  }
}
//export our module. We're exporting the specific classes using deconstruction.
module.exports = { Shape, Circle, Square, Triangle };
