import { mkdir, copyFile } from 'node:fs/promises';

const outputDirectory = new URL('../dist/', import.meta.url);
const sourceFile = new URL('../index.html', import.meta.url);
const outputFile = new URL('../dist/index.html', import.meta.url);

await mkdir(outputDirectory, { recursive: true });
await copyFile(sourceFile, outputFile);

console.log('GODIA PRIME CONNECT build completed successfully.');
