(() => {
  // retorna string 
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }
// retorna void
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El totla es ${rta}`);
    printTotal([12, 12, 12]);

  }
})
