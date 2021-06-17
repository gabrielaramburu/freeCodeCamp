// Only change code below this line
function urlSlug(title) {
    title = title.trim();
    let urlTitle = title.split(" ");
    
    urlTitle = 
      urlTitle
      .filter(word => word ==="" ? false:true)
      .map(word => word.trim());
  
    return urlTitle.join("-").toLowerCase();
    }
  console.log(urlSlug("  Winter Is  Coming"));
  // Only change code above this line
  