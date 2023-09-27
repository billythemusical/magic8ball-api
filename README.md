# Magic 8 Ball API 

#### *A Simple CORS-Friendly Magic 8 Ball API*

This API was created for my NYU IMA class [ReCode](https://billythemusical.github.io/recode-fa23) in the fall of 2023 in order to teach the Javascript concepts of `async` & `await` more easily using the `fetch` command. It is live (as of Sep 27, 2023) at http://lowspeedinternet.com:2999/.

Typically, cross-origin `fetch` requests from the browser will be met with a CORS error if the server to which the request is being made does not return the request with the proper headers. There are [workarounds for this](https://cors-anywhere.herokuapp.com/), but they are tedious/tenuous.

This server solution works by leveraging the `cors` package from `npm` to return the API request with the proper headers that will not trigger the CORS error. 

### API Usage

The API takes one query from the user, which is a question. The question url should be formed like so, in the case of the localhost (but you can run this API from any host you like, of course):
```js
https://127.0.0.1:3000/?question={your question here}
``` 
The API will return an answer from the [Magic 8 Ball standard set](https://magic-8ball.com/magic-8-ball-answers/) in the form of a JSON object:
```js
{ answer: "Better not tell you now." }
```
So a typical API call in Javascript might go like the following:
```js
async function askQuestion (question) {
    let apiUrl = "http://127.0.0.1:3000/?question="
    let url = apiUrl + question
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.answer)
}
```
### Installation

>Prerequisites: You need to have `Node.js` and `git` installed. FYI installing [Github Desktop](https://desktop.github.com/) will install `git` automatically.  

You can run this server anywhere you like. On your local machine or on, say, a [Digital Ocean droplet](https://m.do.co/c/489f0e4c7d15). 

First, clone this repository by typing this command in your Terminal app:
```bash
git clone https://github.com/billythemusical/magic8ball-api/
```

Then move into the cloned directory and install the dependencies:
```bash
cd magic8ball-api
npm install
```
To start the server, type:
```bash
node app.js
```
You'll see this message in the console:
```bash
Server is running on http://127.0.0.1:3000
```

If you visit the link in your browser, you should see a message like `{ answer: "Without a doubt." }`.  

>To specify a different port (the number after the `:`), you can rename `.env-example` to `.env` and change the `PORT` value. Just make sure you know what you're up to with the `.env` file, mmk?