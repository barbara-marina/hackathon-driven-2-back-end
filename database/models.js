import mongoose from 'mongoose';

export const Users = mongoose.model('users', {
    name: String,
    email: String,
    password: String,
    picture: String,
    progress: Object
});

export const Sessions = mongoose.model('sessions', {
    userId: String,
    token: String
});

export const Questions = mongoose.model('questions', {
    name: String,
    options: Array,
    assigned: Boolean
});