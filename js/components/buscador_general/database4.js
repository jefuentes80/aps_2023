const database4 = [
    {
        nombre: "Gaseosas",
        img : "https://cdn.www.gob.pe/uploads/document/file/285975/standard_vaso_de_gaseosa1.jpg",
        dsescripcion : "Las gaseosas poseen un alto contenido de azúcar y otros aditivos, como la cafeína, lo que desencadena en efecto diurético ocasionando que el cuerpo humano pierde más agua."
    },
    
    {
        nombre: "Hamburguesa con queso",
        img : "https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg",
        dsescripcion : "Las hamburguesas con queso de comida rápida suelen contener carnes procesadas, pan blanco refinado, queso procesado y salsas con alto contenido de grasas saturadas y sodio. Además, suelen tener un alto contenido calórico."
    },
    {
        nombre: "Papas fritas",
        img : "https://soyproesa.com/wp-content/uploads/2022/04/recetas-de-papas-fritas.png",
        dsescripcion : "Las papas fritas de comida rápida se fríen en aceites vegetales a altas temperaturas, lo que puede generar la formación de compuestos dañinos, como acrilamida. Además, suelen tener un alto contenido de grasas saturadas y sodio. El consumo excesivo de papas fritas puede aumentar el riesgo de obesidad, enfermedades cardíacas, presión arterial alta y otros problemas de salud."
    },
    {
        nombre: "Nuggets de pollo",
        img : "https://imag.bonviveur.com/nuggets-de-pollo-caseros.jpg",
        dsescripcion : "Los nuggets de pollo de comida rápida suelen estar hechos de carne de pollo procesada y empanizados con harinas refinadas y aceites vegetales de baja calidad. Además, pueden contener aditivos y conservantes. El consumo frecuente de nuggets de pollo puede contribuir a una ingesta excesiva de sodio, grasas saturadas y calorías, y no brindar los nutrientes necesarios para una alimentación saludable."
    },
    {
        nombre: "Pizza comercial",
        img : "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg",
        dsescripcion : "La pizza de comida rápida comercial suele contener una masa refinada con alto contenido de carbohidratos simples, salsas con alto contenido de sodio, quesos procesados y coberturas altas en grasas saturadas y sodio, como pepperoni o salchichas. Además, las porciones suelen ser grandes y las calorías totales elevadas. El consumo excesivo de pizza comercial puede contribuir al aumento de peso, aumentar el riesgo de enfermedades cardíacas y promover una alimentación poco saludable."
    },
    {
        nombre: "Embutidos y carnes procesadas (salchichas, jamón, tocino):",
        img : "https://miradorsalud.com/wp-content/uploads/2013/03/Hot-dogs.jpg",
        dsescripcion : "Los embutidos y carnes procesadas suelen contener altos niveles de grasas saturadas, sodio y aditivos como conservantes y colorantes artificiales. Estos alimentos están asociados con un mayor riesgo de enfermedades cardíacas, presión arterial alta y cáncer colorrectal."
    },
    {
        nombre: "Cereales azucarados para el desayuno",
        img : "https://s3.abcstatics.com/media/bienestar/2020/10/25/cereales-kU9E--620x349@abc.jpg",
        dsescripcion : "Los cereales azucarados para el desayuno contienen altas cantidades de azúcar refinada y aditivos. Además, suelen tener un bajo contenido de fibra y nutrientes esenciales. El consumo regular de estos cereales puede contribuir al aumento de peso, aumentar el riesgo de diabetes tipo 2 y promover la caries dental."
    },
    {
        nombre: "Galletas y pasteles industriales",
        img : "https://st4.depositphotos.com/20463068/23891/i/600/depositphotos_238919574-stock-photo-carrot-cake-prepared-on-the.jpg",
        dsescripcion : "Las galletas y pasteles industriales suelen contener altas cantidades de azúcar, grasas trans, harinas refinadas y aditivos artificiales. Estos alimentos tienen un bajo valor nutricional y un alto contenido calórico. Su consumo frecuente puede contribuir al aumento de peso, elevar los niveles de colesterol y aumentar el riesgo de enfermedades cardíacas."
    },
    {
        nombre: "Snacks salados (papas fritas, nachos, pretzels)",
        img : "https://s1.ppllstatics.com/diariosur/www/multimedia/202302/01/media/cortadas/snacks-salados-k0cC-U190480569220eU-1248x770@Diario%20Sur.jpg",
        dsescripcion : "Los snacks salados procesados suelen ser altos en grasas saturadas, sodio y aditivos como potenciadores del sabor y conservantes. Además, suelen tener un bajo contenido de nutrientes esenciales. El consumo excesivo de estos snacks puede contribuir al aumento de peso, elevar la presión arterial y aumentar el riesgo de enfermedades cardíacas."
    },
    {
        nombre: "Pollo frito",
        img : "https://www.topdoctors.mx/files/Image/large/142603aea415429be5bcb3fdc6b3dc52.png",
        dsescripcion : "El pollo frito se sumerge en aceite caliente para lograr una textura crujiente en el exterior. Sin embargo, este proceso de fritura puede resultar en un alto contenido de grasas saturadas y calorías. El consumo excesivo de pollo frito puede contribuir al aumento de peso, elevar los niveles de colesterol y aumentar el riesgo de enfermedades cardíacas."
    },
    {
        nombre: "Donas y pasteles fritos",
        img : "https://i.ytimg.com/vi/ecyQ5Ajldng/maxresdefault.jpg",
        dsescripcion : "Las donas y pasteles fritos se sumergen en aceite caliente para obtener una textura crujiente y luego se cubren con azúcar o glaseado. Estos alimentos son altos en grasas saturadas, azúcares refinados y calorías. El consumo frecuente de donas y pasteles fritos puede contribuir al aumento de peso, elevar los niveles de azúcar en la sangre y aumentar el riesgo de enfermedades metabólicas."
    },
    {
        nombre: "Empanadas y alimentos fritos rellenos",
        img : "https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2013/07/empanadas-argentinas.jpg",
        dsescripcion : "Las empanadas y otros alimentos fritos rellenos, como las croquetas, suelen contener una masa frita y un relleno rico en grasas y calorías, como carne, queso o vegetales fritos. Estos alimentos son altos en grasas saturadas, grasas trans y calorías. Su consumo regular puede contribuir al aumento de peso, elevar los niveles de colesterol y aumentar el riesgo de enfermedades cardíacas."
    },
    {
        nombre: "Bebidas deportivas y energéticas.",
        img : "https://www.consumer.es/wp-content/uploads/2020/06/bebidas-isotonicas-ejemplos.jpg",
        dsescripcion : "Muchas de estas bebidas tienen gran cantidad de azúcar y calorías. Las bebidas energéticas también tienen mucha cafeína. A menos que haga ejercicio suficientemente intenso como para sudar por una hora o más, es preferible tomar agua. También puede elegir las versiones bajas en calorías de estas bebidas."
    },
    {
        nombre: "Macarrones con queso",
        img : "https://www.recetasnestle.com.pe/sites/default/files/2022-07/banner-como-hacer-macarrones-con%20queso.jpg",
        dsescripcion : " Los macarrones con queso son un plato popular que consiste en pasta cocida con una salsa de queso. Sin embargo, esta salsa suele estar hecha de quesos procesados y puede contener altas cantidades de grasas saturadas y sodio. El consumo regular de macarrones con queso puede contribuir al aumento de peso, elevar los niveles de colesterol y aumentar el riesgo de enfermedades cardíacas.",
    },
    {
        nombre: "Nachos con queso",
        img : "https://www.divinacocina.es/wp-content/uploads/nachos-con-salsa-queso.jpg",
        dsescripcion : " Los nachos con queso son un aperitivo que consiste en chips de maíz cubiertos con queso fundido. El queso utilizado suele ser procesado y puede contener aditivos y grasas poco saludables. Además, los nachos suelen ser altos en calorías y sodio. El consumo regular de nachos con queso puede contribuir al aumento de peso, elevar los niveles de colesterol y aumentar el riesgo de enfermedades cardíacas.",
    },
    {
        nombre: "Sándwiches o bocadillos con queso procesado",
        img : "https://assets.kraftfoods.com/recipe_images/opendeploy/106866_MXM_K2526V16S_OR1_H_640x428.jpg",
        dsescripcion : "Los sándwiches o bocadillos que contienen queso procesado suelen tener un alto contenido de grasas saturadas, sodio y aditivos artificiales. Estos alimentos pueden ser altos en calorías y no brindar los nutrientes necesarios para una alimentación saludable. El consumo regular de sándwiches o bocadillos con queso procesado puede contribuir al aumento de peso, elevar los niveles de colesterol y aumentar el riesgo de enfermedades cardíacas.",
    },
    {
        nombre: "Té negro",
        img : "https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2022/08/1140-black-tea-esp.jpg",
        dsescripcion : "El té negro contiene cafeína, aunque en menor cantidad que el café. El consumo moderado de té negro puede tener beneficios para la salud, como antioxidantes y propiedades estimulantes. Sin embargo, el consumo excesivo de té negro puede causar problemas de sueño, irritabilidad y malestar estomacal en algunas personas sensibles a la cafeína.",
    },
    {
        nombre: "Bebidas gaseosas con cafeína",
        img : "https://ds1e83w8pn0gs.cloudfront.net/fotosmultisite/32632-1.jpg",
        dsescripcion : "Algunas bebidas gaseosas, como la cola, contienen cafeína. Estas bebidas son ricas en azúcar y aditivos artificiales, lo que puede ser perjudicial para la salud en general. Además, el consumo excesivo de bebidas gaseosas con cafeína puede contribuir al aumento de peso, elevar los niveles de azúcar en la sangre y aumentar el riesgo de enfermedades metabólicas.",
    },
    {
        nombre: "Cafés con sabor y bebidas de café congeladas",
        img : "https://www.rivareno.com/wp-content/uploads/2021/07/Caffe-freddo.jpg",
        dsescripcion : "Algunas variedades de café, como los cafés con sabor y las bebidas de café congeladas, pueden contener altas cantidades de azúcar, jarabes y cremas, además de la cafeína. Estas bebidas suelen ser altas en calorías y azúcares añadidos, lo que puede contribuir al aumento de peso, elevar los niveles de azúcar en la sangre y aumentar el riesgo de enfermedades metabólicas.",
    },
    {
        nombre: "Productos de panadería y repostería",
        img : "https://i.blogs.es/9b5cc5/pan-facil-y-rapido-1/840_560.jpg",
        dsescripcion : "Los productos de panadería y repostería, como pasteles, galletas, donas y magdalenas, suelen contener altas cantidades de azúcares agregados. Estos alimentos son ricos en calorías, grasas saturadas y azúcares refinados. Su consumo regular puede contribuir al aumento de peso, elevar los niveles de azúcar en la sangre, aumentar el riesgo de enfermedades cardíacas y provocar caries dentales.",
    },
    {
        nombre: "Yogures y postres lácteos azucarados",
        img : "https://www.laurafuentes.soy/wp-content/uploads/2022/12/Strawberry-Overnight-Oats-post-1.jpg",
        dsescripcion : "Muchos yogures y postres lácteos comercializados contienen azúcares agregados para mejorar su sabor. Estos productos pueden parecer opciones saludables debido a su contenido de calcio y probióticos, pero el exceso de azúcar puede anular sus beneficios. El consumo regular de yogures y postres lácteos azucarados puede contribuir al aumento de peso, elevar los niveles de azúcar en la sangre y aumentar el riesgo de caries dentales.",
    },
    {
        nombre: "Salsas y aderezos procesados",
        img : "https://noticiassaludables.com/wp-content/uploads/2017/12/aderezos.jpg",
        dsescripcion : "Las salsas y aderezos procesados, como la salsa de tomate, ketchup, aderezos para ensaladas y salsas para pasta, a menudo contienen azúcares agregados para mejorar el sabor. Estas salsas y aderezos pueden ser altos en calorías y azúcares, lo que puede contribuir al aumento de peso y elevar los niveles de azúcar en la sangre. Además, su consumo excesivo puede dificultar la elección de opciones más saludables y naturalmente sabrosas.",
    },
    {
        nombre: "Alimentos enlatados",
        img : "https://movidasana.com/wp-content/uploads/2015/09/Enlatados.jpg",
        dsescripcion : "Como sopas enlatadas, embutidos, snacks salados, salsas comerciales y alimentos precocinados, suelen contener altas cantidades de sal para mejorar el sabor y la conservación. El consumo excesivo de alimentos procesados puede contribuir al aumento de la presión arterial, el riesgo de enfermedades cardíacas y la retención de líquidos.",
    },
    {
        img : "https://i.blogs.es/7a1d74/encurtidos1/1366_2000.jpg",
        nombre: "Alimentos en conserva y encurtidos",
        dsescripcion : "Los alimentos en conserva y encurtidos, como pepinillos, aceitunas y vegetales enlatados, a menudo contienen altas cantidades de sal como parte del proceso de conservación. Estos alimentos pueden ser una fuente significativa de sodio en la dieta y su consumo excesivo puede contribuir a la hipertensión y otros problemas de salud relacionados.",
    },
    {
        nombre: "Condimentos comerciales",
        img : "https://storage.googleapis.com/afs-prod/media/ce51dd2461a84464932908c58b89fe8d/800.jpeg",
        dsescripcion : "condimentos comerciales, como la salsa de soja, salsa barbacoa, salsa teriyaki y aderezos para ensaladas, contienen altos niveles de sal. Estos condimentos pueden añadir sabor a las comidas, pero su consumo en exceso puede aumentar la ingesta de sodio y elevar la presión arterial.",
    }
]