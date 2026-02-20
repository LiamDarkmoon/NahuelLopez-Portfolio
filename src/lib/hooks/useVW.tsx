import { useEffect, useState } from "react";

export type vw = "sm" | "md" | "lg" | "xl" | "2xl";

export const useVW = () => {
  const [vw, setVw] = useState<vw>();

  useEffect(() => {
    const sm = window.innerWidth < 768;
    setVw(sm ? "sm" : "md");
  }, [window.innerWidth]);

  return { vw };
};
