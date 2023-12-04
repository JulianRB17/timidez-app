'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FooterWebinar from '@/components/footerWebinar/FooterWebinar';
import './cierreRegistro.css';

export default function Page() {
  return (
    <>
      <section className="cierre-registro">
        <div className="cierre-registro__header">
          <motion.h2
            className="cierre-registro__title"
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
            ¡Felicidades y cierre-registro por registrarte al curso gratuito{' '}
            <span className="cierre-registro__title_accent">
              3 secretos de actrices y actores para hablar en público y no morir
              de vergüenza en el intento (aunque nunca hayas actuado)
            </span>
          </motion.h2>

          <motion.p
            className="cierre-registro__subtitle"
            initial={{ x: '-1em', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          >
            Te doy la bienvenida a este curso online en el que revisaremos
            diferentes herramientas que usamos actores y actrices para dialogar
            con nuestra timidez.{' '}
            <span className="cierre-registro__subtitle_accent">
              Revisa cada uno de los siguientes pasos para asegurarte que no te
              pierdas nada de esta experiencia.
            </span>
          </motion.p>
        </div>
        <div className="cierre-registro__body">
          <div className="cierre-registro__overlay-container">
            <div className="cierre-registro__overlay" />
            <motion.div
              initial={{ y: '100px', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              className="cierre-registro__container"
            >
              <h2 className="cierre-registro__recordatorio-text cierre-registro__recordatorio-text_lg">
                Recuerda apartar la fecha del curso:
              </h2>
              <p className="cierre-registro__recordatorio-text cierre-registro__recordatorio-text_dates">
                14 de enero de 2023
              </p>
              <p className="cierre-registro__recordatorio-text cierre-registro__recordatorio-text_dates">
                20:30 hrs (horario CDMX, México)
              </p>
              <p className="cierre-registro__recordatorio-text">
                El curso se llevará a cabo en el siguiente grupo privado de
                Facebook:
              </p>
              <motion.button
                className="cierre-registro__btn"
                initial={{ opacity: 0.5 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
              >
                Únete al grupo de fb
              </motion.button>
              <p className="cierre-registro__recordatorio-text">
                También te recomiendo unirte al siguiente grupo de Whatsapp:
              </p>
              <motion.button
                className="cierre-registro__btn"
                initial={{ opacity: 0.5 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
              >
                Únete al grupo de whatsapp
              </motion.button>
              <p className="cierre-registro__recordatorio-text">
                {' '}
                Quiero que la información que te entregue sea la mejor posible y
                la más útil para ti, por ello, te pido que me ayudes contestando
                las siguientes 3 preguntas, te tomará menos de 5 min.
              </p>
              <motion.button
                className="cierre-registro__btn"
                initial={{ opacity: 0.5 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
              >
                ¡Ayúdame respondiendo esta encuesta!
              </motion.button>

              <p className="cierre-registro__recordatorio-text cierre-registro__recordatorio-text_lg">
                ¡Nos vemos muy pronto!
              </p>
            </motion.div>
          </div>
          <div className="cierre-registro__credits-container">
            <p className="cierre-registro__credits">Fotografía: Carlos Alvar</p>
            <p className="cierre-registro__credits">
              Dirección escénica: Julián Reyes Botello
            </p>
          </div>
        </div>
      </section>
      <FooterWebinar />
    </>
  );
}
