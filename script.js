const secondsElement = document.querySelector(".seconds .number");
      const minutesElement = document.querySelector(".minutes .number");
      const hoursElement = document.querySelector(".hours .number");
      const daysElement = document.querySelector(".days .number");

      const countdownDate = new Date("January 1, 2024").getTime();

      const timeFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
          clearInterval(timeFunction);
          // You can add your action here when the countdown is over
        } else {
          daysElement.textContent = days < 10 ? `0${days}` : days;
          hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
          minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
          secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
        }
      }, 1000); //1000ms = 1s