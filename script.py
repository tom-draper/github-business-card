import json

with open('colors.json', 'r') as f:
    x = json.load(f)
    for k, v in x.items():
        # print(k, v)
        if v['color'] is not None:
            print('.' + k.replace(' ', '-') + ' { background: ' + v['color'] + '}')
