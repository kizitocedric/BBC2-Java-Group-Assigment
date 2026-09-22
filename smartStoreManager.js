import java.util.Scanner;

/**
 * BBC 2 - OOP Java Programming Group Assignment
 * Project: Smart Store Sales & Discount Management System
 * 
 * Demonstrates
 * - Episode 10: Ternary Statement (Discount rate & Loyalty tier calculation)
 * - Episode 11: For Loop (Itemized cart processing & pricing calculation)
 * - Episode 12: While Loop (Robust user input validation)
 * - Episode 13: Do-While Loop (Interactive main program menu control)
 */
public class SmartStoreManager {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int menuChoice;

        System.out.println("==================================================");
        System.out.println("    WELCOME TO SMART STORE MANAGEMENT SYSTEM      ");
        System.out.println("==================================================");

        // =========================================================================
        // 1. DO-WHILE LOOP (Episode 13)
        // Keeps the program running repeatedly until the user explicitly exits (Option 3).
        // =========================================================================
        do {
            System.out.println("\n---------------- MAIN MENU ----------------");
            System.out.println("1. Process Customer Cart & Calculate Bill");
            System.out.println("2. View Group Project Information");
            System.out.println("3. Exit System");
            System.out.print("Select an option (1-3): ");

            // =====================================================================
            // 2. WHILE LOOP (Episode 12)
            // Validates that the user enters an integer for menu choice.
            // =====================================================================
            while (!scanner.hasNextInt()) {
                System.out.print("Invalid input! Please enter a number between 1 and 3: ");
                scanner.next(); // Clear invalid token
            }
            menuChoice = scanner.nextInt();

            if (menuChoice == 1) {
                System.out.println("\n--- NEW CUSTOMER TRANSACTION ---");
                System.out.print("Enter the total number of items in customer's cart: ");

                int itemCount = 0;
                // WHILE LOOP: Validates that item count is greater than zero
                while (itemCount <= 0) {
                    if (scanner.hasNextInt()) {
                        itemCount = scanner.nextInt();
                        if (itemCount <= 0) {
                            System.out.print("Item count must be at least 1. Try again: ");
                        }
                    } else {
                        System.out.print("Invalid input! Enter a valid integer count: ");
                        scanner.next();
                    }
                }

                double subtotal = 0.0;

                // =================================================================
                // 3. FOR LOOP (Episode 11)
                // Iterates a fixed number of times (itemCount) to process each item.
                // =================================================================
                System.out.println("\n--- Entering Item Prices ---");
                for (int i = 1; i <= itemCount; i++) {
                    System.out.print("Enter price for Item #" + i + " ($): ");
                    double price = -1.0;

                    // WHILE LOOP: Validates price is non-negative
                    while (price < 0.0) {
                        if (scanner.hasNextDouble()) {
                            price = scanner.nextDouble();
                            if (price < 0.0) {
                                System.out.print("Price cannot be negative. Re-enter Item #" + i + ": ");
                            }
                        } else {
                            System.out.print("Invalid price format! Re-enter Item #" + i + ": ");
                            scanner.next();
                        }
                    }
                    subtotal += price; // Accumulate price into subtotal
                }

                // =================================================================
                // 4. TERNARY STATEMENTS (Episode 10)
                // Concise conditional evaluation for discount rates & customer tier status.
                // =================================================================
                
                // If subtotal is $100 or more -> 15% discount; otherwise -> 5% discount
                double discountRate = (subtotal >= 100.0) ? 0.15 : 0.05;
                
                // Determine Customer Tier label using Ternary Operator
                String customerTier = (subtotal >= 100.0) ? "VIP Tier (15% Discount)" : "Standard Tier (5% Discount)";

                double discountAmount = subtotal * discountRate;
                double finalTotal = subtotal - discountAmount;

                // Display Transaction Summary
                System.out.println("\n============================================");
                System.out.println("             TRANSACTION RECEIPT            ");
                System.out.println("============================================");
                System.out.println("Total Items Scanned : " + itemCount);
                System.out.println("Subtotal            : $" + String.format("%.2f", subtotal));
                System.out.println("Customer Status     : " + customerTier);
                System.out.println("Discount Savings    : $" + String.format("%.2f", discountAmount));
                System.out.println("--------------------------------------------");
                System.out.println("FINAL AMOUNT DUE    : $" + String.format("%.2f", finalTotal));
                System.out.println("============================================\n");

            } else if (menuChoice == 2) {
                System.out.println("\n---------------- GROUP PROJECT INFO ----------------");
                System.out.println("Course: OOP Java Programming (BBC 2)");
                System.out.println("Project Focus: Control Flow Structures (Episodes 10-13)");
                System.out.println("Group Size: 5 Members");
                System.out.println("----------------------------------------------------");
            } else if (menuChoice != 3) {
                System.out.println("Invalid selection! Please pick option 1, 2, or 3.");
            }

        } while (menuChoice != 3); // Do-While condition check

        System.out.println("\nExiting Smart Store System. Thank you!");
        scanner.close();
    }
}