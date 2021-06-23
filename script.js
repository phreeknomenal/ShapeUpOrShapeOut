// Global Variables
let shapesArray = [];
const canvas = document.getElementById('canvasBody');
const canvasWide = canvas.offsetWidth;

// Button Grabs
const recInsertBtn = document.getElementById('recInsertBtn');
const sqInsertBtn = document.getElementById('sqInsertBtn');
const cirInsertBtn = document.getElementById('cirInsertBtn');
const triInsertBtn = document.getElementById('triInsertBtn');

// Input Grabs
const recHeight = document.getElementById('recHeight').value;
const recWidth = document.getElementById('recWidth').value;
const sqSides = document.getElementById('sqSides').value;
const cirRadius = document.getElementById('cirRadius').value;
const triBase = document.getElementById('triBase').value;

recInsertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if ((recWidth >= 1 && recWidth <= 600) && (recHeight >= 1 && recHeight <= 600)) {
        let rectangle = new Rectangle(recWidth, recHeight);
        console.log(shapesArray);
    }
    else {
        alert();
    }
});

class Shape {
    constructor() {
        // create the div to display the shape
        this.shapeDiv = document.createElement('div');

        shapesArray.push(this);
        this.shapeDiv.addEventListener("dblclick", () => {
            canvas.removeChild(this.shapeDiv);
            shapesArray.splice(shapesArray.indexOf(this), 1);
        });
        
        
    }

    setCoords() {
        this.x = Math.floor(Math.random() * (canvasWide + 1 - this.width));
        this.y = Math.floor(Math.random() * (801 - this.height));
    }

    // set css properties
    style() {
        $(this.shapeDiv).css({
            "position": "absolute",
            "background-color": this.color,
            "width": this.width + "px",
            "height": this.height + "px",
            "left": this.x,
            "top": this.y,
        });
    }

    draw() {
        $(this.shapeDiv).appendTo(canvas);
    }
    
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.name = "Rectangle";
        this.color = "green";
        this.width = width;
        this.height = height;
        this.radius = "N/A";
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoords();
        this.style();
        this.draw();
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * this.width + 2 * this.height;
    }
}

class Circle extends Shape {

    constructor(radius) {
        super();
        this.name = "Circle";
        this.color = "purple";
        this.width = radius * 2;
        this.height = radius * 2;
        this.radius = radius;
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoords();
        this.style();
        this.draw();
    }

    getArea() {
        return Math.PI * this.radius * this.radius
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    //overwrite parent method
    style() {
        $(this.div).css({
            "position": "absolute",
            "background-color": "purple",
            "width": this.width + "px",
            "height": this.height + "px",
            "left": this.x,
            "top": this.y,
            "-moz-border-radius": this.radius + "px",
            "-webkit-border-radius": this.radius + "px",
        });
    }

}

class Triangle extends Shape {

    constructor(height) {
        super();
        this.name = "Triangle";
        this.color = "yellow";
        this.width = height;
        this.height = height;
        this.radius = "N/A";
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoords();
        this.style();
        this.draw();
    }

    getArea() {
        return 0.5 * this.height * this.height;
    }

    getPerimeter() {
        return 2 * this.height + Math.pow(Math.pow(this.height, 2) + Math.pow(this.height, 2), 0.5)
    }

    //overwrite parent method
    style() {
        $(this.div).css({
            "position": "absolute",
            "width": 0 + "px",
            "height": 0 + "px",
            "left": this.x,
            "top": this.y,
            "border-bottom": this.width + "px solid yellow",
            "border-right": this.width + "px solid transparent",
        });
    }

}


class Square extends Shape {

    constructor(sideLength) {
        super();
        this.name = "Square";
        this.color = "red";
        this.sideLength = sideLength;
        this.width = sideLength;
        this.height = sideLength;
        this.radius = "N/A";
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoords();
        this.style();
        this.draw();
    }

    getArea() {
        return this.sideLength * this.sideLength;
    }

    getPerimeter() {
        return 4 * this.sideLength;
    }

}






