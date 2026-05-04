// ============================================================
//  YOURPLUGG — Productdata
//  Voeg hier je eigen producten toe of pas bestaande aan.
//  Elke categorie heeft een eigen array.
//  image: pad naar jouw afbeelding, bijv. "images/hoodie-zwart.jpg"
// ============================================================

const producten = {
  kleding: [
    {
      name: "Oversized Hoodie – Zwart",
      size: "S / M / L / XL",
      price: "€59,99",
      image: "" // bijv. "images/hoodie-zwart.jpg"
    },
    {
      name: "Cargo Broek – Groen",
      size: "M / L / XL",
      price: "€74,99",
      image: ""
    },
    {
      name: "Graphic Tee – Wit",
      size: "S / M / L",
      price: "€29,99",
      image: ""
    },
    {
      name: "Puffer Jacket – Navy",
      size: "M / L / XL / XXL",
      price: "€119,99",
      image: ""
    }
  ],

  schoenen: [
    {
      name: "Chunky Sneaker – Wit/Grijs",
      size: "40 / 41 / 42 / 43 / 44 / 45",
      price: "€89,99",
      image: ""
    },
    {
      name: "Low-Top Suede – Camel",
      size: "39 / 40 / 41 / 42 / 43",
      price: "€79,99",
      image: ""
    },
    {
      name: "High-Top Canvas – Zwart",
      size: "38 / 39 / 40 / 41 / 42",
      price: "€64,99",
      image: ""
    }
  ],

  accessoires: [
    {
      name: "Snapback Cap – Zwart",
      size: "One Size",
      price: "€24,99",
      image: ""
    },
    {
      name: "Crossbody Bag – Bruin",
      size: "One Size",
      price: "€39,99",
      image: ""
    },
    {
      name: "Beanie – Grijs",
      size: "One Size",
      price: "€19,99",
      image: ""
    },
    {
      name: "Bucket Hat – Creme",
      size: "S/M – L/XL",
      price: "€22,99",
      image: ""
    }
  ]
};

// ============================================================
//  RENDERING
// ============================================================

const WHATSAPP_NUMMER = "31624516879"; // zonder + of spaties

function maakWhatsAppLink(product) {
  const tekst = encodeURIComponent(
    `Hoi! Ik wil graag het volgende bestellen:\n\n` +
    `Product: ${product.name}\n` +
    `Maat: ${product.size}\n` +
    `Prijs: ${product.price}\n\n` +
    `Kunnen jullie dit voor mij regelen?`
  );
  return `https://wa.me/${WHATSAPP_NUMMER}?text=${tekst}`;
}

function openLightbox(src, naam) {
  const overlay = document.getElementById("lightbox-overlay");
  const img = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  img.src = src;
  img.alt = naam;
  caption.textContent = naam;
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function sluitLightbox() {
  const overlay = document.getElementById("lightbox-overlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

function maakProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const heeftFoto = Boolean(product.image);

  const imageHTML = heeftFoto
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />`
    : `<div class="placeholder">Foto volgt</div>`;

  const vergrootIcoon = heeftFoto
    ? `<span class="zoom-icon" title="Vergroot foto">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
      </span>`
    : "";

  card.innerHTML = `
    <div class="product-image-wrap">
      ${imageHTML}
      ${vergrootIcoon}
    </div>
    <div class="product-info">
      <p class="product-name">${product.name}</p>
      <div class="product-meta">
        <span class="product-size">${product.size}</span>
        <span class="product-price">${product.price}</span>
      </div>
      <a class="whatsapp-btn" href="${maakWhatsAppLink(product)}" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        Bestel via WhatsApp
      </a>
    </div>
  `;

  // Klik op foto = lightbox
  if (heeftFoto) {
    const wrap = card.querySelector(".product-image-wrap");
    const zoomBtn = card.querySelector(".zoom-icon");
    [wrap, zoomBtn].forEach(el => {
      if (el) el.addEventListener("click", (e) => {
        e.stopPropagation();
        openLightbox(product.image, product.name);
      });
    });
  }

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

// Sluit lightbox bij klik buiten de foto
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("lightbox-overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) sluitLightbox();
    });
  }

  // Sluit met Escape-toets
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") sluitLightbox();
  });
});

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
