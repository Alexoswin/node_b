const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));

db.once('open', function () {
  console.log("we are connected");

  // Now that the database connection is open, you can define and save your student details.
  let studentSchema = new mongoose.Schema({
    name: String
  });

  let student = mongoose.model("student", studentSchema);

  let details = new student({
    name: "Alex"
  });

  details.save(function (err, savedStudent) {
    if (err) return console.error(err);
    console.log("Student saved successfully:", savedStudent);
  });
});
