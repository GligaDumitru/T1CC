const StudentsController = require('./controllers')


const routes = [
    {
        method: 'GET',
        path: '/students',
        callback: StudentsController.GetStudents
    },
    {
        method: 'GET',
        path: '/',
        callback: StudentsController.GetStudents
    },
    {
        method: 'GET',
        path: /\/students\/([0-9a-z]+)/,
        callback: StudentsController.GetStudentsById
    },
    {
        method: 'POST',
        path: '/students',
        callback: StudentsController.SetStudent
    },
    {
        method: 'DELETE',
        path: /\/students\/([0-9a-z]+)/,
        callback: StudentsController.RemoveStudent
    },
    {
        method: 'DELETE',
        path: '/students',
        callback: StudentsController.RemoveStudentAll
    },
    {
        method: 'PATCH',
        path: /\/students\/([0-9a-z]+)/,
        callback: StudentsController.UpdateStudent
    },
    {
        method: 'PUT',
        path: /\/students\/([0-9a-z]+)/,
        callback: StudentsController.UpdateStudentAllFields
    }
]

module.exports = routes;