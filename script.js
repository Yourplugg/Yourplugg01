// ============================================================
//  YOURPLUGG — Productdata
//  Voeg hier je eigen producten toe of pas bestaande aan.
//  Elke categorie heeft een eigen array.
//  image: pad naar jouw afbeelding, bijv. "images/hoodie-zwart.jpg"
// ============================================================

const producten = {
  kleding: [
    {
      name: "Jacket – Zwart",
      size: "S / M",
      price: "€84,99",
          image: "j.jpeg"
    },
    {
      name: "Jacket – Blauw",
      size: "S / M",
      price: "€84,99",
          image: "k.jpeg"
    },
    {
      name: "Jacket – Créme",
      size: "S / M",
      price: "€84,99",
          image: "i.jpeg"
    },
    {
      name: "Jacket – Zwart",
      size: "M",
      price: "€79,99",
          image: "h.jpeg"
    },
    {
      name: "Trainingspak – Blauw",
      size: "S",
      price: "€99,99",
          image: "g.jpeg"
    },
    {
      name: "Tracksuit – Grijs",
      size: "S",
      price: "€119,99",
          image: "f.jpeg"
    },
    {
      name: "Vest – Grijs",
      size: "XS / S / L",
      price: "€94,99",
          image: "c.jpeg"
    },
    {
      name: "Trui – Zwart",
      size: "S",
      price: "€84,99",
          image: "n.jpeg"
    },
    {
      name: "Bodywarmer – Blauw",
      size: "S",
      price: "€69,99",
          image: "e.jpeg"
    },
    {
      name: "Tracksuit – Grijs",
      size: "L (valt als S)",
      price: "€89,99",
          image: "p.jpeg"
    },
    {
      name: "Tracksuit – Blauw",
      size: "L (valt als M)",
      price: "€74,99",
          image: "o.jpeg"
    },
    

  ],

  schoenen: [
    {
      name: "Sneaker – Wit/Rood",
      size: "38",
      price: "€149,99",
          image: "1.jpeg"
    },
    {
      name: "Low-Top Suede – Zwart/Wit",
      size: "40 / 41 / 42 / 43 / 44 / 45",
      price: "€149,99",
      image: "2.jpeg"
    },
    {
      name: "Sporty Sneaker – Zwart",
      size: "41",
      price: "€89,99",
      image: "3.jpeg"
    },
    {
      name: "Sporty Sneaker – Wit",
      size: "43",
      price: "€99,99",
      image: "16.jpeg"
    },
        {
      name: "Low-Top – Bruin/Wit",
      size: "39 / 41 / 42 / 43 / 44 / 45",
      price: "€139,99",
      image: "5.jpeg"
    },
    {
      name: "Sporty Sneaker – Grijs",
      size: "41.5",
      price: "€79,99",
      image: "6.jpeg"
    },
    {
      name: "Chunky Sneaker – Zwart",
      size: "40 / 44",
      price: "€129,99",
      image: "7.jpeg"
    },
    {
      name: "Sneakers – Blauw/Groen",
      size: "43 / 42.5",
      price: "€79,99",
      image: "8.jpeg"
    },
    {
      name: "Low-Top – Zwart",
      size: "42",
      price: "€139,99",
      image: "9.jpeg"
    },
    {
      name: "Chunky Sneaker – Wit",
      size: "37 / 38 / 43",
      price: "€139,99",
      image: "10.jpeg"
    },
    {
      name: "Sporty Sneaker – Grijs",
      size: "44",
      price: "€79,99",
      image: "11.jpeg"
    },
    {
      name: "Low-Top – Zwart/Wit",
      size: "43",
      price: "€129,99",
      image: "12.jpeg"
    },
    {
      name: "Sporty Sneaker – Blauw",
      size: "45 1/3",
      price: "€79,99",
      image: "17.jpeg"
    },
    {
      name: "Sporty Sneaker – Roze",
      size: "38",
      price: "€89,99",
      image: "18.jpeg"
    },
    {
      name: "Sporty Sneaker – Grijs",
      size: "43.5",
      price: "€79,99",
      image: "14.jpeg"
    },
    {
      name: "High-Top – Zwart",
      size: "43",
      price: "€119,99",
      image: "13.jpeg"
    },
    {
      name: "Slipper – Bruin",
      size: "37 / 39 / 40",
      price: "€99,99",
      image: "22.jpeg"
    },
    {
      name: "Slipper – Bruin",
      size: "",
      price: "€99,99",
      image: "20.jpeg"
    },
    {
      name: "Slipper – Rood",
      size: "39",
      price: "€99,99",
      image: "19.jpeg"
    },
    {
      name: "Slipper – Zwart",
      size: "37",
      price: "€99,99",
      image: "21.jpeg"
    },
  ],

  accessoires: [
    {
      name: "Crossbody bag – Zwart",
      size: "One Size",
      price: "€89,99",
      image: "4.jpeg"
    },
    {
      name: "Handtassen – Diverse Kleuren",
      size: "One Size",
      price: "€59,99",
      image: "a.jpeg"
    },
    {
      name: "Petten – Diverse Kleuren",
      size: "One Size",
      price: "€49,99",
      image: "b.jpeg"
    },
    {
      name: "Pet – Zwart",
      size: "One Size",
      price: "€39,99",
      image: "m.jpeg"
    },
    {
      name: "Armband – Zwart",
      size: "One Size",
      price: "€59,99",
      image: "d.jpeg"
    },
    {
      name: "Armband – Zwart",
      size: "One Size",
      price: "€59,99",
      image: "l.jpeg"
    },
    
  ]
};

// ============================================================
//  RENDERING
// ============================================================

function maakProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const imageHTML = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />`
    : `<div class="placeholder">Foto volgt</div>`;

  card.innerHTML = `
    <div class="product-image-wrap">
      ${imageHTML}
    </div>
    <div class="product-info">
      <p class="product-name">${product.name}</p>
      <div class="product-meta">
        <span class="product-size">${product.size}</span>
        <span class="product-price">${product.price}</span>
      </div>
    </div>
  `;

  return card;
}

function laadCatalogus() {
  const grids = {
    kleding: document.getElementById("kleding-grid"),
    schoenen: document.getElementById("schoenen-grid"),
    accessoires: document.getElementById("accessoires-grid")
  };

  for (const [categorie, grid] of Object.entries(grids)) {
    if (!grid) continue;
    const items = producten[categorie] || [];

    if (items.length === 0) {
      grid.innerHTML = `<p style="color: var(--text-muted); font-size:14px;">Geen producten beschikbaar.</p>`;
      continue;
    }

    items.forEach(product => {
      grid.appendChild(maakProductCard(product));
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  laadCatalogus();

  // Tab switching
  const knoppen = document.querySelectorAll(".cat-btn");
  const secties = document.querySelectorAll(".category");

  knoppen.forEach(knop => {
    knop.addEventListener("click", () => {
      const doel = knop.dataset.cat;

      // Knoppen updaten
      knoppen.forEach(k => k.classList.remove("active"));
      knop.classList.add("active");

      // Secties updaten
      secties.forEach(s => {
        s.classList.remove("active");
        if (s.id === doel) s.classList.add("active");
      });
    });
  });
});
