import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";
//
// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   port: config.port,
//
//   dialect: "postgres",
//   storage: ":memory:",
// });

// export const sequelize = new Sequelize(
//     `postgres://postgres:postgres@udacity-fsnd-db.cvemkv9vlxht.us-east-1.rds.amazonaws.com:5432/postgres`
// )

const correct = `postgres://postgres:postgres@database-fsnd.c0low1hk4taw.us-west-2.rds.amazonaws.com:5432/postgres`;
const URL = `postgres://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`

// console.log("correct === check:", correct === URL, correct.length, URL.length)
// console.log("co ->", correct)
// console.log("ch ->", URL)
//
// console.log("CONFIG", config)
// console.log(`postgres://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`)

export const sequelize = new Sequelize(correct)