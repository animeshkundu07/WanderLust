const mongoose = require("mongoose");
const datas = require("./init/data.js");
const Listing = require("./models/listing.js");


const dotenv  = require("dotenv");
dotenv.config();


const seedData = async()=>{
    try {
        await mongoose.connect(process.env.ATLASDB_URL);
        await Listing.deleteMany({});
        await Listing.insertMany(datas.data);

        console.log("Data seeded successfully");
        process.exit(1);
    } catch (error) {
        console.error("seeding failed", error);
        process.exit(1);
    }
}

seedData();
