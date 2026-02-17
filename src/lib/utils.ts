export function getLangParams() {
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);
  const lang = parts[0];

  return lang;
}

export function buildPath(path: string) {
  const lang = getLangParams();
  const newPath = `/${lang}/${path}`;
  return newPath;
}

export async function contact(data: FormData) {
  try {
    const res = await fetch("/api/contact.json", {
      method: "POST",
      body: data,
    });

    if (!res.ok) {
      const err = await res.json();
      return { error: err?.errors || "Server error" };
    }

    return { ok: true };
  } catch (error) {
    return { error: { message: "Failed to send message" } };
  }
}
