const readline = require("readline");
const DirectoryManager = require("./classes/DirectoryManager");

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
        break;
      }
      manager.createDirectory(parts[1]);
      break;
    case "MOVE":
      if (parts.length !== 3) {
        break;
      }
      manager.moveDirectory(parts[1], parts[2]);
      break;
    case "DELETE":
      if (parts.length !== 2) {
        break;
      }
      manager.deleteDirectory(parts[1]);
      break;
    case "LIST":
      if (parts.length !== 1) {
        break;
      }
      manager.listDirectories("/");
      break;
    default:
  }
};

function startConsole() {
  rl.question("Enter a command (CREATE, MOVE, DELETE, LIST): ", (command) => {
    parseCommand(command);
    startConsole();
  });
}

startConsole();
