let codePanelCount = 0;

function addCopyButtons(root) {
  root.querySelectorAll("pre > code").forEach(function (code) {
    const pre = code.parentElement;
    if (pre.closest(".component-accordion")) return;

    codePanelCount += 1;
    const panelId = "code-panel-" + codePanelCount;
    const label = pre.dataset.label || "HTML";
    const startOpen = pre.hasAttribute("data-open");

    const box = document.createElement("div");
    box.className = "component-accordion";
    box.innerHTML =
      '<div class="component-accordion-bar">' +
      '<button class="component-accordion-toggle' +
      (startOpen ? "" : " collapsed") +
      '" type="button"' +
      ' data-bs-toggle="collapse" data-bs-target="#' +
      panelId +
      '"' +
      ' aria-expanded="' +
      startOpen +
      '" aria-controls="' +
      panelId +
      '"></button>' +
      '<button class="copy-btn" type="button" aria-live="polite">Copy</button>' +
      "</div>" +
      '<div class="collapse' +
      (startOpen ? " show" : "") +
      '" id="' +
      panelId +
      '"></div>';

    const toggle = box.querySelector(".component-accordion-toggle");
    const btn = box.querySelector(".copy-btn");
    const panel = box.querySelector(".collapse");

    toggle.textContent = label;
    btn.setAttribute("aria-label", "Copy " + label);

    pre.parentNode.insertBefore(box, pre);
    panel.appendChild(pre);

    btn.addEventListener("click", function () {
      const text = code.textContent.trim();

      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = "Copied";
        btn.classList.add("is-copied");
        setTimeout(function () {
          btn.textContent = "Copy";
          btn.classList.remove("is-copied");
        }, 2500);
      });
    });
  });
}

addCopyButtons(document);
