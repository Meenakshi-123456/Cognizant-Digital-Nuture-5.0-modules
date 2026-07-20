import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals - checks two values are equal
        assertEquals(5, 2 + 3);

        // Assert true - checks a condition is true
        assertTrue(5 > 3);

        // Assert false - checks a condition is false
        assertFalse(5 < 3);

        // Assert null - checks a value is null
        assertNull(null);

        // Assert not null - checks a value is not null
        assertNotNull(new Object());
    }
}
