import DirectoryManager from "../classes/DirectoryManager";

describe("DirectoryManager", () => {
  let manager;

  beforeEach(() => {
    manager = new DirectoryManager();
  });

  test("Create and find directories", () => {
    manager.createDirectory("Animals/Dog");
    manager.createDirectory("Games/Doom");

    const animals = manager.findDirectory("Animals");
    const games = manager.findDirectory("Games");

    expect(animals).toBeDefined();
    expect(games).toBeDefined();
    expect(animals.children.length).toBe(1);
    expect(games.children.length).toBe(1);
  });

  test("Move directory", () => {
    manager.createDirectory("Animals/Dog");
    manager.createDirectory("Games/Cat");
    manager.moveDirectory("Games/Cat", "Animals");

    const animals = manager.findDirectory("Animals");
    const games = manager.findDirectory("Games");
    const cat = manager.findDirectory("Animals/Cat");

    expect(animals.children.length).toBe(2);
    expect(games.children.length).toBe(0);
    expect(cat).toBeDefined();
  });

  test("Delete directory", () => {
    manager.createDirectory("Games/Doom");
    manager.deleteDirectory("Games/Doom");

    const result = manager.findDirectory("Games/Doom");

    expect(result).toBeNull();
  });

  test("Delete non-existent directory", () => {
    expect(() => {
      manager.deleteDirectory("Animals/Cat");
    }).toThrowError("non-existent directory");
  });
});
