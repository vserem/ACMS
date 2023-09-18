const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt")

const schema = new mongoose.Schema({
    email: { type: String, unique: true, index: true },
    password: String,
    role: { type: String, enum: ['resident', 'staff', 'admin'], default: 'resident' },
}, { timestamps: true })

schema.pre('save', function (next) {
    const user = this;

    // Hash the password only if it's modified or a new user
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

const User = mongoose.model('User', schema);



module.exports = User;