const book = document.getElementById("book");

// Convert page index (0-based) to roman numerals
function toRomanNumeral(num) {
  const romanMap = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];
  
  let roman = '';
  for (let i = 0; i < romanMap.length; i++) {
    while (num >= romanMap[i].value) {
      roman += romanMap[i].numeral;
      num -= romanMap[i].value;
    }
  }
  return roman;
}

const contentsIndex = pages.findIndex(p => p.type === "contents");
document.getElementById("bookmark").addEventListener("click", () => {
  if (contentsIndex !== -1) {
    pageFlip.flip(contentsIndex);
  }
});

const pageFlip = new St.PageFlip(book, {
  width: 600,
  height: 800,
  size: "fixed",
  showCover: true
});

const pageElements = [];
let contentPageNum = 0; // counter for non-cover pages

pages.forEach((p, idx) => {
  const el = document.createElement("div");
  el.className = "page";

  if (p.type === "cover") {
    el.classList.add("cover");
    el.innerHTML = p.content;
  }

  if (p.type === "contents") {
    el.classList.add("contents");
    let html = `<h1>${p.title}</h1>`;
    if (p.sections) {
      // Render sections with subsections
      p.sections.forEach(section => {
        html += `<h2><a data-page="${section.page}">${section.name} — Page ${toRomanNumeral(section.page)}</a></h2><ul>`;
        section.species.forEach(species => {
          html += `<li><a data-page="${species.page}">${species.name} — Page ${toRomanNumeral(species.page)}</a></li>`;
        });
        html += `</ul>`;
      });
    } else if (p.items) {
      // Fallback for old format
      html += `<ul>${p.items.map(i =>
        `<li><a data-page="${i.page}">${i.name} — Page ${toRomanNumeral(i.page)}</a></li>`
      ).join("")}</ul>`;
    }
    el.innerHTML = html;
  }

  if (p.type === "page") {
    el.innerHTML = `<h1>${p.title}</h1><p>${p.text}</p>`;
  }

  // Add page counter in roman numerals only for non-cover pages
  if (p.type !== "cover") {
    contentPageNum++;
    const counter = document.createElement("div");
    counter.className = "page-counter";
    counter.textContent = toRomanNumeral(contentPageNum);
    el.appendChild(counter);
  }

  pageElements.push(el);
});

pageFlip.loadFromHTML(pageElements);

document.addEventListener("click", e => {
  if (e.target.dataset.page) {
    pageFlip.flip(+e.target.dataset.page);
  }
});
