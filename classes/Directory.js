class Directory {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  removeChild(childName) {
    this.children = this.children.filter((child) => child.name !== childName);
  }

  setParent(parent) {
    this.parent = parent;
  }

  getParent() {
    return this.parent;
  }

  listChildren(indent = 0) {
    let spaces = " ".repeat(indent * 1);
    console.log(`${spaces}${this.name}`);
    this.children.forEach((child) => {
      child.listChildren(indent + 2);
    });
  }
}

module.exports = Directory;
