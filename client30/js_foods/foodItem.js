export default class FoodItem {
  constructor(_parent, _item, _index, _deleteFood) {
    this.parent = _parent;
    this.name = _item.name;
    this.cals = _item.cals;
    this.price = _item.price;
    this.index = _index;
    this.id = _item._id;
    this.deleteFood = _deleteFood;
  }

  render() {
    let tr = document.createElement("tr");
    document.querySelector(this.parent).append(tr);
    tr.innerHTML = `
    <td>${this.index + 1}</td>
    <td>${this.name}</td>
    <td>${this.price} NIS</td>
    <td>${this.cals}</td>
    <td><button class="bg-danger btn-close x-btn">X</button></td>
    
    `;
    let xBtn = tr.querySelector(".x-btn");
    xBtn.addEventListener("click", () => {
      window.confirm("Delete this item?") && this.deleteFood(this.id);
    });
  }
}
