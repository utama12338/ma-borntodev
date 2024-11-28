import express from "express"; // ใช้ import แทน require
import chalk from "chalk";
import debug from "debug"; // แก้ไข import debug
const app = express();
const port = 3008;
import morgan from "morgan";

app.use(morgan('combined'));

//  setTimeout(()=>{

//  })

app.get("/", (req, res) => {
  res.send("ชื่อมะ"); 
});

app.listen(port, () => {
  debug("asd" + chalk.red.bgYellow("  :  " + port));
});
