/*Author: Jackson Coghill #041089141
File: ass1.js
Date: July 03, 2023
Purpose: Information about curriculum & courses, filtered and sortable through JavaScript 

 /*Function for sorting searching all the courses using searchbar
 Reference: https://www.w3schools.com/howto/howto_js_filter_lists.asp
  */
function myFunction() {
    // Declare variables
    var input, filter, ul, li, desc;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("courses");
    li = ul.getElementsByTagName('li');
    titles = ul.getElementsByClassName('title');
    desc = ul.getElementsByClassName('desc');
    
    for (i = 0; i < li.length; i++) {
        var titleText = titles[i].textContent || titles[i].innerText;
        var descText = desc[i].textContent || desc[i].innerText;
        var courseText = titleText + descText;
        
        if (courseText.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }

    }
  }

 /*Function for sorting all the courses in an ascending order from Level 01 to Level 02
 Reference: https://www.w3schools.com/howto/howto_js_sort_list.asp
  */
function sortListAscend() {
    var list, switching, i, b, shouldSwitch;
    list = document.getElementById("courses");
    switching = true;
  
    while (switching) {
      switching = false;
      b = list.getElementsByClassName("filterDiv");
  
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
  
        var currentDiv = b[i].classList.contains("l1") ? "l1" : "l2";
        var nextDiv = b[i + 1].classList.contains("l1") ? "l1" : "l2";
  
        if (currentDiv > nextDiv) {
          shouldSwitch = true;
          break;
        } else if (currentDiv === nextDiv) {
          var currentTitle = b[i].querySelector(".title").textContent;
          var nextTitle = b[i + 1].querySelector(".title").textContent;
  
          if (currentTitle > nextTitle) {
            shouldSwitch = true;
            break;
          }
        }
      }
  
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }
  
  /*Function for sorting all the courses in a descending order from Level 02 to Level 01
  Reference: https://www.w3schools.com/howto/howto_js_sort_list.asp
  */
  function sortListDescend() {
    var list, switching, i, b, shouldSwitch;
    list = document.getElementById("courses");
    switching = true;
  
    while (switching) {
      switching = false;
      b = list.getElementsByClassName("filterDiv");
  
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
  
        var currentDiv = b[i].classList.contains("l1") ? "l1" : "l2";
        var nextDiv = b[i + 1].classList.contains("l1") ? "l1" : "l2";
  
        if (currentDiv < nextDiv) {
          shouldSwitch = true;
          break;
        } else if (currentDiv === nextDiv) {
          var currentTitle = b[i].querySelector(".title").textContent;
          var nextTitle = b[i + 1].querySelector(".title").textContent;
  
          if (currentTitle < nextTitle) {
            shouldSwitch = true;
            break;
          }
        }
      }
  
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }

  /*Function for being able to filter selection wither based upon level (01/02), or for all courses
  */
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    
    // Show all elements when "all" is selected
    if (c === "all") {
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
      return; 
    }
  
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      if (x[i].classList.contains(c)) {
        x[i].style.display = "block";
      } else {
        x[i].style.display = "none";
      }
    }
  }
  
  // Function to handle filter selection and call filterSelection() function
  function handleFilterSelection() {
    var filterSelect = document.getElementById("filterSelect");
    var selectedFilter = filterSelect.value;
  
    filterSelection(selectedFilter);
  }