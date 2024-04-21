function toggleDropdown() {
    document.getElementById("custom-options").classList.toggle("show");
  }
  
  // Close the dropdown if clicked outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.custom-select')) {
      var dropdowns = document.getElementsByClassName("options-container");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  // Handling option selection
  var options = document.getElementsByClassName("option");
  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function() {
      var selectedText = this.textContent;
      document.getElementById("selected-value").textContent = selectedText;
      document.getElementById("custom-options").classList.remove("show");
    });
  }