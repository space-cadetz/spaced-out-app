# 🚀 spaced-out-app ![open-pr](https://img.shields.io/github/issues-pr-raw/space-cadetz/spaced-out-app) ![closed-pr](https://img.shields.io/github/issues-pr-closed/space-cadetz/spaced-out-app) ![GitHub issues](https://img.shields.io/github/issues/space-cadetz/spaced-out-app) ![GitHub contributors](https://img.shields.io/github/contributors/space-cadetz/spaced-out-app?style=plastic)

<div align="center">
<a>Space Cadets</a>
<br>
<a href="https://github.com/Edward-Regalado">Edward-Regalado</a>
<br>
<a href="https://github.com/Mmarcos01">Marie Marcos</a>
<br>
<a href="https://github.com/santorsm">Matt Santorsola</a>
<br>
<a href="https://github.com/AL0YSI0US">Aloysious</a>
<br>
</div>

**Version**: 3.5.0

+ [{ `Space Cadetz Trello Project Board` }](https://trello.com/b/okT7xSTD/spaced-out)

## Overview

<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

> D O M A I N . M O D E L

![](https://github.com/space-cadetz/spaced-out-app/blob/main/resources/domain-model.PNG?raw=true)

> W I R E F R A M E S

![](https://github.com/space-cadetz/spaced-out-app/blob/main/resources/wireframes.PNG?raw=true)

## Getting Started

<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

1. clone repo
2. install package.json : `npm init`
3. Create a `.env` file at the root of your project.
4. Copy and paste the following lines of code into the file you just created:

```bash
REACT_APP_NASA_KEY=RWodRHYYmEykujDzXa6e4O8pOXsn4sXthuHVU3hg
REACT_APP_AUTH0_DOMAIN=aloysious.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=fBPJNSLDhFeU7MwRApLs1F64LKG2z3y3
````

5. install the following dependencies :

````javascript
npm install a
````

5. `npm start` to run

<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

**Languages :** JavaScript | HTML | CSS | Markdown

**Libraries :**  React / Bootstrap | Axios | NASA | Auth0 | dotenv | Font Awesome

**Tools :** Trello | Github | VS Code / Netlify

## Change Log

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:
01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. 
-->

05-18-2021 6:53pm ✔️ Successfully Deployed from Netlify · v3 · main@449e332

05-16-2021 7:17pm ❌ Failed to Deploy from Netlify · v17 · main@474ecbe

05-15-2021 3:20pm ✔️ Successfully Deployed from Netlify · v3 · main@654e2fa

05-15-2021 11:03am ✔️ Successfully Deployed from Netlify · v2 · main@a001e46

05-15-2021 10:04am ✔️ Successfully Deployed from Netlify · v1 · main@HEAD

## Resources

+ [react-bootstrap](https://react-bootstrap.github.io/layout/grid/)
+ [NASA API's](https://api.nasa.gov/)
+ [Github - NASA apod-api](https://github.com/nasa/apod-api)
+ { `Megrim` } - [Google fonts](https://fonts.google.com/specimen/Megrim#standard-styles)
+ { `Roboto Mono` } - [Google fonts](https://fonts.google.com/specimen/Roboto+Mono)
+ [{ `Simple React.js User Login Authentication | Auth0` }](https://www.youtube.com/watch?v=MqczHS3Z2bc) Youtube tutorial on Auth0 wizardry.
+ [CSS Shadow Generator](https://cssgenerator.org/box-shadow-css-generator.html)
+ [Auth0 docs](https://auth0.com/docs/libraries/auth0-react)
+ [card-columns-props - react-bootstrap](https://react-bootstrap.github.io/components/cards/#card-columns-props)
+ [React Bootstrap Flipping Cards](https://mdbootstrap.com/plugins/react/flipping-cards/)
+ [React Website Tutorial](https://www.youtube.com/watch?v=I2UBjN5ER4s) - { `Brian Design - Youtube` }
+ [clippy](https://bennettfeely.com/clippy/) - photo editing tool
+ [Font Awesome](https://fontawesome.com/) - vector icons and social logos
+ [Make a Stellar React + NASA API App](https://www.youtube.com/watch?v=H1nENYv-r_w) - *Youtube*
+ [Responsive iframes](https://www.youtube.com/watch?v=X4t0JxiBeO0) - Imbedding Youtube

<h2 align="center">❤️ Credit and Collaborations 👥</h2>

+ Props to { `Brian Design - Youtuber` } for the stellar resources!
+ + [Brian's react website resources](https://github.com/briancodex/react-website-v1)
+ Props to { `TA Chris` } for helping us with our Auth0 and Netlify `.env` variables.
+ Props to { `TA Joe` } for assisting us with configuring our routes on Netlify.
+ [Netlify routing redirects docs](https://docs.netlify.com/routing/redirects/)
+ + [redirect-rules-for-all](https://www.netlify.com/blog/2019/01/16/redirect-rules-for-all-how-to-configure-redirects-for-your-static-site/) -*specific to our situation*

> Without an explicit redirect, the Netlify bots assume you’re requesting a page separate
> from /index.html and since that page doesn't actually exist, it returns an error.

To enable clean URLs in your Netlify deployed SPAs, add the following rule to your `_redirects` file:

````bash
/* /index.html 200
````
