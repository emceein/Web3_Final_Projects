
      window.addEventListener('scroll', function() {
      let scroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let pageScrolled = (scroll / height) * 100;
      document.getElementById('progress-bar').style.width = pageScrolled + "%";
      });
  
      //modal
      function openModal() {
          document.getElementById("myModal").style.display = "block";
      }

      function closeModal() {
          document.getElementById("myModal").style.display = "none";
      }
      //modal

      //login in modal
      const numb = document.getElementById('numb');
      const pass = document.getElementById('pass');
      const btn = document.getElementById('btn');
      const msg = document.querySelector('.msg');
      btn.disabled = true;
  
      const regexNumb = /^(0|\+98)?9\d{9}$/;
        const regexPass = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{5,20}$/;
  
      function shiftButton(event) {
          showMsg()
        const positions = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];
        const currentPosition = positions.find(dir => btn.classList.contains(dir));
        const nextPosition = positions[(positions.indexOf(currentPosition) + 1) % positions.length];
        btn.classList.remove(currentPosition);
        btn.classList.add(nextPosition);
      }
  
      function showMsg() {
  
  
        const isEmpty = numb.value === '' || pass.value === '';
        const isNumbValid = regexNumb.test(numb.value);
        const isPassValid = regexPass.test(pass.value.toString());
  
        btn.disabled = isEmpty || !isNumbValid || !isPassValid;
  
        if (msg.innerText = isEmpty || !isNumbValid || !isPassValid) {
          btn.disabled = true;
      msg.style.color = 'rgb(218 49 49)';
      msg.innerText = 'Please fill the input fields before proceeding';
        }else{
          msg.innerText = 'Great! Now you can proceed';
      msg.style.color = '#92ff92';
      btn.disabled = false;
      btn.classList.add('no-shift');
  
      localStorage.setItem("Phone Number", numb.value);
      localStorage.setItem("Password", pass.value.toString());
        } 
  
        msg.style.color = isEmpty || !isNumbValid || !isPassValid
          ? 'rgb(218 49 49)'
          : '#92ff92';
      }
  
      numb.addEventListener('input', showMsg);
      pass.addEventListener('input', showMsg);
      btn.addEventListener('mouseover', shiftButton);
      btn.addEventListener('touchstart', shiftButton);
      
      //preloader
      $(function () {
        function showloader() {
          $(".preloader-wrapper").show();
        }

        setTimeout(function () {
          $(".preloader-wrapper").hide();
        }, 2000);

        // slider

        $(".carousel-control-next").click(function () {
          $(".img1").fadeOut(2000);
          $(".img2").fadeIn(2000);
        });
        $(".carousel-control-prev").click(function () {
          $(".img1").fadeIn(1000);
          $(".img2").hide(1000);
        });

        // sidebar

        let items = [
          { title: "Luxury Hotel" },
          { title: " five star" },
          { title: " Art & Beauty (23)" },
          { title: " Digital Agency (10)" },
        ];

        for (i = 0; i < items.length; i++) {
          $(".sidebar-category-list-item").append(
            `  <a href="#" class="sidebar-category"> ${items[i].title}</a>`
          );
        }
      });

      // magnificPopup
      var groups = {};
      $(".galleryItem").each(function () {
        var id = parseInt($(this).attr("data-group"), 10);

        if (!groups[id]) {
          groups[id] = [];
        }

        groups[id].push(this);
      });

      $.each(groups, function () {
        $(this).magnificPopup({
          type: "image",
          closeOnContentClick: true,
          closeBtnInside: false,
          gallery: { enabled: true },
        });
      });

    
      // modal
      function login() {
        document.getElementById("modal").style.top = "100px";
        // document.getElementById("modal").style.display = "block";
        $("#modal").fadeIn();
      }
      $("#close1").click(function () {
        $('#modal').fadeOut();
      })
      $("input[data-regex]").keyup(function () {
        let regType = $(this).attr("data-regex");

        let regex = null;
        if (regType == "phone_number") regex = /^(0|\+98)?9\d{9}$/;
        else if (regType == "email")
          regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        else if (regType == "national_code") regex = /^[0-9]{10}$/;

        let inputVal = $(this).val();
        if (regex.test(inputVal)) {
          $("input").next().hide();
          // $('p').hide()
        } else {
          $("input").next().show();
          // $('p').show()
        }
      });

    
      $.get("http://localhost:3000/rooms", function (data, status) {
        $("#rooms").append("<option></option>");
        for (let i = 0; i < data.length; i++) {
          $("#rooms").append(
            `<option value="${data[i].id}">${data[i].id}</option>`
          );
        }
      });
      $("#rooms").change(function () {
        $("#services").empty();
        let roomId = $(this).val();
        $.get("http://localhost:3000/rooms", function (data, status) {
          $("#services").append("<option></option>");
          for (let i = 0; i < data.length; i++) {
            $("#services").append(
              `<option value= "${data[i].id}">${data[i].bed}</option>`
            );
          }
        });
      });
    
    
    
    
      
      function showSidenave() {
        document.querySelector(".sidenave").classList.add("active");
      }

      function hideSidenave() {
        document.querySelector(".sidenave").classList.remove("active");
      }

    
       // counterup
$(document).ready(function () {
  counter(); // call counter function

  function counter() {
    $(".num").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 5000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
    setTimeout(counter, 8000); // for repeating every : 8sec - 5sec = 3sec
  }
});
    


let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "hedie",
    bed: "single",
    img: "diana-roof-garden-hotel-rome-img-9.jpg",
    price: 120000,
  },
  {
    id: 2,
    name: "sima",
    bed: "dubble",
    img: "hotel-diana-roof-garden-roma-appartamento-con-cucina-IMG-1971.JPG.jpg",
    price: 120000,
  },
  {
    id: 3,
    name: "mahtab",
    bed: "dubble",
    img: "mg3.jpg",
    price: 220000,
  },
  {
    id: 4,
    name: "roya",
    bed: "dubble",
    img: "mg3.jpg",
    price: 123000,
  },
  {
    id: 5,
    name: "sahel",
    bed: "single",
    img: "hotel-diana-roof-garden-roma-appartamento-con-cucina-IMG-1971.JPG.jpg",
    price: 320000,
  },
  {
    id: 6,
    name: "avishar",
    bed: "dubble",
    img: "272444001.jpg",
    price: 120000,
  },
];
let listCards = [];
function booking() {
  products.forEach((value, key) => {
    let myDive = document.createElement("div");
    myDive.classList.add("item");
    myDive.innerHTML = `
         <img src="img/${value.img}">
            <div class="title">${value.name}</div>
            <div class="title">${value.bed}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(myDive);
  });
}
booking();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let myDive = document.createElement("li");
      myDive.innerHTML = `
      <img src="img/${value.img}">
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(myDive);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
