import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class LibraryManagementApplication {

    public static void main(String[] args) {
        // Load the Spring IoC container using the XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the BookService bean - Spring has already injected
        // BookRepository into it automatically (Dependency Injection)
        BookService bookService = (BookService) context.getBean("bookService");

        // Test that the injected dependency works correctly
        bookService.addBook();
        bookService.listBooks();
    }
}
