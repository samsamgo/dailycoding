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

    let gear_same = [];//3시 방향과 9시 방향의 숫자들
    for (const gear in board) {
        gear_same.push(gear.indexOf(2), gear.indexOf(5))

    }
    /* for (const gear in dir) {
         if (gear[1] === 1) {
             gear_same[gear[0]].unshift(gear_same[gear[0]].indexOf(gear_same[gear[0]].length))
             gear_same[gear[0]].pop();
 
         }
         else {
             gear_same[gear[0]].push(gear_same[gear[0]].indexOf(0))
             gear_same[gear[0]].shift();
         }
     }*/

    console.log(chunk(gear_same, 2))
    //console.log(dir)
    process.exit();
})


