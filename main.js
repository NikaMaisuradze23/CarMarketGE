let slideIndex = 1;
showSlides(slideIndex);

function nextslides(n) {
  showSlides(slideIndex += n);
}

function nowslide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}




function passval()
    {
        var password = document.getElementById("password1").value;
        
        if(password == "")
        {
            document.getElementById("pass").innerHTML = "პაროლის სიძლიერე: ცარიელი";
            return false;
        }
        
        
        if (password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g))
        {
                document.getElementById("pass").innerHTML = "პაროლის სიძლიერე: ძლიერი";
                return false;
        }       

        if (password.match(/[a-z]/g) && password.match(/[0-9]/g))
        {
                document.getElementById("pass").innerHTML = "პაროლის სიძლიერე: საშუალო";
                return false;       
        }

        if (password.match(/[a-z]/g))
        {
                document.getElementById("pass").innerHTML = "პაროლის სიძლიერე: სუსტი";
                return false;       
        }else {
                document.getElementById("pass").innerHTML = "ჩაწერეთ პაროლი ახლიდან";
                return false;
        }
        
        
    }




function twopass() {  
  var pw1 = document.getElementById("password1"); 

  var pw2 = document.getElementById("password2");  

  if(pw1 != pw2)  
  {   
    document.getElementById("pass2").innerHTML = "პაროლები არ ეთხვევა";  
    return false;
  } else {  

    document.getElementById("pass2").innerHTML = "პაროლები სწორია"; 
    return false;
  }  
} 




function email() {
  var em = document.getElementById("email"); 
  if(em.match(/[@]/g)) {
    document.getElementById("meial").innerHTML = "ემაილი სწორია";
    return false;
  }else{
    document.getElementById("meial").innerHTML = "ემაილი არასწორია";
    return false;
  }

}