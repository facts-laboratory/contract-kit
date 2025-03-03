import { build } from 'esbuild';
import replace from 'replace-in-file';

build({
  entryPoints: ['./src/contract.js'],
  outdir: './dist',
  minify: false,
  bundle: true,
  format: 'esm',
})
  .catch(() => process.exit(1))

  .finally(() => {
    replace.sync({
      files: './dist/contract.js',
      from: [/\(\(\) => {/g, /}\)\(\);/g],
      to: '',
      countMatches: true,
    });
    replace.sync({
      files: './dist/contract.js',
      from: ['async function handle'],
      to: 'export async function handle',
      countMatches: true,
    });
    replace.sync({
      files: './dist/contract.js',
      from: [
        `
export {
  handle
};`,
      ],
      to: '',
      countMatches: true,
    });
  });
