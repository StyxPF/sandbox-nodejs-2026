import Square, {size1, size2} from "./lib.js";
import { config } from "dotenv";

config();

import { env } from "node:process";

const mySquare = new Square(size1);
console.log(`The area of mySquare is ${mySquare.area()}`);

const mySquare2 = new Square(size2);
console.log(`The area of mySquare is ${mySquare2.area()}`);

console.log("Env test:", env.qwe);

