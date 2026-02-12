import { useState, useEffect } from "react";

type Lan = "en" | "es";

export default function LanSwitch() {
  const [lan, setLan] = useState<Lan>("es");

  useEffect(() => {
    const localLan = localStorage.getItem("lang");
    if (localLan) {
      setLan(localLan as Lan);
    }
  }, []);

  const changeLan = () => {
    if (lan === "en") {
      localStorage.setItem("lang", "es");
      setLan("es");
    } else {
      localStorage.setItem("lang", "en");
      setLan("en");
    }
  };

  return (
    <button
      onClick={() => changeLan()}
      className="w-10  h-10 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-text-muted dark:text-dark-text-muted transition"
      aria-disabled
    >
      <span className="text-sm font-medium">{lan === "es" ? "Es" : "En"}</span>
    </button>
  );
}
