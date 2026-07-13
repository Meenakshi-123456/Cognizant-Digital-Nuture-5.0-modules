import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

public class AaaPatternTest {

    private List<Integer> numbers;

    // Setup method - runs before EACH test method
    @Before
    public void setUp() {
        numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        System.out.println("Setup: Test data initialized.");
    }

    // Teardown method - runs after EACH test method
    @After
    public void tearDown() {
        numbers.clear();
        System.out.println("Teardown: Test data cleared.");
    }

    @Test
    public void testSumOfNumbers() {
        // Arrange - test data is already prepared in setUp()

        // Act - perform the action being tested
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }

        // Assert - verify the result
        assertEquals(60, sum);
    }

    @Test
    public void testListSize() {
        // Arrange - numbers list is ready from setUp()

        // Act - get the size of the list
        int size = numbers.size();

        // Assert - verify the expected size
        assertEquals(3, size);
    }
}
