// function Register(e) {
//   e.preventDefault()
//   let formdata = {
//     name: document.getElementById("inp1").value,
//     email: document.getElementById("inp2").value,
//     password: document.getElementById("inp3").value,
//     username: document.getElementById("inp4").value,
//     mobile: document.getElementById("inp5").value,
//     description: document.getElementById("inp6").value,
//   };
//   let data = JSON.stringify(formdata)
//   fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
//     method: "POST",
//     body: data,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then(response => {
//       return response.json()
//     })
//     .then(response => {
//       console.log(response)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

// function Login(e) {
//   e.preventDefault()
//   let formdata = {
//     username: document.getElementById("inp7").value,
//     password: document.getElementById("inp8").value,
//   };
//   let data  = JSON.stringify(formdata)
//   fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
//     method: "POST",
//     body: data,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then(response => {
//       return response.json()
//     })
//     .then(response => {
//       console.log(response)
//       getmyProfile(response,formdata)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

function Login(e) {
  e.preventDefault();
  let formdata = {
    username: document.getElementById("inp7").value,
    password: document.getElementById("inp8").value,
  };
  let data = JSON.stringify(formdata);
  fetch("https://reqres.in/api/login", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((response) => {
      window.location = "home.html";
    })
    .catch((err) => {
      console.log(err);
    });
}

// function getmyProfile({token},{username}){
//   fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
//     headers: {
//       'Authorization':`Bearer ${token}`
//     },
//   })
//     .then(response => {
//       return response.json()
//     })
//     .then(response => {
//       console.log(response)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }
