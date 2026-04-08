import { Schema, model } from "mongoose";

const EventSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },

    description: {
        type: String,
        required: true,
        minlength: 10
    },

    date: {
        type: Date,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});

export default model('Event', EventSchema);