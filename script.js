const Copy = document.getElementById("email");

Copy.addEventListener("click" , () =>{
    navigator.clipboard.writeText(email.value);
    // console.log("Done")
    Copvalues = email.value;
    email.value = "Done ✅";
    setTimeout (() => {
        email.value = Copvalues ; 
    },700);
});