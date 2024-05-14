;(() => {
  window.showBlock = (id) => {
    document.getElementById(id).style.opacity = 1;
  }
  window.hideBlock = (id) => {
    document.getElementById(id).style.opacity = 0;
  }
})();
