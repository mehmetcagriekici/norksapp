import { useEffect, useState } from "react";
function useGradientFest({ intervalTime, colorSet }) {
  //colors initial values
  const [colors, setColors] = useState({
    first: colorSet[0],
    second: colorSet[1],
    third: colorSet[2],
  });

  //indexes
  const [index, setIndex] = useState(0);

  //increasing number for indexes 0 1 2 0 1 2 0 1 2
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % colorSet.length);
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [index, intervalTime, colorSet.length]);

  //assign new color names
  useEffect(() => {
    setColors({
      first: colorSet[index],
      second: colorSet[(index + 1) % colorSet.length],
      third: colorSet[(index + 2) % colorSet.length],
    });
  }, [index]);

  //return colors
  return { colors };
}

export default useGradientFest;
