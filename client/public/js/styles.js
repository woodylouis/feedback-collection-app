import M from "materialize-css";

function clickToToggle() {
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".fixed-action-btn");
    var instances = M.FloatingActionButton.init(elems, {
      direction: "left",
      hoverEnabled: false
    });
  });
}