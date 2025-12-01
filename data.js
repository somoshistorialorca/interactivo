const timelineData = [
    {
        id: "origenes",
        year: "1928-1939",
        title: "El Instituto Local de 2ª Enseñanza",
        headerImage: "images/header_origenes.jpg",
        shortDescription: "Fundación, República y Guerra Civil.",
        fullDescription: `
            <p><strong>Orígenes y Fundación (1928)</strong><br>
            El Instituto Local de Segunda Enseñanza de Lorca se fundó en 1928, respondiendo a una larga demanda de la sociedad lorquina. Hasta entonces, los estudiantes debían desplazarse a otras ciudades para cursar el Bachillerato. El edificio original, situado en el antiguo Colegio de la Purísima, se convirtió en el corazón educativo de la comarca.</p>
            
            <p><strong>La Etapa Republicana (1931-1936)</strong><br>
            Con la llegada de la Segunda República, el instituto vivió una época de modernización pedagógica. Se implantó la coeducación, permitiendo que alumnos y alumnas compartieran las aulas por primera vez, y se fomentó una enseñanza laica y basada en los valores de libertad y progreso. Excursiones a Cartagena o Granada eran frecuentes, como atestiguan las fotos de la época.</p>
            
            <p><strong>Guerra Civil y Exilio (1936-1939)</strong><br>
            El estallido de la Guerra Civil truncó este periodo. El instituto sufrió las consecuencias del conflicto, con movilizaciones de profesores y alumnos. Al finalizar la guerra, figuras clave como el director <strong>Domingo Horacio Cuartero Ortega</strong> tuvieron que partir al exilio, embarcando en buques como el Stanbrook rumbo a México, dejando atrás su tierra y su labor docente.</p>
        `,
        gallery: [
            { src: "images/gallery_origenes_1.jpg", caption: "Edificio de la Purísima hacia 1930" },
            { src: "images/gallery_origenes_2.jpg", caption: "Alumnos del Instituto 1930-1931" },
            { src: "images/gallery_origenes_3.jpg", caption: "Excursión a Cartagena 1931" },
            { src: "images/gallery_origenes_4.jpg", caption: "Profesores y alumnos 1930-1931" },
            { src: "images/gallery_origenes_5.jpg", caption: "Grupo escolar 1930-1931" }
        ],
        quiz: [
            { question: "¿En qué año se fundó el Instituto?", options: ["1925", "1928", "1930", "1931"], correct: 1 },
            { question: "¿Dónde se ubicó originalmente?", options: ["En el Castillo", "En el Colegio de la Purísima", "En un edificio nuevo", "En el Ayuntamiento"], correct: 1 },
            { question: "¿Qué gran cambio trajo la República?", options: ["La coeducación", "La segregación", "El uniforme obligatorio", "La prohibición de libros"], correct: 0 },
            { question: "¿Quién fue un director destacado que se exilió?", options: ["Antonio Ortega", "Domingo Horacio Cuartero", "Francisco Ros", "Pedro Felipe"], correct: 1 },
            { question: "¿A qué país se exilió principalmente?", options: ["Francia", "Rusia", "México", "Argentina"], correct: 2 },
            { question: "¿Qué barco es símbolo del exilio republicano?", options: ["Titanic", "Stanbrook", "Juan Sebastián Elcano", "Bismarck"], correct: 1 },
            { question: "¿Qué tipo de enseñanza se impartía?", options: ["Primaria", "Segunda Enseñanza (Bachillerato)", "Universitaria", "FP"], correct: 1 },
            { question: "¿Se realizaban excursiones escolares?", options: ["No, estaba prohibido", "Sí, a Cartagena y otras ciudades", "Solo los domingos", "Solo los profesores"], correct: 1 },
            { question: "¿Qué pasó con la coeducación tras la guerra?", options: ["Se mantuvo", "Se eliminó (segregación)", "Se amplió", "No cambió"], correct: 1 },
            { question: "¿Qué periodo abarca esta etapa?", options: ["1900-1920", "1928-1939", "1940-1950", "1950-1975"], correct: 1 }
        ]
    },
    {
        id: "franquismo",
        year: "1939-1972",
        title: "El Instituto Nacional de Enseñanza Media",
        headerImage: "images/header_franquismo.jpg",
        shortDescription: "La posguerra, el nacionalcatolicismo y el crecimiento.",
        fullDescription: `
            <p><strong>La Posguerra y el Nuevo Orden (1940s)</strong><br>
            Tras la guerra, el centro pasó a denominarse "Instituto Nacional de Enseñanza Media". Se impuso un modelo educativo basado en el nacionalcatolicismo y la segregación por sexos. El rótulo en la fachada, colocado en 1948 con un presupuesto de 600 pesetas, simbolizaba esta nueva etapa institucional.</p>
            
            <p><strong>Directores y Profesorado</strong><br>
            Figuras como <strong>José Pascual</strong> (director hasta 1951) y posteriormente <strong>Francisco Ros Giner</strong> (director desde 1952 hasta 1972) marcaron esta larga etapa. Profesores como Ildefonso García (Jefe de Estudios), Alfredo Milego, o las "profesoras clásicas" como Luisa García Mulero y Mª Ángeles Pascual, formaron a generaciones de lorquinos bajo una disciplina estricta pero con gran dedicación académica.</p>
            
            <p><strong>Vida Escolar y Crecimiento</strong><br>
            A pesar de la rigidez, la vida escolar era activa. Se celebraban festividades como Santo Tomás de Aquino, había equipos deportivos (balonmano) y excursiones. En los años 60, con el aumento demográfico, el instituto creció, ampliándose sus instalaciones y acogiendo a un número cada vez mayor de alumnos, preparándolos para la Universidad o la vida laboral.</p>
        `,
        gallery: [
            { src: "images/gallery_franquismo_1.jpg", caption: "Postal del Instituto hacia 1945" },
            { src: "images/gallery_franquismo_2.jpg", caption: "Claustro de Profesores 1946" },
            { src: "images/gallery_franquismo_3.jpg", caption: "Acto inaugural curso 1955" },
            { src: "images/gallery_franquismo_4.jpg", caption: "Fachada años 60/70 con Seat 600" }
        ],
        audio: {
            title: "Podcast: Historia del Instituto (José Quiñonero)",
            src: "images/podcast_historia.mp3"
        },
        quiz: [
            { question: "¿Cómo se llamó el instituto en esta etapa?", options: ["Instituto Local", "Instituto Nacional de Enseñanza Media", "IES Ibáñez Martín", "Colegio Nacional"], correct: 1 },
            { question: "¿Quién fue director entre 1952 y 1972?", options: ["José Pascual", "Francisco Ros Giner", "Antonio Ortega", "Juan Gómez"], correct: 1 },
            { question: "¿Qué caracterizaba la educación de la época?", options: ["Coeducación", "Segregación por sexos y nacionalcatolicismo", "Libertad de cátedra", "Bilingüismo"], correct: 1 },
            { question: "¿Cuánto costó colocar el rótulo en 1948?", options: ["100 ptas", "600 ptas", "1000 ptas", "Gratis"], correct: 1 },
            { question: "¿Qué festividad se celebraba mucho?", options: ["Halloween", "Santo Tomás de Aquino", "Carnaval", "Fin de año"], correct: 1 },
            { question: "¿Quién era conocido como 'Don Alfonso'?", options: ["El conserje", "Ildefonso García (Jefe de Estudios)", "El alcalde", "El cura"], correct: 1 },
            { question: "¿Qué deporte destacaba en los 50/60?", options: ["Fútbol sala", "Balonmano", "Rugby", "Golf"], correct: 1 },
            { question: "¿Qué pasó en los años 60?", options: ["Cerró el centro", "Gran crecimiento de alumnos", "Se quemó el edificio", "No hubo clases"], correct: 1 },
            { question: "¿Había profesoras mujeres?", options: ["No, ninguna", "Sí, como Luisa Gª Mulero o Mª Ángeles Pascual", "Solo monjas", "Solo en secretaría"], correct: 1 },
            { question: "¿Qué escudo presidía la fachada hasta 2006?", options: ["El de Lorca", "El escudo franquista", "El de la Unión Europea", "Ninguno"], correct: 1 }
        ]
    },
    {
        id: "transicion",
        year: "1972-1996",
        title: "Instituto de Bachillerato Mixto Ibáñez Martín",
        headerImage: "images/header_transicion.jpg",
        shortDescription: "La Transición, la vuelta a la coeducación y la democracia.",
        fullDescription: `
            <p><strong>Un Nuevo Nombre y la Coeducación (1972)</strong><br>
            En 1972, el centro cambia su denominación a "Instituto de Bachillerato Mixto José Ibáñez Martín", en honor al que fuera Ministro de Educación. Este cambio de nombre vino acompañado de un cambio fundamental: la vuelta definitiva a la coeducación. Chicos y chicas volvieron a compartir espacios y currículo.</p>
            
            <p><strong>La Transición Democrática</strong><br>
            Con la muerte de Franco y la llegada de la democracia, el instituto se transformó internamente. Se democratizó la gestión con la creación de los Consejos Escolares (LODE 1985). Directores como <strong>María Guirado Cid</strong> (primera mujer directora en esta etapa), <strong>Juan Gómez</strong> y <strong>Pedro Felipe Sánchez Granados</strong> (desde 1991) lideraron esta modernización.</p>
            
            <p><strong>Actividades y Cultura</strong><br>
            Fueron años de efervescencia cultural. Se crearon los premios literarios "Mª Agustina", se organizaron viajes de estudios internacionales (Roma, París) y el instituto se abrió a la ciudad. El profesorado se renovó, incorporando a docentes que dejarían huella como Mercedes Martínez, José Quiñonero o el "Maestro Calero".</p>
        `,
        gallery: [
            { src: "images/gallery_transicion_1.jpg", caption: "Nuevo Equipo Directivo 1972-73" },
            { src: "images/gallery_transicion_2.jpg", caption: "Despedida María Guirado 1976" },
            { src: "images/gallery_transicion_3.jpg", caption: "Visita al Senado 1991" },
            { src: "images/gallery_transicion_4.jpg", caption: "Vista exterior 1988" }
        ],
        quiz: [
            { question: "¿En qué año se adoptó el nombre 'Ibáñez Martín'?", options: ["1928", "1972", "1980", "1996"], correct: 1 },
            { question: "¿Qué significa 'Mixto' en el nombre?", options: ["Público y privado", "Vuelta a la coeducación (chicos y chicas)", "Ciencias y Letras", "Mañana y tarde"], correct: 1 },
            { question: "¿Quién fue la primera directora de esta etapa?", options: ["Ana Barranco", "María Guirado Cid", "Luisa Mulero", "Carmen Rey"], correct: 1 },
            { question: "¿Qué ley democratizó la gestión en 1985?", options: ["LODE", "LOGSE", "LOMCE", "Ley Wert"], correct: 0 },
            { question: "¿Qué premios literarios se crearon?", options: ["Premio Planeta", "Premios Mª Agustina", "Premios Cervantes", "Premios Lorca"], correct: 1 },
            { question: "¿Quién asumió la dirección en 1991?", options: ["Antonio Ortega", "Pedro Felipe Sánchez Granados", "José Quiñonero", "Juan Gómez"], correct: 1 },
            { question: "¿Qué viajes se popularizaron?", options: ["A la luna", "Viajes internacionales (Roma, París)", "Al campo", "A la playa"], correct: 1 },
            { question: "¿Qué profesor de Lengua era conocido como 'El Maestro'?", options: ["José Calero Heras", "Antonio Ortega", "Pedro Felipe", "García Borrón"], correct: 0 },
            { question: "¿Se eliminó el escudo franquista inmediatamente en 1975?", options: ["Sí", "No, permaneció hasta 2006", "Se tapó con una lona", "Se pintó de rosa"], correct: 1 },
            { question: "¿Qué asignatura ganó peso en el currículo?", options: ["Religión", "Idiomas modernos e Informática", "Formación del Espíritu Nacional", "Hogar"], correct: 1 }
        ]
    },
    {
        id: "actualidad",
        year: "1996-2028",
        title: "IES José Ibáñez Martín: Hacia el Centenario",
        headerImage: "images/header_actualidad.jpg",
        shortDescription: "La etapa actual, la dirección de Antonio Ortega y Ana I. Barranco.",
        fullDescription: `
            <p><strong>La Era de la ESO y el Bachillerato (1996-Presente)</strong><br>
            Con la implantación de la LOGSE, el centro pasó a ser un Instituto de Educación Secundaria (IES). Acogió a alumnos más jóvenes (desde los 12 años) y diversificó su oferta educativa.</p>
            
            <p><strong>El Impulso Cultural de Antonio Ortega (2009-2021)</strong><br>
            Bajo la dirección de <strong>Antonio Ortega Fernández</strong>, el instituto vivió una "edad de plata" cultural. Se recuperó el patrimonio histórico (animales disecados, mapas, libros antiguos) convirtiendo el centro en un museo vivo. A pesar de los terremotos de 2011, que dañaron el edificio, la comunidad educativa mostró una resiliencia ejemplar.</p>
            
            <p><strong>Rumbo al Centenario (2028)</strong><br>
            Actualmente, bajo la dirección de <strong>Ana Isabel Barranco</strong>, el IES Ibáñez Martín se prepara para celebrar su centenario en 2028. El proyecto <strong>"Somos Historia"</strong> busca recopilar la memoria viva de la institución, digitalizando fotos y documentos, y conectando con antiguos alumnos para celebrar 100 años de educación pública de calidad en Lorca.</p>
        `,
        gallery: [
            { src: "images/gallery_actualidad_1.png", caption: "Jubilación de grandes docentes 2009" },
            { src: "images/gallery_actualidad_2.jpg", caption: "Fachada en 2014" },
            { src: "images/gallery_actualidad_3.jpg", caption: "Promoción 2020-2024" },
            { src: "images/gallery_actualidad_4.png", caption: "Presentación Libro 2025" }
        ],
        audio: {
            title: "Podcast: Presentación Libro Historia (José Quiñonero)",
            src: "images/podcast_libro.mp3"
        },
        quiz: [
            { question: "¿Qué siglas definen al centro actualmente?", options: ["INEM", "IES (Instituto de Educación Secundaria)", "CEIP", "FP"], correct: 1 },
            { question: "¿Qué director impulsó la recuperación del patrimonio?", options: ["Pedro Felipe", "Antonio Ortega", "José Pascual", "María Guirado"], correct: 1 },
            { question: "¿Qué ocurrió en Lorca en 2011?", options: ["Inundaciones", "Terremotos", "Nevada histórica", "Nada relevante"], correct: 1 },
            { question: "¿Quién es la directora actual (2025)?", options: ["Ana Isabel Barranco", "Luisa Mulero", "Mercedes Martínez", "Francisca Gómez"], correct: 0 },
            { question: "¿Cuándo se celebra el centenario?", options: ["2025", "2028", "2030", "2022"], correct: 1 },
            { question: "¿Cómo se llama el proyecto de memoria histórica?", options: ["Recuerdos", "Somos Historia", "Lorca Antigua", "El Instituto"], correct: 1 },
            { question: "¿Qué se ha recuperado del patrimonio del centro?", options: ["Solo papeles", "Instrumental científico, animales naturalizados y libros", "Muebles viejos", "Nada"], correct: 1 },
            { question: "¿A qué edad entran ahora los alumnos (ESO)?", options: ["14 años", "12 años", "10 años", "16 años"], correct: 1 },
            { question: "¿Se ha eliminado definitivamente el escudo franquista?", options: ["No", "Sí, en 2006-2007", "Está tapado", "Lo robaron"], correct: 1 },
            { question: "¿Qué objetivo tiene el centenario?", options: ["Hacer una fiesta", "Conmemorar 100 años de educación y cultura", "Cambiar el nombre", "Cerrar el centro"], correct: 1 }
        ]
    }
];
