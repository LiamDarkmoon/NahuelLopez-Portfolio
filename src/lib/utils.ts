import type { ContactData } from "./types";

export function getLangParams() {
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);
  const lang = parts[0];

  return lang;
}

export function contact(data: ContactData) {

  try {
    const res = fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const ok = res.then((response) => { return response.ok; })
  
    if (!ok) {
      console.log("fetch error")
    }
  } catch (error) {
    console.log(error)
  }
}