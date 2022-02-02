$('#header').load('partials/header.html', function() {
    console.log("DEBUGGGG!")
    if (darkmodeValue == "true")
        $('#switch-box').prop('checked', true)
})