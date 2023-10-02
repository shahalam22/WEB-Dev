const StudentAttendence = require('../models/StudentAttendence');
const AdminAttendence = require('../models/AdminAttendence');
const {addMinutes, isAfter} = require('date-fns');
const error = require('../utils/error');

const getAttendence = async (req, res, next) => {
    const {id} = req.params;
    try{
        const adminAttendence = await AdminAttendence.findbyId(id);
        if(!adminAttendence){
            throw error("Invalid Attendence ID", 400);
        }
        
        if(adminAttendence.status == 'COMPLETED'){
            throw error("Attendence is Completed", 400);
        }

        let attendance = await StudentAttendence.findOne({adminAttendence: id, user: req.user._id});
        if(attendance){
            throw error("Attendence already marked", 400);
        }

        attendance = new StudentAttendence({
            user: req.user._id,
            adminAttendence: adminAttendence._id,
        });

        await attendance.save();

        return res.status(201).json(attendance);

    }catch(err){
        next(err);
    }
};

const getAttendenceStatus = async (req, res, next) => {
    try{
        const running = await AdminAttendance.findOne({status: 'RUNNING'});
        if(!running){
            throw error("Attendance is not running", 400);
        }

        const start = addMinutes(new Date(running.createdAt), running.timeLimit); 

        if(isAfter(newDate(), start)){
            running.status = 'COMPLETED';
            await running.save();
        }

        return res.status(200).json(running);
    }catch(err){
        next(err);
    }
};


module.exports = {
    getAttendence,
    getAttendenceStatus,
}