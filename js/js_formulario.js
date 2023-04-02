let stockQuantElem = document.getElementById("stock_cant"), stockPrice = 129.07;
// Update stock price
document.getElementById("stock_price").innerHTML = "$" + stockPrice;

stockQuantElem.addEventListener('keyup', (event) => {
   let stockQuant = stockQuantElem.value;
   if(stockQuant <= 0) {
      //alert("Por favor ingrese una cantidad válida");
      document.getElementById("bad_input").classList.remove("hide");
      document.getElementById("stock_total_cost").innerHTML = "";
   } else {
      document.getElementById("bad_input").classList.add("hide");
      document.getElementById("stock_total_cost").innerHTML = "$" + Number((stockQuant * stockPrice).toFixed(3));
   }
});

document.getElementById("buy_stock_sumbit").addEventListener('click', (event) => {
   let stockQuant = stockQuantElem.value;
   if(stockQuant <= 0) {
      //alert("Por favor ingrese una cantidad válida");
      document.getElementById("bad_input").classList.remove("hide");
   } else {
      document.getElementById("bad_input").classList.add("hide");
      this.location = "Donaciones.html";
   }
});