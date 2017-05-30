var triangle1Area = getTriangleArea(12, 0); // Show what happens if h will be 0
var triangle2Area = getTriangleArea(5, 6);  
var triangle3Area = getTriangleArea(0, 0);  // Show what happens if both parameters will be 0

function getTriangleArea(a, h) {
    if (a <= 0 && h <= 0) {
        return 'Wrong data';
    } else {
        return a * h / 2;
    }
}

console.log(triangle1Area); // h = 0
console.log(triangle2Area);
console.log(triangle3Area); // a & h = 0