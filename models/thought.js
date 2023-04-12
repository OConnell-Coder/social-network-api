const {Schema, Types, model} = require('mongoose');
const reactionSchema = require('./reaction');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
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
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);


thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});


const Thought = model('Thought', thoughtSchema);


module.exports = Thought;