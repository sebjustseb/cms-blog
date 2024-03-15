// Import required modules
const moment = require('moment');

// Define custom helpers
const helpers = {
  // Format date using moment.js
  formatDate: (date) => {
    return moment(date).format('MMMM DD, YYYY');
  },

  // Truncate text to a specific length
  truncateText: (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    } else {
      return text;
    }
  },

  // Format comments count
  formatCommentsCount: (count) => {
    return count === 1 ? '1 Comment' : count + ' Comments';
  },

  // Check if user is logged in
  isLoggedIn: (user) => {
    return user ? true : false;
  }
};

module.exports = helpers;
