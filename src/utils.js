import paintings from "./assets/data.json";
export function getImageByName(name) {
  return paintings.find((painting) => name === painting.name);
}
export function getImageIndexByName(name) {
  return paintings.findIndex((painting) => name === painting.name);
}
