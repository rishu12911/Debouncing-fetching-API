import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        // Increment progress by 1% each second
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(timer); // Stop the timer when progress reaches 100%
          return prevProgress;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);
  console.log(progress);
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
