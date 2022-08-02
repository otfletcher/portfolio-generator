const generatePage = (Name, Github) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, intitial-scale=1.0">
     <title>Portfolio Demo </title>
     </head>   
 
     <body>
     <h1>${Name}</h1>
     <h2><a href="https://github.com/${Github}">Github</a></h2>
   </body>
   </html>
    `;
 };

 module.exports = generatePage;