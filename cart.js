
function appendpro() {
  let data = JSON.parse(localStorage.getItem("cart"));
  let mainDiv = document.getElementById("cartcontainer");
  data.forEach(function (el) {
    let div = document.createElement("div");
    let divimg = document.createElement("div");
    divimg.setAttribute("id", "divimgcP");
    let divPara = document.createElement("div");
    divPara.setAttribute("id", "divparaP");
    let p_name = document.createElement("p");
    p_name.innerHTML = el.name;
    p_name.setAttribute("class", "cpname");


    let p_Price = document.createElement("ul");
    p_Price.innerHTML = "₹ " + el.price; 
    p_Price.style.fontSize = "22px";
    p_Price.setAttribute("class", "cprice");

    let img = document.createElement("img");
    img.src = el.img;


    let btn1C = document.createElement("button");
    btn1C.innerHTML = `<span><i class="fas fa-heart"></i></span>    MOVE TO WISH LIST`;
    
    let btn2C = document.createElement("button");
    btn2C.innerHTML = `<span><i class="fas fa-bookmark"></i></span> SAVE FOR LATER`;

    let pricediv = document.createElement("div");

    let btn3C = document.createElement("button");
    btn3C.innerHTML = `<span<i class="far fa-trash-alt"></i></i></span> REMOVE`;
    btn3C.setAttribute("id","btnRemove")

   

    pricediv.setAttribute("class", "divprice");
    divimg.setAttribute("class", "divimg");
    divPara.setAttribute("class", "divpara");

    pricediv.append(p_Price, btn3C);
    divimg.append(img);
    divPara.append(p_name, btn1C, btn2C);
    div.append(divimg, divPara, pricediv);
  
    mainDiv.append(div);

    //   img.addEventListener("click", function () {
    //     window.location.href = "producdetail.html";
    //   });
    // div.addEventListener("click", function () {
    //   window.open("showProductdetails.html");
    //   showdetail(el);
    // });
  });
}
appendpro();

function showdetail(el) {
  localStorage.setItem("prodetaails", JSON.stringify(el));
}


function cartsum() {
  let data = JSON.parse(localStorage.getItem("cart"));
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += Number(data[i].price);
  }
  document.getElementById("ammount").innerHTML = "Cart Value  : ₹  " + sum;
}
cartsum();

// function removep(el) {
//   let arr = [];
//   let data = JSON.parse(localStorage.getItem("cart"));
//   for (var i = 0; i < data.length; i++) {
//     if (data[i].name === el.name) {
//       data.splice(0, 1);
//       appendpro(data);
//     }
//   }
// }
// removep();


// let removeItem = document.getElementById("btnRemove");
// console.log(removeItem)



 function cartcount() {
  let data = JSON.parse(localStorage.getItem("cart"));
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum = i+1;
    console.log(data[i].name.length)
  }
  document.getElementById("count").innerHTML = `(${sum})`;
}
cartcount();


 //amount
 function cartsum() {
  let data = JSON.parse(localStorage.getItem("cart"));
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += Number(data[i].price);
  }
   document.getElementById("ammount").innerHTML = "₹  " + sum;

     let amt = document.getElementById("ammount").innerHTML;
     amount = Number(amt.split(" ")[2]);
     let sum1 = amount + 3000;
     console.log(sum1);
   document.getElementById("ammounttotal").innerHTML = "₹  " + sum1;
   localStorage.setItem("cartsum1", JSON.stringify(sum));
   localStorage.setItem("cartsum2", JSON.stringify(sum1));
}
cartsum();


function sub() {
  let amt = document.getElementById("ammount")
  let promo = document.getElementById('inpval').value;
  if (promo == "masai30") {
    let x = document.getElementById("ammount").innerHTML
    console.log(x)//for amoubt to discount
    xnum = Number(x.split(" ")[2])
    let discount = Math.floor(xnum * (30 / 100))
    let sum=(xnum - discount)
    document.getElementById("ammount").innerHTML = "₹  " + sum;

   let amt = document.getElementById("ammount").innerHTML;
   amount = Number(amt.split(" ")[2]);
   let sum1 = amount + 3000;
   console.log(sum1);
    document.getElementById("ammounttotal").innerHTML = "₹  " + sum1;
    
     localStorage.setItem("cartsum1", JSON.stringify(sum));
     localStorage.setItem("cartsum2", JSON.stringify(sum1));
 
  } else {
    alert("Promo Code not Valid")
  }
}

function submit() {
  window.location.href = "Checkoutpage.html";
}