// Import React and p5
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Sketch = () => {
    const sketchRef = useRef();

    // Effect to handle mounting and unmounting of the p5 sketch
    useEffect(() => {
        let myP5;

        // Define the sketch
        const sketch = (p) => {
            p.setup = () => {
                p.createCanvas(400, 400);
                p.background(220);
            };

            p.draw = () => {
                p.ellipse(p.width / 2, p.height / 2, 70, 70);
            };
        };

        // Create the p5 instance
        myP5 = new p5(sketch, sketchRef.current);

        // Cleanup function to remove the sketch on component unmount
        return () => {
            myP5.remove();
        };
    }, []);

    return <div ref={sketchRef} />;
};

export default Sketch;
