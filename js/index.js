document.querySelector(".portfolio-link").onclick = (e) => {
  $("html, body").animate(
    {
      scrollTop: $(".portfolio").offset().top,
    },
    800
  );
  e.preventDefault();
  return false;
};

document.querySelector(".recommendations-link").onclick = (e) => {
  $("html, body").animate(
    {
      scrollTop: $(".linkedin-recommendations").offset().top,
    },
    800
  );
  e.preventDefault();
  return false;
};
