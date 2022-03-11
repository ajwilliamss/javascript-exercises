class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  calcRectangleArea() {
    let area = this.length * this.width;
    return console.log(`The area = ${area}`);
  }

  calcRectangleCircumference() {
    let circumference = 2 * (this.length + this.width);
    return console.log(`The circumference = ${circumference}`);
  }
}

let myRectangle = new Rectangle(5, 10);
myRectangle.calcRectangleArea();
myRectangle.calcRectangleCircumference();
