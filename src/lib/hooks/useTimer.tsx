import { useEffect } from "react";

export function useTimer(
  value: boolean = true,
  onReset: () => void,
  delay: number = 5000,
) {
  useEffect(() => {
    if (!value) return;

    const timer = setTimeout(onReset, delay);
    return () => clearTimeout(timer);
  }, [value, delay, onReset]);
}
