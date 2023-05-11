export function grabData(base, limit){
  const url = `${base}?_limit=${limit}`

  return window.fetch(url)
  .then((response) => response.json())
  .then((json) => {
    return json
  });
}
