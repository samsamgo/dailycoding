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
    const [N, M, x, y, K] = input[0].split(' ').map((v) => Number(v));//처음꺼 만 빼내기
    const board = input.slice(1, 1 + N)
        .map((v) => v.split(' ').map((v) => Number(v)));//중간꺼
    const commands = input[1 + N].split(' ').map((v) => Number(v));//마지막 꺼
    MakeMap(N, M, x, y, board, commands)
    process.exit();
})

const moveDice = (dice, command) => {
    const newDice = [...dice];
    switch (command) {//다이스 풀기 
        case 1:
            newDice[0] = dice[2];
            newDice[1] = dice[3];
            newDice[2] = dice[1];
            newDice[3] = dice[0];
            return newDice;
        case 2:
            newDice[0] = dice[3];
            newDice[1] = dice[2];
            newDice[2] = dice[0];
            newDice[3] = dice[1];
            return newDice;
        case 3:
            newDice[0] = dice[4];
            newDice[1] = dice[5];
            newDice[4] = dice[1];
            newDice[5] = dice[0];
            return newDice;
        case 4:
            newDice[0] = dice[5];
            newDice[1] = dice[4];
            newDice[4] = dice[0];
            newDice[5] = dice[1];
            return newDice;
    }
}

const MakeMap = (N, M, x, y, board, commands) => {
    let dice = [0, 0, 0, 0, 0, 0];//초깃값
    const DIRECTION = [null, [0, 1], [0, -1], [-1, 0], [1, 0]];//동서 남북

    for (const command of commands) {
        const [dx, dy] = DIRECTION[command]//동서 남북 ㅗ좌표값
        const [nextX, nextY] = [x + dx, y + dy];//다음 xy좌표

        if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) continue;//좌표값 나간 상황은 제외

        [x, y] = [nextX, nextY]//움직일 때만다의 xy값
        dice = moveDice(dice, command);//다이스의 동서남북 값

        if (board[x][y] === 0) board[x][y] = dice[1]//다이스가 영인 경우에는 바닥면에 쓰이는 수 복사
        else {//반대 경우에는 0
            dice[1] = board[x][y];
            board[x][y] = 0;
        }
        console.log(dice[0])

    }
}




