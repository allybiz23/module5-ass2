function getTickets() {
    var employeeId = document.getElementById('employeeId').value;
    var xhr = new XMLHttpRequest();
    var url = 'path_to_server/tickets.xml?employeeId=' + employeeId;

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var xml = xhr.responseXML;
            displayTickets(xml);
        }
    };
    xhr.send();
}

function displayTickets(xml) {
    var ticketsTable = document.getElementById('ticketsTable').getElementsByTagName('tbody')[0];
    ticketsTable.innerHTML = ''; // Clear any existing rows

    var tickets = xml.getElementsByTagName('ticket');
    for (var i = 0; i < tickets.length; i++) {
        var row = ticketsTable.insertRow();

        var requestDate = tickets[i].getElementsByTagName('requestdate')[0].textContent;
        var employeeId = tickets[i].getElementsByTagName('employeeid')[0].textContent;
        var firstName = tickets[i].getElementsByTagName('firstname')[0].textContent;
        var lastName = tickets[i].getElementsByTagName('lastname')[0].textContent;
        var problemDescription = tickets[i].getElementsByTagName('problemdescription')[0].textContent;
        var status = tickets[i].getElementsByTagName('status')[0].textContent;
        var response = tickets[i].getElementsByTagName('response')[0].textContent;

        row.insertCell(0).textContent = requestDate;
        row.insertCell(1).textContent = employeeId;
        row.insertCell(2).textContent = firstName;
        row.insertCell(3).textContent = lastName;
        row.insertCell(4).textContent = problemDescription;
        row.insertCell(5).textContent = status;
        row.insertCell(6).textContent = response;
    }
}
