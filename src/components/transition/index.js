import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

const willLeave = () => ({
    opacity: spring(0)
});

const willEnter = () => ({
    opacity: 0
});

const getStyles = () => ({
    opacity: spring(1)
});

const Transition = ({ children }) =>
    <TransitionMotion
        styles={ children ? [
            {
                key: 'key',
                style: getStyles(),
                data: children
            }
        ] : []}
        willEnter={willEnter}
        willLeave={willLeave}
    >
        {(interpolated) => 
            <div>
                {interpolated.map(({key, style, data}) => 
                    <div 
                    key = {`${key}-transition`} 
                    style={{opacity: style.opacity}}
                    > {data}</div>
                )}
            </div>
        }
    </TransitionMotion>

export default Transition;