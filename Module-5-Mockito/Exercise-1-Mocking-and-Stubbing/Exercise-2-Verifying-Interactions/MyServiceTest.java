import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Arrange: create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        // Act: call the method being tested
        service.fetchData();

        // Assert (verify): confirm that getData() was actually called on the mock
        verify(mockApi).getData();
    }
}
