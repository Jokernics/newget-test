const courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function checkInfinity(range) {
  if (range.length !== 2) throw "Incorrect array"
  const start = range[0] === null ? Number.NEGATIVE_INFINITY : range[0]
  const end = range[1] === null ? Number.POSITIVE_INFINITY : range[1]
  return [start, end]
}

function rangesIntersection(range1, range2) {
  range1 = checkInfinity(range1)
  range2 = checkInfinity(range2)
  if (range2[0] > range1[1] || range2[1] < range1[0]) return false
  return true
}

const filteredPrices = courses.filter((course => rangesIntersection(requiredRange2, course.prices)))

const sortedPrices = filteredPrices.sort((a, b) => checkInfinity(a.prices)[0] - checkInfinity(b.prices)[0])

console.log(filteredPrices, sortedPrices)