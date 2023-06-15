// Objeto desayunos 
// Base de datos - Melissa J.

let desayuno = [
    //SECCION DE HUEVOS ****************************************************************************************
    {
        nombre: "Huevos Rancheros",
        descripcion: "Los huevos rancheros son uno de los desayunos " +
        "más típicos y tradicionales de México.",
        img: "url",
        ingredientes: {
            ingrediente1: "Tortillas de maíz: dos piezas.",
            ingrediente2: "2 cucharadas soperas de Frijoles refritos",
            ingrediente3: "1/4 de Cebolla blanca",
            ingrediente4: "2 a 3 Huevos",
            ingrediente5: "Aceite vegetal para freír",
            ingrediente6: "Sal y Pimienta negra",
            ingrediente7: "2 cucharadas de perejil",
            ingrediente8: "2 cucharadas de queso rallado",
        },
        preparacion: {
            paso1: "- Para empezar, hay que verter la salsa roja en una cacerola para calentarla.",
            paso2: "- Tomar el par de tortillas y dorarlas en un sartén, usando una cantidad discreta"+
                   "de aceite (solamente la necesaria para hacer dorar las tortillas por ambos lados,"+
                   " sin dejarlas mucho tiempo porque se ponen duras).",
            paso3: "- Una vez calientes las tortillas, untar sobre cada una una buena cucharada de "+
                    "frijoles refritos. Cuidar que los frijoles queden bien esparcidos sobre toda la tortilla.",
            paso4: "- Aprovechar el sartén y un poco más de aceite para freír los huevos, al gusto.",
            paso5: "- Una vez listos los huevos, acomodar cada uno sobre una tortilla enfrijolada. "+
                    "Para terminar el plato, bañar los huevos con la salsa roja caliente.",
            paso6: "- Opcionalmente, decorar espolvoreando el perejil finamente picado y el queso."
        }

    },
    {
        nombre: "Huevos con salchicha",
        descripcion: "Una receta fácil de preparar con ingredientes accesibles",
        img: "url",
        ingredientes: {
            ingrediente1: "8 huevos",
            ingrediente2: "3 salchichas de pavo",
            ingrediente3: "2 zanahorias picadas",
            ingrediente4: "1/4 de barrita de mantequilla",
            ingrediente5: "Aceite vegetal para freír",
            ingrediente6: "Sal y Pimienta negra",
        },
        preparacion: {
            paso1: "- En una sartén derrite la mantequilla y sofríe las salchichas hasta que comiencen a dorar; retira y reserva.",
            paso2: "- En el mismo recipiente calienta un poco de aceite, agrega 2 huevos batidos y unas cuantas "+
                   "salchichas y zanahoria rallada; cocina a fuego medio hasta que el huevo haya cuajado"+
                   " (revuelto o tipo tortilla española); retira.",
            paso3: "- Repite el procedimiento para hacer las demás porciones.",
    
        }

    },
    {
        nombre: "Burrito de huevo con tocino",
        descripcion: "Comienza tu día con un desayuno llenador, son fáciles de hacer y con un sabor que te encantará",
        img: "url",
        ingredientes: {
            ingrediente1: "3 huevos",
            ingrediente2: "1 aguacate",
            ingrediente3: "200 gramos de tocino",
            ingrediente4: "180 gramos de bistec de res",
            ingrediente5: "2 tortillas de harinas",
            ingrediente6: "2 cucharaditas de mayonesa",
            ingrediente7: "Sal y pimienta",
            ingrediente8: "Aceite",
        },
        preparacion: {
            paso1: "- Salpimenta el bistec de res y mientras se marina fríe el tocino en una sartén sin aceite por"+
                   " 15 minutos a fuego medio. Retira del fuego y usa el aceite que soltó para freír el bistec.",
            paso2: "- Bate los huevos con una pizca de sal. Calienta aceite en otra sartén y cocina el huevo.",
            paso3: "- Pica el tocino y el bistec, corta en rebanadas el aguacate y unta con mayonesa las tortillas de harina.",
            paso4: "- Acomoda los ingredientes dentro de las tortillas de harina y dobla cada una como taco pero "+
                   "cierra sus extremos hacia adentro. corta por la mitad, sirve y disfruta.",
        }

    },
    {
        nombre: "Tortillas de queso",
        descripcion: "La tortilla de queso salado es la comida reconfortante más fácil que podrías hacer",
        img: "url",
        ingredientes: {
            ingrediente1: "2 huevos",
            ingrediente2: "1 cucharada de mantequilla",
            ingrediente3: "Queso Cheddar",
            ingrediente4: "Sal y pimienta",
            ingrediente5: "2 tortillas de harinas",
            ingrediente6: "2 cucharaditas de mayonesa",
            ingrediente7: "",
            ingrediente8: "Aceite",
        },
        preparacion: {
            paso1: "- https://es.bakeitwithlove.com/cheese-omelet/  Salpimenta el bistec de res y mientras se marina fríe el tocino en una sartén sin aceite por"+
                   " 15 minutos a fuego medio. Retira del fuego y usa el aceite que soltó para freír el bistec.",
            paso2: "- Bate los huevos con una pizca de sal. Calienta aceite en otra sartén y cocina el huevo.",
            paso3: "- Pica el tocino y el bistec, corta en rebanadas el aguacate y unta con mayonesa las tortillas de harina.",
            paso4: "- Acomoda los ingredientes dentro de las tortillas de harina y dobla cada una como taco pero "+
                   "cierra sus extremos hacia adentro. corta por la mitad, sirve y disfruta.",
        }

    },
    //SECCIÓN DE AVENA ******************************************************************************************
    {
        nombre: "Avena con mantequilla de maní",
        descripcion: "Avena durante la noche con mantequilla de maní hecha con 5 ingredientes en 5 minutos.",
        img: "url",
        ingredientes: {
            ingrediente1: "1/2 taza de leche (Entera, descremada, vegetal a elección)",
            ingrediente2: "3/4 Tbsp semillas de chia",
            ingrediente3: "2 Tbsp mantequilla de maní salada natural o mantequilla de almendras",
            ingrediente4: "1 Tbsp de endulzante al gusto (jarabe de arce, azúcar de coco, azúcar morena o stevia)",
            ingrediente5: "1/2 taza avena",
            ingrediente6: "OPCIONAL: Topings como frutsas, granola y semillas",
        },
        preparacion: {
            paso1: "- Agregue todos los ingredientes a un frasco pequeño de albañil o a un tazón sellable. "+
                   "Selle y mezcle agitándolo durante 10-20 segundos.",
            paso2: "- Colóquelo en el refrigerador durante la noche o por lo menos durante 4 horas.",
            paso3: "- Servir a la mañana siguiente y disfrutar!",
        }

    },
    //SECCION DE YOGURT *****************************************************************************************************
    { /* K_telles*/
        nombre: "YOGUR DE FRESA Y VAINILLA",
        descripcion: "Yogur de fresa y vainilla hecha para 4 personas, se puede acompañar de trocitos de manzana y plátano.",
        img: "url",
        ingredientes: {
            ingrediente1: "Media taza de fresas.",
            ingrediente2: "Media taza de marañon.",
            ingrediente3: "1 taza y media de probiótica",
            ingrediente4: "¼ de cucharadita de vainilla.",
            ingrediente5: "Una pizca de sal.",
            ingrediente6: "1 manzana",
            ingrediente1: "1 plátano",
            ingrediente2: "Un poco de canela",

        },
        preparacion: {
            paso1: "- Echa todos los ingredientes del yogur en una batidora de vaso y bate hasta obtener una crema suave.",
            paso2: "- Pon la mezcla en un bol de vidrio y deja reposar unas 24 horas en un lugar seco y tibio donde no dé la luz directa del sol o bien en una fermentadora. Cúbrelo con un paño de algodón limpio.",
            paso3: "- Pasado ese tiempo, reparte el yogur en cuatro botecitos de vidrio con tapa y guarda en la nevera hasta que lo vayas a consumir.",
            paso4: "- Acompañe con canela y trocitos de manzana y plátano.",
        }

    },
    { /* K_telles*/
    nombre: "TORTITAS DE AVENA CON PLÁTANO",
    descripcion: "Tortillas de avena con plátano para 4 personas. (Para evitar que los plátanos se oscurezcan en contacto con el aire, rocíalos con zumo de limón.)",
    img: "url",
    ingredientes: {
        ingrediente1: "5 cucharadas de harina de avena",
        ingrediente2: "100 gramos de fresas",
        ingrediente3: "75 ml de leche",
        ingrediente4: "2 cucharadas de miel",
        ingrediente5: "½ cucharadita de levadura",
        ingrediente6: "2 cucharadas de azúcar",
        ingrediente7: "Canela",
        ingrediente8: "1 huevo",
        ingrediente9: "2 plátanos",
        ingrediente10: "Mantequilla",
        ingrediente11: "½ cucharadita de esencia de vainilla",
        ingrediente12: "Sal"
    },
    preparacion: {
        paso1: "- Casca el huevo en un bol y bátelo junto con el azúcar. Añade la leche y mezcla.",
        paso2: "- Tamiza encima la harina con la levadura, la canela y una pizca de sal.",
        paso3: "- Pela los plátanos. Aplasta uno de ellos con un tenedor y añádelo al bol. Aromatiza con la vainilla. Bate hasta conseguir una crema homogénea.",
        paso4: "- Calienta 1 cucharada de mantequilla en una sartén antiadherente pequeña y cuaja la masa anterior en forma de tortitas. Cuécelas 2 minutos por cada lado. Retíralas y resérvalas.",
        paso5: "- Limpia las fresas, lávalas y córtalas con el plátano restante en rodajas.",
        paso6: "- Reparte las tortitas en los platos intercalando tortitas y capas de fruta. Vierte la miel por encima y sirve."
    }
},

]


let mis_comidas = [
    {
    nombre: "Barras de Cereal",
    descripcion: "Aprende a preparar unas ricas Barras de "+
    "Cereal Sin Gluten, Saludables y muy fáciles con 10 porciones.",
    img: "url",
    ingredientes: {
        ingrediente1: "2 Tazas de pipocas de quínoa o arroz inflado",
        ingrediente2: "1 Taza de manjar",
        ingrediente3: "1 huevo",
        ingrediente4: "1/2 Taza de almendras, semillas de girasol o avena tostada",
        ingrediente5: "1 Taza de coco rallado",
        ingrediente6: "1 taza de semillas o frutos secos surtidos ",
    },
    preparacion: {
        paso1: "- En un bowl junta todos los ingredientes y mezcla hasta lograr unir completamente"+
                ", formando una masa húmeda. Reserva.",
        paso2: "- Sobre una lata de horno, con papel mantequilla espolvorea la mitad del coco rallado"+
               " y dispone la masa esparciéndola formando un rectángulo, cubriendo con el resto del coco,"+
               "lleva a horno pre-calentado durante 10 minutos a 200 °C. Hornea a 180°C durante 18 a 20 "+
               "minutos, o bien hasta dorar levemente.",
        paso3: "- Retira del horno y deja enfriar. Corta rectángulos de 10 cm x 3 cm. Guárdalo envueltos"+
               "en papel metálico o plástico por unidades o bien en un frasco de vidrio con tapa. Recuerda"+
               " que la porción sugerida es de una porción por persona."
    }
            
    }
]