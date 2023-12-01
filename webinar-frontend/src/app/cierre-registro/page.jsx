'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FooterWebinar from '@/components/footerWebinar/FooterWebinar';
import './cierreRegistro.css';

export default function Page() {
  return (
    <>
      <section className="gracias">
        <div className="gracias__header">
          <motion.h2
            className="gracias__title"
            initial={{
              opacity: 0,
              y: '-1rem',
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
          >
            ¡Felicidades y gracias por registrarte al curso gratuito{' '}
            <span className="gracias__title_accent">NOMBRE WEBINAR</span>
          </motion.h2>

          <motion.p
            className="gracias__subtitle"
            initial={{ x: '-1em', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          >
            Te doy la bienvenida a este curso online en el que revisaremos
            diferentes herramientas que usamos actores y actrices para dialogar
            con nuestra timidez.{' '}
            <span className="gracias__subtitle_accent">
              Revisa cada uno de los siguientes pasos para asegurarte que no te
              pierdas nada de esta experiencia.
            </span>
          </motion.p>
        </div>
        <div className="gracias__body">
          <div className="gracias__container">
            <div className="gracias__overlay" />
            <motion.div
              initial={{ y: '100px', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 2 } }}
            >
              <h2 className="gracias__recordatorio-text gracias__recordatorio-text_lg">
                Recuerda apartar la fecha del curso:
              </h2>
              <p className="gracias__recordatorio-text gracias__recordatorio-text_dates">
                14 de enero de 2023
              </p>
              <p className="gracias__recordatorio-text gracias__recordatorio-text_dates">
                20:30 hrs (horario CDMX, México)
              </p>
              <p className="gracias__recordatorio-text">
                El taller se llevará a cabo en el siguiente grupo privado de fb:
              </p>
              <div className="gracias__btn-container">
                <Link className="gracias__btn" href="/">
                  Únete al grupo de fb
                </Link>
              </div>
              <p className="gracias__recordatorio-text">
                También te recomiendo unirte al siguiente grupo de whatsapp:
              </p>
              <div className="gracias__btn-container">
                <Link className="gracias__btn" href="/">
                  Únete al grupo de whatsapp
                </Link>
              </div>
              <p className="gracias__recordatorio-text">
                {' '}
                Quiero que la información que te entregue sea la mejor posible y
                la más útil para ti, por ello, te pido que me ayudes contestando
                las siguientes 3 preguntas, te tomará menos de 5 min.
              </p>
              <div className="gracias__btn-container">
                <Link className="gracias__btn" href="/">
                  ¡Ayúdame respondiendo esta encuesta!
                </Link>
              </div>

              <p className="gracias__recordatorio-text gracias__recordatorio-text_lg">
                ¡Nos vemos muy pronto!
              </p>
            </motion.div>
          </div>
          <div className="gracias__credits-container">
          <p className="gracias__credits">Fotografía: Carlos Alvar</p>
          <p className="gracias__credits">
            Dirección escénica: Julián Reyes Botello
          </p>
          </div>
        </div>
      </section>
      <FooterWebinar />
    </>
  );
}
