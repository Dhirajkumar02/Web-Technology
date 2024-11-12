// ! DOM methods

// ! 1. document.getElementById()
// ! 2. document.getElementsByClassName()
// ! 3. document.querySelector()

// ! 1. document.getElementById();
// let head_element = document.getElementById("head");
// console.log(head_element);

// ! 2. document.getElementsByClassName()

// let head_element = document.getElementsByClassName("head");
// console.log(head_element); //HTMLCollection [h1.head]
// ? how we can check that this is array or not
// let array = Array.isArray(head_element);
// console.log(array);
// ? convert from impure array to pure array
// let finalArray = Array.from(head_element);
// console.log(finalArray);

// finalArray.map((m) => {
//   console.log(m);
// });

// head_element.map((m) => {
//   console.log(m); //Uncaught TypeError: head_element.map is not a function
// });

// ! 3. document.querySelector()
// let head_element = document.querySelector("head"); //Uncaught ReferenceError: head_element1 is not defined
// console.log(head_element1);

// let head_element = document.querySelector(".head");
// console.log(head_element);

// let head_element = document.querySelector("#head");
// console.log(head_element);

// ! ===========================================================

// ! 1. document.getElementById()
// let head = document.getElementById("demo");
// console.log(head);

// ! insert the data into html element through js.

// head.innerText = "Hi i am cute boy";
// head.innerHTML = "hi i am Dhiraj Kumar";

// ! difference between innerText and innerHTML
// let head2 = document.getElementById("demo1")
// console.log(head2);
// head.innerText = `<a href="#">LINK</a>`
// head2.innerHTML = `<a href="#">LINK</a>`

// !

let fetchApi = async () => {
  let data = await fetch("https://api.github.com/users");
  console.log(data);
  let finalData = await data.json();
  console.log(finalData);
  let tbody = document.getElementById("tbody");
  console.log(tbody);
  finalData.map((m) => {
    tbody.innerHTML += `
             <tr>
             <td>${m.id}</td>
             <td>${m.login}</td>
             <td><img src=${m.avatar_url}></td>
             <td>${m.node_id}</td>
             <td><a href=${m.url}>LINK</a></td>
             <td><a href=${m.html_url}>LINK</a></td>
             </tr>
    `;
  });
};
fetchApi();
