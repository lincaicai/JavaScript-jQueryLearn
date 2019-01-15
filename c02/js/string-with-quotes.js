var title;
var message;

//字符串带单引号，用双引号包含整个字符串
title = "Molly's Special Office";
//字符串带双引号，用单引号包含整个字符串 \是转义字符
message= '<a href=\"sale.html\">25% off!</a>';

var elTitle = document.getElementById('title');
elTitle.textContent = title;

var elNote = document.getElementById('note');
elNote.innerHTML = message;
