console.log("Your index.js file is loaded correctly!");
var fileDownloadPath = "images/Resume_AbhaySampath.pdf";
$(".ResumeDownload").on("click", function(){
    console.log("Clicked on ResumeDownload");
    $(".ResumeDownload").fadeTo("slow", 0.3);
    window.open(fileDownloadPath, "_blank");
});
var modal1 = document.getElementById("myModal1");
var span = document.getElementsByClassName("close")[0];
$(".workButton1").on("click", function(){
    $(".workButton1").fadeTo("slow", 0.3);
    modal1.style.display = "block";
    console.log("Clicked on workButton1");
});
span.onclick = function() {
    modal1.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
var desktopPrototype1="https://xd.adobe.com/view/8d259c4e-2030-4a04-9276-3ad2fd20b0f1-d876/?fullscreen";
$(".openDesktopPrototype1").on("click", function(){
    console.log("Clicked on openDesktopPrototype1");
    $(".openDesktopPrototype1").fadeTo("slow", 0.3);
    window.open(desktopPrototype1, "_blank");
});
var mobilePrototype1="https://xd.adobe.com/view/0b6758e6-b6f4-4b6d-a1e5-34158e04ad65-5e34/?fullscreen";
$(".openMobilePrototype1").on("click", function(){
    console.log("Clicked on openMobilePrototype1");
    $(".openMobilePrototype1").fadeTo("slow", 0.3);
    window.open(mobilePrototype1, "_blank");
});
$("h2").css("color","gray"); 