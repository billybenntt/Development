# Dataset and Variables
profit_unit = 1.5
sales_w1 = [7, 3, 42, 19, 15, 35, 9]
sales_w2 = [12, 4, 26, 10, 7, 28]

# Get User Input for Last Day
last_day = int(input("Input the last day: "))
sales_w2.append(last_day)

# Combine Lists
sales = sales_w1 + sales_w2

# Calculate Profit
total_profit = sum(sales) * profit_unit
best_day = round(max(sales) * profit_unit, 2)
worst_day = round(min(sales) * profit_unit, 2)

print(f'Total Profit is ${total_profit}, Most profitable day: ${best_day} & Least Profitable day: ${worst_day} in sales')


