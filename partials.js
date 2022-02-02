$('#header').load('partials/header.html', function(data) {
    $(data).find('#switch-box').prop('checked', true)
})