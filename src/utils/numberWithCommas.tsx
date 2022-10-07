const numberWithCommas: any = (num: any) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default numberWithCommas;
