var tabList = document.querySelectorAll(".tabList ul li");
var tabItem = document.querySelectorAll(".tab_item");

tabList.forEach(function(List) {
    List.addEventListener("click", function() {

        var tabData = List.getAttribute("data-tc");

        console.log(tabData);
       
        tabList.forEach(function(List){
            List.classList.remove("active2");
        });
        List.classList.add("active2");

        tabItem.forEach(function(item) {
            var tabClass = item.getAttribute("class").split(" ");
            console.log(tabClass);
            
            if(tabClass.includes(tabData)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });
    })
})

document.querySelector(".accept").addEventListener("click", function() {
    alert("You have accepted the terms.");
    history.back();
});

document.querySelector(".decline").addEventListener("click", function() {
    alert("You have declined the terms.");
    window.location.href = "home.html";
});