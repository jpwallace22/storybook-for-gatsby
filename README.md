# **Storybook for Gatsby**

![npm](https://img.shields.io/npm/v/storybook-for-gatsby)
![npm type definitions](https://img.shields.io/npm/types/storybook-for-gatsby)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/storybook-for-gatsby)

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

### Deploying to Chromatic

Chromatic is a tool from the makers of Storybook that automates gathering UI feedback, visual testing, and
documentation. Due to the way it reads information from the UI, it requires some extra steps to deploy. If you are using
the useStaticQuery hook anywhere in your codebase you will need to:

- Run a production build
- Copy all files from your static queries
- Build Storybook in a 'test' `NODE_ENV`

The below snippet shows how you can achieve this in your `package.json`

```json
// package.json

{
  "scripts": {
    "copy-static-queries": "cp -r ./public/page-data/sq/d ./public/static",
    "build-storybook": "gatsby build && yarn copy-static-queries && NODE_ENV=test build-storybook"
  }
}
```

## **Limitations**

- Gatsby v4 or above
- Storybook to be configured for Webpack 5
  ([Storybook with Webpack 5 docs](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#webpack-5))
- Not tested on Storybook 7 (not even sure if its needed)

## **Contributors**

<table>
<tr>
    <td align="center">
        <a href="https://github.com/jpwallace22">
            <img src="https://avatars.githubusercontent.com/u/93415734?v=4" width="100;" alt="jpwallace22"/>
            <br />
            <sub><b>Justin Wallace</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/dslovinsky">
            <img src="https://avatars.githubusercontent.com/u/65476034?v=4" width="100;" alt="dslovinsky"/>
            <br />
            <sub><b>Daniel Slovinsky</b></sub>
        </a>
    </td>
    
<tr>
</table>
