const fs = require("fs");

class Shape {
  constructor(filename, shapeColor, textColor, logoText) {
    (this.filename = filename),
      (this.logoText = logoText),
      (this.shapeColor = shapeColor),
      (this.textColor = textColor),
      (this.shapeStr = `circle cx="150" cy="100" r="80"`);
  }
  render() { 
    const str = `<${this.shapeStr} fill="${this.shapeColor}" />`
    return str
  }
  generateSVG() {
    const SVGstr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <${this.shapeStr} fill="${this.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
  
  </svg>`;
    return SVGstr;
  }
  setColor(newShapeColor){
    this.shapeColor = newShapeColor
  }
  writeToFile() {
    //check if our output folder exists. If it doesn't, make it. From https://stackoverflow.com/questions/21194934/how-to-create-a-directory-if-it-doesnt-exist-using-node-js
    const dir = "./output";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  
    //write the file to the output folder.
    fs.writeFile(`./output/${this.filename}.svg`, this.generateSVG(), (err) =>
      err
        ? console.log(err)
        : console.log(
            "Your new logo has been created. Please check the Outputs folder."
          )
    );
  }
}

class Circle extends Shape {
  constructor(filename, shapeColor, textColor, logoText) {
    super(filename, shapeColor, textColor, logoText),
      (this.shapeStr = `circle cx="150" cy="100" r="80"`);
  }
}

class Square extends Shape {
  constructor(filename, shapeColor, textColor, logoText) {
    super(filename, shapeColor, textColor, logoText);
    this.shapeStr = `rect x="70" y="20" width="160" height="160"`;
  }
}

class Triangle extends Shape {
  constructor(filename, shapeColor, textColor, logoText) {
    super(filename, shapeColor, textColor, logoText);
    this.shapeStr = `polygon points="250,20 200,180 20,100"`;
  }
}

module.exports = { Shape, Circle, Square, Triangle };
