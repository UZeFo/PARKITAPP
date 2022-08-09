{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww25400\viewh13180\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
function myFunction() \{\
  var starlink = document.getElementById("chicken");\
  alert(starlink.value);\
\}\
document.getElementById("search").onclick = myFunction;\
\
\
function checkbox() \{\
  var starlink = document.getElementById("option1");\
  alert('automatic');\
\}\
document.getElementById('option1').addEventListener('change', checkbox);\
\
function dropbox() \{\
  var star = document.getElementById("loc_names");\
  var strUser = star.value;\
  alert(strUser)\
\}\
document.getElementById('loc_names').addEventListener('change', dropbox);\
\
function checkbox2() \{\
  var starlink = document.getElementById("option2");\
  alert('disabled');\
\}\
document.getElementById('option2').addEventListener('change', checkbox2);\
\
function checkbox3() \{\
  var starlink = document.getElementById("option3");\
  alert('garage');\
\}\
document.getElementById('option3').addEventListener('change', checkbox3);\
\
function checkbox4() \{\
  var starlink = document.getElementById("option4");\
  alert('roadside');\
\}\
document.getElementById('option4').addEventListener('change', checkbox4);\
\
function checkbox5() \{\
  var starlink = document.getElementById("option5");\
  alert('women');\
\}\
document.getElementById('option5').addEventListener('change', checkbox5);}