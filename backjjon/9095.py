import sys
input = sys.stdin.readline
num = int(input())


def sol(n):
    if n == 1:
        return 1

    elif n == 2:
        return 2

    elif n == 3:
        return 4

    else:
        return sol(n-1) + sol(n-2) + sol(n-3)


for i in range(num):
    n = int(input())
    print(sol(n))
