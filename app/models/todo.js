var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    }
});