const registrationHtmlEmail = (user, date) => {
  const { username, _id } = user;

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
      .phantom__img{
        height: 1px;
        width: 1px;
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
        text-decoration: none;
        text-align: center;
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
  <img src="${process.env.HOST_ADRESS}/api/pixel/${_id}" alt="pixel" class="phantom-img" />
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
        <h2 class="about__title">Esta clase sucederá el:</h2>
        <p class="about__timer">${localDate}</p>
        <a class="about__btn">Link de clase</a>
      </div>
      <div class="about__container">
        <div class="about__element">
          <h2 class="about__number">1</h2>
          <h3 class="about__secret">
          Existen actores y actrices tímidas, no nacemos siendo el centro de
          atención.
          </h3>
        </div>
        <div class="about__element">
          <h2 class="about__number">2</h2>
          <h3 class="about__secret">
          Silencios incómodos: ¿Qué son y cómo evitarlos?
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
      <img src="${process.env.HOST_ADRESS}/api/public/retrato.webp" alt="retrato-Julian" class="bio__img" />
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="${process.env.HOST_ADRESS}/ventas-l" class="footer__logo-link">
          <img src="${process.env.HOST_ADRESS}/api/public/logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="${process.env.HOST_ADRESS}/api/public/ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
  </body>
</html>
`;
};

const reminder48HtmlEmail = (user, date) => {
  const { username, _id } = user;

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
      .phantom__img{
        height: 1px;
        width: 1px;
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
        text-decoration: none;
        text-align: center;
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
  <img src="${process.env.HOST_ADRESS}/api/pixel/${_id}" alt="pixel" class="phantom-img" />
    <section class="header">
      <h1 class="header__title">
        3 secretos de actrices y actores para socializar y no morir de vergüenza
        en el intento (aunque nunca hayas actuado)
      </h1>
      <h2 class="header__welcome">
        ¿Adivina qué, ${username}? Estamos a 48 horas de nuestra clase. No sé
        tú, pero al menos yo estoy muy emocionado por ello. &#129299;
      </h2>
      <h2 class="header__welcome">
        Te sugiero que si desde ahora tienes alguna pregunta que quieras
        hacerme, la vayas anotando para que no se olvide. &#129488;
      </h2>
      <h2 class="header__welcome">¡¡¡Nos vemos en dos días!!!</h2>
    </section>
    <section class="about">
      <div class="about__container">
        <h2 class="about__title">¡La clase sucederá en dos días! el</h2>
        <p class="about__timer">${localDate}</p>
        <a class="about__btn" href="">Link de clase</a>
      </div>
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="${process.env.HOST_ADRESS}/ventas-l" class="footer__logo-link">
          <img src="${process.env.HOST_ADRESS}/api/public/logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="${process.env.HOST_ADRESS}/api/public/ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
  </body>
</html>
`;
};

const reminder24HtmlEmail = (user, date) => {
  const { username, _id } = user;

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
      .phantom__img{
        height: 1px;
        width: 1px;
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
        text-decoration: none;
        text-align: center;
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
      .hook {
        background-color: #ccc7e1;
        display: flex;
        align-items: center;
        padding: 2%;
        flex-direction: column;
      }
      .hook__text {
        color: #071a55;
        width: 80%;
        font-size: 1.5rem;
        margin: 1em 0;
        text-align: center;
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
        .hook__text {
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
  <img src="${process.env.HOST_ADRESS}/api/pixel/${_id}" alt="pixel" class="phantom-img" />
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
      <h2 class="header__welcome">
        Y ya, eso: nos vemos mañanita, ${username}.
      </h2>
    </section>
    <section class="hook">
      <p class="hook__text">
        ¿Alguna vez has sentido que no eres tan interesante cómo deberías para
        tener amistades cercanas y reales?
      </p>
      <p class="hook__text">
        ¿Y si te dijera que no eres tan especial como crees?: Todo el mundo nos
        hemos sentido poco interesantes y que no tenemos nada qué decir, pero
        existen herramientas claves para poder volverte una persona con temas de
        conversación interesantes.
      </p>
    </section>
    <section class="about">
      <div class="about__container">
        <h2 class="about__title">La clase sucederá el</h2>
        <p class="about__timer">${localDate}</p>
        <a class="about__btn">Link de clase</a>
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
        <a href="${process.env.HOST_ADRESS}/ventas-l" class="footer__logo-link">
          <img src="${process.env.HOST_ADRESS}/api/public/logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="${process.env.HOST_ADRESS}/api/public/ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
  </body>
</html>`;
};

const reminder2HtmlEmail = (user, date) => {
  const { username, _id } = user;

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
      .phantom__img{
        height: 1px;
        width: 1px;
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
        text-align: center;
        text-decoration: none;
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
  <img src="${process.env.HOST_ADRESS}/api/pixel/${_id}" alt="pixel" class="phantom-img" />
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
        <h2 class="about__title">
          Estamos a menos de dos horaaaas, ${username}, te recuerdo que nuestra
          cita es el
        </h2>
        <p class="about__timer">${localDate}</p>
        <a class="about__btn" href="#">Link de clase</a>
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
        <a href="${process.env.HOST_ADRESS}/ventas-l" class="footer__logo-link">
          <img src="${process.env.HOST_ADRESS}/api/public/logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="${process.env.HOST_ADRESS}/api/public/ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
  </body>
</html>`;
};

const post2hHtmlEmail = (user) => {
  const { username, _id } = user;
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
      .phantom__img{
        height: 1px;
        width: 1px;
      }
      .header {
        padding: 5%;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 8, 33, 1) 50%,
          rgba(7, 26, 85, 1) 100%
        );
        padding-bottom: 7%;
        display: flex;
        flex-direction: column;
      }
      .header__logo {
        width: 40%;
        margin-bottom: 2em;
      }
      .header__title {
        font-size: 1.5rem;
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
      .header__link {
        text-decoration: none;
        text-align: center;
        font-size: 1.5rem;
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
      }
      @media screen and (max-width: 500px) {
        .header__logo {
          width: 80%;
        }
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
  <img src="${process.env.HOST_ADRESS}/api/pixel/${_id}" alt="pixel" class="phantom-img" />
    <section class="header">
      <img src="logo-transparente.png" alt="logo" class="header__logo" />
      <h1 class="header__title">
        Sólo vengo a ofrecerte un pequeño recordatorio de lo que incluye el
        programa Reconciliándome con mi timidez: herramientas actorales de la
        vida diaria
      </h1>
      <a href="${process.env.HOST_ADRESS}/ventas-s" class="header__link">${process.env.HOST_ADRESS}/ventas-l</a>
      <h2 class="header__welcome">
        También, ${username}, el pequeño recordatorio de que quedan sólo 5 días con el carrito
        abierto.
      </h2>
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="${process.env.HOST_ADRESS}/ventas-s" class="footer__logo-link">
          <img src="logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
  </body>
</html>
`;
};

const post1dHtmlEmail = (user) => {
  const { username, _id } = user;
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
      .phantom__img{
        height: 1px;
        width: 1px;
      }
      .header {
        padding: 5%;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 8, 33, 1) 50%,
          rgba(7, 26, 85, 1) 100%
        );
        padding-bottom: 7%;
        display: flex;
        flex-direction: column;
      }
      .header__logo {
        width: 40%;
        margin-bottom: 2em;
      }
      .header__title {
        font-size: 1.5rem;
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
      .header__link {
        text-decoration: none;
        text-align: center;
        font-size: 1.5rem;
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
      }
      @media screen and (max-width: 500px) {
        .header__logo {
          width: 80%;
        }
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
      <img src="logo-transparente.png" alt="logo" class="header__logo" />
      <h1 class="header__title">
        Hola, ${username}, aquí tienes el video de la repetición de la sesión de ayer por si tienes
        alguna duda, quisieras volver a ver algún elemento o, si llegara a
        suceder que no pudiste ver la sesión, te mando el link de la clase de
        ayer:
      </h1>
      <a href="${process.env.HOST_ADRESS}/repeticion" class="header__link">${process.env.HOST_ADRESS}/repeticion</a>
      <h2 class="header__welcome">
        Link al programa “Reconciliándome con mi timidez”:
      </h2>
      <a href="${process.env.HOST_ADRESS}/ventas-s" class="header__link">${process.env.HOST_ADRESS}/ventas-s</a>
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="${process.env.HOST_ADRESS}/ventas-s" class="footer__logo-link">
          <img src="logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
    <img
    src="${process.env.HOST_ADRESS}/api/pixel/${_id}"
    alt="pixel"
    class="phantom-img"
  />
  </body>
</html>`;
};

const post2dHtmlEmail = (user) => {
  const { username, _id } = user;

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
      .phantom__img {
        height: 1px;
        width: 1px;
      }
      .header {
        padding: 5%;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 8, 33, 1) 50%,
          rgba(7, 26, 85, 1) 100%
        );
        padding-bottom: 1%;
      }
      .header__title {
        font-size: 1.5rem;
        font-weight: 300;
        margin: 1em 0 1em 1em;
      }
      .header__text {
        font-size: 1.5rem;
        color: #ccc7e1;
        font-weight: 500;
        margin: 1em 0 0.5em;
      }
      .about {
        background-color: #ccc7e1;
        padding: 5%;
        background: linear-gradient(#071a55 0%, #ccc7e1 100%);
        display: flex;
        flex-direction: column;
      }
      .about__text {
        font-size: 1.5rem;
        font-weight: 300;
        margin: 1em 0;
      }
      .about__text_bk {
        color: #071a55;
      }
      .about__link {
        font-size: 1.5remN;
        color: #e17900;
        text-decoration: none;
        text-align: center;
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
        .header__text {
          font-size: 1rem;
        }
        .header__title {
          font-size: 1.2rem;
        }
        .about {
          flex-direction: column;
          align-items: center;
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
        .about__text {
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
    <img
      src="http://12.0.0.1:3001/api/pixel/113213"
      alt="pixel"
      class="phantom-img"
    />
    <section class="header">
      <p class="header__text">
        ${username}, ¡Buen día! Sólo vengo a recordarte los tres elementos que
        vimos en la clase:
      </p>
      <p class="header__title">
        1. La mayor parte de la gente tiene algún grado de timidez, es algo con
        lo que se puede trabajar, no está escrito en piedra tu relación con
        ésta.
      </p>
      <p class="header__title">
        2. Los silencios incómodos se pueden trabajar de dos formas, volverlos
        cómodos o entablar conversación, existen diferentes formas como: usar el
        ambiente, el pasado, la pregunta, la escucha y la palabra propia, lo más
        importante es que sea un diálogo, es decir ni un monólogo ni una
        entrevista.
      </p>
      <p class="header__title">
        3. Dialogar con tu timidez no implica dejar de ser tú, volverte una
        persona ruidosa, implica saber cuándo estás tomando una decisión porque
        quieres y cuándo porque tienes miedo.
      </p>
      <p class="header__text">
        También rememorar la gran importancia de la acción. Porque está bueno
        saber pero si quieres un cambio real debes aplicar el conocimiento.
      </p>
    </section>
    <section class="about">
      <div class="about__container">
        <p class="about__text">
          Por ello también me es importante recordarte que para mí, la mejor
          forma de llevar a la acción en un espacio seguro es a través de la
          actuación, lo veo en mi propia experiencia y en la de actrices y
          actores profesionales con timidez. Es por ello que me di a la tarea de
          adaptar las herramientas que usamos profesionalmente para que tú las
          puedas utilizar para ayudarte a vivir experiencias que te ayuden a
          mejorar tu relación con tu timidez.
        </p>
      </div>
      <p class="about__text">
        El programa Reconciliándome con mi timidez tiene un costo de 237USD e
        incluyendo los siguientes bonos:
      </p>
      <div class="about__element">
        <h2 class="about__number">1</h2>
        <h3 class="about__secret">
          Kit de comunicación efectiva que incluye un ebook donde hay elementos
          clave de este tipo de comunicación como la escucha activa, la empatía,
          la expresión clara. También una lista de temas que puedes usar en una
          emergencia donde haya un silencio incómodo y no encuentres salida.
          Finalmente una serie de ejercicios con el espejo que te permitirán ir
          soltando la lengua.
        </h3>
      </div>
      <div class="about__element">
        <h2 class="about__number">2</h2>
        <h3 class="about__secret">
          Masterclass de amistades saludables. Donde verás qué es y cómo se
          puede sostener una buena amistad.
        </h3>
      </div>
      <div class="about__element">
        <h2 class="about__number">3</h2>
        <h3 class="about__secret">
          Masterclass de estrategias de memorización.
        </h3>
      </div>
      <div class="about__element">
        <h2 class="about__number">4</h2>
        <h3 class="about__secret">
          Infografía sobre la autoestima: ¿Por qué es tan importante atenderla?
        </h3>
      </div>
      <p class="about__text about__text_bk">
        Pero recuerda que aún quedan 3 días para conseguirlo al increíble precio
        de 237USD, recuerda que su precio normal es de 571USD.
      </p>
      <a href="${process.env.HOST_ADRESS}/ventas-s" class="about__link"
        >${process.env.HOST_ADRESS}/ventas-s</a
      >
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="${process.env.HOST_ADRESS}/ventas-s" class="footer__logo-link">
          <img src="logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
    <img
      src="${process.env.HOST_ADRESS}/api/pixel/${_id}"
      alt="pixel"
      class="phantom-img"
    />
  </body>
</html>
`;
};

const post3dHtmlEmail = (user) => {
  const { username, _id } = user;

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
      .phantom__img {
        height: 1px;
        width: 1px;
      }
      .header {
        padding: 5%;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 8, 33, 1) 50%,
          rgba(7, 26, 85, 1) 100%
        );
        padding-bottom: 7%;
        display: flex;
        flex-direction: column;
      }
      .header__logo {
        width: 40%;
        margin-bottom: 2em;
      }
      .header__title {
        font-size: 1.5rem;
        text-align: center;
        font-weight: 300;
      }
      .header__welcome {
        font-size: 1.5rem;
        color: #ccc7e1;
        font-weight: 400;
        text-align: center;
        margin: 1em 0 0.5em;
      }
      .faqs {
        display: flex;
        flex-direction: column;
        background-color: #000821;
        padding: 2%;
      }
      .faqs__container {
        border: #ffe3bc 1px solid;
        padding: 1%;
      }
      .faqs__element {
        display: flex;
        flex-direction: column;
        margin: 1em;
      }
      .faqs__question {
        font-weight: 500;
        font-size: 1.2rem;
      }
      .faqs__answer {
        font-weight: 300;
        text-align: justify;
        font-size: 1.2rem;
      }
      .link {
        background-color: #ffe3bc;
        display: flex;
        flex-direction: column;
        padding: 2%;
        align-items: center;
      }
      .link__text {
        font-weight: 300;
        color: #000821;
      }
      .link__link {
        text-decoration: none;
        text-align: center;
        font-size: 1.5rem;
        margin: 1em 0;
        color: #000821;
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
      }
      @media screen and (max-width: 500px) {
        .header__logo {
          width: 80%;
        }
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
      <img src="logo-transparente.png" alt="logo" class="header__logo" />
      <h1 class="header__title">
        Hola, ${username}, Te comparto las preguntas frecuentes que la gente
        tiene sobre Reconciliandome con mi timidez: herramientas actorales para
        la vida diaria:
      </h1>
    </section>
    <section class="faqs">
      <div class="faqs__container">
        <div class="faqs__element">
          <p class="faqs__question">
            ¿Necesito tener alguna experiencia en actuación?
          </p>
          <p class="faqs__answer">
            No, ninguna. Recordemos que en principio esto no es un curso de
            actuación, sí se actuará algo pero no es el objetivo.
          </p>
        </div>
        <div class="faqs__element">
          <p class="faqs__question">¿El curso es presencial?</p>
          <p class="faqs__answer">No, es un curso virtual, pero en vivo.</p>
        </div>
        <div class="faqs__element">
          <p class="faqs__question">
            ¿El curso lo puedo tomar a la hora que sea o tiene un horario
            específico?
          </p>
          <p class="faqs__answer">
            El curso es en vivo, la gran ventaja de esto es que podremos
            resolver dudas e inquietudes al momento.
          </p>
        </div>
        <div class="faqs__element">
          <p class="faqs__question">
            ¿A través de qué plataforma se da el curso?
          </p>
          <p class="faqs__answer">
            Este curso se dará a través de la plataforma Zoom.
          </p>
        </div>
        <div class="faqs__element">
          <p class="faqs__question">
            ¿Recibiré retroalimentación personalizada?
          </p>
          <p class="faqs__answer">
            ¡Sí! La ventaja de que el curso sea en vivo es que podremos tener
            esta personalización.
          </p>
        </div>
        <div class="faqs__element">
          <p class="faqs__question">
            ¿Qué resultados se esperan tras completar el curso?
          </p>
          <p class="faqs__answer">
            Aprenderás de manera teórica y práctica diferentes herramientas para
            hacer las pases con tu timidez, NO es luchar contra ella ni
            eliminarla, más bien abrazarla y, con ella, aprender a tener el
            valor para accionar.
          </p>
        </div>
        <div class="faqs__element">
          <p class="faqs__question">¿Qué tipos de actividades se trabajarán?</p>
          <p class="faqs__answer">
            De manera teórica atenderemos diferentes cosas relacionadas a la
            timidez y a la actuación, también veremos cómo podemos usar
            herramientas actorales en la vida cotidiana y finalmente, de manera
            práctica se trabajará con un pequeño monólogo para concretar todos
            los elementos vistos.
          </p>
        </div>
        <div class="faqs__element">
          <p class="faqs__question">
            ¿Cuál es el nivel de compromiso requerido para beneficiarme de este
            curso?
          </p>
          <p class="faqs__answer">
            Los resultados de este curso se crearán dependiendo del compromiso
            que tengas. Por supuesto que todo el mundo que tome el curso se
            llevará material súper valioso, pero las personas que decidan
            quedarse no sólo en el aprendizaje sino llevarlo a la práctica
            tendrán una ganancia aún mayor.
          </p>
        </div>
        <div class="faqs__element">
          <p class="faqs__question">
            ¿Cómo se abordarán los aspectos psicológicos y emocionales de la
            timidez?
          </p>
          <p class="faqs__answer">
            Lo primero, y fundamental es que esto NO es un proceso terapéutico,
            más bien puede ser un proceso alterno a la terapia psicológica. Lo
            segundo es que no planteamos la idea de eliminar la timidez o pensar
            que ésta es mala, es una parte del carácter de una gran parte de la
            población. Más bien aprendemos a que ésta deje de ser quien tome las
            riendas de nuestra vida.
          </p>
        </div>
        <div class="faqs__element">
          <p class="faqs__question">
            ¿A futuro seguirá habiendo la posibilidad de trabajar en algo aún
            terminado el curso?
          </p>
          <p class="faqs__answer">
            ¡Sí! la ventaja de la virtualidad nos permitirá tener una comunidad
            cerrada, protegida, donde si queremos, podremos seguir generando
            material y recibiendo retroalimentación verdaderamente crítica y
            respetuosa.
          </p>
        </div>
        <div class="faqs__element">
          <p class="faqs__question">¿Es seguro pagar en línea?</p>
          <p class="faqs__answer">
            ¡Sí! Todos los pagos que procesamos a nivel nacional e internacional
            suceden a través de la plataforma Hotmart donde tus datos y
            transacciones están totalmente seguras. Hotmart es una plataforma
            que trabaja con miles de cursos online y desde hace bastante tiempo,
            así que puedes confiar en su proceso de pago.
          </p>
        </div>
        <div class="faqs__element">
          <p class="faqs__question">
            ¿Este curso es adecuado para todas las edades?
          </p>
          <p class="faqs__answer">
            El curso está diseñado para adolescentes y gente adulta.
          </p>
        </div>
        <div class="faqs__element">
          <p class="faqs__question">
            ¿Por qué dices que son técnicas que llevan perfeccionándose 115
            años?
          </p>
          <p class="faqs__answer">
            El padre de la actuación contemporanea fue un ruso llamado
            Konstantin Stanislavski; uno de sus libros más importantes "El
            trabajo del actor sobre sí mismo" fue escrito en 1909, hace 115
            años. La forma en la que Stanislavski pensó la actoralidad
            revolucionó para siempre el trabajo de actrices y actores en un set
            o un escenario. Antes de él actuar era fingir, Stanislavski empieza
            a pensar en cómo la psique de una actriz o actor se transforman para
            encarnar a un personaje, por supuesto que su proceso teórico dialoga
            con el padre del psicoanálisis, su contemporaneo: Sigmund Freud. A
            partir de Stanislavski empezaron a aparecer una multiplicidad de
            teorías y escuelas, como el Método de Lee Strasberg -uno muy usado
            en Hollywood- e incluso escuelas actorales que van en contra del
            proceso interno del ruso, como la biomecánica de su alumno
            Meyerhold. El punto es que Stanislavski revolucionó la forma de
            pensar la actuación y dio pie a la complejidad de lo que es hoy en
            día.
          </p>
        </div>
      </div>
    </section>
    <section class="link">
      <h2 class="link__text">
        Link al programa “Reconciliándome con mi timidez”:
      </h2>
      <a href="${process.env.HOST_ADRESS}/ventas-s" class="link__link"
        >${process.env.HOST_ADRESS}/ventas-s</a
      >
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="${process.env.HOST_ADRESS}/ventas-s" class="footer__logo-link">
          <img src="logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
    <img
      src="${process.env.HOST_ADRESS}/api/pixel/${_id}"
      alt="pixel"
      class="phantom-img"
    />
  </body>
</html>
`;
};

const post4dHtmlEmail = (user) => {
  const { username, _id } = user;
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
      .phantom__img{
        height: 1px;
        width: 1px;
      }
      .header {
        padding: 5%;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 8, 33, 1) 50%,
          rgba(7, 26, 85, 1) 100%
        );
        padding-bottom: 7%;
        display: flex;
        flex-direction: column;
      }
      .header__logo {
        width: 40%;
        margin-bottom: 2em;
      }
      .header__title {
        font-size: 1.5rem;
        text-align: center;
        font-weight: 300;
      }
      .header__welcome {
        font-size: 1.5rem;
        color: #ccc7e1;
        font-weight: 400;
        text-align: center;
        margin: 1em 0 0.5em;
      }
      .bonos {
        display: flex;
        flex-direction: column;
        background-color: #ccc7e1;
        padding: 2%;
      }
      .bonos__container {
        border: #000821 1px solid;
        padding: 1%;
      }
      .bonos__element {
        display: flex;
        margin: 1em;
      }
      .bonos__number {
        font-weight: 500;
        font-size: 1.3rem;
        color:#000821;
        margin-right: 0.5em;
      }
      .bonos__title{
        color:#000821;
        font-size: 1.3rem;
        font-weight: 500;
      }
      .bonos__text {
        font-weight: 300;
        text-align: justify;
        font-size: 1.2rem;
        color:#000821;
        padding-bottom: 1em;
      }
      .link {
        background-color: #ffe3bc;
        display: flex;
        flex-direction: column;
        padding: 2%;
        align-items: center;
      }
      .link__text {
        font-weight: 300;
        color: #000821;
      }
      .link__link {
        text-decoration: none;
        text-align: center;
        font-size: 1.5rem;
        margin: 1em 0;
        color: #e17900
      }
      .link__call-to-action{
        font-weight: 400;
        font-size: 1.3rem;
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
      }
      @media screen and (max-width: 500px) {
        .header__logo {
          width: 80%;
        }
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
      <img src="logo-transparente.png" alt="logo" class="header__logo" />
      <h1 class="header__title">
        Estamos a menos de 24 horas de que cambie el precio del curso. Si te lo estás pensando todavía, te comparto el porque creé estos bonos.
      </h1>
    </section>
    <section class="bonos">
        <div class="bonos__container">
        <div class="bonos__element">
          <p class="bonos__number">
            1.
          </p>
          <div class="bonos__text-container">
        <h3 class="bonos__title">Kit de comunicación efectiva</h3>
          <p class="bonos__text">
            Creé el kit de comunicación efectiva porque creo que nadie nos enseña a comunicarnos realmente, por supuesto que aprendemos el lenguaje pero, por imitación, empezamos a adquirir estrategias de comunicación de la gente a nuestro alrededor, de los libros que leemos, de las series, películas que vemos. Muchas veces no son las mejores. Pienso que con una buena comunicación el mundo sería mucho mejor.
          </p>
        </div>
        </div>
        <div class="bonos__element">
            <p class="bonos__number">2.</p>
            <div class="bonos__text-container">
            <h3 class="bonos__title">Masterclass de amistades saludables</h3>
            <p class="bonos__text">Mi familia me ha dicho más de una vez que soy muy bueno creando y sosteniendo amistades por muchos años, también he sabido alejarme dolorosamente de algunas amistades en buenos momentos. Hace un año me pregunté cómo es que le hacía así que me puse a trabajar en entender qué es la amistad, cómo se construye y sostiene. Gracias a aprendizajes que tuve en la licenciatura (donde tuve una clase para entender el amor y la pasión) tenía ciertas claridades, pero no fue hasta poner en crisis mis ideas frente a gente que se dedica a la psicología que pude darle estructura a esto que tenía. 
            </p>
            <p class="bonos__text">He escuchado muchas veces que hay gente cuyas amistades son crueles y prefieren volverse personas solas a tener alguna amiga o amigo así. Me duele porque a mí la soledad es un tema que me toca fibras sensibles. Amo mucho a mis amigas y amigos y también distingo que soy amado, quisiera que muchas más personas se sintieran así, por ello decidí estructurar mis preguntas y mi conocimiento para armar esta masterclass.
            </p>
        </div>
        </div>
        <div class="bonos__element">
            <p class="bonos__number">3.</p>
            <div class="bonos__text-conteiner">
            <h3 class="bonos__title">Masterclass de estrategias de memorización</h3>
            <p class="bonos__text">Cuando alguien que no es del medio del cine o del teatro se entera de mi profesión, generalmente tienen dos preguntas: ¿Cómo le haces para llorar y cómo le haces para memorizar tanto? De la primera creo que el llorar es lo de menos (y aún así es bien difícil cuando es necesario) de la segunda pregunta es real que memorizamos muchísimo: no sólo es un texto dramático de muchas hojas, también las acciones, las emociones, el tránsito de los personajes alrededor de 2 horas o más (hay obras mucho más largas, hay una muy famosa en Europa que dura 24 horas). Somos profesionales de la memoria. Y sí: es algo que se puede desarrollar. Y también: hay actrices y actores con muy mala memoria que trabajan el doble en esa parte del proceso.
            </p>
            <p class="bonos__text">Sabiendo lo complicado que es desarrollar la memoria y que realmente actores y actrices la desarrollamos profesionalmente, consideré que era una gran oportunidad compartir contigo algunas de las formas y dinámicas que usamos para poder memorizar todo esto sacándolas de la escena y pudiendo trasladarlas a la vida cotidiana.</p>
        </div>
    </div>
        <div class="bonos__element">
            <p class="bonos__number">4.</p>
            <div class="bonos__text-container">
                <h3 class="bonos__title">Infografía sobre autoestima</h3>
            <p class="bonos__text">Es normal no sentirse cómodo con una/o misma/o todo el tiempo. El problema viene cuando, al contrario, todo el tiempo sientes que eres un ser horripilante, que tu voz no merece ser escuchada, que eres menos que el resto de las personas a tu alrededor. La baja autoestima puede estar muy relacionada a otras problemáticas de la psique como la distimia o incluso la depresión.
            </p>
            <p class="bonos__text">Es muy importante ser capaz de distinguir qué elementos de mí en relación a mi autoestima están o no siendo funcionales y si llegara a ser el caso de que algo no esté funcionando bien, solicitar ayuda profesional. </p>
            <p class="bonos__text">La autoestima es muy nombrada actualmente, más con esta serie de ideas de la psicología pop (un psicólogo que me agrada mucho le llama así y me encanta el término) donde todo el tiempo tienes que estar súper bien y frente a cualquier problema sólo sonriendo saldrás adelante. Pero en realidad la autoestima no es un deber ser, es más bien una visión propia. Se me hace muy importante enfrentar a esa definición corrompida de la autoestima, sobre todo, porque muchas veces la gente con timidez tenemos baja autoestima. Nombrarlo y reconocerlo es el primer paso.
            </p>
            </div>
        </div>
    </div>
      </div>
    </section>
    <section class="link">
      <p class="link__text">
      Aquí puedes ver un poco más del programa:
      </p>
      <a href="${process.env.HOST_ADRESS}/ventas-s" class="link__link"
      >${process.env.HOST_ADRESS}/ventas-s</a
    >
<p class="link__text link__call-to-action">Y recuerda ¡Quedan menos de 24 horas!</p>
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="${process.env.HOST_ADRESS}/ventas-s" class="footer__logo-link">
          <img src="logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
    <img
      src="${process.env.HOST_ADRESS}/api/pixel/${_id}"
      alt="pixel"
      class="phantom-img"
    />
  </body>
</html>
`;
};

const post5d12hHtmlEmail = (user) => {
  const { username, _id } = user;

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
      .phantom__img {
        height: 1px;
        width: 1px;
      }
      .header {
        padding: 1%;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 8, 33, 1) 50%,
          rgba(7, 26, 85, 1) 100%
        );
        display: flex;
        flex-direction: column;
      }
      .header__logo {
        width: 40%;
        margin-bottom: 2em;
      }
      .link {
        background-color: #ffe3bc;
        display: flex;
        flex-direction: column;
        padding: 2%;
        align-items: center;
      }
      .link__text {
        font-weight: 300;
        color: #000821;
      }
      .link__link {
        text-decoration: none;
        text-align: center;
        font-size: 1.5rem;
        margin: 1em 0;
        color: #e17900;
      }
      .link__call-to-action {
        font-weight: 400;
        font-size: 1.3rem;
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
      @media screen and (max-width: 500px) {
        .header__logo {
          width: 80%;
        }
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
      <img src="logo-transparente.png" alt="logo" class="header__logo" />
    </section>
    <section class="link">
      <p class="link__text">
        Así es, estás en las últimas oportunidades para inscribirte en el curso:
        Reconciliándome con mi timidez: herramientas actorales para la vida
        diaria.
      </p>
      <a href="${process.env.HOST_ADRESS}/ventas-s" class="link__link"
        >${process.env.HOST_ADRESS}/ventas-s</a
      >
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="${process.env.HOST_ADRESS}/ventas-s" class="footer__logo-link">
          <img src="logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
    <img
      src="${process.env.HOST_ADRESS}/api/pixel/${_id}"
      alt="pixel"
      class="phantom-img"
    />
  </body>
</html>`;
};

const post5d6hHtmlEmail = (user) => {
  const { username, _id } = user;

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
      .phantom__img {
        height: 1px;
        width: 1px;
      }
      .header {
        padding: 1%;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 8, 33, 1) 50%,
          rgba(7, 26, 85, 1) 100%
        );
        display: flex;
        flex-direction: column;
      }
      .header__logo {
        width: 40%;
        margin-bottom: 2em;
      }
      .link {
        background-color: #ffe3bc;
        display: flex;
        flex-direction: column;
        padding: 2%;
        align-items: center;
      }
      .link__text {
        font-weight: 300;
        color: #000821;
      }
      .link__link {
        text-decoration: none;
        text-align: center;
        font-size: 1.5rem;
        margin: 1em 0;
        color: #e17900;
      }
      .link__call-to-action {
        font-weight: 400;
        font-size: 1.3rem;
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
      @media screen and (max-width: 500px) {
        .header__logo {
          width: 80%;
        }
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
      <img src="logo-transparente.png" alt="logo" class="header__logo" />
    </section>
    <section class="link">
      <p class="link__text">
        6 horas son nada, si aún tienes dudas, pregúntate: ¿qué es lo que de
        verdad quiero? Ahí tendrás la respuesta.
      </p>
      <p class="link__text">Te dejo el link del programa:</p>
      <a href="${process.env.HOST_ADRESS}/ventas-s" class="link__link"
        >${process.env.HOST_ADRESS}/ventas-s</a
      >
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="${process.env.HOST_ADRESS}/ventas-s" class="footer__logo-link">
          <img src="logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
    <img
      src="${process.env.HOST_ADRESS}/api/pixel/${_id}"
      alt="pixel"
      class="phantom-img"
    />
  </body>
</html>
`;
};

const post5d3hHtmlEmail = (user) => {
  const { username, _id } = user;

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
      .phantom__img {
        height: 1px;
        width: 1px;
      }
      .header {
        padding: 1%;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 8, 33, 1) 50%,
          rgba(7, 26, 85, 1) 100%
        );
        display: flex;
        flex-direction: column;
      }
      .header__logo {
        width: 40%;
        margin-bottom: 2em;
      }
      .link {
        background-color: #ffe3bc;
        display: flex;
        flex-direction: column;
        padding: 2%;
        align-items: center;
      }
      .link__text {
        font-weight: 300;
        color: #000821;
      }
      .link__link {
        text-decoration: none;
        text-align: center;
        font-size: 1.5rem;
        margin: 1em 0;
        color: #e17900;
      }
      .link__call-to-action {
        font-weight: 400;
        font-size: 1.3rem;
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
      @media screen and (max-width: 500px) {
        .header__logo {
          width: 80%;
        }
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
      <img src="logo-transparente.png" alt="logo" class="header__logo" />
    </section>
    <section class="link">
      <p class="link__text">
        En 3 horas cerramos el carrito de ventas. Me es muy importante
        recordarte que lo que más me interesa de este curso es el espacio de
        seguridad que da la actuación para permitirte accionar.
      </p>
      <p class="link__text">Aquí el link al programa:</p>
      <a href="${process.env.HOST_ADRESS}/ventas-s" class="link__link"
        >${process.env.HOST_ADRESS}/ventas-s</a
      >
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="${process.env.HOST_ADRESS}/ventas-s" class="footer__logo-link">
          <img src="logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
    <img
      src="${process.env.HOST_ADRESS}/api/pixel/${_id}"
      alt="pixel"
      class="phantom-img"
    />
  </body>
</html>`;
};

const post5d30mHtmlEmail = (user) => {
  const { username, _id } = user;

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
      .phantom__img {
        height: 1px;
        width: 1px;
      }
      .header {
        padding: 1%;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 8, 33, 1) 50%,
          rgba(7, 26, 85, 1) 100%
        );
        display: flex;
        flex-direction: column;
      }
      .header__logo {
        width: 40%;
        margin-bottom: 2em;
      }
      .link {
        background-color: #ffe3bc;
        display: flex;
        flex-direction: column;
        padding: 2%;
        align-items: center;
      }
      .link__text {
        font-weight: 300;
        color: #000821;
      }
      .link__link {
        text-decoration: none;
        text-align: center;
        font-size: 1.5rem;
        margin: 1em 0;
        color: #e17900;
      }
      .link__call-to-action {
        font-weight: 400;
        font-size: 1.3rem;
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
      @media screen and (max-width: 500px) {
        .header__logo {
          width: 80%;
        }
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
      <img src="logo-transparente.png" alt="logo" class="header__logo" />
    </section>
    <section class="link">
      <p class="link__text">
        Media hora es un soplido de viento. Es el momento. Accionar.
      </p>
      <a href="${process.env.HOST_ADRESS}/ventas-s" class="link__link"
        >${process.env.HOST_ADRESS}/ventas-s</a
      >
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="${process.env.HOST_ADRESS}/ventas-s" class="footer__logo-link">
          <img src="logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
    <img
      src="${process.env.HOST_ADRESS}/api/pixel/${_id}"
      alt="pixel"
      class="phantom-img"
    />
  </body>
</html>`;
};

const post9dHtmlEmail = (user) => {
  const { username, _id } = user;

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
      .phantom__img {
        height: 1px;
        width: 1px;
      }
      .header {
        padding: 1%;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 8, 33, 1) 50%,
          rgba(7, 26, 85, 1) 100%
        );
        display: flex;
        flex-direction: column;
      }
      .header__logo {
        width: 40%;
        margin-bottom: 2em;
      }
      .link {
        background-color: #ffe3bc;
        display: flex;
        flex-direction: column;
        padding: 2%;
        align-items: center;
      }
      .link__text {
        font-weight: 300;
        color: #000821;
        margin: 0;
        margin-top: 1em;
        text-align: justify;
        font-size: 1.2rem;
      }
      .link__link {
        text-decoration: none;
        text-align: center;
        font-size: 1.5rem;
        margin: 1em 0;
        color: #e17900;
      }
      .link__call-to-action {
        font-weight: 400;
        font-size: 1.3rem;
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
      @media screen and (max-width: 500px) {
        .header__logo {
          width: 80%;
        }
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
      <img src="logo-transparente.png" alt="logo" class="header__logo" />
    </section>
    <section class="link">
      <p class="link__text">
        Así de simple: muchas gracias por acompañarme en esta clase magistral,
        ${username}.
      </p>
      <p class="link__text">
        Me es muy importante seguir compartiendo las herramientas que tengo
        porque creo que hay cosas de diferentes áreas del conocimiento que
        podrían mejorar a nuestra sociedad si se sacan de su contexto. Para mí
        es muy normal, muy del cotidiano cosas que me tardé mucho en entender
        que para otras personas son cosas extraordinarias. De esa claridad
        surgieron ambas cosas: la clase magistral “3 secretos de actrices y
        actores para socializar y no morir de vergüenza en el intento (aunque
        nunca hayas actuado)” y el programa “Reconciliándome con mi timidez:
        herramientas actorales para la vida diaria”.
      </p>
      <p class="link__text">
        Alguna vez sentí que ya no era tímido por cómo me desarrollaba, pero
        luego me daba cuenta de que llegaba a algún lugar nuevo y me daba miedo
        relacionarme con la gente, pero me armaba de valor e iba. No es que
        hubiera dejado de ser tímido: seguía siéndolo pero sabía cómo evitar que
        mi timidez controlara mi accionar. Ese es el origen de este programa.
      </p>
      <p class="link__text">
        Espero que lo que hayas visto en la clase magistral te haya funcionado,
        hayas o no adquirido el programa, lo importante es llevar a la acción.
        Inténtalo allá afuera, sé que no es fácil, pero es la única forma real
        en la que puede haber cambio: accionando diferente. Finalmente estaré
        dando información gratuita sobre el tema de la timidez, sobre la
        soledad, sobre estrategias para evitar que nos controlen, etc. en mi
        instagram por si te interesa seguirme:
      </p>
      <a
        href="www.instagram.com/reconciliandome-con-mi-timidez"
        class="link__link"
        >@reconciliandome-con-mi-timidez</a
      >
      <p class="link__text">
        Y me repito (me encanta repetirme): Muchísimas gracias por acompañarme
        en estos días. Nos vemos pronto.
      </p>
    </section>
    <section class="footer">
      <div class="footer__container">
        <a href="${process.env.HOST_ADRESS}/ventas-s" class="footer__logo-link">
          <img src="logo-transparente.png" alt="logo" class="footer__logo" />
        </a>
        <a href="#" class="footer__ig-link">
          <img src="ig.svg" alt="logo" class="footer__ig" />
        </a>
      </div>
      <p class="footer__credits">Julián Reyes Botello 2024</p>
    </section>
    <img
      src="${process.env.HOST_ADRESS}/api/pixel/${_id}"
      alt="pixel"
      class="phantom-img"
    />
  </body>
</html>`;
};

module.exports = {
  registrationHtmlEmail,
  reminder48HtmlEmail,
  reminder24HtmlEmail,
  reminder2HtmlEmail,
  post2hHtmlEmail,
  post1dHtmlEmail,
  post2dHtmlEmail,
  post3dHtmlEmail,
  post4dHtmlEmail,
  post5d12hHtmlEmail,
  post5d6hHtmlEmail,
  post5d3hHtmlEmail,
  post5d30mHtmlEmail,
  post9dHtmlEmail,
};
