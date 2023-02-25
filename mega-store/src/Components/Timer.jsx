import React, { useEffect, useState } from "react";

const Timer = ({ duration }) => {
  const [time, seTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      seTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (time) => {
    let total_second = parseInt(Math.floor(time / 1000));
    let total_min = parseInt(Math.floor(total_second / 60));
    let total_hr = parseInt(Math.floor(total_min / 60));
    let days = parseInt(Math.floor(total_hr / 24));
    let sec = parseInt(total_second % 60);
    let min = parseInt(total_min % 60);
    let hr = parseInt(total_hr % 24);

    return `${days} : ${hr} : ${min} : ${sec}`;
  };

  return <div>{getFormattedTime(time)}</div>;
};

export default Timer;
