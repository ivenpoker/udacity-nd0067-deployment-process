import * as dotenv from "dotenv";
dotenv.config();

// export const config = {
//   username: `${process.env.POSTGRES_USERNAME}`,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
//   port: Number(process.env.PORT),
//   host: process.env.POSTGRES_HOST,
//   dialect: "postgres",
//   aws_region: process.env.AWS_REGION,
//   aws_profile: process.env.AWS_PROFILE,
//   aws_media_bucket: process.env.AWS_BUCKET,
//   url: process.env.URL,
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
// };

export const config = {
  username: "postgres",
  password: "postgres",
  database: "postgres",
  port: 5342,
  host: "database-fsnd.c0low1hk4taw.us-west-2.rds.amazonaws.com",
  dialect: "postgres",
  aws_region: "us-east-1",
  aws_profile: "",
  aws_media_bucket: "",
  url: "",
  jwt: {
    secret: "",
  },
};

