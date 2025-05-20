function hinzufuegen() {
  const eingabeFeld = document.getElementById("neuerEintrag");
  const text = eingabeFeld.value.trim();

  if (text === "") {
    alert("Bitte gib einen Artikel ein!");
    return;
  }

  const liste = document.getElementById("liste");

  const neuerEintrag = document.createElement("li");
  neuerEintrag.textContent = text;

  // Entfernen-Button hinzufügen
  const loeschenBtn = document.createElement("button");
  loeschenBtn.textContent = "🗑️";
  loeschenBtn.onclick = function () {
    liste.removeChild(neuerEintrag);
  };

  neuerEintrag.appendChild(loeschenBtn);
  liste.appendChild(neuerEintrag);

  eingabeFeld.value = ""; // Eingabefeld leeren
}
