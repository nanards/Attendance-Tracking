document.addEventListener('DOMContentLoaded', function () {
    const attendanceForm = document.getElementById('attendanceForm');
    const qrCodeContainer = document.getElementById('qrCodeContainer');


    // Function to format the current timestamp
    function getCurrentTimestamp() {
        const now = new Date();
        return now.toISOString().slice(0, 19).replace('T', ' ');
    }


    // Handle form submission
    attendanceForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission from refreshing the page


        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const status = document.getElementById('status').value;
        const address = document.getElementById('address').value;
        const timestamp = getCurrentTimestamp();


        // Store the attendance data in local storage (or push to a server later)
        const attendanceData = {
            name,
            email,
            status,
            address,
            timestamp
        };


        localStorage.setItem('attendanceData', JSON.stringify(attendanceData));


        // Clear the form
        attendanceForm.reset();
    });


    // Generate QR Code
    const qrData = window.location.href;  // Can link to a URL that contains the attendance form
    QRCode.toCanvas(qrCodeContainer, qrData, function (error) {
        if (error) console.error(error);
        console.log('QR Code generated successfully!');
    });
});
