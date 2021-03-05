const fs = require("fs");

module.exports = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "cat") {
      fs.readFile("pwd.js", "utf8", (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log(data);
          process.stdout.write("nprompt > ");
        }
      });
    }
  });
};
