const uri = 'https://jsonplaceholder.typicode.com/users';


function getItems() {
  fetch(uri)
    .then(response => response.json())
    .then(data => show(data))
    .catch(error => console.error('Unable to get items.', error));
}

    function show(data) {
        let tab =
            `<tr>
                  <th>id</th>
                  <th>name</th>
                  <th>username</th>
                  <th>email</th>
                    <th>phone</th>
                <th>website</th>
                <th>address</th>
                <th>company</th>
             </tr>`;

        // Loop to access all rows 
      //  for (let r of data.list) {
            for (let r of data) {
                tab += `<tr> 
                <td>${r.id} </td>
                <td>${r.name}</td>
                <td>${r.username}</td> 
                <td>${r.email}</td>
                <td>${r.phone}</td>
                <td>${r.website}</td>
                <td>${JSON.stringify(r.address)}</td>
                <td>${JSON.stringify(r.company)}</td>
            </tr>`;
        }
        // Setting innerHTML as tab variable
        document.getElementById("employees").innerHTML = tab;
    }
