// Objeto desayunos 
// Base de datos - 

export let desayuno = [
    //SECCION DE HUEVOS ****************************************************************************************
    {
        /*--- M. Juarez */
        nombre: "HUEVOS RANCHEROS",
        descripcion: "Desayuno típico y tradicional.",
        tiempo:"20 minutos",
        img: "./js/components/desayunos/imagenes/Unom.jpg",
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
        /*M -- Juárez*/
        nombre: "HUEVOS CON SALCHICHA",
        descripcion: "Una receta fácil de preparar con ingredientes accesibles.",
        tiempo:"15 - 20 minutos",
        img: "./js/components/desayunos/imagenes/Dosm.png",
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
        /*M. Juárez*/
        nombre: "TORTILLA DE ESPINACA",
        descripcion: "Tortilla saludable y nutritiva.",
        tiempo:"15 - 20 minutos",
        img: "./js/components/desayunos/imagenes/Seism.jpg",
        ingredientes: {
            ingrediente1: "1 taza de espinacas frescas",
            ingrediente2: "2 huevos",
            ingrediente3: "1/4 de cebolla picada",
            ingrediente4: "Sal al gusto",
            ingrediente5: "Aceite de oliva"
        },
        preparacion: {
            paso1: "En una sartén, calienta un poco de aceite de oliva.",
            paso2: "Agrega la cebolla picada y cocínala hasta que esté transparente.",
            paso3: "Añade las espinacas y cocina hasta que se marchiten.",
            paso4: "En un tazón aparte, bate los huevos y añade sal al gusto.",
            paso5: "Agrega los huevos batidos a la sartén con las espinacas y cocina hasta que esté cuajada.",
            paso6: "Voltea la tortilla para cocinar por el otro lado.",
            paso7: "Sirve la tortilla caliente. ¡Deliciosa y saludable!"
        }
    }, 
    
    {
        /*M. Juárez*/
        nombre: "BURRITO DE HUEVO CON TOCINO",
        descripcion: "Comienza tu día con un desayuno llenador.",
        tiempo:"20 - 25 minutos",
        img: "./js/components/desayunos/imagenes/Cuatrom.jpg",
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
    { /* K_telles*/
    nombre: "HUEVOS REVUELTOS CREMOSOS CON YOGUR",
    descripcion: "Los huevos son un gran alimento para empezar el día.",
    tiempo: "10-15 minutos.",
    img: "./js/components/desayunos/imagenes/keione.jpg",
    ingredientes: {
        ingrediente1: "2 huevos grandes",
        ingrediente2: "2 cuch. de yogur griego",
        ingrediente3: "1/2 cucharada de mantequilla",
        ingrediente4: "2 cucharaditas de cebollino picado",
        ingrediente5: "Sal y pimienta"
    },
    preparacion: {
        paso1: "- En un bol mediano, bate los huevos y el yogur.",
        paso2: "- En una sartén mediana a fuego medio-bajo, derrite la mantequilla. Cuando la mantequilla esté completamente derretida, vierte los huevos y cuando empiecen a cuajar, usa una espátula de silicona para mover suavemente el huevo en la sartén..",
        paso3: "-  Cuando los huevos estén cuajados a tu gusto, incorpora el cebollino. Condimenta con sal y pimienta."
    }
    },


    { /* K_telles*/
    nombre: "TORTILLA DE JAMÓN Y QUESO",
    descripcion: "Desayuno simple y satisfactorio para comenzar bien el día.",
    tiempo: "10-15 minutos.",
    img: "./js/components/desayunos/imagenes/keidos.jpg",
    ingredientes: {
        ingrediente1: "3 huevos grandes",
        ingrediente2: "Sal",
        ingrediente3: "1 cucharada de mantequilla",
        ingrediente4: "1/2 taza de queso cheddar rallado",
        ingrediente5: "1 cucharada de leche o agua",
        ingrediente5: "1/2 taza de jamón picado"
    },
    preparacion: {
        paso1: "-  En un tazón mediano, combine 3 huevos grandes, ⅛ de cucharadita de sal, 1 cucharada de leche o agua opcional (si se usa) y mezcle con un tenedor.",
        paso2: "- En una sartén antiadherente de 9 pulgadas a fuego medio, derrita 1 cucharada de mantequilla.  Incline la sartén para que la mantequilla se extienda y cubra todo el fondo de la sartén.",
        paso3: "-  Vierta los huevos batidos directamente en el centro de su sartén caliente. Luego, levante e incline la sartén para que la mezcla de huevo se extienda y cubra el fondo hasta el borde de la sartén.",
        paso4: "-  Mientras los huevos comienzan a endurecerse, use su espátula para levantar los bordes para que el huevo crudo pueda llenarse debajo.",
        paso5: "-  Una vez que se hayan llenado los espacios y se hayan redondeado los bordes, deje que su tortilla se cocine durante 10-15 segundos más. Rellena el omelet con la mitad de la ½ taza de queso cheddar y la ½ taza de jamón. Usando su espátula, doble un lado de la tortilla sobre los rellenos hacia el borde opuesto y ciérrelo.",
        paso6: "- Deslice con cuidado la tortilla cocida fuera de la sartén y colóquela en un plato. Cúbralo con el queso cheddar y el jamón restantes y sirva de inmediato."
    }
    },


    { /* K_telles*/
    nombre: "CHORIZO Y HUEVOS (HUEVOS CON CHORIZO)",
    descripcion: "Receta sencilla ¡y solo requiere 4 ingredientes!.",
    tiempo: "10-15 minutos.",
    img: "./js/components/desayunos/imagenes/keitres.jpeg",
    ingredientes: {
        ingrediente1: "2 cucharaditas de aceite.",
        ingrediente2: "9 onzas de chorizo ​​chorizo.",
        ingrediente3: "6 huevos grandes.",
        ingrediente4: "Sal"
    },
    preparacion: {
        paso1: "-  Caliente 2 cucharaditas de aceite en una sartén grande a fuego medio. Una vez que el aceite esté caliente y comience a brillar, agregue 9 onzas de chorizo ​​a la sartén. Tomar un cuchara de madera y rompa la salchicha mientras se cocina. Continúe cocinando hasta que la carne esté bien cocida y ligeramente crujiente. (unos 7 minutos).",
        paso2: "- Mientras se cocina el chorizo, rompa 6 huevos grandes en un tazón para mezclar. Añadir una pizca de sal si se desea (ten en cuenta que el chorizo ​​ya está bastante salado). revuelve los huevos con un batidor.",
        paso3: "-  Vierta los huevos revueltos directamente en la sartén con el chorizo ​​y revuelva para combinar.",
        paso4: "-  Deje que los huevos se cocinen hasta que estén configura a tu gusto luego servir de inmediato."
       }
    },

    {//M Juárez
        nombre: "HUEVOS AL HORNO CON ESPINACA Y QUESO",
        descripcion: "Desayuno sabroso y nutritivo.",
        tiempo:"20 - 25 minutos",
        img: "./js/components/desayunos/imagenes/Seism.jpg",
        ingredientes: {
            ingrediente1: "2 huevos",
            ingrediente2: "1 taza de espinacas frescas",
            ingrediente3: "1/4 de taza de queso rallado (cheddar, mozzarella, etc.)",
            ingrediente4: "Sal al gusto",
            ingrediente5: "Pimienta negra al gusto",
            ingrediente6: "Aceite de oliva"
        },
        preparacion: {
            paso1: "- Precalienta el horno a 180°C (350°F).",
            paso2: "- En un recipiente apto para horno, coloca las espinacas y sazona con sal y pimienta al gusto.",
            paso3: "- Haz dos huecos en las espinacas y rompe un huevo en cada hueco.",
            paso4: "- Espolvorea el queso rallado sobre los huevos y las espinacas.",
            paso5: "- Hornea durante aproximadamente 10-12 minutos o hasta que los huevos estén cocidos a tu gusto.",
            paso6: "- Retira del horno y sirve los huevos al horno con espinacas y queso caliente."
        }
    },
    
    //SECCIÓN DE AVENA ******************************************************************************************
    {
        /*M. Juárez*/
        nombre: "AVENA CON MANTEQUILLA DE MANÍ",
        descripcion: "Receta hecha con 5 ingredientes en 5 minutos.",
        tiempo:"5 - 10 minutos",
        img: "./js/components/desayunos/imagenes/Sietem.jpg",
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
    /*M. Juárez*/
    {
        nombre: "AVENA CON FRUTAS",
        descripcion: "Una deliciosa combinación para comenzar el día con energía.",
        tiempo:"5 - 10 minutos",
        img: "./js/components/desayunos/imagenes/Dieciseism.jpg",
        ingredientes: {
            ingrediente1: "1/2 taza de avena",
            ingrediente2: "1 taza de leche (puede ser vegetal)",
            ingrediente3: "Frutas al gusto (plátano, fresas, arándanos, etc.)",
            ingrediente4: "1 cucharadita de miel (opcional)"
        },
        preparacion: {
            paso1: "En un recipiente, mezcla la avena y la leche. Deja reposar durante 5 minutos.",
            paso2: "Agrega las frutas cortadas en trozos y mezcla bien.",
            paso3: "Endulza con miel si lo deseas. ¡Listo para disfrutar!"
        }
    },
    {
        /*M. Juárez*/
        nombre: "PANQUEQUES DE AVENA Y PLÁTANO",
        descripcion: "Panqueques sin harina perfectos para un desayuno nutritivo.",
        tiempo:"25 - 30 minutos",
        img: "./js/components/desayunos/imagenes/Diezm.jpg",
        ingredientes: {
            ingrediente1: "1 taza de avena",
            ingrediente2: "2 plátanos maduros",
            ingrediente3: "2 huevos",
            ingrediente4: "1/2 taza de leche (puede ser vegetal)",
            ingrediente5: "Esencia de vainilla (opcional)",
            ingrediente6: "1/2 cucharadita de canela en polvo",
            ingrediente7: "Aceite para engrasar la sartén"
        },
        preparacion: {
            paso1: "En un tazón, machaca los plátanos hasta obtener un puré.",
            paso2: "Agrega la avena, los huevos, la leche, la esencia de vainilla y la canela. Mezcla bien todos los ingredientes.",
            paso3: "Calienta una sartén antiadherente y engrásala con un poco de aceite.",
            paso4: "Vierte porciones de la masa en la sartén caliente para formar los panqueques.",
            paso5: "Cocina los panqueques hasta que se doren por ambos lados.",
            paso6: "Sirve los panqueques calientes y acompáñalos con frutas frescas o miel. ¡Disfruta!"
        }
    },    
    { /* K_telles*/
    nombre: "HOT CAKES DE AVENA, MANZANA Y CANELA",
    descripcion: "Empieza tus mañanas con el desayuno más saludable, fácil y delirante.",
    tiempo: "15-20 minutos.",
    img: "./js/components/desayunos/imagenes/keifour.jpg",
    ingredientes: {
        ingrediente1: "1 taza de avena",
        ingrediente2: "½ taza de leche",
        ingrediente3: "1 huevo",
        ingrediente4: "1 pizca de canela en polvol",
        ingrediente5: "1 manzana",
        ingrediente6: "Aceite"
    },
    preparacion: {
        paso1: "- Licua la avena, la pizca de canela, la leche y el huevo.",
        paso2: "- Ralla la manzana e incorpora a la mezcla de hot cakes, no es necesario licuar.",
        paso3: "- Calienta un sartén con aceite.",
        paso4: "- Verte un cucharon con la mezcla de hot cakes de avena y manzana.",
        paso5: "- Cocina los hot cakes de avena y manzana durante 2 minutos o hasta que empiece a verse burbujas en la superficie, voltea y cocina del otro lado durante 2 minuto."
    }
    },

    { /* K_telles*/
    nombre: "TORTILLA DE AVENA Y VERDURA",
    descripcion: "Perfecto para los amantes de los desayunos salados.",
    tiempo: "15-20 minutos.",
    img: "./js/components/desayunos/imagenes/keicinco.jpeg",
    ingredientes: {
        ingrediente1: "4 cucharadas de copos de avena",
        ingrediente2: "3 huevos",
        ingrediente3: "4 cucharadas de leche",
        ingrediente4: "medio pimiento rojo",
        ingrediente5: "1 puñado de espinacas",
        ingrediente6: "2 cucharadas de aceite de oliva",
        ingrediente7: "Sal"
    },
    preparacion: {
        paso1: "- En un bol mezcla los copos de avena con la leche y deja reposar mientras preparas los otros ingredientes. Si tienes tiempo o tienes una digestión más lenta, puedes dejar los copos de avena en remojo toda la noche.",
        paso2: "- Prepara la tortilla. Casca los huevos a un bol, bate y salpimienta.",
        paso3: "- Prepara las verduras.  En una sartén, calienta una cucharada de aceite y sofríe el pimiento con un poco de sal, unos 5-7 minutos. Añade las espinacas y dañe un par de vueltas en la sartén. ",
        paso4: "- Añade la verdura a la mezcla de los huevos. Incorpora los copos de avena remojados y mezcla bien.",
        paso5: "- En la misma sartén en la que preparaste la verdura, calienta la otra cucharada de aceite de oliva, vierte la mezcla y cocina unos 2 minutos. Dale la vuelta a la tortilla, cocina por el otro lado y sirve."
    }
    },

    { /* K_telles*/
    nombre: "PAN DE AVENA",
    descripcion: "¿Y si probamos esta receta de pan sin gluten?",
    tiempo: "30-35 minutos.",
    img: "./js/components/desayunos/imagenes/keiseis.png",
    ingredientes: {
        ingrediente1: "275 g de harina de avena (certificada sin gluten si es preciso)",
        ingrediente2: "350 ml de yogur natural",
        ingrediente3: "1 cucharada de polvo para hornear",
        ingrediente4: "1 cucharada de semillas de chía",
        ingrediente5: "Sal"
    },
    preparacion: {
        paso1: "- Precalienta el horno a 180 grados y unta un molde para pan con un poco de aceite o forra con papel vegetal.",
        paso2: "- Si no tienes harina de avena, tritura los copos hasta obtenerla.",
        paso3: "- En un bol mezcla todos los ingredientes secos. Añade el yogur hasta formar una masa. Deja reposar unos 10 minutos. ",
        paso4: "- Vierte la masa en el molde, alisa, espolvorea con copos de avena o semillas, lleva al horno y hornea unos 40-45 minutos o hasta que el palillo introducido dentro sale seco. Deja enfriar"
    }
    },

    {/* K_telles*/
    nombre: "PIZZA DE AVENA",
    descripcion: "Es delicioso realizar una pizza de avena, saludable y crujiente.",
    tiempo: "30-35 minutos.",
    img: "./js/components/desayunos/imagenes/keisiete.jpg",
    ingredientes: {
        ingrediente1: "100 g de avena",
        ingrediente2: "100 ml de agua",
        ingrediente3: "5 g de cebolla en polvo",
        ingrediente4: "10 g de perejil o albahaca molida",
        ingrediente5: "5 ml de aceite de oliva",
        ingrediente6: "3 unidades de queso mozzarella en rodajas",
        ingrediente7: "1 tomate pera en rodajas",
        ingrediente8: "Orégano o perejil seco a gusto."

    },
    preparacion: {
        paso1: "- En un cuenco, volcar la avena junto al agua y las especias. Integrar con una cuchara y dejar reposar por 5 a 10 minutos hasta que se forme un ¨engrudo¨ homogéneo.",
        paso2: "- Incorporar el oliva e integrar. Mientras tanto, poner a calentar una sartén antiadherente a fuego medio bajo. ",
        paso3: "- Extender la masa de avena en la sartén y dejar cocinar de 4 a 5 minutos, verás como los bordes se tornan más oscuros.En este punto, colocar encima el queso mozarella, las rodajas de tomate y el orégano o perejil (al gusto de cada uno).",
        paso4: "- Tomar la tapa de la sartén y colocar por encima para permitir que el calor derrita el queso, de 3 a 4 minutos más.",
        paso5: "- Al momento de servir, añadir un toque más de hierbas y aceite de oliva.."
    }
    },

    //SECCION DE YOGURT *****************************************************************************************************

    { /* K_telles*/
        nombre: "YOGUR DE FRESA Y VAINILLA",
        descripcion: "Yogur de fresa y vainilla hecha para 4 personas.",
        tiempo: "8-10 minutos.",
        img: "./js/components/desayunos/imagenes/keiocho.jpeg",
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
    descripcion: "Receta para 4 personas.",
    tiempo: "15-20 minutos.",
    img: "./js/components/desayunos/imagenes/keinueve.jpg",
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
    { /* K_telles*/
    nombre: "YOGUR CON QUINOA Y FRUTAS ROJAS",
    descripcion: "Receta para quienes no quieren consumir cereales clásicos de desayuno.",
    tiempo: "8-10 minutos.",
    img: "./js/components/desayunos/imagenes/keidiez.jpg",
    ingredientes: {
        ingrediente1: "1 taza de yogur natural",
        ingrediente2: "1 cucharadita de miel",
        ingrediente3: "1/3 taza de quinoa cocida",
        ingrediente4: "1 pocillo de frutas rojas congeladas."
    },
    preparacion: {
        paso1: "- Coloca el yogur en la licuadora junto con las frutas rojas y el endulzante. Licúa hasta que todo se vuelva homogéneo..",
        paso2: "- Coloca el contenido en una taza o compotera y añade la quinoa cocida."
    }
    },


    { /* K_telles*/
    nombre: "PANQUEQUES DE YOGUR Y AVENA",
    descripcion: "Receta ideal para hacer tu desayuno saludable.",
    tiempo: "15-20 minutos.",
    img: "./js/components/desayunos/imagenes/keionce.jpg",
    ingredientes: {
        ingrediente1: "1 taza de avena",
        ingrediente2: "1/2 taza de yogur firme",
        ingrediente3: "1 cucharada de pasta de maní",
        ingrediente4: "1/2 cucharada de semillas de linaza",
        ingrediente5: "1/2 cucharadita de aceite",
        ingrediente6: "2 cucharadas de miel",
        ingrediente7: "1 cucharada de pasta de maní y 1/2 manzana (para decorar)."

    },
    preparacion: {
        paso1: "- En un bol, mezcla el yogur junto con la avena y las semillas de linaza.",
        paso2: "- Luego, añade la pasta de maní y la cucharada de miel. Revuelve unos minutos hasta que todo se integre.",
        paso3: "- Deja que este repose 5 minutos, mientras esparces el aceite en una panquequera.",
        paso4: "- Cocina a fuego bajo, durante 2 minutos de cada lado..",
        paso5: "- Esparce la pasta de maní por toda la superficie y corta la manzana en láminas finas. Colócalas por encima del panqueque y disfruta.",
    }
    },


    { /* K_telles*/
    nombre: "TOSTADAS DE YOGUR Y FRUTOS ROJOS",
    descripcion: "Deliciosa receta hecha en 10 minutos",
    tiempo: "10-15 minutos.",
    img: "./js/components/desayunos/imagenes/keidoce.jpg",
    ingredientes: {
        ingrediente1: "2 rebanadas gruesas de pan tipo brioche, de trigo o de masa madre",
        ingrediente2: "1/4 taza de yogur",
        ingrediente3: "1 huevo grande",
        ingrediente4: "2 cuch. de sirope de arce, agave, miel o chocolate derretido",
        ingrediente5: "Una pizca de canela",
        ingrediente6: "Arándanos, fresas y/o frambuesas",
        ingrediente7: "Azúcar glas, avena tostada, coco seco, virutas de chocolate (todo opcional), para servir."

    },
    preparacion: {
        paso1: "- Precalentar un horno a 200 ºC. En un bol, bate el yogur, el huevo, el sirope de arce y la canela.",
        paso2: "- Con los dedos o el dorso de una cuchara, presiona en el centro del pan para marcar y crear un hueco. Rellena con la mezcla de yogur. Cubre con las frutas. Coloca las rebanadas de pan preparadas en una bandeja del horno y hornea hasta que el pan esté dorado, de 10 a 13 minutos.",
        paso3: "- Transfiere las tostadas a un plato y rocía con la cobertura que elijas y, opcionalmente, termina con una capa de azúcar en polvo."
    }
    },


    { /* K_telles*/
    nombre: "TORTITAS DE YOGUR",
    descripcion: "Receta súper fácil de preparar.",
    tiempo: "15-20 minutos.",
    img: "./js/components/desayunos/imagenes/keitrece.png",
    ingredientes: {
        ingrediente1: "1 taza de harina",
        ingrediente2: "1 y 2/3 taza de yogur",
        ingrediente3: "2 huevos",
        ingrediente4: "1 cuch. de levadura en polvo"
    },
    preparacion: {
        paso1: "- Mezcla la harina y la levadura en un bol grande. En un recipiente aparte, bate los huevos y el yogur griego, luego incorpóralos a la mezcla de harina, formando una masa espesa.",
        paso2: "- Vierte la masa en porciones en una sartén y cocina a fuego medio-bajo, usando una espátula o cuchara de silicona para darle forma de panqueque. Levanta el borde de la tortita para comprobar que está ligeramente dorada, desliza la espátula hasta el fondo y voltea el panqueque.",
        paso3: "- Sirve las tortitas tibias con almíbar, caramelo o chocolate por encima."
    }
    },


    { /* K_telles*/
    nombre: "BANANA SPLITS DE YOGUT",
    descripcion: "Delicioso alimento para empezar el día.",
    tiempo: "10-15 minutos.",
    img: "./js/components/desayunos/imagenes/keicatorce.png",
    ingredientes: {
        ingrediente1: "1 plátano, cortado a lo largo",
        ingrediente2: "1 taza de yogur",
        ingrediente3: "Arándanos",
        ingrediente4: "Fresas picadas",
        ingrediente5: "4 cucharadas de Granola",
        ingrediente6: "Miel, para rociar"

    },
    preparacion: {
        paso1: "- Coloca el plátano en un plato alargado.",
        paso2: "- Vierte el yogur encima.",
        paso3: "-  Rocía con miel y decora con arándanos, fresas y granola."
    }
    },
    //SECCIÓN DE TOSTADAS**************************************************************************************************** */
    {
        /*M. Juárez*/
        nombre: "TOSTADAS DE AGUACATE",
        descripcion: "Una opción deliciosa y saludable para el desayuno.",
        tiempo:"5 - 10 minutos",
        img: "./js/components/desayunos/imagenes/Docem.png",
        ingredientes: {
            pan: "2 rebanadas de pan integral",
            aguacate: "1 aguacate maduro",
            tomate: "1 tomate pequeño, cortado en rodajas",
            sal: "Sal al gusto",
            pimienta: "Pimienta negra al gusto"
        },
        preparacion: {
            paso1: "Tuesta las rebanadas de pan hasta que estén crujientes.",
            paso2: "Pela y corta el aguacate en rodajas.",
            paso3: "Coloca las rodajas de aguacate sobre las tostadas.",
            paso4: "Agrega las rodajas de tomate encima del aguacate.",
            paso5: "Espolvorea sal y pimienta al gusto. ¡Listo para disfrutar!"
        }
    },
    {//M Juárez
        nombre: "TOSTADAS DE CREMA DE CACAHUETE Y PLÁTANO",
        descripcion: "Una combinación clásica.",
        tiempo:"5 - 10 minutos",
        img: "./js/components/desayunos/imagenes/Oncem.png",
        ingredientes: {
            ingrediente1: "2 rebanadas de pan",
            ingrediente2: "2 cucharadas de crema de cacahuete",
            ingrediente3: "1 plátano",
            ingrediente4: "Miel o canela en polvo para decorar (opcional)"
        },
        preparacion: {
            paso1: "- Tuesta las rebanadas de pan hasta que estén crujientes.",
            paso2: "- Unta una cucharada de crema de cacahuete en cada tostada.",
            paso3: "- Corta el plátano en rodajas y colócalo sobre la crema de cacahuete.",
            paso4: "- Si deseas, añade un poco de miel o espolvorea canela en polvo para decorar.",
            paso5: "- Disfruta de estas deliciosas tostadas de crema de cacahuete y plátano."
        }
    },    

    //SECCIÓN DE BATIDOS*****************************************************************************************************************
    {//M Juárez 10
        nombre: "BATIDO DE PLÁTANO Y ESPINACAS",
        descripcion: "Receta cargada de nutrientes para un desayuno revitalizante.",
        tiempo:"10 - 15 minutos",
        img: "./js/components/desayunos/imagenes/Trecem.jpg",
        ingredientes: {
            ingrediente1: "2 plátanos maduros",
            ingrediente2: "1 taza de espinacas frescas",
            ingrediente3: "1 taza de leche (puede ser vegetal)",
            ingrediente4: "1 cucharadita de miel (opcional)",
            ingrediente5: "Cubos de hielo al gusto"
        },
        preparacion: {
            paso1: "En una licuadora, agrega los plátanos pelados y cortados en trozos.",
            paso2: "Añade las espinacas, la leche y la miel.",
            paso3: "Agrega algunos cubos de hielo para enfriar y espesar el batido.",
            paso4: "Licua todos los ingredientes hasta obtener una mezcla suave y homogénea.",
            paso5: "Sirve en un vaso y disfruta de este batido saludable y refrescante."
        }
    },
    {
        /*M. Juárez*/
        nombre: "BATIDO DE FRUTAS TROPICALES",
        descripcion: "Un batido refrescante.",
        tiempo:"10 - 15 minutos",
        img: "./js/components/desayunos/imagenes/Catorcem.jpg",
        ingredientes: {
            ingrediente1: "1 taza de piña en trozos",
            ingrediente2: "1 taza de mango en trozos",
            ingrediente3: "2 plátanos maduros",
            ingrediente4: "1/2 taza de jugo de naranja",
            ingrediente5: "Cubos de hielo al gusto"
        },
        preparacion: {
            paso1: "- En una licuadora, agrega la piña, el mango, los plátanos y el jugo de naranja.",
            paso2: "- Añade algunos cubos de hielo para enfriar y espesar el batido.",
            paso3: "- Licua todos los ingredientes hasta obtener una mezcla suave y homogénea.",
            paso4: "- Sirve en un vaso y disfruta de este batido tropical lleno de vitaminas."
        }
    },
    {//M Juárez 12
        nombre: "BATIDO DE AGUACATE Y PLÁTANO",
        descripcion: "Un batido cremoso y nutritivo.",
        tiempo:"10 - 15 minutos",
        img: "./js/components/desayunos/imagenes/Quincem.jpg",
        ingredientes: {
            ingrediente1: "1 aguacate maduro",
            ingrediente2: "1 plátano maduro",
            ingrediente3: "1 taza de leche (puede ser vegetal)",
            ingrediente4: "1 cucharada de miel (opcional)",
            ingrediente5: "Cubos de hielo al gusto"
        },
        preparacion: {
            paso1: "- En una licuadora, coloca el aguacate pelado y sin hueso, el plátano y la leche.",
            paso2: "- Añade la miel y algunos cubos de hielo si deseas.",
            paso3: "- Licua hasta obtener una mezcla suave y cremosa.",
            paso4: "- Sirve en un vaso y disfruta de este batido de aguacate y plátano lleno de nutrientes."
        }
    }    

]