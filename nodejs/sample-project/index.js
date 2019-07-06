const convertHTMLToPDF = require("pdf-puppeteer");
const chalk = require('chalk');

console.log(chalk`{inverse Converting HTML to PDF}`)

let html = `
    <html>
        <head>    
            <title>Sample Html</title>
        </head>
        <body>
            <h1> This is sample pdf </h1>
        </body>    
    </html>
`
convertHTMLToPDF(
    html,
    pdf => console.log(chalk`{bold bgRed Pdf created}`),{
        path : `/home/aniruddha/Desktop/my.pdf`
    }
);