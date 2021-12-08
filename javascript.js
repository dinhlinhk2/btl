/* Cuộn thẻ header */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    })
})
// chuyển slide
var counter=1;
setInterval(function(){
    document.getElementById('radio'+ counter).checked = true;
    counter++;
    if (counter>4){
        counter=1;
    }
},3000)
/* Gotop  */
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>300){
            $('#gotop').addClass('show');
        }else 
            $('#gotop').removeClass('show');
    })
    $('#gotop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })
})
/* chart */
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>1300){
            $('.chart-layout__item').addClass('show');
        }else 
            $('.chart-layout__item').removeClass('show');
    })
})
// search
$(document).ready(function(){
    $("#kw").on('keyup', function(event){
        var kw = $("#kw").val().toLowerCase()
        $(".item").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(kw)>-1)
        })
    })
    $("#btnsearch").click(function(){
        var k = $("#kw").val().toLowerCase()
        var items = $("div.item div.bot h1")
        for (var i=0; i< items.length;i++){
            if($(items[i]).text().toLowerCase().indexOf(k)>=0)
                $(items[i]).parent().parent().parent().css("outline","2px solid red")
        }
        setTimeout(function(){
            $("div.item").css("outline","none")
        },2000)
    })
})
/* danh muc sp */
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>50){
            $('.danhmuc').addClass('fixed');
        }else 
            $('.danhmuc').removeClass('fixed');
    })
})
/* fixed cham soc */
$(document).ready(function(){
    $(window).scroll(function(){
        if (($(this).scrollTop()>257) && ($(this).scrollTop()<2369)){
            $('.unfixed').addClass('fixed');
        }else{
            $('.unfixed').removeClass('fixed');
        }
        if($(this).scrollTop()>2369){
            $('.unfixed').addClass('absolute');
        }
        else{
            $('.unfixed').removeClass('absolute');
        }
    })
})

/* thêm giỏ */
const btn = document.querySelectorAll("#btn")
//console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("#name").innerText
        var productprice = product.querySelector("span").innerText
        addCart(productName,productImg,productprice)
    }})
})
function addCart(productName,productImg,productprice){
    var add = document.createElement("div")
    var cartItem = document.querySelectorAll(".tbody .table-body")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){
            document.querySelector("input").value
            
            
        }
    }
    var divcontent = '<div class="table-body"><div style="display: flex; text-align: center;"><img width="70px" src="'+productImg+'" alt=""><span  style="font-size: 14px" class="margin-auto title">'+productName+'</span></div><div class="margin-auto" ><p>'+productprice+'</p></div><div class="margin-auto"><input type="number" value="1" min="1"></div><div class="margin-auto dele">xóa</div></div>'
    add.innerHTML = divcontent
    var cartTable = document.querySelector(".tbody")
    cartTable.append(add)
    cartTotal()
    SL()
    dele()
}
/*-------------- */
function SL(){
    var cartItem = document.querySelectorAll(".tbody .table-body")
    var totalSL = 0
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        totalSL = i+1
        var dele = document.querySelectorAll(".dele")
        dele[i].addEventListener("click",function(event){
            totalSL = i-1
            SL()
        })
    }
    var cartTotalSL = document.querySelector(".shop-icon span")
    cartTotalSL.innerHTML = totalSL
}
/*---------------Totalprice-----------*/
function cartTotal(){
    var cartItem = document.querySelectorAll(".tbody .table-body")
    var totalB = 0
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productprice = cartItem[i].querySelector("p").innerText
        totalA = inputValue*productprice*1000
        totalB = totalB + totalA
    }
    var cartTotalprice = document.querySelector(".total span")
    cartTotalprice.innerHTML = totalB.toLocaleString('de-DE')
    inputChange()
}
/*------------- Dele Cart---------- */
function dele(){
    var cartItem = document.querySelectorAll(".tbody .table-body")
    for (var i=0;i<cartItem.length;i++){
        var dele = document.querySelectorAll(".dele")
        dele[i].addEventListener("click",function(event){
            var deleItems = event.target
            var deleItem = deleItems.parentElement
            deleItem.remove()
            cartTotal()
        })
    }
}
function inputChange(){
    var cartItem = document.querySelectorAll(".tbody .table-body")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            cartTotal()
        })
    }
}
const cartClose = document.querySelector(".ti-close")
const cartShow = document.querySelector(".ti-shopping-cart")
cartShow.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0"
})
cartClose.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "-100%"
})

// đóng/mở menu
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
mobileMenu.onclick = function() {
    var isClose = header.clientHeight===headerHeight;
    if (isClose) {
        header.style.height='auto';
    }
    else {
        header.style.height=null;
        }
}
// tự đóng menu
var menuIems =document.querySelectorAll('#nav li a[href*="#"]');
for ( var i=0; i<menuIems.length;i++) {
    var menuItem = menuIems[i];
    menuItem.onclick=function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (isParentMenu){
            event.preventDefault();
        } else {
            header.style.height=null;
        }           
    }
}


