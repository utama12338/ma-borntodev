
import express from "express"; // ใช้ import แทน require
import chalk from "chalk";
import debug from "debug"; // แก้ไข import debug
const app = express();
const port = process.env.PORT;
import morgan from "morgan";
import path from 'path'
app.use(morgan('combined'));
import { fileURLToPath } from 'url';

//  setTimeout(()=>{

//  })
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views","/src/views")
app.set("views engine","ejs")
app.use(express.static(path.join(__dirname,"/public/")))

app.get("/", (req, res) => {
  res.send("ชื่อมะ"); 
});

app.listen(port, () => {
  debug("asd" + chalk.red.bgYellow("  :  " + port));
});


  setTimeout(()=>{



  },3000)

