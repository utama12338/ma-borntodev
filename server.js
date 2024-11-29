import express from "express"; // ใช้ import แทน require
import chalk from "chalk";
import debug from "debug"; // แก้ไข import debug
const app = express();
const port = process.env.PORT;
import morgan from "morgan";
import path from "path";
app.use(morgan("combined"));
import { fileURLToPath } from "url";

const Intro = express.Router();
//  setTimeout(()=>{

//  })
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", "./src/views");
app.set("view engine", "ejs"); // หรือ 'pug', 'hbs' ฯลฯ
app.use(express.static(path.join(__dirname, "/public/")));

Intro.route("/1").get((req, res) => {
  res.send("1/-ภ/-ภภภภภภภภ");
});
Intro.route("/").get((req, res) => {
  res.send("2/-ภ/-ภ/-ภdddddddddddasd");
});

app.use("/Intro", Intro);

app.get("/", (req, res) => {
  res.render("index", {
    username: `มะๆๆๆๆๆๆคนหล่อ`,
    cutomers: [
      "Alice",
      "Bob",
      "Charlie",
      "David",
      "Eve",
      "Frank",
      "Grace",
      "Hannah",
      "Ivy",
      "Jack",
    ],
  });
});

app.listen(port, () => {
  debug("asd" + chalk.red.bgYellow("  :  " + port));
});

setTimeout(() => {}, 3000);
