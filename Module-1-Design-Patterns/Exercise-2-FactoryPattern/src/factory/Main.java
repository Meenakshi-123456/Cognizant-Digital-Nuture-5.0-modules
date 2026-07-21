package factory;

public class Main {

    static Vehicle getVehicle(String type) {
        if (type.equalsIgnoreCase("CAR")) {
            return new Car();
        } else if (type.equalsIgnoreCase("BIKE")) {
            return new Bike();
        }
        return null;
    }

    public static void main(String[] args) {
        Vehicle vehicle1 = getVehicle("CAR");
        vehicle1.drive();

        Vehicle vehicle2 = getVehicle("BIKE");
        vehicle2.drive();
    }
}