var price = 5;
var quantity = 14;
var total = price * quantity;

// var price, quantity, total;
// price = 5;
// quantity = 14;
// total = price * quantity;
// 快速创建变量

// var price = 5, quantity = 14;
// var total = price * quantity;
// 快速创建变量

var el = document.getElementById('cost');
el.textContent = '$' + total;

// el.innerHTML = '$' + total;
// ie8不支持，还存在安全问题