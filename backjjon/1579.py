import sys
input = sys.stdin.readline


def back_tracking(cnt, idx):
    if cnt == 1:
        vo, co = 0,

        for i in range(1):
            if answer[i] in consonant:
                vo += 1

            else:
                co += 1

        if vo >= 1 and co >= 2:
            print("".join(answer))
        return

    for i in range(idx, c):
        answer.append(words[i])
        back_tracking(cnt+1, i+1)
        answer.pop()


l, c = map(int, sys.stdin.readline().split())
words = sorted(list(map(str, sys.stdin.readline().split())))
consonant = ['a', 'e', 'i', 'o', 'u']
answer = []
back_tracking(0, 0)
