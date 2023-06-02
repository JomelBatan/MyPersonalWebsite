document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if(isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

let header = document.getElementById('site-header-inner')

document.addEventListener('scroll', function() {
  
  let scrollPos = window.pageYOffset;
  
  if ( scrollPos > 120 ) {
    header.style.backgroundColor = "black";
  } else {
    header.style.backgroundColor = "";
  }
  
  
});