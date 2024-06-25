# Console Directory Management App

This is a console application written in Node.js that simulates directory management operations.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

- Node.js (v12.x or higher)
- npm (comes with Node.js installation) or yarn

### Installing

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Jhon-Villamizar/console-directory.git
   cd console-directory-app
   ```

2. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

### Running the Application

To start the application, run:

```bash
yarn start
```

### Running Tests

To run the tests using Jest, use:

```bash
yarn test
```

## Available Commands

### Command Format

The application supports the following commands:

- **CREATE**: Create a directory.
  - Format: `CREATE <path>`
  - Example: `CREATE Animals/dog`

- **MOVE**: Move a directory to another location.
  - Format: `MOVE <source_path> <target_path>`
  - Example: `MOVE Animals/dog Games`

- **DELETE**: Delete a directory.
  - Format: `DELETE <path>`
  - Example: `DELETE Games/Doom`

- **LIST**: List directories and subdirectories under a specified path.
  - Format: `LIST`
  - Example: `LIST`, `LIST`

### Examples

#### Create a directory:

```bash
CREATE fruits
CREATE vegetables
CREATE grains
CREATE fruits/apples
CREATE fruits/apples/fuji
```

#### Move directories:

```bash
MOVE grains/squash vegetables
```

#### List directories:

```bash
LIST
```

#### Delete directories:

```bash
DELETE fruits/apples
DELETE foods/fruits/apples
```

---

Replace `<path>` and `<source_path>`, `<target_path>` with the actual paths you want to create, move, or delete.
