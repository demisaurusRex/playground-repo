const fs = require("fs");
const { parse } = require("csv-parse");

const data = [];

fs.createReadStream("daily-board.csv")
  .pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
    })
  )
  .on("data", function (row) {

    const parsedRow = {
        cardId = data[1]
    }
    data.push(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    // console.log("parsed csv data:");
    console.log(data[1]);
  });
