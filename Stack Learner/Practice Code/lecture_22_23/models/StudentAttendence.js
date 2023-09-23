const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentAttendanceSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        adminAttendance:{
            type: Schema.Types.ObjectId,
            ref: 'AdminAttendance',
            required: true,
        },
    },
    {timestamps: true}
)

const StudentAttendance = mongoose.model('StudentAttendance', studentAttendanceSchema);
module.exports = StudentAttendance;