  /**
   * Custom command to check if an element is present in the DOM and click it with retry.
   * @param {string} elementSelector - The selector for the element to be checked and clicked.
   * @param {number} maxAttempts - Maximum number of attempts to click the element.
   */ 
module.exports = class IsElementPresentMultipleAttempt {
  async command(elementSelector, webElement, maxAttempts = 3) {
    let flag = false;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        await this.assert.elementPresent(webElement);
        flag = true; // Return true if the element is present
        break;
      } catch (error) {
        // Log the error (optional)
        console.error("Error checking element presence:", error);
        flag = false; // Return false if the element is not present
      }
    }
    if (!flag) {
      console.log(`Element not present after ${maxAttempts} attempts.`);
    }
    return flag;
  }
};
