# Financial Forecasting (Recursive Approach)

## Objective
Predict future values based on past growth rates using a recursive algorithm.

## Approach
Recursion breaks the problem into smaller subproblems: the future value in year N depends on the future value in year N-1, grown by a fixed rate. The base case is when zero years remain, at which point the current value is returned.

## Time Complexity
- Time: O(n), where n is the number of years — one recursive call per year, no branching.
- Space: O(n), due to call stack depth (each call waits for the next to return).

## Optimization
The recursion can be optimized in two ways:
1. Convert to an iterative loop — reduces space complexity to O(1) by removing the call stack overhead.
2. Use the closed-form compound growth formula: presentValue * (1 + growthRate)^years — computes the result directly without any recursion or looping.

## Output
Initial Value: 10000.0
Growth Rate: 8.0%
Years: 5
Predicted Future Value: 14693.28
