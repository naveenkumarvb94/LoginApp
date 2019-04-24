
const tableJson = (state = JsonData, action) => {
  switch (action.type) {
    case 'GETEMPLOYEEDATA':
      return state
    default:
      return state
  }
}

const JsonData = {
    user:[{
    "id":1,
    "name":"test1",
    "age" : "11",
    "gender":"male",
    "email" : "test1@gmail.com",
    "phoneNo" : "9738452245"
    },
    {
    "id" : 2,
    "name":"test2",
    "age" : "12",
    "gender":"male",
    "email" : "test2@gmail.com",
    "phone" : "12233444",
    },
    {
    "id":3,
    "name":"test3",
    "age" : "13",
    "gender":"male",
    "email" : "test3@gmail.com",
    "phoneNo" : "9738452245"
    },
    {
    "id":4,
    "name":"test4",
    "age" : "14",
    "gender":"male",
    "email" : "test4@gmail.com",
    "phoneNo" : "9738452245"
    },
    {
    "id":5,
    "name":"test5",
    "age" : "15",
    "gender":"male",
    "email" : "test5@gmail.com",
    "phoneNo" : "9738452245"
    }]
 };

export default tableJson;