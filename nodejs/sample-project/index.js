const convertHTMLToPDF = require("pdf-puppeteer");

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
    pdf => console.log(`Pdf created`),{
        path : `/home/aniruddha/Desktop/my.pdf`
    }
);