studentAttendance = [
    {
        id: 1,
        name: 'Het',
        attendance: [1, 0, 1, 1, 1, 0, 0, 1, 1, 1]
    },

    {
        id: 2,
        name: 'Yash',
        attendance: [1, 0, 1, 1, 1, 0, 0, 1, 0, 0]
    },

    {
        id: 3,
        name: 'Ayush',
        attendance: [1, 0, 1, 1, 1, 0, 0, 0, 0, 0]
    }
]



// Show student attendance
console.log('Student Attendance:~')
studentAttendance.forEach((students) => {
    console.log(`${students.name} :- ${students.attendance.join(" ")}`)
})

// student with highest attendance
const highestAttendanceStudent = studentAttendance.reduce((acc, value) => {
    const attendance1 = acc.attendance.reduce((acc, value) => acc + value, 0);
    const attendance2 = value.attendance.reduce((acc, value) => acc + value, 0)
    return (attendance2 > attendance1) ? value : acc;
})

console.log("Student with highest attendance:~");
const highestAttendance = highestAttendanceStudent.attendance.reduce((acc, value) => acc + value, 0)
console.log(`This Student ${highestAttendanceStudent.name} has Highest Attendance with ${highestAttendance} Present Days.`)

// student with lowest attendance
const lowestAttendanceStudent = studentAttendance.reduce((acc, value) => {
    const attendance1 = acc.attendance.reduce((acc, value) => acc + value, 0);
    const attendance2 = value.attendance.reduce((acc, value) => acc + value, 0)
    return (attendance2 < attendance1) ? value : acc;
})

console.log("Student with lowest attendance:~");
const lowestAttendance = lowestAttendanceStudent.attendance.reduce((acc, value) => acc + value, 0);
console.log(` This Student ${lowestAttendanceStudent.name} has Lowest Attendance With Only ${lowestAttendance} Present Days.`)



































