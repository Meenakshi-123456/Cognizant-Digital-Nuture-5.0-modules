-- Table creation
CREATE TABLE customers (
    customer_id     NUMBER PRIMARY KEY,
    name            VARCHAR2(100),
    age             NUMBER,
    balance         NUMBER,
    is_vip          VARCHAR2(5) DEFAULT 'FALSE'
);

CREATE TABLE loans (
    loan_id         NUMBER PRIMARY KEY,
    customer_id     NUMBER,
    interest_rate   NUMBER,
    due_date        DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Sample data
INSERT INTO customers VALUES (1, 'Alice', 65, 15000, 'FALSE');
INSERT INTO customers VALUES (2, 'Bob', 45, 5000, 'FALSE');
INSERT INTO customers VALUES (3, 'Carol', 70, 12000, 'FALSE');

INSERT INTO loans VALUES (101, 1, 8.5, SYSDATE + 10);
INSERT INTO loans VALUES (102, 2, 7.0, SYSDATE + 45);
INSERT INTO loans VALUES (103, 3, 9.0, SYSDATE + 20);

COMMIT;

-- Scenario 1: Apply 1% discount to loan interest rates for customers above 60
DECLARE
    CURSOR cust_cursor IS
        SELECT customer_id, age FROM customers;
BEGIN
    FOR cust_rec IN cust_cursor LOOP
        IF cust_rec.age > 60 THEN
            UPDATE loans
            SET interest_rate = interest_rate - (interest_rate * 0.01)
            WHERE customer_id = cust_rec.customer_id;

            DBMS_OUTPUT.PUT_LINE('Discount applied for Customer ID: ' || cust_rec.customer_id);
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- Scenario 2: Set IsVIP flag to TRUE for customers with balance over $10,000
DECLARE
    CURSOR cust_cursor IS
        SELECT customer_id, balance FROM customers;
BEGIN
    FOR cust_rec IN cust_cursor LOOP
        IF cust_rec.balance > 10000 THEN
            UPDATE customers
            SET is_vip = 'TRUE'
            WHERE customer_id = cust_rec.customer_id;

            DBMS_OUTPUT.PUT_LINE('Customer ID ' || cust_rec.customer_id || ' promoted to VIP');
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- Scenario 3: Print reminders for loans due within the next 30 days
DECLARE
    CURSOR loan_cursor IS
        SELECT l.loan_id, l.customer_id, l.due_date, c.name
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR loan_rec IN loan_cursor LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || loan_rec.name ||
                              ' (ID: ' || loan_rec.customer_id ||
                              ') has a loan due on ' || TO_CHAR(loan_rec.due_date, 'DD-MON-YYYY'));
    END LOOP;
END;
/
