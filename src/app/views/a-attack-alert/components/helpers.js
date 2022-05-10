import { useCallback, useState } from "react";

export const useCenteredTree = (defaultTranslate = { x: 0, y:0 }) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 1, y: height / 3 });
    }
  }, []);
  return [translate, containerRef];
};
