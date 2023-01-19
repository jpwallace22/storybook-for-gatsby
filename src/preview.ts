import { action } from '@storybook/addon-actions';

// Needed to declare types in the `global` namespace. This identifies the file
// as a module.
export {};

declare global {
  // eslint-disable-next-line no-var
  var ___loader: {
    enqueue: () => void;
    hovering: () => void;
  };
  // eslint-disable-next-line no-var
  var __PATH_PREFIX__: string;
  // eslint-disable-next-line no-var
  var __BASE_PATH__: string;
  // eslint-disable-next-line no-var
  var ___navigate: (pathname: string) => void;
  interface Window {
    ___navigate: (pathname: string) => void;
  }
}

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/';

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions

window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};
