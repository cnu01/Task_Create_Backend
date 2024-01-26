const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    database: process.env.MONGODB_URI || 'mongodb+srv://cnu:hnKbsM5BQpSfQGxc@taskcreate.nzxubqf.mongodb.net/?retryWrites=true&w=majority',
    jwt_secret: process.env.JWT_SECRET || 'OnePercentClubSecret',
}
