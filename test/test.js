import verificationSum from "../src/add";

test ("test number", () => {
    const received = verificationSum("30");
    const expected = 30;

    const received1 = verificationSum("f");
    const expected1 = Error;

    expect(received).toEqual(expected);
    expect(received1).toEqual(expected1);
})



