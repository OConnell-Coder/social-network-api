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
        timestamps: true, //need to change?
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;