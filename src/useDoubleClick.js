import { useEffect, useState } from "react";

const useDoubleClick = (delay = 500) => {
  const [state, setState] = useState(0);
  const isDbClk = state > 1;

  useEffect(() => {
    const t = setTimeout(() => {
      setState(0);
    }, delay);

    return () => clearInterval(t);
  }, [state, delay]);

  useEffect(() => {
    if (isDbClk) setState(0);
  }, [isDbClk]);

  const click = () => setState((c) => (c += 1));

  return [isDbClk, click];
};

export default useDoubleClick;
