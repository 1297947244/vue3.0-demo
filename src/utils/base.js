function filterByTerm (inputArr, searchTerm) {
  return inputArr.filter((item) => {
    return item.url.match(searchTerm)
  })
}

function add (number1, number2) {
  return number1 + number2
}

module.exports = {
  filterByTerm,
  add
}
