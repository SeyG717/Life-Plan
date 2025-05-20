// Exakte Dateinamenerkennung
let dateiname = window.location.pathname.split("/").pop().toLowerCase();
let kategorie = "";

if (dateiname === "einkauf.html") kategorie = "einkauf";
else if (dateiname === "ausgaben.html") kategorie = "ausgaben";
else if (dateiname === "ziele.html") kategorie = "ziele";
else kategorie = null;

if (kategorie) {
  window.onload = function () {
    const daten = JSON.parse(localStorage.getItem(kategorie)) || [];
    daten.forEach(text => eintragAnzeigen(text));
  };

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
