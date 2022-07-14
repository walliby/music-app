const fetcher = (url: string, data = undefined) => {
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "applications/json",
    },
    body: JSON.stringify(data),
  });
};

export default fetcher;
