//5번 가위바위보

function rockPaperScissors(num) {
    // TODO: 여기에 코드를 작성합니다.
    //빈 배열 result 를 만들어준다.
    let result = [];

    let rounds = num || 3;

    //“rock”, “paper”, “scissors” 가 담긴 배열을 만들어준다.(rps)
    let rps = ["rock", "paper", "scissors"];

    function recursion(arr) {
        //탈출문
        if (arr.length === rounds) {
            result.push(arr);
            return;
        }

        //중심로직
        for (let i = 0; i < rps.length; i++) {
            let newArr = [...arr, rps[i]];
            recursion(newArr);
        }
    }

    //rps를 순회하는 삼중 for문을 만든다
    //각 for문 마다 arr의 0, 1, 2 번째 index 에 바위, 보 , 가위를 순서대로 담아준다.
    // for(let i = 0; i < rps.length; i++){
    //   let choice1 = rps[i];
    //   for(let j = 0; j < rps.length; j++){
    //     let choice2 = rps[j];
    //     for(let k = 0; k < rps.length; k++){
    //       let choice3 = rps[k];
    //       result.push([choice1, choice2, choice3])
    //     }
    //   }
    // }

    recursion([]);

    //for문이 모두 끝나면 result를 리턴해준다.
    return result;
};


//6번 치킨 소스 레시피
function newChickenRecipe(stuffArr, choiceNum) {
    // TODO: 여기에 코드를 작성하세요.
    //result를 선언하고 빈 배열을 할당한다.
    let result = [];

    //상한 재료인지 아닌지 판별하는 함수
    function isRotten(num) {
        //숫자로 문자열로 한 번 변환을 해주면
        let str = String(num);

        let count = 0;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === "0") {
                count++;
                if (count >= 3) {
                    return false;
                }
            }
        }

        return true;
    }

    //신선한 재료를 일단 뽑습니다.
    let freshStuff = stuffArr.filter((e) => isRotten(e));

    freshStuff.sort((a, b) => a - b);

    //만약, 주어진 재료 모두 사용할 수 없다면 빈 배열[]을 반환해야 합니다.
    //만약, 사용할 수 있는 재료가 choiceNum보다 작다면 빈 배열[] 을 반환해야 합니다.
    if (freshStuff.length === 0 || freshStuff.length < choiceNum) return [];

    //선택한 재료를 담을 배열(bucket)을 만들어 함수의 전달인자로 전달한다.
    function recipe(arr, bucket) {
        //탈출문
        //bucket의 길이가 choiceNum과 같아지면 result에 push하고 재귀를 종료한다.
        if (bucket.length === choiceNum) {
            result.push(bucket);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            let choiced = arr[i];

            //기존의 배열을 망치지 않기 위해서 한 번 원본 배열을 복사
            let newArr = arr.slice();
            newArr.splice(i, 1);

            recipe(newArr, [...bucket, choiced]);
        }
    }

    recipe(freshStuff, []);

    //재귀함수를 실행해준 후, result를 리턴한다.
    return result;
}

//7번 블랙잭
function boringBlackjack(cards) {
    // TODO: 여기에 코드를 작성합니다.
    //count를 선언하고 0을 할당한다.
    let count = 0;

    //숫자를 넘겨받아 소수인지 판별하는 함수를 만든다.
    //소수? 1보다 큰 자연수 중에 1이랑 자기 자신만을 약수로 가지는 애
    // 3(1,3), 5(1,5), 7(1,7), 19(1,19)
    function isPrime(number) {
        //소수를 구하는 식
        //2부터 판별하는 수(number) 전까지 나누고, 나머지가 0이 안 나오면 소수라고 정의
        for (let i = 2; i < number; i++) {
            if (number % i === 0) return false;
        }
        return true;
    }

    //이전에 선택한 숫자를 건너뛰는 삼중 for문을 만든다.
    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            for (let k = j + 1; k < cards.length; k++) {
                //마지막 for문에서 선택된 숫자들의 합이 소수 라면 count++
                const number = cards[i] + cards[j] + cards[k];
                //소수면 count +1
                if (isPrime(number)) {
                    count++;
                }
            }
        }
    }

    //count를 리턴한다.
    return count;
}

//8번 빼빼로
function divideChocolateStick(M, N) {
    // TODO: 여기에 코드를 작성합니다.

    //result를 선언하고 빈 배열을 할당한다.
    let result = [];

    //두 수의 공약수를 찾는다. => 함수
    function findgcd(a, b) {
        while (b !== 0) {
            let r = a % b;
            a = b;
            b = r;
        }

        return a;
    }

    let gcd = findgcd(M, N);

    //가장 작은 공약수부터 시작해서 가장 큰 공약수 순서대로 순회
    //약수는 제곱근을 중심으로 해서 대칭이다. 
    let sqrt = Math.floor(Math.sqrt(gcd));

    for (let left = 1; left <= sqrt; left++) {

        if (gcd % left === 0) {
            result.push([left, M / left, N / left]);

            if (left * left < gcd) {
                let right = gcd / left;
                result.push([right, M / right, N / right]);
            }
        }

    }
    result.sort((a, b) => a[0] - b[0]);

    //result를 리턴한다.
    return result;
}


//9번 집밥이 그리워
function missHouseMeal(sideDishes) {
    // TODO: 여기에 코드를 작성합니다.
    //result 를 선언하고, 빈 배열을 할당한다.
    let result = [];

    //sideDishes 배열을 정렬해준다(sort)
    sideDishes.sort();

    //재귀함수 형태로 구현 -> power set 예시 코드
    function recursion(subset, start) {

        result.push(subset);

        for (let i = start; i < sideDishes.length; i++) {
            recursion(subset.concat(sideDishes[i]), i + 1);
        }
    }

    recursion([], 0);


    //result 를 리턴한다.

    return result;

}
