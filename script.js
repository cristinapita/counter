   // Función para calcular el tiempo restante
   const targetDate = new Date("2033-01-01");

   function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const yearsRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const monthsRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
    const daysRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    return { yearsRemaining, monthsRemaining, daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining };
  }
  
  // Función para renderizar el contador en el DOM
  function renderCountdown() {
    const { yearsRemaining, monthsRemaining, daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining } = updateCountdown();
    d3.select("#countdown")
      .html(`<span class="number"> ${yearsRemaining}</span> <span class="text">years</span>, <span class="number">${monthsRemaining}</span> <span class="text">months</span><span class="number"> ${daysRemaining}</span> <span class="text">days</span>, <span class="number">${hoursRemaining}</span> <span class="text">hours</span>,  <span class="number">${minutesRemaining}</span> <span class="text">minutes</span> and <span class="number"> ${secondsRemaining}</span> <span class="text">seconds`);
  }
  
  
  // Renderiza el contador inicialmente
  renderCountdown();
  
  // Actualiza el contador cada segundo
  setInterval(renderCountdown, 1000);