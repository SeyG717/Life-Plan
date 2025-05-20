// Seite lädt: Einträge aus allen Kategorien anzeigen
window.onload = function () {
  ["einkauf", "ausgaben", "ziele"].forEach(kategorie => {
    zeigeKategorie(kategorie);
  });
};

function hinzufuegen() {
  const text = document.getElementById("eintrag").value.trim();
  const kategorie = document.getElementById("kategorie").value;

  if (text === "") return;

  const eintraege = JSON.parse(localStorage.getItem(kategorie)) || [];
  eintraege.push(text);
  localStorage.setItem(kategorie, JSON.stringify(eintraege));

  document.getElementById("eintrag").value = "";
  zeigeKategorie(kategorie);
}

function zeigeKategorie(kategorie) {
  const container = document.getElementById("anzeigen");

  // Prüfen, ob der Bereich für die Kategorie schon da ist
  let bereich = document.getElementById("bereich-" + kategorie);
  if (!bereich) {
    bereich = document.createElement("div");
    bereich.id = "bereich-" + kategorie;
    bereich.innerHTML = `<h3>${getKategorieTitel(kategorie)}</h3><ul id="liste-${kategorie}"></ul>`;
    container.appendChild(bereich);
  }

  const liste = document.getElementById("liste-" + kategorie);
  liste.innerHTML = "";

  const eintraege = JSON.parse(localStorage.getItem(kategorie)) || [];

  eintraege.forEach((text, index) => {
    const li = document.createElement("li");
    li.textContent = text;

    // Löschen-Button
    const btn = document.createElement("button");
    btn.textContent = "🗑️";
    btn.onclick = function () {
      eintraege.splice(index, 1);
      localStorage.setItem(kategorie, JSON.stringify(eintraege));
      zeigeKategorie(kategorie);
    };

    li.appendChild(btn);
    liste.appendChild(li);
  });
}

function getKategorieTitel(kategorie) {
  switch (kategorie) {
    case "einkauf": return "🛒 Einkauf";
    case "ausgaben": return "💸 Ausgaben";
    case "ziele": return "🎯 Ziele";
    default: return kategorie;
  }
}
