const mongoose = require("mongoose");

// Define an async function for your main logic
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/employee');

    // Define your schema and model
    const kittySchema = new mongoose.Schema({
      name: String
    });

    const Kitten = mongoose.model('Kitten', kittySchema);

    // Create a new kitten document
    const fluffy = new Kitten({ name: 'Fluffy' });

    // Save the document to the database
    await fluffy.save();
    
    console.log('Kitten saved successfully.');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the Mongoose connection when you're done
    mongoose.connection.close();
  }
}

main().catch(err => console.log(err));


