// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// TYPED.JS HERO ROLES
if (window.Typed) {
  new Typed("#element", {
    strings: [
      "Full-Stack Developer",
      "MERN Stack Developer",
      "IoT Solutions Developer",
      "Backend Engineer",
      "GenAI Integrator",
    ],
    typeSpeed: 35,
    backSpeed: 20,
    backDelay: 1400,
    loop: true,
    showCursor: false,
  });
}

// MOBILE NAV TOGGLE
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// GRACEFUL FALLBACK FOR MISSING PROJECT SCREENSHOTS
document.querySelectorAll(".work_thumb img").forEach((img) => {
  img.addEventListener(
    "error",
    () => {
      img.classList.add("img_error");
    },
    { once: true },
  );
});

// CONTACT FORM -> FormSubmit (AJAX, no page reload)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const hireBtn = document.getElementById("hireBtn");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    formStatus.textContent = "";
    formStatus.className = "form_status";
    hireBtn.disabled = true;
    hireBtn.textContent = "Sending…";

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        formStatus.textContent =
          "Thanks — your message is on its way. I'll get back to you soon.";
        formStatus.classList.add("success");
        contactForm.reset();
      } else {
        throw new Error("Request failed");
      }
    } catch (err) {
      formStatus.textContent =
        "Something went wrong sending that. Please email me directly instead.";
      formStatus.classList.add("error");
    } finally {
      hireBtn.disabled = false;
      hireBtn.textContent = "HIRE ME";
    }
  });
}
