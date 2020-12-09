/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';

type TimingFunctions =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    };

interface SlideUpAndDownProps {
  show: boolean;
  transitionDuration?: number;
  transitionTimingFunction?: TimingFunctions;
  transitionDelay?: number;
}

/**
 *  A wrapper component that renders a slide up and slide down animation on its
 *  children.
 * @param show Wether the slide component is shown (Open) or not (Closed).
 * @param transitionDuration 	Specifies how many seconds or milliseconds a
 * transition effect takes to complete. Default value is 0.3.
 * @param transitionTimingFunction Specifies the speed curve of the transition
 * effect. Default value is 'ease'. To use a Cubic-Bezier function pass an object
 * with the x1, y1, x2, y2 values.
 * @param transitionDelay Specifies a delay (in seconds) for the transition
 * effect. Default value is 0.
 */
const SlideUpAndDown: React.FC<SlideUpAndDownProps> = ({
  children,
  show = false,
  transitionDuration = 0.3,
  transitionTimingFunction = 'ease',
  transitionDelay = 0,
}) => {
  const slideWrapper = useRef<HTMLDivElement>(null);
  const [stringTimingFunction, setStringTimingFunction] = useState('');

  // Set the height of the slide element and its children
  useEffect(() => {
    if (show && slideWrapper.current) {
      slideWrapper.current.style.height = `${slideWrapper.current.scrollHeight.toString()}px`;
    }

    if (!show && slideWrapper.current) {
      slideWrapper.current.style.height = '0';
    }
  }, [show]);

  /* Refactor the transitionTimingFunction property to a string to be injected
  into the css transition property
  */
  useEffect(() => {
    if (
      transitionTimingFunction != null &&
      typeof transitionTimingFunction !== 'string'
    ) {
      setStringTimingFunction(
        `cubic-bezier(${transitionTimingFunction.x1},${transitionTimingFunction.y1},${transitionTimingFunction.x2},${transitionTimingFunction.y2})`
      );

      return;
    }

    setStringTimingFunction(transitionTimingFunction);
  }, [transitionTimingFunction]);

  return (
    <div
      ref={slideWrapper}
      style={{
        overflow: 'hidden',
        transition: `height ${transitionDuration.toString()}s
          ${stringTimingFunction} ${transitionDelay}s`,
      }}
      data-testid="slideUpAndDown"
    >
      {children}
    </div>
  );
};

export default SlideUpAndDown;
