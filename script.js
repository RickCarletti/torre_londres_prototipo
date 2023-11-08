const columns = document.querySelectorAll(".column");

document.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging");
});

document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
  if (document.querySelector("#libera_movimento").value == 'f') {
    if (e.target.classList.contains('dragged')) {
      e.target.classList.remove("dragged");
      const total = document.querySelector("#total");
      total.value = parseFloat(total.value) + 1
    }
  }
});

columns.forEach((item) => {
  item.addEventListener("dragover", (e) => {
    const dragging = document.querySelector(".dragging");

    if (document.querySelector("#libera_movimento").value == 'f') {
      if (dragging.nextElementSibling == null) {
        item.append(dragging);
        dragging.classList.add('dragged');
      }
    } else {
      item.append(dragging);
    }
  });
});

document.querySelector("#zerar_contador").addEventListener("click", (e) => {
  document.querySelector("#total").value = 0
});

document.querySelector("#libera_movimento_btn").addEventListener("click", (e) => {
  if (document.querySelector("#libera_movimento").value == 'f') {
    document.querySelector("#libera_movimento").value = 'v'
    document.querySelector(".movimento_liberado_alerta").style.display = ''
  } else {
    document.querySelector("#libera_movimento").value = 'f'
    document.querySelector(".movimento_liberado_alerta").style.display = 'none'
  }
});