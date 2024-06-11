function formatHTML(language = "korean"){
  let htmlData = {
    titleOne: "한글",
    titleTwo: "ryuhwa",
    h1: "내이름은",
    p: "입니다",
  }

  let decision = () => {
    if(language === "korean") {
      return htmlData.titleOne;
    } 
   if (language === "english"){ 
    return htmlData.titleTwo;
    }
  }

  let html = `
  <html>
    <head>
      <title>${decision()}</title>
    </head>
    <body>
      <h1>${htmlData.h1}</h1>
      <p>${htmlData.p}</p>
    </body>
  </html>
`;
return html;
}

console.log(formatHTML("korean"));
console.log(formatHTML("english"));
