
//1번 짐 나르기
function movingStuff(stuff, limit) {
    // TODO: 여기에 코드를 작성합니다.

    //배열을 정렬해 준다 : sort() 오름차순 js sort() 오름차순, 내림차순
    let sorted = stuff.sort((a, b) => a - b);

    //배열 가장 왼쪽 요소(arr[0]), 오른쪽 요소(배열의 제일 끝 요소)를 선언을 해서 값을 할당 : 기준(index) 
    let left = 0;
    let right = stuff.length - 1;

    let count = 0;

    //박스가 모두 사라질 때 까지 2~4를 반복한다. loop?
    //반복시킬 조건 : 
    while (left <= right) {
        //2.배열의 가장 왼쪽 요소와 배열의 가장 오른쪽 요소를 더한다
        //sorted[left] + sorted[right]
        //더한 값이 limit보다 클 경우
        if (sorted[left] + sorted[right] > limit) {
            //가장 오른쪽 요소를 제거해주고(박스에 담고)
            right--;
            //카운트를 센다
            count++;
        }
        else {
            //4.더한 값이 limit보다 작을 경우 
            //두 요소 모두 제거하고
            left++;
            right--;
            //카운트를 센다
            count++;
        }
    }

    return count;
}


//2번 편의점 알바
function partTimeJob(k) {
    // TODO: 여기에 코드를 작성하세요.

    let count = 0;

    //500원으로 거스름돈을 초과하기 직전만큼 거슬러준다.
    while (k - 500 >= 0) {
        //거슬러 준 돈 만큼 거스름돈에서 빼준다.
        k = k - 500;
        //거슬러 준 동전 개수만큼 count 에 더해준다.
        count = count + 1;
    }


    //빼준 거스름돈에서 그 다음 작은 단위의 동전으로 1~3을 반복한다.

    //100원으로 거스름돈을 초과하기 직전만큼 거슬러준다.
    while (k - 100 >= 0) {
        //거슬러 준 돈 만큼 거스름돈에서 빼준다.
        k = k - 100;
        //거슬러 준 동전 개수만큼 count 에 더해준다.
        count = count + 1;
    }

    //50원으로 거스름돈을 초과하기 직전만큼 거슬러준다.
    while (k - 50 >= 0) {
        //거슬러 준 돈 만큼 거스름돈에서 빼준다.
        k = k - 50;
        //거슬러 준 동전 개수만큼 count 에 더해준다.
        count = count + 1;
    }

    //500원으로 거스름돈을 초과하기 직전만큼 거슬러준다.
    while (k - 10 >= 0) {
        //거슬러 준 돈 만큼 거스름돈에서 빼준다.
        k = k - 10;
        //거슬러 준 동전 개수만큼 count 에 더해준다.
        count = count + 1;
    }

    //500원으로 거스름돈을 초과하기 직전만큼 거슬러준다.
    while (k - 5 >= 0) {
        //거슬러 준 돈 만큼 거스름돈에서 빼준다.
        k = k - 5;
        //거슬러 준 동전 개수만큼 count 에 더해준다.
        count = count + 1;
    }

    //500원으로 거스름돈을 초과하기 직전만큼 거슬러준다.
    while (k - 1 >= 0) {
        //거슬러 준 돈 만큼 거스름돈에서 빼준다.
        k = k - 1;
        //거슬러 준 동전 개수만큼 count 에 더해준다.
        count = count + 1;
    }

    //거스름돈이 0원이 되면 카운트를 리턴한다.
    return count;
}

//3번 문제 보드 게임
function boardGame(board, operation) {
    // TODO: 여기에 코드를 작성하세요.

    //최초 시작지점의 좌표를 x=0 , y=0 으로 할당한다(x 가로, y 세로)
    let x = 0;
    let y = 0;

    let count = 0;

    //유효하면 true, 유효하지 않으면 false
    function isValid(x, y) {
        //유효하지 않을 때
        //보드판 위에 말이 없어!
        // 1. 좌표가 어느 하나라도 음수(-)
        // 2. 좌표가 보드의 최대 크기보다 클 때
        if (x < 0 || y < 0 || x > board[0].length || y > board.length) {
            return false;
        }
        return true;
    }

    //operation 문자열을 처음부터 끝까지 따라가면서, (순회) => for문
    for (let i = 0; i < operation.length; i++) {
        //문자에 따라 x, y를 조작한다.(위치를 이동시킨다.)
        if (operation[i] === "U") {
            //up일 때 위로 올라가야 됨! 현재 y축 좌표에서 -1
            y = y - 1;
            //이동 결과 보드판에서 떨어지면 즉시 “OUT”을 리턴한다.
            if (!isValid(x, y)) {
                return "OUT";
            }
            //board[y][x](이동한 위치)가 1이라면 count에 1을 더한다.
            if (board[y][x] === 1) {
                count++;
            }
        }

        if (operation[i] === "D") {
            //down일 때 아래로 올라가야 됨! 현재 y축 좌표에서 +1
            y = y + 1;
            //이동 결과 보드판에서 떨어지면 즉시 “OUT”을 리턴한다.
            if (!isValid(x, y)) {
                return "OUT";
            }
            //board[y][x](이동한 위치)가 1이라면 count에 1을 더한다.
            if (board[y][x] === 1) {
                count++;
            }
        }

        if (operation[i] === "R") {
            //right일 때 오른쪽으로 이동해야 됨! 현재 x축 좌표에서 +1
            x = x + 1;
            //이동 결과 보드판에서 떨어지면 즉시 “OUT”을 리턴한다.
            if (!isValid(x, y)) {
                return "OUT";
            }
            //board[y][x](이동한 위치)가 1이라면 count에 1을 더한다.
            if (board[y][x] === 1) {
                count++;
            }
        }

        if (operation[i] === "L") {
            //right일 때 오른쪽으로 이동해야 됨! 현재 x축 좌표에서 -1
            x = x - 1;
            //이동 결과 보드판에서 떨어지면 즉시 “OUT”을 리턴한다.
            if (!isValid(x, y)) {
                return "OUT";
            }
            //board[y][x](이동한 위치)가 1이라면 count에 1을 더한다.
            if (board[y][x] === 1) {
                count++;
            }
        }

    }

    //operation 문자열을 끝까지 따라간 후 count를 리턴한다.
    return count;
};


//4번 문제 금고를 털어라
function ocean(target, type) {
    // TODO: 여기에 코드를 작성합니다.

    //bag의 0번째 요소는 1로 고정
    //훔칠 수 없는 경우의 수도 1개라고 생각한다
    let bag = [1];

    //target+1 길이의 배열을 만들어준다.(bag)
    for (let i = 1; i < target + 1; i++) {
        bag[i] = 0;
    } //[1, 0, 0, 0, 0, 0, 0, 0, 0]


    //type의 종류별로 
    for (let i = 0; i < type.length; i++) {
        //bag을 순회하면서(이중 for 문)
        for (let j = 0; j < bag.length; j++) {
            //j가 type[i]보다 크거나 같을 경우, j = 2, type[i] = 1
            if (j >= type[i]) {
                // bag[j]의 값을 "bag[j]+bag[j-type[i]]"로 바꿔준다.
                //bag[2] = bag[2] + bag[2 - 1] = bag[2] + bag[1]
                bag[j] = bag[j] + bag[j - type[i]];
            }
        }
    }

    //for문이 끝난 후 bag[target]을 리턴해준다.
    return bag[target];
}