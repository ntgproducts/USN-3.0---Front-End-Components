export function removeSpaces(string) {
  return string.replace(/\s/g, '');
}

export function lowerRemoveSpaces(string) {
  return removeSpaces(string.toLowerCase());
}

export function lowerShortenRemoveSpaces(string, length) {
  // if( typeof length !== 'number') return;
  return lowerRemoveSpaces(string.substr(0, length - 1))
}

const Utils = {
  removeSpaces,
  lowerRemoveSpaces,
  lowerShortenRemoveSpaces
}

export default Utils;

