const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    categoryDescription: {
        type: String,
    }
});

module.exports = mongoose.model("Category", categorySchema);