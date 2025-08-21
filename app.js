// Datos de ejemplo (puedes cambiarlos)
const DATA = [
    {
      title: "Trabajo",
      key: "work",
      timeframes: {
        daily:   { current: 5,  previous: 7  },
        weekly:  { current: 32, previous: 36 },
        monthly: { current: 103, previous: 128 }
      }
    },
    {
      title: "Juego",
      key: "play",
      timeframes: {
        daily:   { current: 1,  previous: 2  },
        weekly:  { current: 10, previous: 8  },
        monthly: { current: 23, previous: 29 }
      }
    },
    {
      title: "Estudio",
      key: "study",
      timeframes: {
        daily:   { current: 0,  previous: 1  },
        weekly:  { current: 4,  previous: 7  },
        monthly: { current: 13, previous: 19 }
      }
    },
    {
      title: "Ejercicio",
      key: "exercise",
      timeframes: {
        daily:   { current: 1,  previous: 1  },
        weekly:  { current: 4,  previous: 5  },
        monthly: { current: 11, previous: 18 }
      }
    },
    {
      title: "Social",
      key: "social",
      timeframes: {
        daily:   { current: 1,  previous: 3  },
        weekly:  { current: 5,  previous: 10 },
        monthly: { current: 21, previous: 23 }
      }
    },
    {
      title: "Auto-cuidado",
      key: "selfcare",
      timeframes: {
        daily:   { current: 0,  previous: 1  },
        weekly:  { current: 2,  previous: 2  },
        monthly: { current: 7,  previous: 11 }
      }
    }
  ];
  
  const cardsContainer = document.getElementById("cards");
  const rangeButtons = document.querySelectorAll(".range-btn");
  let currentRange = "weekly";
  
  // Render inicial
  renderCards(currentRange);
  
  // Listeners de rango
  rangeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      currentRange = btn.dataset.range;
      rangeButtons.forEach(b => b.classList.toggle("active", b === btn));
      renderCards(currentRange);
    });
  });
  
  // Función de render
  function renderCards(range){
    cardsContainer.innerHTML = "";
    const prevLabel = {
      daily: "Ayer",
      weekly: "La semana pasada",
      monthly: "El mes pasado"
    }[range];
  
    DATA.forEach(item => {
      const { current, previous } = item.timeframes[range];
  
      const card = document.createElement("article");
      card.className = `card ${item.key}`;
  
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-title">
            <span>${item.title}</span>
            <span class="dots" aria-hidden="true"></span>
          </div>
          <div class="card-hours">
            <div class="current">${current}hrs</div>
            <div class="previous">${prevLabel} – ${previous}hrs</div>
          </div>
        </div>
      `;
  
      cardsContainer.appendChild(card);
    });
  }
  
