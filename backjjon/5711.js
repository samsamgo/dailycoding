//반복된 문자열
//반복된 문자 조합 구하기
str = 'ababcabb'
//만들수 있는 문자의 경우의 수 구하기
let strnum = [];
let cnt = 0;
function repeatstr(str) {
    for (let i = 0; i < str.length; i++) {
        for (let y = i; y < str.length; y++) {
            strnum[cnt] = strnum[cnt - 1] += str.charAt(y)
            console.log(strnum + '  : strnum')
            cnt++;
            console.log(cnt + '  : cnt')
        }
    }
}

repeatstr(str);