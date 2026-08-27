(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");

  function onScroll() {
    if (!header || header.classList.contains("solid")) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.getElementById("contact-form");
  if (!form) return;

  var error = document.getElementById("form-error");
  var success = document.getElementById("form-success");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    error.classList.remove("show");

    var name = form.fullName.value.trim();
    var phone = form.phone.value.trim();
    var consent = form.consent.checked;

    if (!name || !phone || !consent) {
      error.textContent = "Please add your name, a phone number, and confirm the consent box so we can reach you.";
      error.classList.add("show");
      return;
    }

    var digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      error.textContent = "Please enter a working phone number, including area code.";
      error.classList.add("show");
      return;
    }

    form.classList.add("is-sent");
    success.classList.add("show");
    if (success.focus) success.focus();
  });
})();
