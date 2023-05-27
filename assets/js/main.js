window.onload = () => {
  owlCarousel.init();
  TabConfig.init('tabContainerHome');
};

const owlCarousel = {
  init: function () {
    this.setupHomeBannerCarousel();
  },
  setupHomeBannerCarousel: function () {
    $("#HomeBanner-top").owlCarousel({
      responsive: {
        0: {
          items: 1,
          slideBy: 1,
        },
        991: {
          items: 1,
          slideBy: 1,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: true,
      dots: true,
      nav: true,
      navText: [
        '<img src="./assets/icons/icon-caret-circle-left-white.svg" alt="" />',
        '<img src="./assets/icons/icon-caret-circle-right-white.svg" alt="" />',
      ],
      margin: 0,
    });

    $("#HomeBanner-bottom").owlCarousel({
      responsive: {
        0: {
          items: 1.5,
          mouseDrag: true,
          touchDrag: true,
        },
        991: {
          items: 3,
          mouseDrag: false,
          touchDrag: false,
          autoplay: false,
        },
      },
      center: true,
      autoplay: false,
      loop: true,
      lazyLoad: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dots: false,
      nav: false,
      margin: 16,
    });
  },
};
const TabConfig = {
  init: function (container){
    this.setTab(container)
  },
  setTab:function (container){
     const tabContainer = document.querySelector('#' + container)
     const tabElementButton = document.querySelectorAll('.Tabs-item-tab')
     const tabContentElement = document.querySelectorAll('.Tabs-container-content')
    function handlerClickTab(event){
      const clicked = event.target;
      if(clicked.classList.contains('Tabs-item-tab')){
        tabElementButton.forEach(tabItem => tabItem.classList.remove('active'))
        clicked.classList.add('active')
        tabContentElement.forEach(tabContentItem => tabContentItem.classList.remove('active'))
        const refContent = clicked.dataset.index;
        tabContentElement[refContent].classList.add('active')
      }
      if(clicked.classList.contains('fa-home')){
        tabElementButton.forEach(tabItem => tabItem.classList.remove('active'))
        clicked.closest('.Tabs-item-tab').classList.add('active')
        tabContentElement.forEach(tabContentItem => tabContentItem.classList.remove('active'))
        const refContent = clicked.closest('.Tabs-item-tab').dataset.index;
        tabContentElement[refContent].classList.add('active')
      }
    }
    tabContainer && tabContainer.addEventListener('click', handlerClickTab)
  },
}

TabConfig.init('tabContainerAuth');

const navContainer = document.querySelector('.NavigationLogged')
const navElement = document.querySelectorAll('.NavigationLogged-list-item')
function handlerClickNav(event){
  const clicked = event.target;
  navElement.forEach(element => element.classList.remove('active'))
  clicked && clicked.closest('.NavigationLogged-list-item').classList.add('active')
}
navContainer && navContainer.addEventListener('click', handlerClickNav);
let buttonPlus  = $(".qty-btn-plus");
let buttonMinus = $(".qty-btn-minus");
let buttonPlusCart  = $(".qty-btn-cart-plus");
let buttonMinusCart = $(".qty-btn-cart-minus");
buttonPlus.click(function() {
  let $n = $(this)
      .parent(".qty-container")
      .find(".input-qty");
  $n.val(Number($n.val())+1 );
});

buttonMinus.click(function() {
  let $n = $(this)
      .parent(".qty-container")
      .find(".input-qty");
  let amount = Number($n.val());
  if (amount > 1) {
    $n.val(amount-1);
  } else{
    $(this).parent(".qty-container").parent('.quantity').addClass('display-none')
    $(this).parent(".qty-container").parent('.quantity').prev('.btn-add-to-cart').removeClass('display-none')
  }
});


buttonPlusCart.click(function() {
  let $n = $(this)
      .parent(".qty-container-cart")
      .find(".input-qty-cart");
  $n.val(Number($n.val())+1 );
});

buttonMinusCart.click(function() {
  let $n = $(this)
      .parent(".qty-container-cart")
      .find(".input-qty-cart");
  let amount = Number($n.val());
  if (amount > 1) {
    $n.val(amount-1);
  }
});

let productContainer = document.querySelector('.ProductList')
function handlerClickShowCart(event){
  const clicked = event.target;
  if(clicked.classList.contains('btn-add-to-cart')){
    clicked.classList.add('display-none')
    clicked.nextElementSibling.classList.remove('display-none')
  }
  if(clicked.classList.contains('fa-cart-arrow-down')){
     clicked.closest('.btn-add-to-cart').classList.add('display-none')
     clicked.closest('.btn-add-to-cart').nextElementSibling.classList.remove('display-none')
  }
}
productContainer.addEventListener('click', handlerClickShowCart)