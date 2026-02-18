document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year")
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear()
  }

  const navbar = document.querySelector(".navbar")
  if (navbar) {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset
      navbar.style.background = currentScroll > 50 ? "rgba(11,15,27,0.95)" : "rgba(11,15,27,0.85)"
    })
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href"))
      if (!target) return
      event.preventDefault()
      const offset = 74
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: targetPosition, behavior: "smooth" })
    })
  })

  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".feature-card, .step, .req-item, .use-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(24px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  const heroTitle = document.querySelector(".hero h1")
  if (heroTitle) {
    heroTitle.style.opacity = "0"
    heroTitle.style.transform = "translateY(30px)"
    setTimeout(() => {
      heroTitle.style.transition = "opacity 0.8s ease, transform 0.8s ease"
      heroTitle.style.opacity = "1"
      heroTitle.style.transform = "translateY(0)"
    }, 160)
  }

  const heroBadge = document.querySelector(".hero-badge")
  if (heroBadge) {
    heroBadge.style.opacity = "0"
    setTimeout(() => {
      heroBadge.style.transition = "opacity 0.6s ease"
      heroBadge.style.opacity = "1"
    }, 80)
  }

  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((btn) => {
    btn.addEventListener("mousedown", function () {
      this.style.transform = "scale(0.98)"
    })
    btn.addEventListener("mouseup", function () {
      this.style.transform = ""
    })
    btn.addEventListener("mouseleave", function () {
      this.style.transform = ""
    })
  })

  const navLinks = document.querySelector(".nav-links")
  const navContainer = document.querySelector(".nav-container")
  if (window.innerWidth <= 900 && navLinks && navContainer) {
    let mobileMenuOpen = false
    const menuBtn = document.createElement("button")
    menuBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'
    menuBtn.style.cssText = "background:none;border:none;color:white;cursor:pointer;padding:8px;display:flex;"
    menuBtn.addEventListener("click", () => {
      mobileMenuOpen = !mobileMenuOpen
      if (mobileMenuOpen) {
        navLinks.style.display = "flex"
        navLinks.style.position = "absolute"
        navLinks.style.top = "68px"
        navLinks.style.left = "0"
        navLinks.style.right = "0"
        navLinks.style.flexDirection = "column"
        navLinks.style.background = "rgba(11,15,27,0.98)"
        navLinks.style.padding = "24px"
        navLinks.style.gap = "16px"
        navLinks.style.borderBottom = "1px solid var(--border)"
      } else {
        navLinks.style.display = "none"
      }
    })
    navContainer.insertBefore(menuBtn, navContainer.querySelector(".nav-btn"))
  }
})
