export class NumberHelpers {

  static moneyFormat(value){
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  return formatter.format(value);
  }

  static percentageFormat(value){
    return `%${value.toFixed(2)}`;
  }

}