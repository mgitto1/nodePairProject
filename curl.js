const req = require("request");

module.exports = function () {
  process.stdin.on("data", (data) => {
    const cmdArr = data.toString().split(" ");
    const cmd = cmdArr[0].toString().trim();
    if (cmd.includes("curl")) {
      const url = cmdArr[1].toString().trim();
      req(url, function (error, response, body) {
        console.error("error:", error); // Print the error if one occurred
        console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        console.log("body:", body); // Print the HTML for the Google homepage.
      });
    }
  });
};
