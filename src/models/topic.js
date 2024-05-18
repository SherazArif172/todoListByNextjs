const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema with timestamps
const topicSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Add the timestamps option
  }
);

// Check if the model already exists before defining it
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

module.exports = Topic;
