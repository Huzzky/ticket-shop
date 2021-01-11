export default function smallerPriceFunc(prices) {
  prices.sort(dynamicSort(prices))

  return prices[0].price
}

const dynamicSort = (price) => {
  return (a, b) => {
    const result = a.price < b.price ? -1 : a.price > b.price ? 1 : 0
    return result
  }
}
