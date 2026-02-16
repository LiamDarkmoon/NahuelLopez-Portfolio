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

export function contact(data: FormData) {
  try {
    const res = fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: data,
    });

    const ok = res.then((response) => {
      return response.ok;
    });

    if (!ok) {
      return { error: { message: "Resend error" } };
    }
    return { ok: true };
  } catch (error) {
    return { error: { message: "Failed to send message" } };
  }
}
