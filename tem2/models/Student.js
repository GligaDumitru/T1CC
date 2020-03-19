const mongoose = require('mongoose');
const config = require('../config');
const validator = require('validator')
const conn = mongoose.createConnection(config.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.set('useFindAndModify', false);
conn.on('error', error => {
    if (error) throw error;
})

conn.on('open', _ => {
    console.log(`MongoDB connected successfully`);
})

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        validate: [validator.isEmail, 'Please fill a valid email address. prenume.nume@info.uaic.ro'],
    },
    matricolNumber: {
        type: String,
        required: true,
    }
})

const studentModel = conn.model('students', studentSchema);

module.exports.GetAllStudents = () => {
    return new Promise((resolve, reject) => {
        const query = studentModel.find({});

        query.lean().exec((err, res) => {
            if (res)
                resolve(res)
            else
                reject(err)
        })
    })
}

module.exports.RemoveAllFromCollections = () => {
    return new Promise((resolve, reject) => {
        const query = studentModel.remove({})

        query.lean().exec((err, res) => {
            if (res)
                resolve(res)
            else
                reject(err)
        })
    })
}

module.exports.GetStudentById = (id) => {
    return new Promise((resolve, reject) => {
        const query = studentModel.findOne({ _id: id });

        query.lean().exec((err, res) => {
            if (res) resolve(res)
            else
                reject(err)
        })
    })
}

module.exports.SetStudent = (student) => {
    const newStudent = new studentModel(student);

    return new Promise((resolve, reject) => {
        // check if data matches the requirements of schema
        const getError = newStudent.validateSync();
        if (getError) {
            reject(getError, '[ERROR] Something went wrong.Bad request.')
        }

        newStudent.save((err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
    })
}

module.exports.RemoveStudent = studentId => {

    return new Promise((resolve, reject) => {
        const query = studentModel.findByIdAndRemove(studentId);

        query.lean().exec((err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.UpdateStudent = (studentId, data) => {
    return new Promise((resolve, reject) => {
        const query = studentModel.findByIdAndUpdate({ _id: studentId }, data, (err, res) => {
            if (err)
                reject(err)
            else
                resolve(res)
        })
    })
}