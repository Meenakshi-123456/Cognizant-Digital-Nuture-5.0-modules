package ecommerce;

import java.util.Arrays;
import java.util.Comparator;

public class SearchFunction {

    // Linear Search
    public static Product linearSearch(Product[] products, int id) {

        for (Product p : products) {
            if (p.productId == id) {
                return p;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int id) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            if (products[mid].productId == id)
                return products[mid];

            if (products[mid].productId < id)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {

                new Product(103, "Keyboard", "Electronics"),
                new Product(101, "Laptop", "Electronics"),
                new Product(104, "Shoes", "Fashion"),
                new Product(102, "Phone", "Electronics"),
                new Product(105, "Watch", "Accessories")
        };

        int searchId = 102;

        System.out.println("Linear Search");

        Product result = linearSearch(products, searchId);

        if (result != null)
            result.display();
        else
            System.out.println("Product Not Found");

        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        System.out.println("\nBinary Search");

        result = binarySearch(products, searchId);

        if (result != null)
            result.display();
        else
            System.out.println("Product Not Found");
    }
}
