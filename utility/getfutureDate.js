const { faker } = require('@faker-js/faker');
/**
 * Command to generate a future date using faker.js
 * @returns {string} - Formatted future date in 'DD MMM, YYYY' format (e.g., 01 NOV, 2023)
 */

module.exports = class getfutureDate {
  async command() {
    try {
      const dateString = faker.date.future();

      const date = new Date(dateString);
      const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
      ];
      
      const day = String(date.getDate()).padStart(2, '0');
      const monthIndex = date.getMonth();
      const year = date.getFullYear() + 1; // Getting the next year

      const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
      console.log(formattedDate);
      return formattedDate;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to ensure it's properly handled
    } 
  }
};
