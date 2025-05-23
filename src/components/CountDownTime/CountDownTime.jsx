import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const CountDownTime = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { box, number, intervalTime } = styles;
  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Mins: Math.floor((difference / 1000 / 60) % 60),
        Secs: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const formatNumber = (number) => {
    return String(number).padStart(2, '0');
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] !== undefined) {
      timerComponents.push(
        <span key={interval} className={box}>
          <span className={number}>{formatNumber(timeLeft[interval])}</span> <span className={intervalTime}>{interval}{' '}</span>
        </span>
      );
    }
  });
  return timerComponents;
};

export default CountDownTime;
