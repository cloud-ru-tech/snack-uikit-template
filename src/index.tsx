import React from 'react';
import ReactDOM from 'react-dom/client';

import { Sprite, SpriteSVG } from '@snack-uikit/icons';

import { App } from '#app';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Sprite content={SpriteSVG} />
    <App />
  </React.StrictMode>,
);
