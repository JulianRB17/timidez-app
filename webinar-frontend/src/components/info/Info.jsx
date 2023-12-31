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
          transformar la realidad es uno de los ejes de este curso.
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
          El curso está dividido en 11 sesiones. En las primeras tenderemos más
          a trabajar sobre qué es la timidez, cómo nos afecta, etc. Después
          jugaremos un poco con la actuación y, finalmente, después de un
          proceso bien desarrollado, cuidado y articulado, cada quién tendrá la
          opción de presentar un monólogo a la compañía. Esto es muy importante,
          sé que da miedo, pero sepamos que no se nos va a juzgar por ello y,
          más bien, será la forma en la que llevaremos a la práctica todo lo que
          se ha trabajado. Porque sí: es un curso teórico/práctico. RECUERDA:
          ACCIONAR ES FUNDAMENTAL.
        </motion.p>
        <motion.h3
          className="info__title"
          initial={{ opacity: 0.5, y: '-0.5rem' }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          MÓDULOS
        </motion.h3>
        <motion.p
          className="info__text"
          initial={{ opacity: 0.5, x: '-0.5rem' }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          El programa está dividido en 11 módulos que se revisarán a lo largo de
          11 semana:
        </motion.p>
        <motion.ul className="info__list">
          <motion.div
            className="info__element"
            initial={{ y: '0.5rem' }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
          >
            <p className="info__subtitle">MÓDULO 1: ¿Qué es la timidez? </p>
            <p className="info__text">
              Se aprenderá de manera teórica qué es la timidez, la diferencia
              con el ser introvertido porque sí: puede haber gente extrovertida
              y tímida (yo, por ejemplo). También el porque ésta nos paraliza y
              a veces domina. Aprenderás cómo le hacemos actores y actrices para
              enfrentarnos al pánico escénico.
            </p>
            <p className="info__text">
              Descubrirás por qué la timidez NO es mala y empezarás a dialogar
              mejor con ella.
            </p>
          </motion.div>
          <motion.div
            className="info__element"
            initial={{ y: '0.5rem' }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
          >
            <p className="info__subtitle">MÓDULO 2: Reconocer mi voz</p>
            <p className="info__text">
              El mundo está constituido por una gran cantidad de personas
              tímidaz, sin embargo no está hecho para éstas. Durante este módulo
              aprenderás cómo darle lugar a tu voz en un mundo que está
              estructurado para acallarla.
            </p>
            <p className="info__text">
              Empezaremos con la escritura, abrazaremos las ventajas de la
              tecnología de nuestros tiempos y aprenderemos a fluir con las
              palabras. Para ello veremos cómo están estructuradas las grandes y
              pequeñas historias desde hace más de dos mil años. Esto será muy
              útil al momento de hablar con alguien más: darle sentido a las
              ideas.
            </p>
            <p className="info__text">
              También generarás una pequeña frase que pueda ayudarte en los
              momentos donde tengas una sensación muy fuerte que te sobrepase,
              que te abrume o paralice. Una especie de ritual personal para
              aterrizar. Será un espacio donde le daremos fuerza a tus palabras.
            </p>
          </motion.div>
          <motion.div
            className="info__element"
            initial={{ y: '0.5rem' }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
          >
            <p className="info__subtitle">MÓDULO 3: ¿De verdad actuar?</p>
            <p className="info__text">
              Ahora sí entraremos al mundo actoral. Aprenderás qué es la
              actuación y por qué ésta implica arrancarse máscaras sociales.
              Cómo es que actrices y actores juegan con su identidad. También
              entenderás cómo puedes usar éstas herramientas para la vida
              diaria: accionar en lugar de sobrepensar.
            </p>
            <p className="info__text">
              ¿Alguna vez te ha pasado que no tienes idea de qué hacer con las
              manos, con la mirada, con la respiración cuando hablas con
              alguien? Adquirirás técnicas que te permitirán darle el lugar a tu
              cuerpo de expresarte y dejar de sentirte un ladrillo con
              pensamientos.
            </p>
          </motion.div>
          <motion.div
            className="info__element"
            initial={{ y: '0.5rem' }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
          >
            <p className="info__subtitle">MÓDULO 4: El mundo interno</p>
            <p className="info__text">
              Como la ciencia se encarga de estudiar y entender la realidad, la
              psicología, parte de la filosofía y el arte se dedican a entender
              ese mundo que se encuentra construido dentro de cada persona. A
              ese universo individual le llamamos mundo interno. A través de
              aprender a relacionarte con él usando la imaginación es posible
              empoderarte en el mundo real. La inteligencia intrapersonal -la
              capacidad de profundizar el vínculo que tiene cada persona consigo
              misma- e interpersonal -la capacidad de profundizar y generar
              vínculos con otras personas- están profundamente relacionadas.
            </p>
            <p className="info__text">
              Durante este módulo aprenderás herramientas para conectar con tu
              mundo interno y así entrever y empezar a fragmentar algunas
              barreras internas que la timidez ha colocado por miedo.
            </p>
          </motion.div>
          <motion.div
            className="info__element"
            initial={{ y: '0.5rem' }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
          >
            <p className="info__subtitle">
              MÓDULO 5: Descubriendo el personaje
            </p>
            <p className="info__text">
              Es muy difícil pensar en actuar y no pensar en personaje, ese ser
              que es y no la persona que lo encarna. ¿Cómo puedes ser otra
              persona siendo tú? En este módulo entenderás cómo se puede
              construir un personaje, la diferencia entre personajes simples y
              complejos, el por qué algunos personajes hacen que nos
              encariñemos.
            </p>
            <p className="info__text">
              Empezaremos con un juego donde estarás protegida/o por las
              estructuras de la ficción y esto te permitirá traspasar algunas
              barreras establecidas por la timidez para descubrir que, aunque
              aterrador, el miedo a veces es desmedidamente alto en relación a
              la situación. Jugarás con tu cuerpo y voz pero la virtualidad te
              permitirá sentirte en un espacio de seguridad.
            </p>
          </motion.div>
          <motion.div
            className="info__element"
            initial={{ y: '0.5rem' }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
          >
            <p className="info__subtitle">
              MÓDULO 6: Habla y escucha: voz y retroalimentación
            </p>
            <p className="info__text">
              La gente tímida muchas veces somos gente profundamente cruel con
              nosotras/os mismas/os. A lo largo de este módulo, por un lado
              atenderemos la potencia de la palabra y distinguiremos la
              responsabilidad que implica nuestra habla. Por otro lado le
              prestaremos atención a la escucha y, también, a la responsabilidad
              que tenemos con ésta.
            </p>
            <p className="info__text">
              Aprenderás a autorreferirte desde un lugar menos cruel y mucho más
              objetivo, usaremos tres preguntas concretas que formarán la base
              de una verdadera crítica constructiva. Y, aunque no lo creas, esto
              nos permitirá abrazar de una manera mucho más funcional la
              sensación de ridículo: un error no siempre tiene consecuencias
              catastróficas.
            </p>
          </motion.div>
          <motion.div
            className="info__element"
            initial={{ y: '0.5rem' }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
          >
            <p className="info__subtitle">
              MÓDULO 7: Del texto al cuerpo, tus palabras
            </p>
            <p className="info__text">
              Hay veces en la vida en la que desearíamos que alguien nos dijera
              qué decir para salir bien de alguna situación. La cosa es que,
              cuando esto sucede, no es tan fácil como aparenta el apropiarse de
              esas palabras. Pensemos en un contexto no actoral: una
              conferencia, por ejemplo, ¿quién no ha estado en una que es
              profundamente aburrida porque quien está dándola sólo está
              leyendo?
            </p>
            <p className="info__text">
              A lo largo de este módulo aprenderás cómo volver personal un
              texto, el primer paso es entender lo que está escrito, el segundo
              tiene que ver con una habilidad que las personas tímidaz tenemos
              más desarrolladas que nuestras contrapartes: la empatía, a través
              de ésta y de la imaginación entenderás cómo captar la atención de
              quienes te escuchan: reconocer los dolores personales y volverlos
              universales.
            </p>
          </motion.div>
          <motion.div
            className="info__element"
            initial={{ y: '0.5rem' }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
          >
            <p className="info__subtitle">
              MÓDULO 8: Accionar, siempre accionar
            </p>
            <p className="info__text">
              ¿Te has dado cuenta cómo la gente que no es tímida acciona sin
              pensar mientras que la gente tímida piensa sin accionar? El paso
              más difícil es la acción y es también el paso más importante. Hay
              que encontrar el equilibrio entre silencio y acción.
            </p>
            <p className="info__text">
              En este módulo reconocerás la importancia de las acciones que ya
              estás realizando y entenderás cómo se pueden gestionar los
              objetivos para poder concretarlas. Trabajaremos con un texto
              actoral pero son herramientas que trasladaremos a la vida.
            </p>
          </motion.div>
          <motion.div
            className="info__element"
            initial={{ y: '0.5rem' }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
          >
            <p className="info__subtitle">
              MÓDULO 9: Primer espacio de seguridad
            </p>
            <p className="info__text">
              Éste y los siguientes módulos implican llevar a la práctica todo
              lo aprendido previamente. Recuerda: accionar es lo más importante.
              También me es necesario volver a mencionar el espacio de seguridad
              que se construye para que la acción y tú como persona sean
              protegidas. Es un espacio donde se generarán experiencias únicas y
              entenderás en la piel la belleza de encarnar a un otro ser.
            </p>
          </motion.div>
          <motion.div
            className="info__element"
            initial={{ y: '0.5rem' }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
          >
            <p className="info__subtitle">
              MÓDULO 10: Segundo espacio de seguridad
            </p>
            <p className="info__text">
              Éste y los siguientes módulos implican llevar a la práctica todo
              lo aprendido previamente. Recuerda: accionar es lo más importante.
              También me es necesario volver a mencionar el espacio de seguridad
              que se construye para que la acción y tú como persona sean
              protegidas. Es un espacio donde se generarán experiencias únicas y
              entenderás en la piel la belleza de encarnar a un otro ser.
            </p>
          </motion.div>
          <motion.div
            className="info__element"
            initial={{ y: '0.5rem' }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
          >
            <p className="info__subtitle">
              MÓDULO 11: Tercer espacio de seguridad
            </p>
            <p className="info__text">
              Éste y los siguientes módulos implican llevar a la práctica todo
              lo aprendido previamente. Recuerda: accionar es lo más importante.
              También me es necesario volver a mencionar el espacio de seguridad
              que se construye para que la acción y tú como persona sean
              protegidas. Es un espacio donde se generarán experiencias únicas y
              entenderás en la piel la belleza de encarnar a un otro ser.
            </p>
          </motion.div>
        </motion.ul>
      </div>
    </section>
  );
}
