export function start() {
  let resolve;
  const promise = new Promise((r) => {
    resolve = r
  })
  return [promise, resolve]
}