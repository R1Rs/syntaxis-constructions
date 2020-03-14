import verificationSum from '../src/add';

test('test number', () => {
  const received = verificationSum('30');
  const expected = 30;

  const received1 = verificationSum('f');
  const expected1 = Error;

  const received2 = verificationSum("0xff");
  const expected2 = 0;

  expect(received).toEqual(expected);
  expect(received1).toEqual(expected1);
  expect(received2).toEqual(expected2);

});
