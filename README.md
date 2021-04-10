# Photo Assignment App

Every other month, the data team gets together for a hackday. We spend the day working on some sort of project or newsroom tool. For my first hackday, I worked with one of our computational journalists to create an application for our photo assignment editor. I created the front-end of this app, which allows the editor to search through our staff list and assign shifts to photographers. 

This is an interactive presentation graphic built using the [`dmninteractives` Yeoman generator](https://github.com/DallasMorningNews/generator-dmninteractives).

## Requirements

- Node - `brew install node`
- Gulp - `npm install -g gulp-cli`

## Local development

#### Installation

1. `npm install` to install development tooling
2. `gulp` to open a local development server

#### What's inside

- `src/index.html` - HTML markup, which gets processed by Nunjucks
- `src/js/*.js` - Graphic scripts, written in ES2015 (it'll be transpiled with Babel)
- `src/scss/*.scss` - Graphic styles in SCSS
- `src/data/*` - files that should be both published and committed to the repository (probably CSVs, JSON, etc.); copied to `dist/data/*` by Gulp
- `src/assets/*` - assets (probably media assets, such as Illustrator files) that don’t get copied by Gulp but are tracked by `git`
- `dist/*` - All of the above, transpiled

_Important caveat:_ Video, audio and ZIP files are ignored by `git` regardless of where they're saved. You'll need to manually alter the [`.gitignore`](.gitignore) file to have them committed to Github.

#### Publishing

`gulp publish` will upload your [`dist/`](dist/) folder to the `2018/hackday/` folder on our interactives S3 bucket.

## Copyright

&copy;2018 The Dallas Morning News
