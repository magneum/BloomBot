const fs = require("fs");
const path = require("path");

const inputDir = "./"; // Current directory
const outputDir = "./bin"; // Output directory for converted files

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Get all files in the input directory
const files = fs.readdirSync(inputDir);

// Process each file
files.forEach((file) => {
  const filePath = path.join(inputDir, file);

  // Check if the file is a JavaScript file
  if (path.extname(file) === ".js") {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Convert CommonJS require statements to ES6 import statements
    const convertedRequire = fileContent.replace(
      /require\(([^)]+)\)/g,
      (_, moduleName) => {
        const importedModule = moduleName.trim().replace(/['"]/g, "");
        return `import ${importedModule} from '${importedModule}';`;
      }
    );

    // Convert CommonJS exports and module.exports statements to ES6 export statements
    const convertedExports = convertedRequire
      .replace(/module\.exports\s*=\s*(.*);/g, (_, exportValue) => {
        return `export default ${exportValue.trim()};`;
      })
      .replace(
        /exports\.(\w+)\s*=\s*(.*);/g,
        (_, exportedName, exportValue) => {
          return `export const ${exportedName.trim()} = ${exportValue.trim()};`;
        }
      );

    // Determine the output file path
    const outputFilePath = path.join(outputDir, file);

    // Write the converted code to a new file in the output directory
    fs.writeFileSync(outputFilePath, convertedExports);
  }
});

console.log("Conversion completed!");
