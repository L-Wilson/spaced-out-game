// When we call `goToPage('about')`, it will only display the following element with `data-page="about"`, like:
//    <div data-page="about">...</div>
// OR
//    <section data-page="about">...</section>
function goToPage(link) {
  $('[data-page]').hide()
  $('[data-page=' + link + ']').show()

  // Add the class active in the navbar to the right element
  $('li.nav-item').each(function () {
    var href = $(this).find('a.nav-link').attr('href')
    if (href === link)
      $(this).addClass('active')
    else
      $(this).removeClass('active')
  })
}
