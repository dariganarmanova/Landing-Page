import React from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';

const Animation = ({ text }) => {
    const words = text.split('');
    const trail = useTrail(words.length, {
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: { opacity: 1, transform: 'translatex(0)' },
        delay: 100,
        config: { tension: 500, friction: 20 },
    });
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {trail.map((props, index) => (
                <animated.span
                    key={index}
                    style={{
                        ...props, marginRight: '4px'
                    }}
                >
                    {words[index]}
                </animated.span>
            ))
            }

        </div >
    )
}

export default Animation;