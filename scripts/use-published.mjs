/**
 * Reads the just-bumped version from s3-browser-plugin/package.json and
 * installs that exact version of vcp-s3-browser-ui into s3-browser-app from CodeArtifact.
 *
 * Usage:  node scripts/use-published.mjs
 * Called automatically by release:patch / release:minor / release:major scripts.
 */
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const pluginPkg = JSON.parse(
  readFileSync(resolve(root, '../s3-browser-plugin-ui/package.json'), 'utf8')
);
const version = pluginPkg.version;
const registry =
  'https://virtusasystems-787952688011.d.codeartifact.us-east-1.amazonaws.com/npm/vcp-react-components/';

console.log(`\n→ Installing vcp-s3-browser-ui@${version} into s3-browser-app from CodeArtifact...\n`);

const result = spawnSync(
  'pnpm',
  ['add', `vcp-s3-browser-ui@${version}`, '--registry', registry],
  { cwd: resolve(root, '../s3-browser-app'), stdio: 'inherit', shell: true }
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

console.log(`\n✓ s3-browser-app now uses vcp-s3-browser-ui@${version}\n`);
