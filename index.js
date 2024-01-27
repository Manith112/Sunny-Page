const list = document.getElementById("list")
const burger = document.getElementById("burger")

burger.addEventListener("click", function(){
    list.style.display = (list.style.display === 'flex') ? 'none' : 'flex';

    burger.classList.toggle('burger-active');
})