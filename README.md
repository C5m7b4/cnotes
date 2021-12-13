# cnotes

A small application that will allow you to live code some ideas and then add a markdown editor to
describe your new Code snippet.

To Install:
Create a new Directory where you would like to have your Workbook

```js
  mkdir myWorkbooks

  cd myWorkbooks

  npx cnotes serve
```

You should see something like below:
![alt text](https://github.com/C5m7b4/cnotes/blob/master/docs/shot1.png?raw=true)

Optinally, you can start the server with a customer filename like so:

```js
npx cnotes serve customWorkbook
```

You can also specify the port you would like the server to run on:

```js
npx cnotes serve --port 4045
```

or you can mix it up:

```js
npx cnotes serve customWorkbook -port 4045
```
