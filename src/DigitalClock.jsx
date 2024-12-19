import { useEffect } from 'react';
import { useState } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update time with setTime every 1s

    // Cleanup
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const padZero = number => (number < 10 ? '0' : '') + number;

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridian = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // In instance of 12pm, modulus = 0 which makes the statement falsy, so the other value is returned. In the instance of 13 % 12, the value is 1 which is truthy, so 1 will be returned

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}${meridian}`;
  };

  return (
    <div className='clock-container'>
      <div className='clock'>
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
