# Smart Store Sales & Discount Management System

**Course:** OOP Java Programming (BBC 2)
**Assignment:** Group Project — Conditional Statements & Loops 
**Group:** 16

## Project Overview

This is a console-based Java application that simulates a simple retail checkout system. It processes a customer's cart, validates all user input, calculates a subtotal, applies a tier-based discount, and prints an itemized transaction receipt. The program runs on a repeating main menu until the user chooses to exit.

## Concepts Demonstrated

| Concept | Episode | Where it's used |
|---|---|---|
| Ternary Statement | Episode 10 | Calculating the discount rate and customer tier label based on subtotal |
| For Loop | Episode 11 | Iterating through each item in the cart to collect and total prices |
| While Loop | Episode 12 | Validating menu choice, item count, and price input |
| Do-While Loop | Episode 13 | Controlling the main menu so it repeats until the user exits |

## Group Members

| Name | Registration Number |
|---|---|
| Nguru Joab | 25/U/15566/EVE |
| Kizito Cedric Stuart | 25/U/15167/EVE |
| Muwaya Joselyne Tendo | 25/U/15319/PS |
| Muhiire Andrew | 25/U/15262/EVE |
| Nabirye Jesca Stacy | 25/U/29754/EVE |

## How to Run

1. Make sure a Java Development Kit (JDK) is installed.
2. Clone this repository.
3. Compile the program:
   ```
   javac SmartStoreManager.java
   ```
4. Run it:
   ```
   java SmartStoreManager
   ```
5. Use the main menu to process a cart, view project info, or exit.

## Sample Usage

```
==================================================
    WELCOME TO SMART STORE MANAGEMENT SYSTEM      
==================================================

---------------- MAIN MENU ----------------
1. Process Customer Cart & Calculate Bill
2. View Group Project Information
3. Exit System
Select an option (1-3): 1

--- NEW CUSTOMER TRANSACTION ---
Enter the total number of items in customer's cart: 2
Enter price for Item #1 ($): 60
Enter price for Item #2 ($): 50.50

============================================
             TRANSACTION RECEIPT            
============================================
Total Items Scanned : 2
Subtotal            : $110.50
Customer Status     : VIP Tier (15% Discount)
Discount Savings    : $16.58
--------------------------------------------
FINAL AMOUNT DUE    : $93.92
============================================
```

## Discount Rules

- Subtotal of **$100.00 or more** → **VIP Tier**, 15% discount
- Subtotal **below $100.00** → **Standard Tier**, 5% discount

## Repository Contents

- `SmartStoreManager.java` — main program source code
- `README.md` — this file
