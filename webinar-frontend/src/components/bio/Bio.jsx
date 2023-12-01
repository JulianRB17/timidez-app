import { motion } from 'framer-motion';
import Image from 'next/image';
import './bio.css';

export default function Bio() {
  return (
    <section id="bio" className="bio">
      <div className="bio__text-container">
        <motion.h1
          className="bio__title"
          initial={{ y: '-0.5rem' }}
          whileInView={{ y: 0, transition: { duration: 1 } }}
        >
          Mi nombre es Julián Reyes Botello
        </motion.h1>
        <motion.h3
          className="bio__subtitle"
          initial={{ y: '-0.5rem' }}
          whileInView={{ y: 0, transition: { duration: 1 } }}
        >
          ¿Quién soy?
        </motion.h3>
        <motion.p
          className="bio__paragraph"
          initial={{ x: '-0.5rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          Puedo comenzar con mis credenciales:{' '}
          <span className="bio__text-accent">
            soy actor con más de 10 años de trayectoria{' '}
          </span>
          , también dirijo y produzco, hago sobre todo teatro aunque he hecho
          algo de cine también.{' '}
          <span className="bio__text-accent">
            Soy egresado de la Licenciatura en Literatura Dramática y Teatro de
            la UNAM{' '}
          </span>
          aunque estudié un tiempo la Licenciatura en Actuación de Casa del
          Teatro, fue la necesidad de dirigir la que me llevó a la UNAM. Tengo
          un{' '}
          <span className="bio__text-accent">
            Diplomado en Dirección Escénica{' '}
          </span>{' '}
          por la Secretaría de Cultura a través del CCHelénico y un{' '}
          <span className="bio__text-accent">
            Diplomado Internacional en Creación/Investigación Escénica{' '}
          </span>{' '}
          por la Facultad de Filosofía y Letras de la UBA (Argentina) y la
          Cátedra Ingmar Bergman de la UNAM. También estudié un tiempo, por un
          intercambio académico, en la Universidad Nacional de Córdoba,
          Argentina, en la Licenciatura de Teatro. Esas son mis credenciales
          académicas, llevo haciendo teatro de manera profesional desde 2012,
          así que tengo, a parte del conocimiento académico, una trayectoria
          importante en la escena mexicana.
        </motion.p>
        <motion.h3
          className="bio__subtitle"
          initial={{ x: '0.5rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          LO IMPORTANTE ES LO QUE VIENE:
        </motion.h3>
        <motion.p
          className="bio__paragraph"
          initial={{ x: '-0.5rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          Yo era un adolescente{' '}
          <span className="bio__text-accent">muy tímido</span>, académicamente
          era bueno entendiendo las cosas entonces de pronto participaba en
          clases, pero estaba agarrado de algo: mi conocimiento.{' '}
          <span className="bio__text-accent">
            Era bulleado, tenía un apodo horrible, me sentía feo y gordo, me
            escondí debajo de un suéter durante 7 años porque me daba vergüenza
            que vieran mi cuerpo{' '}
          </span>
          . Muchas cosas, un amor imposible incluido, me llevaron a enamorarme
          del teatro: el espacio donde podía vivir una realidad muy diferente a
          la mía que odiaba. Tomé esa decisión hace 14 años.{' '}
          <span className="bio__text-accent">
            HOY MI VIDA ES TOTALMENTE DIFERENTE.
          </span>
        </motion.p>
      </div>
      <Image
        src="/bio.webp"
        alt="Julián Reyes Botello"
        height={1080}
        width={720}
        className="bio__img"
      />
    </section>
  );
}
