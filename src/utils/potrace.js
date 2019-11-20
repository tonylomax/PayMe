let potrace = require("potrace"),
  fs = require("fs");

potrace.trace("../../assets/IMG_4582.jpeg", function(err, svg) {
  if (err) throw err;
  fs.writeFileSync("./output.svg", svg);
})();
