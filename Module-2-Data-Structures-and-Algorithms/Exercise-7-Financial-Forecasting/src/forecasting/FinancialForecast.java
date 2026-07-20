package forecasting;

public class FinancialForecast {

    // Recursive method: calculates future value after 'years'
    // given a starting amount and annual growth rate (as decimal, e.g. 0.08 for 8%)
    static double predictFutureValue(double presentValue, double growthRate, int years) {
        // Base case: no more years to grow
        if (years == 0) {
            return presentValue;
        }
        // Recursive case: grow one year, then recurse for remaining years
        return predictFutureValue(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double initialInvestment = 10000;
        double annualGrowthRate = 0.08;
        int forecastYears = 5;

        double result = predictFutureValue(initialInvestment, annualGrowthRate, forecastYears);

        System.out.println("Initial Value: " + initialInvestment);
        System.out.println("Growth Rate: " + (annualGrowthRate * 100) + "%");
        System.out.println("Years: " + forecastYears);
        System.out.printf("Predicted Future Value: %.2f%n", result);
    }
}