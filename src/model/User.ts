import { Schema, model } from "mongoose";
import { match } from "node:assert";

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/,
            "Please use a valid email address"],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
});

export default model('User', UserSchema);