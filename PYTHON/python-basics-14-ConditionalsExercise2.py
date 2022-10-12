# optimize/shorten the code in the function
# try to reduce the number of conditionals

def num_days(month):
    days = 0
    if month in ['jan', 'mar', 'may', 'jul', 'aug', 'oct', 'dec']:
        days = 31
    elif month in ['apr', 'jun', 'sep', 'nov']:
        days = 30
    elif month == 'feb':
        days = 28
    print(f'number of days in {month} is {days}')


num_days('dec')
