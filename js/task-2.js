class Storage {
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
  }

  getItems() {
    return this.#items;
  }

  addItem(addItem) {
    this.#items.push(addItem);
  }

  removeItem(removeItem) {
    const removeIndex = this.#items.indexOf(removeItem);
    if (removeIndex !== -1) {
      this.#items.splice(removeIndex, 1);
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
