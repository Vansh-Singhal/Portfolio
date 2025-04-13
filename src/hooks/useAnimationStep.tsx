// useAnimationStep.ts
import { useState, useEffect } from "react";

export const useAnimationStep = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 2000),
      setTimeout(() => setStep(2), 4000),
      setTimeout(() => setStep(3), 6000),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return step;
};
