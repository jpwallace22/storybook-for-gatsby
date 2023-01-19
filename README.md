# **Storybook for Gatsby**

## **Installation**

Add it to your dev dependencies with your package manager of choice:

```bash
#yarn
yarn add storybook-for-gatsby -D

#npm
npm install --save-dev storybook-for-gatsby
```

Then add the addon to your Storybook config at `.storybook/main.js`:

```js
// .storybook/main.js

module.exports = {
  addons: ['storybook-for-gatsby'],
};
```

## **Limitations**

- Gatsby v4 or above
- Storybook to be configured for Webpack 5
  ([Storybook with Webpack 5 docs](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#webpack-5))

## **License**

```
MIT License

Copyright (c) 2023 Justin Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
