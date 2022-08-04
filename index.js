
// Collaspable feature in Javascript
document.querySelectorAll('legend').forEach((item, index) => {
  let form_collapse_index = document.getElementsByTagName('form')[index].children[0].children[1]
  item.addEventListener("click", () => {
    console.log(item)
    form_collapse_index.classList.toggle("Collapse");
  })
})












