
// $('#theme-switch').on('change'), function() {
//     console.log("lol")
//     // if($(this).is(':checked'))
//     //     theme.href = "dark-theme.css"
//     // else
//     //     theme.href = "light-theme.css"
// }

if (document.cookie == '')
    document.cookie = "darkmode=false"
else {
    cookieArray = document.cookie.split(';')
    darkmodeValue = cookieArray[0].split('=')[1]
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