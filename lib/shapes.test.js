const { Circle, Square, Triangle } = require("./shapes");

const testObject = {
    filename: 'test',
    shape: 'Circle',
    shapeColor: 'green',
    textColor: 'white',
    logoText: 'FUN'
  }



describe('Test shape classes and rendering', () => {
 

  describe('Testing to see if the triangle renders', () => {
    it('triangle render test', () => {
        const shape = new Triangle(testObject.filename, testObject.shapeColor, testObject.textColor, testObject.logoText);
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="250,20 200,180 20,100" fill="blue" />')
    });
  });
  describe('Testing to see if the square renders', () => {
    it('square render test', () => {
        const shape = new Square(testObject.filename, testObject.shapeColor, testObject.textColor, testObject.logoText);
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />')
    });
  });
  describe('Testing to see if the circle renders', () => {
    it('circle render test', () => {
        const shape = new Circle(testObject.filename, testObject.shapeColor, testObject.textColor, testObject.logoText);
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
    });
  });
});