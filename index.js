import readline from "readline";
import DirectoryManager from "./classes/DirectoryManager.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const manager = new DirectoryManager();

const parseCommand = (command) => {
  const parts = command.trim().split(" ");
  switch (parts[0]) {
    case "CREATE":
      if (parts.length !== 2) {
        throw new Error("secund parameter is required");
      }
      return manager.createDirectory(parts[1]);
    case "MOVE":
      if (parts.length !== 3) {
        throw new Error("all three parameters are required");
      }
      manager.moveDirectory(parts[1], parts[2]);
      break;
    case "DELETE":
      if (parts.length !== 2) {
        throw new Error("secund parameter is required");
      }
      manager.deleteDirectory(parts[1]);
      break;
    case "LIST":
      manager.listDirectories("/");
      break;
    default:
      throw new Error("Unknown command");
  }
};

function startConsole() {
  rl.question("Enter a command (CREATE, MOVE, DELETE, LIST): ", (command) => {
    try {
      parseCommand(command);
    } catch (error) {
      console.error(error.message);
    }
    startConsole();
  });
}

startConsole();
