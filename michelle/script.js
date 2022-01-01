var order = document.getElementById("shopping-bag");
order.onclick = function(event) {
  location.replace("order.html");
}

document.getElementById("orderSubmit").addEventListener("click", submitOrder); 
function submitOrder() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var mail = document.getElementById("mail").value;
  var food = document.getElementById("food").value;
  var adress = document.getElementById("adress").value;
  if ( name == "" || phone == "" || mail == "" || food =="" || adress =="") {
     alert("Vui lòng nhập đầy đủ thông tin");
     window.reload();
  } else {
     alert('Đặt hàng thành công!');
  } 
}

function submitContact() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var mail = document.getElementById("mail").value;
  var note = document.getElementById("note").value;
  if ( name == "" || phone == "" || mail == "" || note =="") {
     alert("Vui lòng nhập đầy đủ thông tin");
  } else {
    alert("Đã gửi thông tin thành công");
  }
}

function back(){
  location.replace("single.html");
}

