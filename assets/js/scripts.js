 // Login Modal
function openLoginModal() {

    const div = document.createElement("div")
            
    div.className = "modal-backdrop fade show";
            
    document.body.appendChild(div);
            
    console.log("div ", document.body.lastChild)       

    var loginModalElement = document.getElementById("loginModal");
    console.log("Login Modal Element " , loginModalElement.style)
    loginModalElement.style.display = "block"
    console.log("Login Modal Element Style Display " , loginModalElement.style.display)
            
    console.log("Login Modal Element Original Class" , loginModalElement.className)
    console.log("Login Modal Element Original Class List" , loginModalElement.classList)
    loginModalElement.classList.add("show")
    console.log("Login Modal Element Modified Class List" , loginModalElement.classList)
    }

function clickOnModal(e){
    console.log("event ",e)
    if(e.target.id == "loginModal"){
        closeLoginModal()
    }
}

 function closeLoginModal() {
    console.log("Close Login Modal.")
    var loginModalElement = document.getElementById("loginModal");
    loginModalElement.style.display = "none";
    loginModalElement.classList.remove("show");
            
    document.body.removeChild(document.body.lastChild);
}

// Reserve Modal
function openReserveModal() {

    const div = document.createElement("div")

    div.className = "modal-backdrop fade show";

    document.body.appendChild(div);    

    var reserveModalElement = document.getElementById("reserveModal");
    reserveModalElement.style.display = "block"
    reserveModalElement.classList.add("show")
}

function clickOnReserveModal(e){
    if(e.target.id == "reserveModal"){
        closeReserveModal()
    }
}

function closeReserveModal() {
    var reserveModalElement = document.getElementById("reserveModal");
    reserveModalElement.style.display = "none";
    reserveModalElement.classList.remove("show");
            
    document.body.removeChild(document.body.lastChild);
}


$(document).ready(function(){
    console.log("Jquery Ready")
            
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#mycarousel").carousel('cycle');
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
});