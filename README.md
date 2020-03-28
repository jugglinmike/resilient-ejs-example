# resilient-ejs-example

A demonstration of using [EJS](https://ejs.co/) in an
[Express](https://expressjs.com/)-powered [Node.js](https://nodejs.org) web
server.

## Getting started

1. **Install Node.js** - visit [https://expressjs.com/](https://nodejs.org) and
   follow the instructions for installing to your operating system. This
   project requires version 12 or later
2. **Download this project's source code** - use [Git](https://git-scm.com/) or
   download the archive
3. **Install the project's dependencies** - open a command line in this
   project's directory and execute the following command:

       npm install

4. Start the server

       npm start

5. Visit [http://localhost:8123](http://localhost:8123) in a web browser

## Using `include`

EJS allows views to include other views. That's a great feature for websites
that have sections that are the same across every page.

This project uses an include to avoid duplicating the demo site's "header"--you
can see that in the files named `views/index.ejs` and `views/contact.ejs`:

    <%- include('header.ejs') %>

The same approach could be used to reduce the duplication even more, like the
content in the "footer" and even the metadata in every page's `<head>` element.

## License

Copyright 2020 Mike Pennisi under [the GNU General Public License
v3.0](https://www.gnu.org/licenses/gpl-3.0.html)
