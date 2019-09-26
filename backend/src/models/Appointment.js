const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const AppointmentSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

AppointmentSchema.plugin(mongoosePaginate);

mongoose.model("Appointment", AppointmentSchema);
