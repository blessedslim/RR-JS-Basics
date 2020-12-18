// Basic math formulaas
function addition(num1, num2){
  let sum = num1 + num2;
    return sum;
}


function subtraction(num1, num2){
  let difference = num1 - num2;
  return difference;
}

function multiplication(num1, num2){
  let multiplication = num1 * num2;
    return multiplication;
}

function division(num1, num2){
  let div = num1 / num2;
    return division;
}

// Area formulaas
function areaSquare(side){
  let areaSquare = side * side;
    return areaSquare
}

function areaRectangle(length, width){
  let areaRectanglesum = length * width
  return areaRectangle
}

function areaParallelogram(base, height){
  let  areaParallelogramsum = base * height;
  return areaParallelogramsum
}

function areaTriangle(base, height){
  let areaTrianglesum = (base * height)/ 2;
  return areaTrianglesum;
}

function Circle(radius){
  let result = Math.pow(3.14, radius, 2);
  return result;
}

function Sphere(radius){
  let SphereRad = 4*Math.PI*(radius);
  return SphereRad;
}

// Surface Area formulas
function surfaceAreaCube(side){
  let SA = 6 * side * side;
  return SA;
}

function surfaceAreaCylinder(radius, height){
  let SA = 2 * Math.PI * radius * height;
  return SA;
}

// Perimeter formulas
function perimeterSquare(side){
  let P = 4 * side;
  return P;
}

function perimeterRectangle(length, height){
  let P = 2 * length + 2 * height
  return P;
}

function perimeterTriangle(side1, side2, side3){
  let P = side1 + side2 + side3;
  return P;
}

function perimeterCircle(diameter){
  let P = Math.PI * diameter;
  return P;
}

// Volume formulas
function volumeCube(side){
  let V = side * side * side;
  return V;
}

function volumeRectangular(length, width, height){
  let V = length * width * height;
  return V;
}

function volumeCylinder(radius, height){
  let V = Math.PI * radius * radius * height;
  return V;
}
