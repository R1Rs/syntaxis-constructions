export default function verificationSum(sumBuy) {
  const parsed = parseInt(sumBuy, 10);
  if ((parsed === 'NaN')) throw new Error('введите число');
  return parsed;
}
