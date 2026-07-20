-- Table creation
CREATE TABLE savings_accounts (
    account_id      NUMBER PRIMARY KEY,
    customer_name   VARCHAR2(100),
    balance         NUMBER
);

CREATE TABLE employees (
    employee_id     NUMBER PRIMARY KEY,
    name            VARCHAR2(100),
    department      VARCHAR2(50),
    salary          NUMBER
);

CREATE TABLE accounts (
    account_id      NUMBER PRIMARY KEY,
    customer_name   VARCHAR2(100),
    balance         NUMBER
);

-- Sample data
INSERT INTO savings_accounts VALUES (1, 'Alice', 10000);
INSERT INTO savings_accounts VALUES (2, 'Bob', 5000);

INSERT INTO employees VALUES (1, 'John', 'IT', 50000);
INSERT INTO employees VALUES (2, 'Sara', 'IT', 60000);
INSERT INTO employees VALUES (3, 'Mike', 'HR', 45000);

INSERT INTO accounts VALUES (1, 'Alice', 10000);
INSERT INTO accounts VALUES (2, 'Bob', 5000);

COMMIT;

-- Scenario 1: Process monthly interest for savings accounts
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE savings_accounts
    SET balance = balance + (balance * 0.01);

    DBMS_OUTPUT.PUT_LINE('Monthly interest of 1% applied to all savings accounts.');

    COMMIT;
END;
/

-- Scenario 2: Update employee bonus by department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department    IN VARCHAR2,
    p_bonus_percent IN NUMBER
)
AS
BEGIN
    UPDATE employees
    SET salary = salary + (salary * p_bonus_percent / 100)
    WHERE department = p_department;

    DBMS_OUTPUT.PUT_LINE(p_bonus_percent || '% bonus applied to department: ' || p_department);

    COMMIT;
END;
/

-- Scenario 3: Transfer funds between accounts
CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account  IN NUMBER,
    p_to_account    IN NUMBER,
    p_amount        IN NUMBER
)
AS
    v_from_balance NUMBER;
BEGIN
    SELECT balance INTO v_from_balance
    FROM accounts
    WHERE account_id = p_from_account;

    IF v_from_balance >= p_amount THEN
        UPDATE accounts
        SET balance = balance - p_amount
        WHERE account_id = p_from_account;

        UPDATE accounts
        SET balance = balance + p_amount
        WHERE account_id = p_to_account;

        DBMS_OUTPUT.PUT_LINE('Transferred ' || p_amount || ' from Account ' ||
                              p_from_account || ' to Account ' || p_to_account);

        COMMIT;
    ELSE
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance in Account ' || p_from_account);
    END IF;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Error: Source account not found.');
END;
/

-- Execute procedures
BEGIN
    ProcessMonthlyInterest;
END;
/

BEGIN
    UpdateEmployeeBonus('IT', 10);
END;
/

BEGIN
    TransferFunds(1, 2, 500);
END;
/
