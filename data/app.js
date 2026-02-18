const yearEl = document.getElementById("year")
if (yearEl) {
  yearEl.textContent = new Date().getFullYear()
}

const smoothLinks = document.querySelectorAll("a[data-scroll]")
smoothLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href")
    if (!href || !href.startsWith("#")) return
    const target = document.querySelector(href)
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: "smooth", block: "start" })
  })
})
