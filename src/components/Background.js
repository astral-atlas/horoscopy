import { createElement as h, useState, useEffect } from '../lib/react.js';

const useCurrentTime = (interval = 1000) => {
  const [currentTime, setCurrentTime] = useState(Date.now());
  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(Date.now()), interval);
    return () => clearInterval(intervalId);
  }, [interval]);
  return currentTime;
};

const backgroundUrls = [
  './images/1.jpg',
  './images/2.jpg',
  './images/4.jpg',
  './images/5.jpg',
  './images/6.jpg',
];

const transitionDuration = 20; // seconds

export const Background = () => {
  const currentTime = useCurrentTime();
  const currentIndex = Math.floor((currentTime / (1000 * transitionDuration)) % backgroundUrls.length);

  return backgroundUrls.map((backgroundUrl, index) => h('div', {
    key: backgroundUrl,
    className: 'star-background',
    style: {
      opacity: currentIndex === index ? 1 : 0,
      backgroundImage: `url("${backgroundUrl}")`
    }
  }));
};