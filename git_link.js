var p = 1;

function next() {
  p++;
  search();
}

function prev() {
  if (p == 1) return;
  p--;
  search();
}

function search() {
  let user = document.getElementById("name").value;

  fetch(`https://api.github.com/search/users?q=${user}&per_page=10&page=${p}`)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res);
      show(res.items);
    })
    .catch((err) => {
      console.log(err);
    });
}

function show(data) {
  let cont = document.getElementById("list");
  cont.innerText = "";
  data.forEach((item) => {
    let n = document.createElement("h3");
    n.innerText = item.login;
    cont.append(n);
  });
}
