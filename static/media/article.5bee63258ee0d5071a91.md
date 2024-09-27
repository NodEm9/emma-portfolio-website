
# How to Host React App With Routes on GitHub Pages

<br />

 <img src="../../assets/images/hero.avif" alt="My Image" />

**Author:** *Emmanuel*  

<div className="fs-5">**Date:**  2024-09-25</div>

<br />

In this post, I will show you how to host a React app on GitHub Pages.

Often as a beginner, it's almost inevitable not to run into this kind of issues, and it could be frustrating. Since React is one of the most popular frontend library amongst others, it's most certain you can find solutions on the internet about how you can fix any sort of problem you may encounter as you are developing your application. This is true because of React roburst users community. If you have stumbled upon this article, you should worry no more as I will teach you how to fix this problem in just a few minutes.

Before we dive in, let's quickly look at what we will learn in this article.

<br />

## Table of Contents

- [Create a React App](https://react.dev/learn/start-a-new-react-project#nextjs-pages-router)
- Install gh-pages
- Add Homepage to package.json
- Prepare your Routes
- Deploy to GitHub Pages

<br />
<br />

## Create a React App

First, create a new React app using [Create React App](https://react.dev/learn/start-a-new-react-project#nextjs-pages-router).

```bash

npx create-react-app my-app
cd my-app
```

## Install gh-pages

Next, install gh-pages package as a dev dependency.

```bash

npm install gh-pages --save-dev
```

<br />

## Add Homepage to package.json

Add a homepage field to your package.json file like so.

```json

{
  "name": "my-app",
  "version": "0.1.0",
  "homepage": "https://username.github.io/my-app",
  ...
}
```
<br />

## Prepare your Routes for GitHub Pages

To add routes that work on GitHub Pages, you need to use HashRouter instead of BrowserRouter.
Wrap the HashRouter around your routes including the Router as seen below in the App component or the index.js depending on where you choose to place your routes.  

```jsx

import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
  <HashRouter>
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
      </Router>
  </HashRouter>
  );
}
```

In the above code, we use the HashRouter instead of BrowserRouter from react-router-dom. The HashRouter uses the hash portion of the URL to create routes that work on GitHub Pages. After that, we created routes using the Route component from react-router-dom. The Route component renders a component based on the URL path. The path prop specifies the URL path and the component prop specifies the components to render when the path of the URL matches the path prop. <br /> There is one more thing we need to do to ensure it actually works correctly. To address this we must make adjustments to the navigation component.

<br />

## Create Navigation Component

Now create a navigation component if you have not yet created one, after you create the component, copy the code below and paste it inside or create navigation links using the Link component from react-router-dom or with an anchor if you prefer that.

```jsx

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="#/">Home</Link>
        </li>
        <li>
          <Link to="#/about">About</Link>
        </li>
        <li>
          <Link to="#/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
```

<blockquote className="text-secondary fw-bold"> *Now that we have created the navigation links using the Link component. The Link component creates a hyperlink to a specific route in the app, but wait a minute, we are using a hash symbol (#) before the route, why? Because we are using the HashRouter, we need to use the hash symbol before the forward slash to make it work on GitHub Pages, or else it will not work, and, that will result in a 404 error when you try to access the route directly.*</blockquote>

## Deploy to GitHub Pages

Finally, deploy your app to GitHub Pages.

```bash

npm run deploy
```

That's it! Your React app is now hosted on GitHub Pages and can route between pages successfully.

<br />

 **Was this page helpful**?

<button className="border border-0">Yes👍</button>
<button className="border border-0"> No👎</button>

<br />
<br />
<br />
