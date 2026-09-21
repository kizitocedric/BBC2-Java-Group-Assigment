/**
 * BBC 2 - OOP Programming Group Assignment
 * Project: Smart Store Sales & Discount Management System
 *
 * JavaScript (Node.js) port of SmartStoreManager.java
 *
 * Demonstrates
 * - Episode 10: Ternary Statement (Discount rate & Loyalty tier calculation)
 * - Episode 11: For Loop (Itemized cart processing & pricing calculation)
 * - Episode 12: While Loop (Robust user input validation)
 * - Episode 13: Do-While Loop (Interactive main program menu control)
 *
 * Run with:  node smartStoreManager.js
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pulling lines one at a time from an async iterator keeps input reliable
// whether the program is run interactively or fed from a file / pipe.
const lines = rl[Symbol.asyncIterator]();

/**
 * Stand-in for Scanner input. Returns the trimmed line the user typed.
 * Returns null if the input stream ends.
 * @param {string} promptText
 * @returns {Promise<string|null>}
 */
async function ask(promptText) {
  process.stdout.write(promptText);
  const { value, done } = await lines.next();
  if (done) {
    // End of input (e.g. Ctrl+D, or a piped file that ran out of lines).
    console.log("\nInput ended. Exiting Smart Store System.");
    rl.close();
    process.exit(0);
  }
  return String(value).trim();
}

/**
 * Java's scanner.hasNextInt() has no direct JS equivalent, so validation is
 * done on the raw string: it must be digits only (with an optional sign).
 * @param {string} text
 * @returns {boolean}
 */
function isInteger(text) {
  return /^[+-]?\d+$/.test(text);
}

/**
 * Equivalent check for scanner.hasNextDouble().
 * @param {string} text
 * @returns {boolean}
 */
function isNumber(text) {
  return text !== "" && Number.isFinite(Number(text));
}

/** Formats a number as a 2-decimal currency string. */
function money(value) {
  return value.toFixed(2);
}

async function main() {
  let menuChoice;

  console.log("==================================================");
  console.log("    WELCOME TO SMART STORE MANAGEMENT SYSTEM      ");
  console.log("==================================================");

  // =========================================================================
  // 1. DO-WHILE LOOP (Episode 13)
  // Keeps the program running repeatedly until the user explicitly exits.
  // =========================================================================
  do {
    console.log("\n---------------- MAIN MENU ----------------");
    console.log("1. Process Customer Cart & Calculate Bill");
    console.log("2. View Group Project Information");
    console.log("3. Exit System");

    // =====================================================================
    // 2. WHILE LOOP (Episode 12)
    // Validates that the user enters an integer for menu choice.
    // =====================================================================
    let choiceInput = await ask("Select an option (1-3): ");
    while (!isInteger(choiceInput)) {
      choiceInput = await ask(
        "Invalid input! Please enter a number between 1 and 3: "
      );
    }
    menuChoice = parseInt(choiceInput, 10);

    if (menuChoice === 1) {
      console.log("\n--- NEW CUSTOMER TRANSACTION ---");

      // WHILE LOOP: Validates that item count is greater than zero
      let itemCount = 0;
      let countInput = await ask(
        "Enter the total number of items in customer's cart: "
      );
      while (!isInteger(countInput) || parseInt(countInput, 10) <= 0) {
        const message = isInteger(countInput)
          ? "Item count must be at least 1. Try again: "
          : "Invalid input! Enter a valid integer count: ";
        countInput = await ask(message);
      }
      itemCount = parseInt(countInput, 10);

      let subtotal = 0.0;

      // =================================================================
      // 3. FOR LOOP (Episode 11)
      // Iterates a fixed number of times (itemCount) to process each item.
      // =================================================================
      console.log("\n--- Entering Item Prices ---");
      for (let i = 1; i <= itemCount; i++) {
        let priceInput = await ask(`Enter price for Item #${i} ($): `);

        // WHILE LOOP: Validates price is non-negative
        while (!isNumber(priceInput) || Number(priceInput) < 0) {
          const message = isNumber(priceInput)
            ? `Price cannot be negative. Re-enter Item #${i}: `
            : `Invalid price format! Re-enter Item #${i}: `;
          priceInput = await ask(message);
        }

        subtotal += Number(priceInput); // Accumulate price into subtotal
      }

      // =================================================================
      // 4. TERNARY STATEMENTS (Episode 10)
      // Concise conditional evaluation for discount rate & customer tier.
      // =================================================================

      // If subtotal is $100 or more -> 15% discount; otherwise -> 5% discount
      const discountRate = subtotal >= 100.0 ? 0.15 : 0.05;

      // Determine Customer Tier label using the ternary operator
      const customerTier =
        subtotal >= 100.0
          ? "VIP Tier (15% Discount)"
          : "Standard Tier (5% Discount)";

      const discountAmount = subtotal * discountRate;
      const finalTotal = subtotal - discountAmount;

      // Display Transaction Summary
      console.log("\n============================================");
      console.log("             TRANSACTION RECEIPT            ");
      console.log("============================================");
      console.log("Total Items Scanned : " + itemCount);
      console.log("Subtotal            : $" + money(subtotal));
      console.log("Customer Status     : " + customerTier);
      console.log("Discount Savings    : $" + money(discountAmount));
      console.log("--------------------------------------------");
      console.log("FINAL AMOUNT DUE    : $" + money(finalTotal));
      console.log("============================================\n");
    } else if (menuChoice === 2) {
      console.log("\n---------------- GROUP PROJECT INFO ----------------");
      console.log("Course: OOP Programming (BBC 2)");
      console.log("Project Focus: Control Flow Structures (Episodes 10-13)");
      console.log("Group Size: 5 Members");
      console.log("----------------------------------------------------");
    } else if (menuChoice !== 3) {
      console.log("Invalid selection! Please pick option 1, 2, or 3.");
    }
  } while (menuChoice !== 3); // Do-While condition check

  console.log("\nExiting Smart Store System. Thank you!");
  rl.close();
}

main();
