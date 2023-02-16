var progressBar = document.querySelector("#progressBar");
var totalPageHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
  let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
  progressBar.style.height = `${newProgressHeight}%`;
};