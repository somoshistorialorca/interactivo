$source1 = "C:\Users\marco\OneDrive\Escritorio\somos historia Pedro Escarabajal\Marcos\2.- Comunidad Educativa  desde 1928 hasta la Actualidad [Alumnado+Profesorado+Promociones]"
$source2 = "C:\Users\marco\OneDrive\Escritorio\somos historia Pedro Escarabajal\Marcos\3.- Vistas Exteriores [1928-Actualidad]"
$sourceAudio = "C:\Users\marco\OneDrive\Escritorio\somos historia Pedro Escarabajal\Marcos\2009-2021 [Período de Antonio Ortega Fernández]\Filmaciones-Vídeos-Audios"
$dest = "C:\Users\marco\OneDrive\Escritorio\somos historia Pedro Escarabajal\IES_Ibanez_Martin_Timeline\images"

if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Force -Path $dest
}

function Copy-File {
    param ($srcDir, $fileName, $destName)
    $srcPath = Join-Path $srcDir $fileName
    $destPath = Join-Path $dest $destName
    if (Test-Path $srcPath) {
        Copy-Item -Path $srcPath -Destination $destPath -Force
        Write-Host "Copied: $destName"
    } else {
        Write-Host "MISSING: $srcPath"
    }
}

# Origins
Copy-File $source2 "2.- Foto de la fachada principal del Instituto Local de 2ª Enseñanza incluida en la Memoria de 1928-1929, publicada en 1930..jpg" "header_origenes.jpg"
Copy-File $source2 "1.- Instituto Local de 2ª Enseñanza de Lorca (Edificio de la Purísima) hacia 1930..jpg" "gallery_origenes_1.jpg"
Copy-File $source1 "1.- 1930-1931. Alumnos del Instituto Local de 2ª Enseñanza de Lorca..jpg" "gallery_origenes_2.jpg"
Copy-File $source1 "3.- Alumnos asistentes a una excursión en Cartagena el 23.11.1931 [AML. Pedro Menchón].jpg" "gallery_origenes_3.jpg"
Copy-File $source1 "1.1.- 1930-1931. Profesores y alumnos del Instituto Local de 2ª Enseñanza de Lorca..jpg" "gallery_origenes_4.jpg"
Copy-File $source1 "1.2.- 1930-1931. Profesores y alumnos del Instituto Local de 2ª Enseñanza de Lorca..jpg" "gallery_origenes_5.jpg"

# Franquismo
Copy-File $source2 "7.- Postal del Instituto Nacional de Enseñanza Media de Lorca hacia finales de los años 40. Ya se observa el rótulo en la puerta que se aprueba en pleno municipal el 15.10.1948 con un presupuesto de 600 ptas para su colocación.jpg" "header_franquismo.jpg"
Copy-File $source2 "6.- Hacia 1945-1946. Postal del exterior del Instituto Nacional de Enseñanza Media de Lorca. En la puerta principal aún no tiene rótulo..jpg" "gallery_franquismo_1.jpg"
Copy-File $source1 "8.- 1946. Claustro de Profesores del Instituto Nacional de Enseñanza Media de Lorca en 1946..jpg" "gallery_franquismo_2.jpg"
Copy-File $source1 "16.- El carismático profesor de filosofía y tb. secretario del Centro Juan Carlos García-Borrón Moral leyendo la Memoria académica en el acto inaugural del curso hacia 1955. Frente a él el director F. Ros y J. Pascual, ya jubilado..jpg" "gallery_franquismo_3.jpg"
Copy-File $source2 "11.- Fachada principal del Instituto hacia finales de los años 60 o principios de los 70. Se observan aparcados dos coches Seat 600 (fabricados entre 1957-1973) y un Seat 850 (fabricados entre 1966-1974]..jpg" "gallery_franquismo_4.jpg"

# Transicion
Copy-File $source2 "13.- Fachada nocturna del Instituto 1. Sin fecha, pero probablemente desde mediados de los años 80. Las puertas de acceso son ya distintas a las de las fotos anteriores [archivos del Instituto]..jpg" "header_transicion.jpg"
Copy-File $source1 "34.- Desde 1972-1973 nuevo equipo directivo. En la foto María Guirado Cid, la nueva Directora , de pie frente a la maceta.  El 1º a la izq. el nuevo Jefe de Estudios José Antonio Gallego López que ejercería su cargo hasta 1979..jpg" "gallery_transicion_1.jpg"
Copy-File $source1 "42.- Al finalizar el curso académico 1975-1976 Maria Guirado abandona Lorca para trasladarse a aI instituto Francisco Salzillo en Alcantarilla. La foto corresponde a una comida organizada el día de su despedida..jpg" "gallery_transicion_2.jpg"
Copy-File $source1 "50.7.- Alumnos y profesores en la fila central durante su visita a la Asamblea y al Senado (Madrid) en 1991 con alumnos de 3º de BUP, dirigido por Rosalía Sala, profesora de Geografía-Historia  [Archivo Instituto].jpg" "gallery_transicion_3.jpg"
Copy-File $source2 "14.- Vista exterior del Instituto en 1988 [archivos del Instituto]..jpg" "gallery_transicion_4.jpg"

# Actualidad
Copy-File $source2 "20.- Fachada del Instituto el 30.11.2019 durante la visita guiada por las instalaciones del centro el día de la presentación del libro de José Quiñonero..JPG" "header_actualidad.jpg"
Copy-File $source1 "68.2.- Tres grandes nombres  que cierran con su jubilación en 2009 una etapa del Instituto. Docentes de Lengua y Literatura, en el centro J. Quiñonero, ella, Mercedes (jubilada en 2006), y a la derecha Pedro Felipe, tb. Directo.png" "gallery_actualidad_1.png"
Copy-File $source2 "19.- La fachada principal en 2014 y la promoción de ese año. Muestra ya, pasados los años desde 2007, el frontol central con el escudo franquista completamente eliminado..jpg" "gallery_actualidad_2.jpg"
Copy-File $source1 "79.- J. IBÁÑEZ MARTÍN PROMOCIÓN 2020-2024 [1º vs 4º E.S.O.]. Foto grupal..jpg" "gallery_actualidad_3.jpg"
# Note: gallery_actualidad_4.png was in a different folder "Antonio Ortega" which I might have missed in the variable definition, but I'll try to find it or skip it if complex. It was in "Antonio Ortega" folder.
$sourceOrtega = "C:\Users\marco\OneDrive\Escritorio\somos historia Pedro Escarabajal\Antonio Ortega"
Copy-File $sourceOrtega "4.- 9.05.2025. Presentación del Libro 'La edad de la Inocencia y otros relatos'. En el centro dos Exdirectores del Instituto J. Ibáñez Martín, Pedro Felipe Sánchez, prologuista del libro y a su lado Antonio Ortega, el autor..png" "gallery_actualidad_4.png"

# Audio
Copy-File $sourceAudio "13.- 25.10.2019 [11 horas 07 minutos]. Entrevista radiofónica en CADENA AZUL [Lorca] a José Quiñonero abordando la conferencia que expondrá a las 20 horas del mismo día.mp3" "podcast_historia.mp3"
Copy-File $sourceAudio "14.- 29.11.2019 [11 horas 08 minutos]. Entrevista radiofónica en CADENA AZUL [Lorca] a José Quiñonero abordando la presentación de su libro sobre la historia del centro entre 1928-2019 que tendría lugar al día siguiente..mp3" "podcast_libro.mp3"
