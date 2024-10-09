export const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id == "img1") entry.target.classList.add("showImg1");
      else entry.target.classList.add("show");
    } else {
      if (entry.target.id == "img1") entry.target.classList.remove("showImg1");
      else entry.target.classList.remove("show");
    }
  });
});
