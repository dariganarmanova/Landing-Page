import React from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';

const AnimatedText = ({ text }) => {
    const words = text.split(' ');
    const trail = useTrail(words.length, {
        from: { opacity: 0, transform: 'translate3d(0,-20px,0)' },
        to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
        delay: 200,
    });

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {trail.map((props, index) => (
                <animated.span
                    key={index}
                    style={{
                        ...props,
                        marginRight: '8px',
                    }}
                >
                    {words[index]}
                </animated.span>
            ))}
        </div>
    );
};
export default AnimatedText