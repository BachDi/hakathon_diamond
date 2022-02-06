export function getValidArray(array) {
  return Array.isArray(array) ? array : []
}

export function shortenString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength / 2) + '...' + str.substring(str.length - maxLength / 2)
  }
  return str
}
