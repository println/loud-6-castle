export default function clone<F>(data: F): F {
  const json = JSON.stringify(data);
  return JSON.parse(json);
}
