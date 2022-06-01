const connection = require('./../../config/config')

connection.connect((err) => {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("Connected to database");
    }
})

module.exports = connection