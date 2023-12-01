import { motion } from 'framer-motion';
import Image from 'next/image';
import './info.css';

export default function Info() {
  return (
    <section className="info">
      <div className="info__container">
        <motion.h2
          className="info__title"
          initial={{ y: '-1rem' }}
          whileInView={{ y: 0, transition: { duration: 1 } }}
        >
          ¿QUÉ ES LO QUE APRENDERÁS?
        </motion.h2>
        <motion.p
          className="info__text"
          initial={{ opacity: 0.5, x: '-0.5rem' }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          Reconciliandome con mi timidez: herramientas actorales para la vida
          diaria ayuda a personas tímidas a desarrollar su inteligencia
          interpersonal para no sentirse solas a través de herramientas
          actorales aunque nunca hayan actuado.
        </motion.p>

        <motion.p
          className="info__text"
          initial={{ opacity: 0.5, x: '-0.5rem' }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          Para ello, partimos de la siguiente metodología:
        </motion.p>
        <Image
          width={300}
          height={300}
          alt="metodología"
          src="/metodologia.webp"
          className="info__img"
        />
        <motion.h3
          className="info__subtitle"
          initial={{ opacity: 0.5, y: '-0.5rem' }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          Generar experiencias nuevas: desarrollo de habilidades sociales
        </motion.h3>
        <motion.p
          className="info__text"
          initial={{ opacity: 0.5, x: '-0.5rem' }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          Estoy seguro de que más de una vez has visto algún video o leído algún
          libro sobre la timidez en el que te dicen que la manera de evitar que
          ésta domine tu vida es salir y accionar a pesar del miedo. Pero la
          realidad es que el mundo allá afuera es atemorizante. Una de las
          mayores ventajas que tiene actuar es que te permite vivir muchas
          experiencias en una realidad protegida, acolchonada. Es una especie de
          laboratorio de la vida humana, donde no importa si te equivocas porque
          no hay consecuencias reales, lo puedes volver a intentar exactamente
          igual pero mejor. Así que, éste es un espacio donde vivirás
          experiencias nuevas pero de manera muy protegida.
        </motion.p>
        <motion.h3
          className="info__subtitle"
          initial={{ opacity: 0.5, y: '-0.5rem' }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          Potenciar la creatividad: hacer magia
        </motion.h3>
        <motion.p
          className="info__text"
          initial={{ opacity: 0.5, x: '-0.5rem' }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          ¿A quién no le gusta la magia? Creo que el acto de magia es uno de los
          actos de mayor creatividad que el ser humano ha inventado: jugar con
          los sentidos para transformar la realidad y ponerla en crisis: ¿es
          real lo que acabo de ver? Es maravillosa. Pienso que cualquier acto
          creativo puede ser mágico porque puede transformar la realidad. Cuando
          mi timidez me dominaba esa es la razón por la que quise dedicar mi
          vida al teatro: quería transformar mi realidad, que no fuera como
          había sido hasta ese momento. Cada quien puede hacer magia como más le
          plazca, desarrollar la creatividad para darle magia a la vida,
          transformar la realidad es uno de los ejes de este curso.{' '}
        </motion.p>
        <motion.h3
          className="info__subtitle"
          initial={{ opacity: 0.5, y: '-0.5rem' }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          Retroalimentación: responsabilizarme de mi escucha
        </motion.h3>
        <motion.p
          className="info__text"
          initial={{ opacity: 0.5, x: '-0.5rem' }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          Es muy común que si alguien nos dice: “oye, te puedo dar una crítica
          constructiva” hacen de todo menos la parte constructiva de la crítica.
          Así es el mundo afuera, no podemos hacer nada para transformarlo. Lo
          que sí podemos hacer es aprender a recibir elementos del mundo de
          afuera y filtrarlos para recibir de mejor manera lo que necesitamos.
          Actrices y actores somos gente experta en ser rechazada, sobre todo
          hablando de cine y tele. Hacemos una cantidad brutal de castings, nos
          exponemos muchísimo para que nos digan: “nosotros te llamamos”, somos
          profesionales del rechazo. Una de las mejores estrategias que como
          actor he aprendido es esa: responsabilizarme de con qué me quedo y con
          qué no, saber que muchas veces no quedé en el papel no por ser mal
          actor sino porque era un poco más chaparro o alto de lo que
          necesitaban en el proyecto, por decir algún ejemplo bobo. Sobre todo
          para la gente tímida es fundamental aprender a recibir las palabras
          ajenas, porque muchas veces somos gente muy sensible y es fácil que
          algo nos lastime y no lo decimos, porque somos gente tímida. Aprender
          a escuchar es fundamental.
        </motion.p>
        <motion.h3
          className="info__subtitle"
          initial={{ opacity: 0.5, y: '-0.5rem' }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          Darle valor a mis palabras
        </motion.h3>
        <motion.p
          className="info__text"
          initial={{ opacity: 0.5, x: '-0.5rem' }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          Como atendemos la escucha también atendemos el otro lado de la moneda
          en el diálogo, ese lado que más trabajo nos cuesta: la palabra.
          Hablar. El silencio es muy valioso porque nos permite construir y
          complejizar el pensamiento, pero, si nunca hablamos las ideas se
          quedan atoradas. ¿A quién no le ha pasado que por pena no responde una
          pregunta en público aunque tiene una respuesta brillante? Si has
          llegado hasta aquí, muy probablemente te ha pasado. Este cuarto eje
          está concentrado en aprender la valía de mis palabras y poder, incluso
          con mi timidez, darme a escuchar allá afuera, porque lo que tengo que
          decir es muy importante.
        </motion.p>
        <motion.h3
          className="info__subtitle"
          initial={{ opacity: 0.5, y: '-0.5rem' }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          Compañía
        </motion.h3>
        <motion.p
          className="info__text"
          initial={{ opacity: 0.5, x: '-0.5rem' }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          Finalmente, a todo esto lo rodea la “compañía”. Me gusta muchísimo esa
          palabra porque el significado de su etimología es: aquellas personas
          que comparten el pan. Más allá de lo mucho que me gusta el pan, pienso
          que no hay acto de comunión más bello que compartir un alimento. La
          base de nuestra vida. Con compañía me refiero a las personas que
          forman parte de la comunidad de Reconciliandome con mi timidez:
          herramientas actorales para la vida diaria, desde yo mismo hasta otras
          personas con las que compartirás estas sesiones, gente que ya ha
          pasado por aquí y la gente que pasará. Durante un proceso escénico en
          el que estaba, nuestro director, lamentablemente perdió a su madre.
          Fue un momento muy difícil para él, y un día, con el corazón en las
          manos y lágrimas en los ojos nos dijo: “Hoy confirmo que el teatro
          crea familias”. No sé qué lo llevó a decir eso, pero sé que a más de
          una persona actuar nos ha salvado la vida por el compartir con la
          gente que encontramos. Ahora, sé que decidir dar el paso de
          encontrarte con tu timidez no es uno sencillo, no es algo que todo el
          mundo entienda, pero aquí te entendemos y te abrazamos con lo complejo
          que puede ser para ti. Hagamos compañía, compartamos un pan.
        </motion.p>
        <motion.h3
          className="info__title"
          initial={{ opacity: 0.5, y: '-0.5rem' }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          DESRIPCIÓN DEL CURSO
        </motion.h3>
        <motion.p
          className="info__text"
          initial={{ opacity: 0.5, x: '-0.5rem' }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          El curso está dividido en 10 sesiones. En las primeras tenderemos más
          a trabajar sobre qué es la timidez, cómo nos afecta, etc. Después
          jugaremos un poco con la actuación y, finalmente, después de un
          proceso bien desarrollado, cuidado y articulado, cada quién tendrá la
          opción de presentar un monólogo a la compañía. Esto es muy importante,
          sé que da miedo, pero sepamos que no se nos va a juzgar por ello y,
          más bien, será la forma en la que llevaremos a la práctica todo lo que
          se ha trabajado. Porque sí: es un curso teórico/práctico. RECUERDA:
          ACCIONAR ES FUNDAMENTAL.
        </motion.p>
      </div>
    </section>
  );
}
