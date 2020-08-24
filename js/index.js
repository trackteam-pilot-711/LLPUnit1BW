// services js section start
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

  
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
} 
// secrives js section end