$('#header').load('partials/header.html', function() {
    if (darkmodeValue == "true")
        $('#switch-box').prop('checked', true)
})