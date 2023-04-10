const {Schema, model} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            //Are these right?
            type: Schema.Types.ObjectId,
            default: new mongoose.Types.ObjectId,
        },
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

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;