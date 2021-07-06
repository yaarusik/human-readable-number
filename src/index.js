module.exports = function toReadable(number) {
    let num = {
        0: [
            "",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ],
        1: [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ],
        2: [
            "",
            "",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ],
        3: ["hundred"],
    };
    if (number == 0) return "zero";
    let result = "";
    digit = String(number).split("");

    if (digit.length == 1) {
        return num[0][digit];
    } else if (digit.length == 2) {
        if (number >= 10 && number < 20) {
            return `${num[1][digit[1]]}`;
        }
        let a = `${num[2][digit[0]]} ${num[0][digit[1]]}`;
        return a.trim();
    } else if (digit.length == 3) {
        if (digit[1] > 0 && digit[1] < 2) {
            let a = `${num[0][digit[0]]} ${num[3][0]} ${num[1][digit[2]]}`;
            return a.trim();
        }
        let a = `${num[0][digit[0]]} ${num[3][0]} ${num[2][digit[1]]} ${
            num[0][digit[2]]
        }`;
        return a.replace(/ +/g, " ").trim();
    }
};
