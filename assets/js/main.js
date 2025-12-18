<script src="assets/js/main.js"></script>

document.getElementById("search").addEventListener("keyup", function(){
  let q = this.value.toLowerCase();
  document.querySelectorAll(".mod-card").forEach(card=>{
    card.style.display =
      card.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
});
