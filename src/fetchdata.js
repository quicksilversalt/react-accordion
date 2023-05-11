import * as React from 'react'

//https://jsonplaceholder.typicode.com/posts?_limit=10

function grabData(base, limit){
  const url = base + "?_limit=" + limit;

  return window.fetch(url)
  .then((response) => response.json())
  .then((json) => {
    //console.log(json)
    return (json)
  });
}


export {
  grabData,
}
