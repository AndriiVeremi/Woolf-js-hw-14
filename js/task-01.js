const allCategories = document.querySelectorAll(".item");

console.log("Number of categories:", allCategories.length);

allCategories.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});

// Variant 2 ------------

// for (let i = 0; i < allCategories.length; i++) {
//   console.log("Category:", allCategories[i].firstElementChild.textContent);
//   console.log("Elements:", allCategories[i].lastElementChild.children.length);
// }

// Variant 3 ------------

// const arrCategories = Array.from(allCategories);
// for (const categories of arrCategories) {
//     console.log("Category:", categories.firstElementChild.textContent);
//     console.log("Elements:", categories.lastElementChild.children.length);
// }

// Variant 4 ------------

// const arrCategories = [...allCategories];
// arrCategories.map((item) => {
//       console.log("Category:", item.firstElementChild.textContent);
//       console.log("Elements:", item.lastElementChild.children.length);
// })