
// $('#theme-switch').on('change'), function() {
//     console.log("lol")
//     // if($(this).is(':checked'))
//     //     theme.href = "dark-theme.css"
//     // else
//     //     theme.href = "light-theme.css"
// }
var darkmode = getCookie("darkmode")

if (darkmode == '') {
    document.cookie = "darkmode=false"
    console.log("here")
    console.log(document.cookie)
}
    
else {
    cookieArray = document.cookie.split(';')

    for (nameValue in cookieArray) {
        if (cookieArray[0].split('=')[0] == "darkmode")
            darkmodeValue = cookieArray[0].split('=')[1]
    }

    if (darkmodeValue == "true")
        setDarkTheme()
    else
        setLightTheme()
}


function switchTheme() {
    const theme = $('#theme-link')
    if (theme.attr("href") == "light-theme.css") {
        document.cookie = "darkmode=true"
        setDarkTheme()
    }
    else {
        document.cookie = "darkmode=false"
        setLightTheme()
    }
}

function setLightTheme() {
    theme.attr("href", "light-theme.css")
}

function setDarkTheme() {
    theme.attr("href", "dark-theme.css") 
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}