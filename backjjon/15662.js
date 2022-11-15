const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = []

rl.on("line", (line) => {
    input.push(line);
});

rl.on('close', () => {
    const [N] = input[0].split(' ').map((v) => Number(v));//처음꺼 만 빼내기
    const board = input.slice(1, 1 + N)
        .map((v) => v.split(' ').map((v) => String(v)));//중간꺼
    const turn = input[1 + N].split(' ').map((v) => Number(v));//마지막 꺼*/
    const dir = input.slice(2 + N, turn + 2)
        .map((v) => v.split(' ').map((v) => Number(v)));

    console.log(dir)
    process.exit();
})

