import { useRef } from "react";

export default function useAnimation() {
  const ref = useRef<HTMLElement>(null);

  const trigger = (animation: string) => {
    const element = ref.current;
    if (!element) return;

    element.classList.remove(animation);
    void element.offsetWidth;
    element.classList.add(animation);
  };

  return { ref, trigger };
}
