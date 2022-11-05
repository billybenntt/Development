# ------------------------- SORT VS SORTED CALLBACK FUNCTION  -------------------------


my_list = [1, 5, -3, 7, -2]
my_llist = [['car', 4, 65], ['dog', 2, 30], ['add', 3, 10], ['bee', 1, 24]]

#  Sorted with Callback
absolute_list = sorted(my_list, key=abs)

# Sorted with Lambda Callback (Sorting from 1st Index)
absolute_llist = sorted(my_llist, key=lambda item: item[1])


print(absolute_list)
print(absolute_llist)
