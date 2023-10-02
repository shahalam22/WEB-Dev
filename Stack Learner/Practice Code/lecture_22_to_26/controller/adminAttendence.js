const {addMinutes, isAfter} = require('date-fns');
const AdminAttendance = reuire('../models/AdminAttendance');
const error = require('../utils/error');

const getEnable = async (_req, res, next) => {
    try{
        const running = await Adminattendence.findOne({status: 'RUNNING'});
        if(running){
            throw error("Attendance is already running", 400);
        }

        const attendance = new AdminAttendance({});
        await attendance.save();
        return res.status(201).json({message: "Success"});
    }catch(err){
        next(err);
    }
};

const getStatus = async (_req, res, next) => {
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

const getDisable = async (_req, res, next) => {
    try{
        const running = await AdminAttendance.findOne({status: 'RUNNING'});
        if(!running){
            throw error("Attendance is not running", 400);
        }

        running.status = 'COMPLETED';
        await running.save();

        return res.status(200).json(running);
    }catch(err){
        next(err);
    }
};

module.exports = {
    getEnable,
    getStatus,
    getDisable,
};