// Automatisch erkennen, auf welcher Seite wir sind
let dateiname = window.location.pathname.split("/").pop();
let kategorie = "";

if (dateiname.includes("einkauf")) kategorie = "einkauf";
else if (dateiname.includes("ausgaben")) kategorie = "ausgaben";
else if (dateiname.includes("ziele")) kategorie = "ziele";
else kategorie = null;

// Nur ausführen, wenn wir in einer gültigen Kategorie-Seite sind
if (kategorie) {
  // Einträge beim Laden anzeigen
  window.onload = function () {
    const daten = JSON.parse(localStorage.getItem(kategorie)) || [];
    daten.forEach(text => eintragAnzeigen(text));
  };

  // Funktion zum Hinzufügen eines neuen Eintrags
  function hinzufuegen() {
    const input = document.getElementById("eintrag");
    const text = input.value.trim();
    if (text === "") return;

    const daten = JSON.parse(localStorage.getItem(kategorie)) || [];
    daten.push(text);
    localStorage.setItem(kategorie, JSON.stringify(daten));

    eintragAnzeigen(text);
    input.value = "";
  }

  // Funktion zum Anzeigen eines Listeneintrags mit Löschen
  function eintragAnzeigen(text) {
    const li = document.createElement("li");
    li.textContent = text;

    const btn = document.createElement("button");
    btn.textContent = "🗑️";
    btn.className = "delete";
    btn.onclick = function () {
      let daten = JSON.parse(localStorage.getItem(kategorie)) || [];
      daten = daten.filter(e => e !== text);
      localStorage.setItem(kategorie, JSON.stringify(daten));
      li.remove();
    };

    li.appendChild(btn);
    document.getElementById("liste").appendChild(li);
  }
}
