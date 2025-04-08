document.addEventListener('DOMContentLoaded', function () {
    const attendanceTable = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];


    // Function to load attendance data from local storage (or server later)
    function loadAttendanceRecords() {
        const attendanceData = JSON.parse(localStorage.getItem('attendanceData'));


        if (attendanceData) {
            const newRow = attendanceTable.insertRow();


            newRow.insertCell(0).textContent = attendanceData.name;
            newRow.insertCell(1).textContent = attendanceData.email;
            newRow.insertCell(2).textContent = attendanceData.status;
            newRow.insertCell(3).textContent = attendanceData.address;
            newRow.insertCell(4).textContent = attendanceData.timestamp;
        }
    }


    // Load attendance records when the page loads
    loadAttendanceRecords();
});
