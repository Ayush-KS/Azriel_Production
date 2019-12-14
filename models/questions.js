const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    statement: {
        type: String,
        required: true
    },

    option1: {
        type: String,
    },

    option2: {
        type: String,
    },

    option3: {
        type: String,
    },

    option4: {
        type: String,
    },

    tags: {
        type: [String]
    }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;