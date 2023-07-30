document.addEventListener("DOMContentLoaded", function() {
  const projectDivs = document.querySelectorAll(".project");
  projectDivs.forEach(projectDiv => {
    projectDiv.addEventListener("click", function() {
      alert("Anda mengklik proyek: " + projectDiv.querySelector("h3").innerText);
    });
  });
});

