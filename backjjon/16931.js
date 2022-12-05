let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]

let nm = readLine()!.split(separator: " ").map{ Int(String($0))!}
let n = nm[0]
let m = nm[1]

var arr = Array(repeating: Array(repeating: 0, count: 102), count: 102)
for i in 1...n{
    let a = readLine()!.split(separator: " ").map{ Int(String($0))!
}
for j in 1...m{
    arr[i][j] = a[j - 1]
}
}
var result = 0
for i in 1...n{
    for j in 1...m{

        for k in 0..< 4{
            let nx = i + dx[k]
            let ny = j + dy[k]

            if arr[i][j] >= arr[nx][ny]{
                result += arr[i][j] - arr[nx][ny]
            }
        }
    }
}
result += 2 * n * m
print(result)

