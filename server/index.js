import app from './server.js'
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config();
const mongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

mongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        useUnifiedTopology: true,
        poolSize: 50,
        useNewUrlParser: true,
        writeConcern: {
            wtimeout: 2500,
        }
    }
).catch(err => {
    console.error(err);
    process.exit(1);
}).then(async client => {
    app.listen(port, () => {
        console.log(`listening to port ${port}`)
    })
});
