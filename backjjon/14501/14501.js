const input = [];
//dDay: 퇴사일
//schedule: 상담 일정. [상담 기간, 금액]을 담는 배열
//memo: n일부터 퇴사일까지 일했을 때 얻을 수 있는 최대 수익을 담는 배열
let dDay, schedule, memo;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", function (line) {
        input.push(line.trim());
    })
    .on("close", function () {
        dDay = Number(input.shift());
        schedule = input.map((str) => strToNumArr(str));
        memo = [...Array(dDay)];

        //n=0(1일), 1(2일), ...
        console.log(getMaxPay(0));
    });

const getMaxPay = (n) => {
    //기저사례: 상담일이 퇴사일 이후일 때
    if (n >= dDay) {
        return 0;
    }
    //이미 계산되었을 때
    if (memo[n] !== undefined) {
        return memo[n];
    }


    const [t, p] = schedule[n];
    memo[n] = Math.max(getMaxPay(n + 1), n + t - 1 < dDay ? p + getMaxPay(n + t) : getMaxPay(n + t));
    return memo[n];
};