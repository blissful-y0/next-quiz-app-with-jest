import { useEffect, useState } from "react";

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [seconds, setSeconds] = useState<number>(1);

  useEffect(() => {
    let timer: any;
    if (isRunning) {
      timer = setInterval(() => setSeconds((seconds) => seconds + 1), 1000);
    }
    return () => clearInterval(timer);
  }),
    [isRunning];

  return {
    isRunning,
    setIsRunning,
    seconds,
    setSeconds,
  };
};
