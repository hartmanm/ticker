let btc = 0;
let itr;
let arr =       ['btc', 'etc', 'eth', 'xmr', 'ltc', 'rvn'];
let alt_arr =   ['bitcoin', 'ethereum-classic', 'ethereum', 'monero', 'litecoin', 'ravencoin'];
function shell(){for (i = 0; i < arr.length; i++){itr = arr[i]; getData(itr);}}
shell();
function refresh(){shell();}
let timer = setInterval(refresh, 120000);
let alt_itr;
function alt_shell(){for (i = 0; i < alt_arr.length; i++){alt_itr = alt_arr[i]; itr = arr[i]; alt_getData(alt_itr, itr);}}
alt_shell();
function alt_refresh(){alt_shell();}
let alt_timer = setInterval(alt_refresh, 120000);
function source_refresh(){choose_source();}
let source_timer = setInterval(source_refresh, 120004);
setTimeout(choose_source, 4000);
function choose_source(){
let coin;
for(i = 0; i < arr.length; i++){
coin = arr[i]
let v = parseFloat(document.getElementById(coin).value);
v = v.toFixed(2);
let n = parseFloat(document.getElementById(coin).innerHTML);
n = n.toFixed(2);
if(n == NaN || n == "NaN" || n == 0.00 || n == "0.00"){document.getElementById(coin).innerHTML = v;}
}}
function getData(coin){
if(coin == "btc"){
let url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD";
fetch(url).then(data => data.json()).then(data => {
let n = data.last;
btc = n;
document.getElementById(coin).value = n;})}
else{
let url = "https://shapeshift.io/rate/" + coin + "_btc";
fetch(url).then(data => data.json()).then(data =>{
let n = data.rate;
n = btc * n;
n = n.toFixed(2);
document.getElementById(coin).value = n;
})}}
function alt_getData(coin, symbol){
let url = "https://api.coincap.io/v2/assets/" + coin;
fetch(url).then(data => data.json()).then(data =>{
let a = data.data.priceUsd;
let n = parseFloat(a);
n = n.toFixed(2);
document.getElementById(symbol).innerHTML = n;
})};
