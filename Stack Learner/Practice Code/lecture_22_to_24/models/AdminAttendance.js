const mongose = require('mongoose');
const Schema = mongose.Schema;

const adminAttendanceSchema = new Schema(
    {
        timeLimit:{
            type: Number,
            required: true,
            max: 30,
            min: 1,
            default: 5,

        },
        status:{
            type: String,
            required: true,
            enum: ['RUNNING', 'COMPLETED'],
            default: 'RUNNING',
        },
    },
    {timestamps: true}
)

const AdminAttendance = mongose.model('AdminAttendance', adminAttendanceSchema);
module.exports = AdminAttendance;