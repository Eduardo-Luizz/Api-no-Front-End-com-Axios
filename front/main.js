const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
  .then( response => {
    apiResult.textContent = JSON.stringify(response.data);
    // console.log(response) // ver o que vai ser a resposta
  })
  .catch( error => console.log(error) )
}

function addUser(newUser) {
  axios.post(url, newUser)
  .then(response => console.log(response) )
  .catch( error => console.log(error) )
}

const newUser = {
  name: "Eduardo da Silva",
  avatar: "https://picsum.photos/200/300",
  city: "Rio do sul"
}

function getUser(id) {
  axios.get(`${url}/${id}`)
  .then( response => {
    const data = response.data
    userName.textContent = JSON.stringify(data.name);
    userCity.textContent = JSON.stringify(data.city);
    userId.textContent = JSON.stringify(data.id);
    userAvatar.src = (data.avatar);
  })
  .catch( error => console.log(error) )
}

function updateUser(id, userUpdated) {
  axios.put(`${url}/${id}`, userUpdated)
 .then( response => console.log(response) )
 .catch( error => console.log(error) )
}

const userUpdated = {
  name: "Updated",
  avatar: "https://picsum.photos/200/300",
  city: "Rio de janeiro"
}

function deleteUser(id) {
  axios.delete(`${url}/${id}`, userUpdated)
  .then( response => console.log(response) )
  .catch( error => console.log(error) )
}

// updateUser(1, userUpdated)
getUsers()
addUser(newUser)
getUser(19)
deleteUser(9)