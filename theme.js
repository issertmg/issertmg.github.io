
// $('#theme-switch').on('change'), function() {
//     console.log("lol")
//     // if($(this).is(':checked'))
//     //     theme.href = "dark-theme.css"
//     // else
//     //     theme.href = "light-theme.css"
// }

function switchTheme() {
    const theme = $('#theme-link')
    if (theme.attr("href") == "/stylesheets/light-theme.css")
        theme.attr("href", "/stylesheets/dark-theme.css") 
    else
        theme.attr("href", "/stylesheets/light-theme.css")
}