import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class MainApp {

    public static void main(String[] args) {
        // Load the Spring application context from the XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the BookService bean from the context
        BookService bookService = (BookService) context.getBean("bookService");

        // Test the configuration
        bookService.addBook();
        bookService.listBooks();
    }
}
