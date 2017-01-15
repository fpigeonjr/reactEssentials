# React Essential
Learning React from Lynda's course [React.js Essentials][1]

## Assumptions
You already have [node][2] installed

## Getting Started
Pull down the repo and then run:

```js
npm install
npm start
```
## Background
[React][3] is a JavaScript library that is used to build user interfaces. We create reusable components and these components display data as it changes over time. [React][3] was created at Facebook and Instagram and was released initially in March 2013.

## CH1: Setting Up Chrome tools for React
Install the React extensions for the Chrome browser from Chrome Web Store.
* react-detector
    * let's you know if the site your on was built with React
* React Developer Tools
    * describes all React elements on the page

## CH2: Intro to JSX and Babel
Creating your first React Element inside your `index.js`file
First create the element with `React.createElement` and then render it with `reactDOM.render`.

```js
const title = React.createElement {
    'h1',
    { id: 'title', className: 'header' },
    Hello World
}

ReactDOM.render(
    title, //what to render
    document.getElementById('react-container') //where to render it
)
```
Switch over to your `index.html` and then create the html element we referenced above.

```html
<div id="react-container"></div>
<script src="index.js"></script>
```
Next run a local server by adding `httpster` from the console

Install it with npm by running

```js
npm install -g httpster
```

Spin up your server by running the following command from the project directory

```js
httpster -d ./dist -p 3000
```

In Chrome goto `localhost:3000` and you'll see:
* the React Element we created
* react-detector should light up
* use Chrome tools React tab to see all info

Next we can refactor our `index.js` to use ES6 restructuring

```js
const { createElement } = React
const { render } = ReactDOM

const title = createElement {
    'h1',
    { id: 'title', className: 'header' },
    Hello World
}

render(
    title, //what to render
    document.getElementById('react-container') //where to render it
)
```

Restart your server with ctrl-c and up arrow to run the command to restart it and the results in Chrome will be the same.

### Refactoring Elements using JSX
We can add styles to our React Element. So back in our `index.js`

```js
const style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Verdana'
}

//Add the property to apply the style
const title = createElement {
    'h1',
    { id: 'title', className: 'header', style: style },
    Hello World
}
```
Next we'll refactor our `render` using JSX and we can remove our `createElement` call since we are using JSX.

```js
const { render } = ReactDOM

const style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Verdana'
}

render(
    <h1 id='title'
        className='header'
        style={style}>
    Hello World
    </h1>
    document.getElementById('react-container') //where to render it
)
```
Things will break here since we need to add [Babel][4] to transpile our JSX into JS that is supported by the browser.

## Babel Transpiling
[Babel][4] is the leading tool for transpiling JavaScript.

### Setting up your project using npm
From the console run

```js
npm init
```

Give your project a name, and answer any questions that add value or hit `enter` to accept the default. Once completed, you'll see this creates a `package.json` file in your project.

Next you'll want to install the `babel-cli` to our dev dependencies

```js
npm install --save-dev babel-cli
```
and to install the package globally **optional**

```js
npm install -g babel-cli
```

### Directory Structure

We'll move all our React code to the `src` directory and our `dist` directory will contain code that is ready for the browser

### Building with webpack
Webpack is a module bundler that helps us create static files and helps us automate processes that need to happen before our files can go into production.

Create a new file called `webpack.config.js`
We'll specify the entry point of the project, where to output files, add loaders which specify the tasks we want webpack to perform. We'll replace `httpster` with webpack's `devServer`.

[1]: https://www.lynda.com/React-js-tutorials/React-js-Essential-Training/496905-2.html
[2]: https://nodejs.org/en/download/
[3]: https://facebook.github.io/react/
[4]: https://babeljs.io/