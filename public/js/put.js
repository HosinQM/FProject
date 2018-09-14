var groups = []

$.get('../database/idols.json', (data) => {
    for (idol in data) {
        groups.push(data[idol].name)
    }
})


$(document).ready(() => {
    for (i = 0; i < groups.length; i++) {
        $('section.dropdown-menu').append(`<a class="dropdown-item" href="/idols/${groups[i]}">${groups[i]}</a>`)
    }
});