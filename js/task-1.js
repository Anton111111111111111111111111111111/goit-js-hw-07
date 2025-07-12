const categories = document.querySelector('#categories');
const items = categories.children;
console.log(`Number of categories: ${items.length}`);

for (let i = 0; i < items.length; i++) {
  console.log(`Category: ${items[i].firstElementChild.textContent}`);
  console.log(`Elements: ${items[i].lastElementChild.children.length}`);
}
