function myFunction() {
  const msg = "Accessed the page's context!!";
  console.log(msg);
  alert(msg);
}

var GLOBAL_VARIABLE = "THIS IS A GLOBAL VARIABLE IN THE PAGE CONTEXT";
var GLOBAL_ARRAY = [];

function showGlobalState() {
  console.log(GLOBAL_VARIABLE);
  console.log(GLOBAL_ARRAY);
}
