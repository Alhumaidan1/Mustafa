let currentLang = "ar";



function toggleLang() {

  currentLang = currentLang === "ar" ? "en" : "ar";

  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.documentElement.lang = currentLang;



  document.querySelectorAll("[data-ar]").forEach(el => {

    el.textContent = el.dataset[currentLang];

  });

}



function toggleTheme() {

  document.body.classList.toggle("light");

}



toggleLang();