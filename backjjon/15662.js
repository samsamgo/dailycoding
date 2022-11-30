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

    for (const gear in dir) {
        let result = board[dir[gear][0] - 1]
        if (gear[1] === 1) {
            result = result + result.indexOf(7)
            result = result.slice(0, 8);
            if (gear_same[1+gear[0]] !== gear_same[gear[0]]){
                
            }
            if (gear_same[gear[0]-1] !== gear_same[gear[0]]){

            }
       

        }
        else {
            result = result.indexOf(0) + result
            result = result.slice(1, 9);

        }
        console.log(gear_same[1])

    }


    console.log(dir[0][0])
    process.exit();
})


