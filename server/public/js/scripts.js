const userIcon = document.querySelector(".user")
const userLink = document.querySelector(".user-link")
userIcon.addEventListener("click",function(){
   
   userLink.style.display="block";
      if(userLink.style.display=="block"){
         userIcon.addEventListener("click",function(){
            const userLink = document.querySelector(".user-link")
            userLink.style.display="none";
      });

   }

});








   
