const {Schema, Types, model} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                const timestamp = new Intl.DateTimeFormat("en", {
                    timeStyle: "short",
                    dateStyle: "medium"
                }).format(date);
                return timestamp;
            }
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

module.exports = reactionSchema;