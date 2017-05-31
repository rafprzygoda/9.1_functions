var triangle1Area = getTriangleArea(12, 0); // Show what happens if h will be 0
var triangle2Area = getTriangleArea(5, 6);  
var triangle3Area = getTriangleArea(0, 0);  // Show what happens if both parameters will be 0

function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return 'Wrong data';
    }  
        return a * h / 2;
    }

console.log(triangle1Area); // Wrong data
console.log(triangle2Area); // Correct
console.log(triangle3Area); // Wrong data