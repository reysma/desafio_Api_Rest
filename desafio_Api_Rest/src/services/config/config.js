import dotenv from 'dotenv'

dotenv.config();
export default {
    port: process.env.PORT,
    mongoURL: process.env.MONGO_URL,
    adminName: process.env.ADMIN_NAME,
    adminPass: process.env.ADMIN_PASSWORD,
    enviroment: process.env.ENVIROMENT_VAR
}