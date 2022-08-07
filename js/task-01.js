const allCategoriesEl = document.querySelector('ul#categories');

console.log(allCategoriesEl);

const categoryItemsRef = document.querySelectorAll('.item');
console.log('Number of categories:', categoryItemsRef.length);

categoryItemsRef.forEach(element => {
  const titleEl = element.firstElementChild.textContent;
  console.log(`Category: ${titleEl}`);

  const itemsEl = element.lastElementChild.children.length;
  console.log(`Elements: ${itemsEl}`);
});
