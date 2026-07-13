import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Arrange: create a mock object and stub its method
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);

        // Act: call the method being tested
        String result = service.fetchData();

        // Assert: verify the result matches the stubbed value
        assertEquals("Mock Data", result);
    }
}
