const link = [
    {
      label: "week1 home",
      url: "../index.html"
    }
  ]
  
  document.write("<ul>");

  for(var i=0; i<link.length; i++){
      document.write("<li>");
      document.write("<a href=",link[i].url,">",link[i].label,"</a>");
      document.write("<\/li>");
  }
  document.write("<\/ul>");