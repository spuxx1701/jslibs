import { execSync } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';

async function findIndexFiles(dir) {
  let indexFiles = [];
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      indexFiles = indexFiles.concat(await findIndexFiles(fullPath));
    } else if (file.isFile() && file.name === 'index.ts') {
      indexFiles.push(fullPath);
    }
  }

  return indexFiles;
}

async function generateDocs() {
  const packagesDir = path.join(process.cwd(), '../packages');
  const packageFolders = await fs.readdir(packagesDir, { withFileTypes: true });

  for (const folder of packageFolders) {
    if (folder.isDirectory()) {
      const srcDir = path.join(packagesDir, folder.name, 'src');
      const indexFiles = await findIndexFiles(srcDir);

      for (const indexFile of indexFiles) {
        const relativePath = path.relative(packagesDir, indexFile);
        const outputDir = path.dirname(relativePath.replace('src/', '').replace('index.ts', ''));
        const outputPath = path.join(`${process.cwd()}/output`, outputDir);
        const entryFileName = path.basename(path.dirname(relativePath));
        // const outputPath = indexFile.replace('index.ts', '');
        const command = `pnpm typedoc --entryPoints ${indexFile} --out ${outputPath} --entryFileName ${entryFileName}`;
        console.log(`Running: ${command}`);
        execSync(command, { stdio: 'inherit' });
      }
    }
  }
}

generateDocs().catch(console.error);
