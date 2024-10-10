import paintings from "./assets/data.json";

export function getImageByName(name) {
  return paintings.find((painting) => name === painting.name);
}

export function getNextAndPreviousPainting(currentPaintingIndex) {
  console.log("index: ", currentPaintingIndex, paintings.length);
  const result = {
    previousPaintingName:
      currentPaintingIndex === 0
        ? null
        : paintings[currentPaintingIndex - 1].name,
    nextPaintingName:
      currentPaintingIndex === paintings.length - 1
        ? null
        : paintings[currentPaintingIndex + 1].name,
  };
  console.log(result);
  return result;
}
