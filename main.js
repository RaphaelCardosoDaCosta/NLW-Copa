function createMatch(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  ` 
}

let delay = 0

function createCards(date, day, game) {

  delay = delay + 0.2
  return `
  <div class="card" style= "animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>

        <ul>   
          ${game}
      </ul>
  </div>
      `
}


document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="">
  </header>

  <main id="cards">
    ${createCards("19/09", "Segunda-feira", createMatch("korea", "13h", "portugal") + 
     createMatch("serbia", "16h", "suica") +
     createMatch("portugal", "10h", "brazil"))}

    ${createCards("28/09", "Sábado", createMatch("camaroes", "17h", "suica") + createMatch("brazil", "13h", "serbia") +
    createMatch("korea", "16h", "serbia")
    )}

    ${createCards("02/10", "Quarta-feira", createMatch("serbia", "16h", "portugal") + 
    createMatch("camaroes", "17h", "brazil") +
    createMatch("suica", "16h", "portugal")
    )}

    ${createCards("07/10", "Quinta-feira", createMatch("camaroes", "17h", "suica") + createMatch("brazil", "13h", "serbia") +
    createMatch("korea", "16h", "serbia")
    )}

  </main>
        `






        