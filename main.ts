const url = "https://www.google.com/teapot"
console.log("fetching " + url)
const res = await fetch(url);

console.log(res.status, res.statusText);
