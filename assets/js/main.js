
/*get API*/
const listBlog=[];

console.log("abicanioas");
function getListBlog(){
  const listResult=[];
  const list=[];
  var postApi='http://localhost:3000/blogs';
  fetch(postApi)
  .then(response => response.json())
  .then(data => list=data);
  console.log(list);
  return listResult;
}

