window.addEventListener("load", () => {
  const testNameElem = document.getElementById("test-name");
  const urlParams = new URLSearchParams(window.location.href);
  const testNum = parseInt(urlParams.get('i'), 10);
  if (isNaN(testNum)) {
    alert("Error: Unknown test");
  }
  testNameElem.children[0].innerHTML = ;
});
