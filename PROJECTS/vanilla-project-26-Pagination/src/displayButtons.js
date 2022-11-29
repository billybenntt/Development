const displayButtons = (container, pages, activeIndex) => {

  const btns = pages.map((_, pageIndex) => {
    let isActive = pageIndex === activeIndex ? 'page-btn active-btn' : 'page-btn'
    return `<button class="${isActive}" data-index="${pageIndex}">${pageIndex + 1}</button>`
  })


  btns.unshift(`<button class="prev-btn">Prev</button>`)
  btns.push(`<button class="next-btn">Next</button>`)

  container.innerHTML = btns.join('')

}

export default displayButtons
