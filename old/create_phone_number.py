
def create_phone_number(n):
    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)

# TRY 4
# n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
# n = [str(elem) for elem in n]
# s = '(' + "".join(n[0:3]) + ') ' + "".join(n[3:6]) + '-' + "".join(n[6:10])


# TRY 1
#     s = "(" + "".join([str(elem) for elem in n[0:3]]) + ") "
#     s += "".join([str(elem) for elem in n[3:6]]) + "-"
#     s += "".join([str(elem) for elem in n[-4:]])
#     return s

# TRY 2
# s = '(' + str(n[0]) + str(n[1]) + str(n[2])
# s += ') ' + str(n[3]) + str(n[4]) + str(n[5])
# s += '-' + str(n[6]) + str(n[7]) + str(n[8]) + str(n[9])

# TRY 3
# n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
# n.insert(6,"-")
# n.insert(3,") ")
# n.insert(0,"(")
# n = [str(elem) for elem in n]
# n = "".join(n)

print(s)
#print(create_phone_number(n))

# create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"

