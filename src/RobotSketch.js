// import React, { useEffect, useRef } from 'react';
// import p5 from 'p5';

// const RobotSketch = () => {
//     const sketchRef = useRef();
//     let myP5;

//     useEffect(() => {
//         myP5 = new p5((p) => {
//             let robotX = 400;
//             let robotY = 400;

//             p.setup = () => {
//                 p.createCanvas(800, 800);
//             };

//             p.draw = () => {
//                 p.background(220);

//                 // Your robot drawing code
//                 p.fill(90);
//                 p.rect(robotX + 10, robotY + 10, 15, 80);
//                 p.rect(robotX + 55, robotY + 10, 15, 80); //wheels

//                 if (p.keyIsPressed) {
//                     if (p.keyCode === p.LEFT_ARROW) {
//                         robotX = robotX - 5;
//                     }
//                     if (p.keyCode === p.RIGHT_ARROW) {
//                         robotX = robotX + 5;
//                     }
//                     if (p.keyCode === p.UP_ARROW) {
//                         robotY = robotY - 5;
//                     }
//                     if (p.keyCode === p.DOWN_ARROW) {
//                         robotY = robotY + 5;
//                     }

//                     // Boundaries
//                     if (robotX >= 710) { robotX = 709.9; }
//                     if (robotX <= 10) { robotX = 9.9; }

//                     if (robotY >= 715) { robotY = 714.9; }
//                     if (robotY <= 90) { robotY = 89.9; }
//                 }
//             };
//         }, sketchRef.current);

//         // Cleanup
//         return () => {
//             myP5.remove();
//         };
//     }, []);

//     return <div ref={sketchRef}></div>;
// };

// export default RobotSketch;
