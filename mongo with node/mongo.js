
      const mongoose = require("mongoose");

      // Define an async function for your main logic
      async function main() {
          try {
              await mongoose.connect('mongodb://127.0.0.1:27017/employee');

              // Define your schema and model
              const custSchema = new mongoose.Schema({
                  name: String,
                  email: String,
                  password: String
              });

              const cust = mongoose.model('cust', custSchema);

              // Create a customer collection and add customer details
              const custdetails = new cust({ name: "oswin", email: "siasfk", password: "cpassword" });
              const custdetails1 = new cust({ name: "cname", email: "cemail", password: "cpassword" });
              const custdetails2 = new cust({ name: "fscname", email: "sfcemail", password: "cpassword" });

              

              
              // Save the customer data to the database
              await custdetails.save();
              await custdetails1.save();
              await custdetails2.save();
              
              console.log('saved in datatbase')

          } catch (err) {
              console.error('Error:', err);
          } finally {
              // Close the Mongoose connection when you're done
              mongoose.connection.close();
          }
      }

      main().catch(err => console.log(err));
      console.log('closing mongo connection')

