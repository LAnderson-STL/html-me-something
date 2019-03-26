

/*JS for mobile navabar*/

/* function will show dropdown menu when clicked.  link to diving, hiking, family, and my city pages/sections. Collapse when clicked again.*/

  const dropDownNav = () => {
      /* set var for links to pages*/
      let pageLinks = document.getElementById("pageLinks");

      /*expand and collapse functionality */

      if (pageLinks.style.display === "block") {
        pageLinks.style.display = "none";
      } else {
        pageLinks.style.display = "block";
      }
      
  }

 