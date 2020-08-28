/* 
<tr>
    <td>1</td>
    <td>Kis</td>
    <td>János</td>
    <td>55</td>
    <td>
        <div class="btn-group">
            <button class="btn btn-info">
                <i class="fas fa-sync-alt"></i>
            </button>
            <button class="btn btn-danger">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    </td>
*/

let users = [
    {surname: "Berger", firstname: "Whitney", age: 22},
    {surname: "Kovács", firstname: "Béla", age: 32},
    {surname: "Rostás", firstname: "Márió", age: 12},
    {surname: "Piros", firstname: "Gizella", age: 43},
    {surname: "Zöld", firstname: "Gábor", age: 42},
    {surname: "Maros", firstname: "Péter", age: 41},
    {surname: "Gelencsér", firstname: "Lajos", age: 31},
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};


let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";
    
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}


for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for (let j of Object.values(users[k])) {
        createTD(j, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}