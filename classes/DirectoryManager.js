import Directory from "./Directory.js";

class DirectoryManager {
  constructor() {
    this.root = new Directory("", null);
  }

  findDirectory(path) {
    if (path === "/") {
      return this.root;
    }

    const parts = path.split("/");
    let currentDirectory = this.root;

    for (let part of parts) {
      let foundChild = currentDirectory.children.find(
        (child) => child.name === part
      );
      if (!foundChild) {
        return null;
      }
      currentDirectory = foundChild;
    }

    return currentDirectory;
  }

  // create function
  createDirectory(path) {
    const parts = path.split("/");
    let currentDirectory = this.root;

    for (let part of parts) {
      let foundChild = currentDirectory.children.find(
        (child) => child.name === part
      );
      if (!foundChild) {
        const newDirectory = new Directory(part, currentDirectory);
        currentDirectory.addChild(newDirectory);
        currentDirectory = newDirectory;
      } else {
        currentDirectory = foundChild;
        throw new Error("the directory already exists");
      }
    }
  }

  // Move function
  moveDirectory(sourcePath, targetPath) {
    const sourceDirectory = this.findDirectory(sourcePath);
    if (!sourceDirectory) {
      throw new Error(`${sourcePath} non-existent directory`);
    }

    const targetDirectory = this.findDirectory(targetPath);
    if (!targetDirectory) {
      throw new Error(`${targetPath} non-existent directory`);
    }
    sourceDirectory.parent.removeChild(sourceDirectory.name);
    sourceDirectory.setParent(targetDirectory);
    targetDirectory.addChild(sourceDirectory);
  }

  // Delete function
  deleteDirectory(path) {
    const directoryToDelete = this.findDirectory(path);
    if (!directoryToDelete) {
      throw new Error(`non-existent directory`);
    }

    if (directoryToDelete === this.root) {
      return;
    }

    directoryToDelete.parent.removeChild(directoryToDelete.name);
  }

  // List function
  listDirectories(path) {
    const directoryToList = this.findDirectory(path);
    if (!directoryToList) {
      return "Cannot list directories";
    }
    directoryToList.listChildren();
  }
}

export default DirectoryManager;
