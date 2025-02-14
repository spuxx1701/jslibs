/* eslint-disable no-console */
/* eslint-disable no-undef */
import { promises as fs } from 'fs';
import { existsSync } from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

async function findCoverageFiles() {
  const coverageFiles = [];
  const dirsToSearch = ['apps', 'packages'];

  for (const dir of dirsToSearch) {
    const fullPath = path.join(process.cwd(), dir);
    if (!existsSync(fullPath)) {
      console.error(`Directory ${fullPath} does not exist.`);
      process.exit(1);
    }
    const subDirs = await fs.readdir(fullPath);
    for (const subDir of subDirs) {
      const subDirPath = path.join(fullPath, subDir);
      if ((await fs.stat(subDirPath)).isDirectory()) {
        const coveragePath = path.join(
          subDirPath,
          'reports',
          'vitest',
          'coverage',
          'coverage-final.json',
        );
        if (existsSync(coveragePath)) {
          coverageFiles.push(coveragePath);
          console.log(`Found coverage file: ${coveragePath}`);
        }
      }
    }
  }
  return coverageFiles;
}

async function copyCoverageFiles(coverageFiles, targetDir) {
  for (let i = 0; i < coverageFiles.length; i++) {
    const file = coverageFiles[i];
    // Append index to the file name to avoid overwriting
    const targetFile = path.join(targetDir, `${path.basename(file, '.json')}-${i}.json`);
    await fs.copyFile(file, targetFile);
  }
}

async function reportCoverage() {
  try {
    const outputDir = path.join(process.cwd(), 'reports', 'vitest', 'coverage');
    await fs.mkdir(outputDir, { recursive: true });
    const coverageFiles = await findCoverageFiles();
    await copyCoverageFiles(coverageFiles, outputDir);

    if (coverageFiles.length === 0) {
      console.error('No coverage files found!');
      process.exit(1);
    }

    const reportResult = spawnSync('nyc', [
      'report',
      '--reporter=cobertura',
      '--temp-dir',
      outputDir,
      '--report-dir',
      outputDir,
    ]);

    if (reportResult.error || reportResult.status !== 0) {
      console.error(
        'Error generating report:',
        reportResult.error || reportResult.stderr.toString(),
      );
      process.exit(1);
    }

    console.log('Coverage report generated successfully!');
    console.log(`Output: ${path.join(outputDir, 'cobertura-coverage.xml')}`);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

reportCoverage();
