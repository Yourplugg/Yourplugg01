// ============================================================
//  YOURPLUGG — Productdata
//  sale: true   → rode SALE badge
//  nieuw: true  → verschijnt in "Nieuw Binnen" sectie bovenaan
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
      size: "45.1⁄3",
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
    {
      name: "Low-Top Suede – Bruin",
      size: "42 / 46",
      price: "€149,99",
      image: "23.jpeg",
      nieuw : true
    },
    {
      name: "High-Top – Zwart/Wit",
      size: "41 / 46",
      price: "€149,99",
      image: "24.jpeg",
      nieuw : true
    },
  ],

  accessoires: [
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
//  MAATFILTER
// ============================================================

function haalMatenOp(categorie) {
  const matenSet = new Set();
  producten[categorie].forEach(product => {
    product.size.split("/").forEach(m => {
      const maat = m.trim();
      if (maat) matenSet.add(maat);
    });
  });
  return [...matenSet].sort((a, b) => {
    const nA = parseFloat(a), nB = parseFloat(b);
    if (!isNaN(nA) && !isNaN(nB)) return nA - nB;
    return a.localeCompare(b);
  });
}

function heeftMaat(product, maat) {
  if (!maat) return true;
  return product.size.split("/").map(m => m.trim()).includes(maat);
}

function maakMaatFilter(categorie, gridId) {
  const maten = haalMatenOp(categorie);
  if (maten.length === 0) return;
  const sectie = document.getElementById(categorie);
  if (!sectie) return;
  const bestaand = sectie.querySelector(".maat-filter");
  if (bestaand) bestaand.remove();
  const wrapper = document.createElement("div");
  wrapper.className = "maat-filter";
  const label = document.createElement("span");
  label.className = "maat-filter-label";
  label.textContent = "Filter op maat:";
  wrapper.appendChild(label);
  const alleKnop = document.createElement("button");
  alleKnop.className = "maat-knop active";
  alleKnop.textContent = "Alle";
  alleKnop.dataset.maat = "";
  wrapper.appendChild(alleKnop);
  maten.forEach(maat => {
    const knop = document.createElement("button");
    knop.className = "maat-knop";
    knop.textContent = maat;
    knop.dataset.maat = maat;
    wrapper.appendChild(knop);
  });
  const grid = document.getElementById(gridId);
  sectie.insertBefore(wrapper, grid);
  wrapper.addEventListener("click", (e) => {
    const knop = e.target.closest(".maat-knop");
    if (!knop) return;
    wrapper.querySelectorAll(".maat-knop").forEach(k => k.classList.remove("active"));
    knop.classList.add("active");
    const gekozenMaat = knop.dataset.maat;
    grid.querySelectorAll(".product-card").forEach(card => {
      const maat = card.dataset.size || "";
      card.style.display = heeftMaat({ size: maat }, gekozenMaat) ? "" : "none";
    });
  });
}

// ============================================================
//  DEEL FUNCTIE
// ============================================================

function deelProduct(product) {
  const tekst = `Check dit product bij YourPlugg!\n\n${product.name}\nMaat: ${product.size}\nPrijs: ${product.price}\n\nBestel via Instagram/TikTok: @your.plugg01`;
  if (navigator.share) {
    navigator.share({ title: product.name, text: tekst });
  } else {
    navigator.clipboard.writeText(tekst).then(() => {
      toonToast("Gekopieerd naar klembord!");
    });
  }
}

function toonToast(bericht) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = bericht;
  toast.classList.add("zichtbaar");
  setTimeout(() => toast.classList.remove("zichtbaar"), 2500);
}

// ============================================================
//  TERUG NAAR BOVEN
// ============================================================

function scrollNaarBoven() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  const knop = document.getElementById("top-knop");
  if (!knop) return;
  knop.classList.toggle("zichtbaar", window.scrollY > 400);
});

// ============================================================
//  WHATSAPP
// ============================================================

const WHATSAPP_NUMMER = "31624516879";

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

// ============================================================
//  LIGHTBOX
// ============================================================

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

// ============================================================
//  PRODUCT CARD BOUWEN
// ============================================================

function maakProductCard(product, toonNieuwBadge = false) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.dataset.size = product.size;

  const heeftFoto = Boolean(product.image);

  const imageHTML = heeftFoto
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy" class="product-img" />`
    : `<div class="placeholder">Foto volgt</div>`;

  const vergrootIcoon = heeftFoto
    ? `<span class="zoom-icon" title="Vergroot foto">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
      </span>`
    : "";

  const saleBadge = product.sale ? `<span class="sale-badge">SALE</span>` : "";
  const nieuwBadge = (toonNieuwBadge && product.nieuw) ? `<span class="nieuw-badge">NIEUW</span>` : "";
  const badgeWrapper = (product.sale || (toonNieuwBadge && product.nieuw))
    ? `<div class="badge-wrapper">${nieuwBadge}${saleBadge}</div>`
    : "";

  card.innerHTML = `
    <div class="product-image-wrap">
      ${imageHTML}
      ${vergrootIcoon}
      ${badgeWrapper}
    </div>
    <div class="product-info">
      <p class="product-name">${product.name}</p>
      <div class="product-meta">
        <span class="product-size">${product.size}</span>
        <span class="product-price">${product.price}</span>
      </div>
      <div class="card-acties">
        <a class="whatsapp-btn" href="${maakWhatsAppLink(product)}" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          Bestel via WhatsApp
        </a>
        <button class="deel-btn" title="Deel dit product">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        </button>
      </div>
    </div>
  `;

  // Lightbox
  if (heeftFoto) {
    const wrap = card.querySelector(".product-image-wrap");
    const zoomBtn = card.querySelector(".zoom-icon");
    [wrap, zoomBtn].forEach(el => {
      if (el) el.addEventListener("click", (e) => {
        e.stopPropagation();
        openLightbox(product.image, product.name);
      });
    });

    // Laadanimatie: fade-in als afbeelding geladen is
    const img = card.querySelector(".product-img");
    if (img) {
      img.addEventListener("load", () => img.classList.add("geladen"));
      if (img.complete) img.classList.add("geladen");
    }
  }

  // Deel knop
  const deelKnop = card.querySelector(".deel-btn");
  if (deelKnop) {
    deelKnop.addEventListener("click", (e) => {
      e.stopPropagation();
      deelProduct(product);
    });
  }

  return card;
}

// ============================================================
//  NIEUW BINNEN SECTIE
// ============================================================

function laadNieuwBinnen() {
  const grid = document.getElementById("nieuw-grid");
  const sectie = document.getElementById("nieuw-binnen-sectie");
  if (!grid || !sectie) return;

  const nieuweItems = [];
  Object.values(producten).forEach(categorie => {
    categorie.forEach(product => {
      if (product.nieuw) nieuweItems.push(product);
    });
  });

  if (nieuweItems.length === 0) {
    sectie.style.display = "none";
    return;
  }

  nieuweItems.forEach(product => {
    grid.appendChild(maakProductCard(product, true));
  });
}

// ============================================================
//  CATALOGUS LADEN
// ============================================================

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
    items.forEach(product => grid.appendChild(maakProductCard(product)));
  }

  maakMaatFilter("kleding", "kleding-grid");
  maakMaatFilter("schoenen", "schoenen-grid");
}

// ============================================================
//  SALE CATEGORIE
// ============================================================

function voegSaleCategorieToe() {
  // Verzamel alle sale producten uit alle categorieën
  const saleItems = [];
  Object.values(producten).forEach(cat => {
    cat.forEach(product => {
      if (product.sale) saleItems.push(product);
    });
  });

  // Geen sale producten = geen tab tonen
  if (saleItems.length === 0) return;

  // Tab knop toevoegen aan de nav
  const nav = document.querySelector(".cat-nav");
  const saleKnop = document.createElement("button");
  saleKnop.className = "cat-btn sale-tab";
  saleKnop.dataset.cat = "sale";
  saleKnop.textContent = "Sale";
  nav.appendChild(saleKnop);

  // Sectie toevoegen aan de wrapper
  const wrapper = document.querySelector(".categories-wrapper");
  const sectie = document.createElement("section");
  sectie.className = "category";
  sectie.id = "sale";
  const grid = document.createElement("div");
  grid.className = "product-grid";
  grid.id = "sale-grid";
  sectie.appendChild(grid);
  wrapper.appendChild(sectie);

  // Producten vullen — toon nieuw-badge ook hier
  saleItems.forEach(product => {
    grid.appendChild(maakProductCard(product, true));
  });
}

// ============================================================
//  INIT
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  laadNieuwBinnen();
  laadCatalogus();
  voegSaleCategorieToe();

  // Tab switching (opnieuw queryselecten na eventuele SALE toevoeging)
  function activeerTabs() {
    const knoppen = document.querySelectorAll(".cat-btn");
    const secties = document.querySelectorAll(".category");
    knoppen.forEach(knop => {
      knop.addEventListener("click", () => {
        const doel = knop.dataset.cat;
        knoppen.forEach(k => k.classList.remove("active"));
        knop.classList.add("active");
        secties.forEach(s => {
          s.classList.remove("active");
          if (s.id === doel) s.classList.add("active");
        });
      });
    });
  }
  activeerTabs();

  // Lightbox sluiten
  const overlay = document.getElementById("lightbox-overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) sluitLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") sluitLightbox();
  });
});
