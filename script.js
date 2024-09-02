var sideActivity = document.querySelector(".sidebar-activity");
var moreLink = document.getElementById("showMoreLinks");
var settingMenuOpen = document.querySelector(".settings-menu-wrap");

function settingsMenuToggle(){
  settingMenuOpen.classList.toggle("open-menu")
}

function toggleActivity(){
  sideActivity.classList.toggle("open-activity")

  if(sideActivity.classList.contains("open-activity")){
    moreLink.innerHTML = "Show less <b>-</b>"
  }else{
    moreLink.innerHTML = "Show more <b>+</b>"
  }
}



