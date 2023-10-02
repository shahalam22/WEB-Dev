const AdminAttendance = reuire('../models/AdminAttendance');

const getEnable = async (req, res, next) => {
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

const getDisable = (req, res, next) => {};

module.exports = {
    getEnable,
    getDisable,
};