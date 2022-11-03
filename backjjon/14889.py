from sys import stdin


def cal_diff(team_list: list) -> None:
    another_team_list = list(set(range(N)) - set(team_list))
    team_sum = 0
    for i, v in enumerate(team_list[:-1]):
        for v2 in team_list[i+1:]:
            team_sum += ability[v][v2] + ability[v2][v]

    another_team_sum = 0
    for i, v in enumerate(another_team_list[:-1]):
        for v2 in another_team_list[i+1:]:
            another_team_sum += ability[v][v2] + ability[v2][v]

    ans.append(abs(team_sum - another_team_sum))

    return None


def dfs(team_list: list) -> None:
    if len(team_list) == N/2:
        cal_diff(team_list)
        return None

    for i in range(team_list[-1] if team_list else 0, N):
        if team_list and team_list[0] != 0:
            return None
        if i not in team_list:
            team_list.append(i)
            dfs(team_list)
            team_list.pop()


N = int(stdin.readline())
ability = [list(map(int, stdin.readline().split())) for _ in range(N)]
ans = []
dfs([])
print(min(ans))
