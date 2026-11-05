const KHMER_DIGITS = '០១២៣៤៥៦៧៨៩';

export const toKhmerDigits = (value: number | string) =>
  String(value).replace(/\d/g, (digit) => KHMER_DIGITS[Number(digit)]);
