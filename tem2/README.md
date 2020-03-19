# Students REST API

# Instruction to run the app locally
* Clone the project
* Go to project folder
* Run npm install
* Run npm run dev
* Open Postman https://www.postman.com/ | Insomnia https://insomnia.rest/


* [GET All Students](#getAllStudents)
* [GET Student By ID](#getStudentById)
* [POST Create a Student](#createStudent)
* [PATCH Update a Student](#updateStudentById)
* [DELETE Student By ID](#deleteStudentById)

## getAllStudents

* Select Method [GET] in postman.
* Add the following URL: http://localhost:5000/api/v1/students/

## getStudentById

* Select Method [GET] in postman.
* Add the following URL: http://localhost:5000/api/v1/students/ + id of student.


## createStudent

* Select Method [POST] in postman.
* Add the following URL: http://localhost:5000/api/v1/students/

    {
        "name": "John Snow",
        "email": "john.snow@info.uaic.ro",
        "matricolNumber":"123456789",
    }

## createStudent

* Select Method [PATCH] in postman.
* Add the following URL: http://localhost:5000/api/v1/students/ + id of student

      {
          "name": "John Snow 2",
          "email": "john.sno2w@info.uaic.ro",
          "matricolNumber":"1234567891"
         }

## deleteStudentById

* Select Method [DELETE] in postman.
* Add the following URL: http://localhost:5000/api/v1/students/ + id of student

