 import mysql from "mysql";
 
 export const db = mysql.createConnection({
   host: "https://3000-idx-sigma-blog-1718019761744.cluster-3g4scxt2njdd6uovkqyfcabgo6.cloudworkstations.dev",
   user: "root",
   password: "354313",
   database: "sigma-blog",
 });