const Student = require('../models/Student')
const Utils = require('../Utils')


module.exports.GetStudents = async (res) => {
    try {
        const students = await Student.GetAllStudents();
        return Utils.returnSuccess(res, students, 200)
    } catch (error) {
        return Utils.returnError(res, '[ERROR] Something went wrong with DB.', 500)
    }
}
module.exports.GetStudentsById = async (res, body, studentId) => {
    try {
        const student = await Student.GetStudentById(studentId);
        return Utils.returnSuccess(res, student, 200);
    } catch (error) {
        return Utils.returnError(res, '[ERROR] Student with id:' + studentId + ' not found in DB.', 404)
    }
}

module.exports.SetStudent = async (res, body, params) => {
    try {
        body = JSON.parse(body);
        let { name, email, matricolNumber } = body;
        const newStudent = await Student.SetStudent({ name, email, matricolNumber });
        return Utils.returnSuccess(res, newStudent, 201);
    } catch (error) {
        return Utils.returnError(res, { error: error.message }, 400)
    }
}

module.exports.RemoveStudentAll = async (res, body, studentId) => {
    try {
        query = await Student.RemoveAllFromCollections()
        return Utils.returnSuccess(res, 'All students have been deleted.', 200);
    } catch (error) {
        return Utils.returnError(res, '[ERROR] Something went wrong.', 400)
    }
}
module.exports.RemoveStudent = async (res, body, studentId) => {
    let student;
    try {
        student = await Student.GetStudentById(studentId)
    } catch (error) {
        return Utils.returnError(res, '[ERROR] Student with id:' + studentId + ' not found in DB.', 404)
    }

    try {
        const student = await Student.RemoveStudent(studentId)
        // should be status 204 if no content is retrieved
        return Utils.returnSuccess(res, `Student with id:${studentId} has been removed. `, 200);
    } catch (error) {
        return Utils.returnError(res, '[ERROR] Student with id:' + studentId + ' not found in DB.', 404)
    }
}

module.exports.UpdateStudent = async (res, body, studentId) => {
    body = JSON.parse(body);
    let { name, email, matricolNumber } = body;

    let student;
    let objToModify = {}
    try {
        student = await Student.GetStudentById(studentId)
    } catch (error) {
        return Utils.returnError(res, '[ERROR] Student with id:' + studentId + ' not found in DB.', 400)
    }

    if (name) {
        objToModify.name = name;
    }
    if (email) {
        objToModify.email = email;
    }
    if (matricolNumber) {
        objToModify.matricolNumber = matricolNumber;
    }

    try {
        const updatedStudent = await Student.UpdateStudent(studentId, objToModify)
        // should be 202 if no message is returned
        return Utils.returnSuccess(res, `Student with id:${studentId} has been updated.`, 200)
    } catch (error) {
        return Utils.returnError(res, { error: error.errmsg }, 400)
    }
}


module.exports.UpdateStudentAllFields = async (res, body, studentId) => {
    body = JSON.parse(body);
    let { name, email, matricolNumber } = body;

    let objToModify = {}
    try {
        student = await Student.GetStudentById(studentId)
    } catch (error) {
        return Utils.returnError(res, '[ERROR] Student with id:' + studentId + ' not found in DB.', 400)
    }

    // need verification
    if (!name) {
        return Utils.returnError(res, { error: `[ERROR] Field: name is empty.` }, 400)
    } else if (!email) {
        return Utils.returnError(res, { error: `[ERROR] Field: email is empty.` }, 400)
    } else if (!matricolNumber) {
        return Utils.returnError(res, { error: `[ERROR] Field: matricolNumber is empty.` }, 400)
    } else {
        objToModify.name = name;
        objToModify.email = email;
        objToModify.matricolNumber = matricolNumber;
        try {
            const updatedStudent = await Student.UpdateStudent(studentId, objToModify)
            // should be 202 if no message is returned
            return Utils.returnSuccess(res, `Student with id:${studentId} has been updated.`, 200)
        } catch (error) {
            return Utils.returnError(res, { error }, 400)
        }
    }

}