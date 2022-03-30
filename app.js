const rect = require("./rectangle");

// rect(x, y, callback) => {
//     if (x <= 0 || y <= 0) {
//       callback(
//         new Error(
//           `Rectangle dimensions must be greater than 0. Received: ${x}, ${y}`
//         )
//       );
//     } else {
//       setTimeout(() => {
//         callback(null, {
//           perimeter: () => 2 * (x + y),
//           area: () => x * y,
//         });
//       }, 2000);
//     }
//   };

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions ${l}, ${w}`);

  rect(l, w, (err, rectangle) => {
    if (err) {
      console.log("Error", err.message);
    } else {
      console.log(
        `Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`
      );
      console.log(
        `Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`
      );
    }
  });
  console.log("This statement is logged after the call to rect()");
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
