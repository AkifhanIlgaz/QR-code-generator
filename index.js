import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { url } from "inspector";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answer) => {
    const URL = answer.URL;
    const qrStream = qr.image(URL);
    qrStream.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", URL, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {});
