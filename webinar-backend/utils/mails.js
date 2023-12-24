const registrationHtmlEmail = (username, date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const localDate = new Date(date).toLocaleDateString('es-ES', options);

  return `<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mail registro</title>
    <style>
      * {
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #ffe3bc;
      }
      .header {
        padding: 5%;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 8, 33, 1) 50%,
          rgba(7, 26, 85, 1) 100%
        );
        padding-bottom: 7%;
      }
      .header__title {
        font-size: 2rem;
        color: #e17900;
        text-align: center;
        font-weight: 500;
      }
      .header__welcome {
        font-size: 2.5rem;
        color: #ccc7e1;
        font-weight: 500;
        text-align: center;
        margin: 1em 0 0.5em;
      }
      .about {
        background-color: #ccc7e1;
        padding: 5%;
        background: linear-gradient(#071a55 0%, #ccc7e1 100%);
        display: flex;
      }
      .about__container {
        display: flex;
        padding: 5% 5% 0 5%;
        flex-direction: column;
        width: 50%;
        justify-content: space-between;
      }
      .about__btn {
        background-color: #e17900;
        padding: 0.5em 1em;
        font-size: 1.5rem;
        border-radius: 0.5em;
        color: #ffe3bc;
        box-shadow: #ffe3bc 1px 1px, #ffe3bc -1px -1px, #ffe3bc 1px -1px,
          #ffe3bc -1px 1px;
        cursor: pointer;
        margin: 1em 0;
      }
      .about__title {
        font-size: 1.5rem;
        text-align: center;
        font-weight: 500;
      }
      .about__timer {
        font-size: 2rem;
        text-align: center;
        margin: 1em 0;
        outline: #ffe3bc 1px solid;
        padding: 0.5em 1em;
        border-radius: 3px;
      }
      .about__element {
        display: flex;
        align-items: center;
        margin: 0.5em 0;
      }
      .about__number {
        font-size: 4rem;
        font-weight: 400;
        text-shadow: #071a55 1px 1px, #071a55 -1px -1px, #071a55 1px -1px,
          #071a55 -1px 1px;
      }
      .about__secret {
        margin: 0 0 0 1em;
        font-weight: 400;
        text-shadow: #071a55 1px 1px, #071a55 -1px -1px, #071a55 1px -1px,
          #071a55 -1px 1px;
      }
      .bio {
        display: flex;
        background-color: #000821;
        padding: 3% 0 0 3%;
        position: relative;
      }
      .bio__img {
        width: 25%;
        height: fit-content;
        position: absolute;
        bottom: 0;
        right: 0;
      }
      .bio__container {
        display: flex;
        flex-direction: column;
        padding: 2%;
        width: 65%;
      }
      .bio__name {
        font-size: 3rem;
        color: #e17900;
        font-weight: 400;
        text-align: center;
      }
      .bio__description {
        text-align: justify;
        line-height: 2rem;
        margin: 1em 0;
      }
      .footer {
        background-color: #071a55;
        display: flex;
        align-items: center;
        padding: 2% 1%;
      }
      .footer__container {
        display: flex;
      }
      .footer__logo-link {
        width: 200px;
        height: fit-content;
        margin: auto 1em;
      }
      .footer__logo {
        height: 100%;
        width: 100%;
      }
      .footer__ig-link {
        width: 45px;
        height: fit-content;
        margin: 0 1em;
      }
      .footer__ig {
        height: 100%;
        width: 100%;
      }
      .footer__credits {
        font-size: 0.8rem;
        margin: 0 10px 0 auto;
      }
      @media screen and (max-width: 800px) {
        .header__welcome {
          font-size: 1rem;
        }
        .header__title {
          font-size: 1.2rem;
        }
        .about {
          flex-direction: column;
          align-items: center;
        }
        .about__container {
          width: 80%;
        }
        .about__element {
          flex-direction: column;
        }
        .about__number {
          font-size: 4rem;
        }
        .about__secret {
          text-align: center;
        }
        .about__title {
          font-size: 1rem;
        }
        .about__timer {
          font-size: 1rem;
        }
        .about__btn {
          font-size: 1rem;
        }
        .bio {
          flex-direction: column-reverse;
          align-items: center;
        }
        .bio__name {
          font-size: 1.5rem;
        }
        .bio__description {
          font-size: 0.8rem;
          line-height: 1.3rem;
        }
        .bio__img {
          position: relative;
          width: 40%;
        }
        .bio__container {
          width: 90%;
        }
      }
      @media screen and (max-width: 500px) {
        .footer {
          flex-direction: column;
        }
        .footer__credits {
          margin: 10px 0;
        }
      }
      @media screen and (max-width: 350px) {
        .footer__container {
          flex-direction: column;
          align-items: center;
        }
        .footer__ig-link {
          margin: 5px 0;
        }
        .footer__logo-link {
          margin: 5px 0;
        }
      }
    </style>
  </head>
  <body>
    <section class="header">
      <h2 class="header__welcome">
        Hola, ${username} ¡Bienvenida/o a la clase gratuita, nos vemos muy
        pronto! &#129395;
      </h2>
      <h1 class="header__title">
        3 secretos de actrices y actores para socializar y no morir de vergüenza
        en el intento (aunque nunca hayas actuado)
      </h1>
    </section>
    <section class="about">
      <div class="about__container">
      <h2 class="about__title">
      Esta clase sucederá el ${localDate}:
    </h2>
        <p id="timer" class="about__timer"></p>
        <button class="about__btn">Link de clase</button>
      </div>
      <div class="about__container">
        <div class="about__element">
          <h2 class="about__number">1</h2>
          <h3 class="about__secret">
            Existen actores o actrices tímidas, no somos gente que nace siendo
            el centro de atención.
          </h3>
        </div>
        <div class="about__element">
          <h2 class="about__number">2</h2>
          <h3 class="about__secret">
            ¿Por qué los silencios pueden ser incómodos y cómo evitarlos?
          </h3>
        </div>
        <div class="about__element">
          <h2 class="about__number">3</h2>
          <h3 class="about__secret">
            Reconciliarte con tu timidez no quiere decir volverte una persona
            ruidosa o dejar de ser tú, significa que ésta no tome el control de
            tu vida.
          </h3>
        </div>
      </div>
    </section>
    <section class="bio">
      <div class="bio__container">
        <h2 class="bio__name">Julián Reyes Botello</h2>
        <p class="bio__description">
          Actor, director escénico y productor teatral con más de 10 años de
          experiencia. Egresado de la licenciatura en Literatura Dramática y
          Teatro por la UNAM, tiene estudios en la licenciatura en actuación de
          Casa del Teatro (México), la licenciatura en Teatro de la Universidad
          Nacional de Córdoba (Argentina), un diplomado en dirección escénica
          por el Centro Cultural Helénico de la Secretaría de Cultura (México) y
          un Diplomado Internacional en Creación/Investigación Escénica por la
          Cátedra Bergman y la UBA (México y Argentina). Ha dirigido alrededor
          de 10 obras dramáticas, actuado en más de 10 proyectos
          cinematográficos, a tenido a su cargo la producción de alrededor de 5
          espectáculos escénicos, siendo el último beneficiario del programa
          EFIARTES de la Secretaría de Hacienda y Crédito Público en alianza con
          la Secretaría de Cultura.
        </p>
      </div>
      <img src="retrato.webp" alt="retrato-Julian" class="bio__img" />
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="#" class="footer__logo-link">
          <img src="logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
  </body>
  <script>
    const countDownDate = new Date(${date}).getTime();
    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById('timer').innerHTML =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = 'Cuenta terminada';
      }
    }, 1000);
  </script>
</html>
`;
};

const reminder48HtmlEmail = (username, date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const localDate = new Date(date).toLocaleDateString('es-ES', options);

  return `<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mail registro</title>
    <style>
      * {
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #ffe3bc;
      }
      .header {
        padding: 5%;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 8, 33, 1) 50%,
          rgba(7, 26, 85, 1) 100%
        );
        padding-bottom: 7%;
      }
      .header__title {
        font-size: 2rem;
        color: #e17900;
        text-align: center;
        font-weight: 500;
      }
      .header__welcome {
        font-size: 2.5rem;
        color: #ccc7e1;
        font-weight: 400;
        text-align: center;
        margin: 1em 0 0.5em;
      }
      .about {
        background-color: #ccc7e1;
        padding: 5%;
        padding-top: 0;
        background: linear-gradient(#071a55 0%, #ccc7e1 100%);
        display: flex;
        justify-content: center;
      }
      .about__container {
        display: flex;
        padding: 5% 5% 0 5%;
        flex-direction: column;
        width: 80%;
        justify-content: space-between;
        align-items: center;
      }
      .about__btn {
        background-color: #e17900;
        padding: 0.5em 1em;
        font-size: 1.5rem;
        border-radius: 0.5em;
        color: #ffe3bc;
        box-shadow: #ffe3bc 1px 1px, #ffe3bc -1px -1px, #ffe3bc 1px -1px,
          #ffe3bc -1px 1px;
        cursor: pointer;
        margin: 1em 0;
        width: 60%;
      }
      .about__title {
        font-size: 1.5rem;
        text-align: center;
        font-weight: 500;
      }
      .about__timer {
        font-size: 2rem;
        text-align: center;
        margin: 1em 0;
        outline: #ffe3bc 1px solid;
        padding: 0.5em 1em;
        border-radius: 3px;
        width: 50%;
      }
      .footer {
        background-color: #071a55;
        display: flex;
        align-items: center;
        padding: 2% 1%;
      }
      .footer__container {
        display: flex;
      }
      .footer__logo-link {
        width: 200px;
        height: fit-content;
        margin: auto 1em;
      }
      .footer__logo {
        height: 100%;
        width: 100%;
      }
      .footer__ig-link {
        width: 45px;
        height: fit-content;
        margin: 0 1em;
      }
      .footer__ig {
        height: 100%;
        width: 100%;
      }
      .footer__credits {
        font-size: 0.8rem;
        margin: 0 10px 0 auto;
      }
      @media screen and (max-width: 800px) {
        .header__welcome {
          font-size: 1rem;
        }
        .header__title {
          font-size: 1.2rem;
        }
        .about {
          flex-direction: column;
          align-items: center;
        }
        .about__title {
          font-size: 1rem;
        }
        .about__btn {
          width: 80%;
          font-size: 1rem;
        }
        .about__timer {
          width: 80%;
          font-size: 1rem;
        }
      }
      @media screen and (max-width: 500px) {
        .footer {
          flex-direction: column;
        }
        .footer__credits {
          margin: 10px 0;
        }
      }
      @media screen and (max-width: 350px) {
        .footer__container {
          flex-direction: column;
          align-items: center;
        }
        .footer__ig-link {
          margin: 5px 0;
        }
        .footer__logo-link {
          margin: 5px 0;
        }
      }
    </style>
  </head>
  <body>
    <section class="header">
      <h1 class="header__title">
        3 secretos de actrices y actores para socializar y no morir de vergüenza
        en el intento (aunque nunca hayas actuado)
      </h1>
      <h2 class="header__welcome">
        ¿Adivina qué, ${username}? Estamos a 48 horas de nuestra clase. No sé tú, pero al
        menos yo estoy muy emocionado por ello. &#129299;
      </h2>
      <h2 class="header__welcome">
        Te sugiero que si desde ahora tienes alguna pregunta que quieras
        hacerme, la vayas anotando para que no se olvide. &#129488;
      </h2>
      <h2 class="header__welcome">¡¡¡Nos vemos en dos días!!!</h2>
    </section>
    <section class="about">
      <div class="about__container">
        <h2 class="about__title">¡La clase sucederá en dos días! el ${localDate}:</h2>
        <p id="timer" class="about__timer"></p>
        <button class="about__btn">Link de clase</button>
      </div>
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="#" class="footer__logo-link">
          <img src="logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
  </body>
  <script>
    const countDownDate = new Date(${date}).getTime();
    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById('timer').innerHTML =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = 'Cuenta terminada';
      }
    }, 1000);
  </script>
</html>
`;
};

const reminder24HtmlEmail = (username, date) => {
  return `<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mail registro</title>
  <style>
    * {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #ffe3bc;
    }
    .header {
      padding: 5%;
      background: linear-gradient(
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 8, 33, 1) 50%,
        rgba(7, 26, 85, 1) 100%
      );
      padding-bottom: 7%;
    }
    .header__title {
      font-size: 2rem;
      color: #e17900;
      text-align: center;
      font-weight: 500;
    }
    .header__welcome {
      font-size: 1.5rem;
      color: #ccc7e1;
      font-weight: 400;
      text-align: center;
      margin: 1em 0 0.5em;
    }
    .about {
      background-color: #ccc7e1;
      padding: 5%;
      background: linear-gradient(#071a55 0%, #ccc7e1 100%);
      display: flex;
      padding-top: 0;
    }
    .about__container {
      display: flex;
      padding: 5% 5% 0 5%;
      flex-direction: column;
      width: 50%;
      justify-content: space-between;
      align-items: center;
    }
    .about__btn {
      background-color: #e17900;
      padding: 0.5em 1em;
      font-size: 1.5rem;
      border-radius: 0.5em;
      color: #ffe3bc;
      box-shadow: #ffe3bc 1px 1px, #ffe3bc -1px -1px, #ffe3bc 1px -1px,
        #ffe3bc -1px 1px;
      cursor: pointer;
      margin: 1em 0;
      width: 80%;
    }
    .about__title {
      font-size: 1.5rem;
      text-align: center;
      font-weight: 500;
    }
    .about__timer {
      font-size: 2rem;
      text-align: center;
      margin: 1em 0;
      outline: #ffe3bc 1px solid;
      padding: 0.5em 1em;
      border-radius: 3px;
      width: 60%;
    }

    .about__element {
      display: flex;
      align-items: center;
      margin: 0.5em 0;
    }
    .about__number {
      font-size: 4rem;
      font-weight: 400;
      text-shadow: #071a55 1px 1px, #071a55 -1px -1px, #071a55 1px -1px,
        #071a55 -1px 1px;
    }
    .about__secret {
      margin: 0 0 0 1em;
      font-weight: 400;
      text-shadow: #071a55 1px 1px, #071a55 -1px -1px, #071a55 1px -1px,
        #071a55 -1px 1px;
    }
    .footer {
      background-color: #071a55;
      display: flex;
      align-items: center;
      padding: 2% 1%;
    }
    .footer__container {
      display: flex;
    }
    .footer__logo-link {
      width: 200px;
      height: fit-content;
      margin: auto 1em;
    }
    .footer__logo {
      height: 100%;
      width: 100%;
    }
    .footer__ig-link {
      width: 45px;
      height: fit-content;
      margin: 0 1em;
    }
    .footer__ig {
      height: 100%;
      width: 100%;
    }
    .footer__credits {
      font-size: 0.8rem;
      margin: 0 10px 0 auto;
    }
    @media screen and (max-width: 800px) {
      .header__welcome {
        font-size: 1rem;
      }
      .header__title {
        font-size: 1.2rem;
      }
      .about {
        flex-direction: column;
        align-items: center;
      }
      .about__title {
        font-size: 1rem;
      }
      .about__timer {
        font-size: 1rem;
      }
      .about__btn {
        font-size: 1rem;
      }
      .about__container {
        width: 80%;
      }
      .about__element {
        flex-direction: column;
      }
      .about__number {
        font-size: 4rem;
      }
      .about__secret {
        text-align: center;
      }
    }
    @media screen and (max-width: 500px) {
      .footer {
        flex-direction: column;
      }
      .footer__credits {
        margin: 10px 0;
      }
    }
    @media screen and (max-width: 350px) {
      .footer__container {
        flex-direction: column;
        align-items: center;
      }
      .footer__ig-link {
        margin: 5px 0;
      }
      .footer__logo-link {
        margin: 5px 0;
      }
    }
  </style>
</head>
<body>
  <section class="header">
    <h2 class="header__welcome">
      Ahora sí, empieza la cuenta regresiva de las 24 horas para nuestra
      clase:
    </h2>
    <h1 class="header__title">
      3 secretos de actrices y actores para socializar y no morir de vergüenza
      en el intento (aunque nunca hayas actuado)
    </h1>
    <h2 class="header__welcome">
      Ya estamos empezando a calentar motores por aquí. Te confieso que yo me
      siento en este momento muy nervioso, pero ya lo ando respirando. Estos
      nervios son porque ando bien emocionado por poder compartirte todo esto.
      &#128517;
    </h2>
    <h2 class="header__welcome">Y ya, eso: nos vemos mañanita, ${username}.</h2>
  </section>
  <section class="about">
    <div class="about__container">
      <h2 class="about__title">La clase sucederá en:</h2>
      <p id="timer" class="about__timer"></p>
      <button class="about__btn">Link de clase</button>
    </div>
    <div class="about__container">
      <div class="about__element">
        <h2 class="about__number">1</h2>
        <h3 class="about__secret">
          Existen actores o actrices tímidas, no somos gente que nace siendo
          el centro de atención.
        </h3>
      </div>
      <div class="about__element">
        <h2 class="about__number">2</h2>
        <h3 class="about__secret">
          ¿Por qué los silencios pueden ser incómodos y cómo evitarlos?
        </h3>
      </div>
      <div class="about__element">
        <h2 class="about__number">3</h2>
        <h3 class="about__secret">
          Reconciliarte con tu timidez no quiere decir volverte una persona
          ruidosa o dejar de ser tú, significa que ésta no tome el control de
          tu vida.
        </h3>
      </div>
    </div>
  </section>
  <section class="footer">
    <div class="footer__container">
      <a href="#" class="footer__logo-link">
        <img src="logo-transparente.png" alt="logo" class="footer__logo" />
      </a>
      <a href="#" class="footer__ig-link">
        <img src="ig.svg" alt="logo" class="footer__ig" />
      </a>
    </div>
    <p class="footer__credits">Julián Reyes Botello 2024</p>
  </section>
</body>
<script>
  const countDownDate = new Date(${date}).getTime();
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('timer').innerHTML =
      days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('timer').innerHTML = 'Cuenta terminada';
    }
  }, 1000);
</script>
</html>`;
};

const reminder2HtmlEmail = (username, date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const localDate = new Date(date).toLocaleDateString('es-ES', options);

  return `<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mail registro</title>
    <style>
      * {
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #ffe3bc;
      }
      .header {
        padding: 5%;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 8, 33, 1) 50%,
          rgba(7, 26, 85, 1) 100%
        );
        padding-bottom: 7%;
      }
      .header__title {
        font-size: 2rem;
        color: #e17900;
        text-align: center;
        font-weight: 500;
      }
      .header__welcome {
        font-size: 1.5rem;
        color: #ccc7e1;
        font-weight: 400;
        text-align: center;
        margin: 1em 0 0.5em;
      }
      .about {
        background-color: #ccc7e1;
        padding: 5%;
        background: linear-gradient(#071a55 0%, #ccc7e1 100%);
        display: flex;
        padding-top: 0;
      }
      .about__container {
        display: flex;
        padding: 5% 5% 0 5%;
        flex-direction: column;
        width: 50%;
        justify-content: space-between;
        align-items: center;
      }
      .about__btn {
        background-color: #e17900;
        padding: 0.5em 1em;
        font-size: 1.5rem;
        border-radius: 0.5em;
        color: #ffe3bc;
        box-shadow: #ffe3bc 1px 1px, #ffe3bc -1px -1px, #ffe3bc 1px -1px,
          #ffe3bc -1px 1px;
        cursor: pointer;
        margin: 1em 0;
        width: 80%;
      }
      .about__title {
        font-size: 1.5rem;
        text-align: center;
        font-weight: 500;
      }
      .about__timer {
        font-size: 2rem;
        text-align: center;
        margin: 1em 0;
        outline: #ffe3bc 1px solid;
        padding: 0.5em 1em;
        border-radius: 3px;
        width: 60%;
      }

      .about__element {
        display: flex;
        align-items: center;
        margin: 0.5em 0;
      }
      .about__number {
        font-size: 4rem;
        font-weight: 400;
        text-shadow: #071a55 1px 1px, #071a55 -1px -1px, #071a55 1px -1px,
          #071a55 -1px 1px;
      }
      .about__secret {
        margin: 0 0 0 1em;
        font-weight: 400;
        text-shadow: #071a55 1px 1px, #071a55 -1px -1px, #071a55 1px -1px,
          #071a55 -1px 1px;
      }
      .footer {
        background-color: #071a55;
        display: flex;
        align-items: center;
        padding: 2% 1%;
      }
      .footer__container {
        display: flex;
      }
      .footer__logo-link {
        width: 200px;
        height: fit-content;
        margin: auto 1em;
      }
      .footer__logo {
        height: 100%;
        width: 100%;
      }
      .footer__ig-link {
        width: 45px;
        height: fit-content;
        margin: 0 1em;
      }
      .footer__ig {
        height: 100%;
        width: 100%;
      }
      .footer__credits {
        font-size: 0.8rem;
        margin: 0 10px 0 auto;
      }
      @media screen and (max-width: 800px) {
        .header__welcome {
          font-size: 1rem;
        }
        .header__title {
          font-size: 1.2rem;
        }
        .about {
          flex-direction: column;
          align-items: center;
        }
        .about__container {
          width: 80%;
        }
        .about__element {
          flex-direction: column;
        }
        .about__number {
          font-size: 4rem;
        }
        .about__secret {
          text-align: center;
        }
        .about__title {
          font-size: 1rem;
        }
        .about__timer {
          font-size: 1rem;
        }
        .about__btn {
          font-size: 1rem;
        }
      }
      @media screen and (max-width: 500px) {
        .footer {
          flex-direction: column;
        }
        .footer__credits {
          margin: 10px 0;
        }
      }
      @media screen and (max-width: 350px) {
        .footer__container {
          flex-direction: column;
          align-items: center;
        }
        .footer__ig-link {
          margin: 5px 0;
        }
        .footer__logo-link {
          margin: 5px 0;
        }
      }
    </style>
  </head>
  <body>
    <section class="header">
      <h2 class="header__welcome">
        ¡Ya estamos metiendo el pan al horno! ¡Ya casi empieza la clase
        gratuita!. &#128104;&#127997;&#8205;&#127859;
      </h2>
      <h2 class="header__welcome">
        ¿Qué tiene que ver el pan con la pena? Ve preparándote un cafecito o un
        chocolate para acompañar con un pan porque de nuestra parte ya estamos
        listos para empezar y ahí te explico todo. &#9749;
      </h2>
      <h2 class="header__welcome">
        Heme aquí antes de la sesión conflictuado porque no vaya a haber ningún
        problema técnico. &#128517;
      </h2>
      <h1 class="header__title">
        3 secretos de actrices y actores para socializar y no morir de vergüenza
        en el intento (aunque nunca hayas actuado)
      </h1>
    </section>
    <section class="about">
      <div class="about__container">
        <h2 class="about__title">Estamos a menos de dos horaaaas, ${username}, te recuerdo que nuestra cita es el ${localDate}:</h2>
        <p id="timer" class="about__timer"></p>
        <button class="about__btn">Link de clase</button>
      </div>
      <div class="about__container">
        <div class="about__element">
          <h2 class="about__number">1</h2>
          <h3 class="about__secret">
            Existen actores o actrices tímidas, no somos gente que nace siendo
            el centro de atención.
          </h3>
        </div>
        <div class="about__element">
          <h2 class="about__number">2</h2>
          <h3 class="about__secret">
            ¿Por qué los silencios pueden ser incómodos y cómo evitarlos?
          </h3>
        </div>
        <div class="about__element">
          <h2 class="about__number">3</h2>
          <h3 class="about__secret">
            Reconciliarte con tu timidez no quiere decir volverte una persona
            ruidosa o dejar de ser tú, significa que ésta no tome el control de
            tu vida.
          </h3>
        </div>
      </div>
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="#" class="footer__logo-link">
          <img src="logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
  </body>
  <script>
    const countDownDate = new Date(${date}).getTime();
    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById('timer').innerHTML =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = 'Cuenta terminada';
      }
    }, 1000);
  </script>
</html>
`;
};

module.exports = {
  registrationHtmlEmail,
  reminder48HtmlEmail,
  reminder24HtmlEmail,
  reminder2HtmlEmail,
};
