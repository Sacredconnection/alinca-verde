import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../src/App';

const distIndexPath = path.resolve('dist/index.html');

async function prerender() {
  const html = await fs.readFile(distIndexPath, 'utf8');
  const appHtml = renderToString(React.createElement(App));

  const replaced = html.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${appHtml}</div>`,
  );

  await fs.writeFile(distIndexPath, replaced, 'utf8');
  console.log('Prerender complete: dist/index.html updated with app HTML.');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
