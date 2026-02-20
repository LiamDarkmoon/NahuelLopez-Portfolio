import { useState, useEffect } from "react";
import { navigate } from "astro:transitions/client";

type Lan = "es" | "en";

export default function LanSwitch() {
  const [lang, setLang] = useState<Lan>("es");
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);

  const currentLang = parts[0] === "en" || parts[0] === "es" ? parts[0] : "es";
  let navigating = false;

  useEffect(() => {
    setLang(currentLang);
  }, [path]);

  const handleLang = () => {
    if (navigating) return;
    navigating = true;

    const nextLang = currentLang === "en" ? "es" : "en";

    parts[0] = nextLang;
    setLang(nextLang);

    navigate("/" + parts.join("/"));
  };

  return (
    <button
      onClick={() => handleLang()}
      className="w-10.5  h-10.5 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border transition-all cursor-pointer"
      aria-disabled
    >
      <span className="text-sm font-medium">{lang}</span>
    </button>
  );
}
