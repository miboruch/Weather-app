import { useSpring, useTrail } from 'react-spring';
import { easeExpOut } from 'd3-ease';

export const fadeIn = (duration = 1000, delay = 1000) => {
  return () =>
    useSpring({
      config: { duration, easing: easeExpOut },
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay
    });
};
