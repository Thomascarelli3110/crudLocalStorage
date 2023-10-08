function ReadData() {
    let listPeople; // 

    // Comprueba si hay un elemento llamado "listPeople" en el almacenamiento local (localStorage).
    if (localStorage.getItem("listPeople") == null) {
        // Si no existe "listPeople" en el almacenamiento local, crea una nueva lista vacía.
        listPeople = [];
    } else {
        // Si existe "listPeople" en el localStorage, obtén su contenido y conviértelo de JSON a un objeto JavaScript.
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }

    var html = "";

    listPeople.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.phone + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger"> Eliminar Data </button> <button onclick="editData(' + index + ')" class="btn btn-warning"> Editar Data </button>';
        html += "<tr>";
    });

    document.querySelector('#tableData').innerHTML = html;
}

document.onload = ReadData();

function addData() {
    if (ValidateForm() == true) {
        let email = document.getElementById("imputEmail").value
        let name = document.getElementById("imputName").value
        let phone = document.getElementById("imputPhone").value

        var listPeople;

        if (localStorage.getItem('listPeople') == null) {
            listPeople = [];
        } else {
            listPeople = JSON.parse(localStorage.getItem("listPeople"));
        }

        listPeople.push({
            email: email,
            name: name,
            phone: phone
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        ReadData()

        document.getElementById("imputEmail").value = "";
        document.getElementById("imputname").value = "";
        document.getElementById("imputPhone").value = "";
    }
}

