// let fetchApi = async () => {
//   let data = await fetch("https://dummyjson.com/products");
//   let finalData = await data.json();
//   console.log(finalData.products);
// };
// fetchApi();

let fetchApi = async () => {
  let data = await fetch("https://dummyjson.com/products");
  let finalData = await data.json();
  console.log(finalData.products);
  finalData.products.map((product) => {
    console.log(product);
  });
};

fetchApi();

// async function fetchApi() {
//   let data = await fetch("https://dummyjson.com/products");
//   let finalData = await data.json();
//   console.log(finalData);

//   if (Array.isArray(finalData.products)) {
//     finalData.products.map((result) => {
//       console.log(result);
//     });
//   } else {
//     console.log("No products array found!");
//   }
// }
// fetchApi();
