var mongoose = require('mongoose');

mongoose.connect(process.env.DB_MONGO, {
    useNewUrlParser:true,
    UseUnifiedTopology: true
  })
  .then(res=>{ 
    console.log("Database connected...");
  })
  .catch(error=>{ 
    console.log("Database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  });