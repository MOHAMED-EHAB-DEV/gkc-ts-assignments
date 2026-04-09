interface IShape {
    calculateArea(): number
}

class Circle implements IShape {
    constructor(public radius: number) {}

    calculateArea(): number {
        return Math.PI * this.radius! ** 2
    }
}

class Rectangle implements IShape {
    constructor(public width: number, public height: number) {}

    calculateArea(): number {
        return this.width * this.height
    }
}

class Square implements IShape {
    constructor (public side: number) {}

    calculateArea(): number {
        return this.side * this.side
    }
}

class AreaCalculator {
    calculate(shape: IShape): number {
        return shape.calculateArea()
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(5, 10);
const square = new Square(5);
const areaCalculator = new AreaCalculator();

console.log(areaCalculator.calculate(circle));
console.log(areaCalculator.calculate(rectangle));
console.log(areaCalculator.calculate(square));