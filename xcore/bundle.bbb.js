var start = +new Date;
var ret = 1;
for (var i = 0; i < 30000; i++) {
  // ret = ret * 2 + 100;
  // ret = (ret - 99) / 2;
  var v = document.createElement('view');
}
console.log(ret);
var end = +new Date;
console.log(end - start);

// var v = document.createElement('view');
// v.setStyle({
//   width: 10,
//   height: 10,
//   backgroundColor: '#f00'
// })
// document.body.appendChild(v)
