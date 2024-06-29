import dotenv from "dotenv";
dotenv.config({path:'.env'})

// server port and mode
const server = {
    serverPort: process.env.SERVER_PORT,
    serverMode: process.env.SERVER_MODE,
};

// database connectivity
const database = {
    dbUri: process.env.DB_URI,
    dbName: process.env.DB_NAME,
};

// JWT 
const jwtInformation = {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXPIRE,
    cookieExpire: process.env.COOKIE_EXPIRE,
};

// mail services
const mailServices = {
    smtpMail: process.env.SMTP_MAIL,
    smtpPassword: process.env.SMTP_PASSWORD,
    smtpService: process.env.SMTP_SERVICE,
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
};

export const {serverMode,serverPort} = server;
export const {dbUri,dbName} = database;
export const {jwtSecret,jwtExpire,cookieExpire} = jwtInformation;
export const {smtpMail,smtpPassword,smtpService,smtpHost,smtpPort} = mailServices;
