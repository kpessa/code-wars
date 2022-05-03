a = [0, 1, 2, 4, 5, 7, 8, 9]
count = 1
idx = 0


def move_forward():
    global idx, count
    idx += 1
    count += 1


while True:
    if idx == 0:  # base case
        move_forward()
    elif idx != len(a)-1:  # increment step
        if a[idx] == a[idx-1] + 1:
            move_forward()
        else:
            # back up
            count -= 1
            idx -= 1
            # if count >= 3, make range
            if count >= 3:
                s = a[idx]
                while count > 0:
                    count -= 1
                    del a[idx]
                    idx -= 1
                s = a[idx] + '-' + s
                a[idx] = s
            # reset count
            count = 1
            move_forward()

    else:  # terminate step
        break
