// JAVASCRIPT DE LA PÁGINA PRODUCTOS CON BARRA LATERAL - JS

// Datos de productos detallados
const productData = {

    // ELITE PAPEL HIGIENICO

    'elite-Papel Higienico SH Plus': {
        image: "img/Papel Higienico SH Plus.png",
        detailImage: "imgdetalles/ph sh plus.png",
        brand: "Elite",
        category: "Papel Higienico Alto Metraje",
        fichaTecnica: "https://www.cdsurargentina.com.ar/sistema/uploads/900/articulos/37558-ficha-tecnica-ph-elite-pro-61131.pdf"
    },

    'elite-Papel Higienico Elite Rollo SH Classic': {
        image: "img/Papel higienico Elite Rollo SH Classic.png",
        detailImage: "imgdetalles/ph elite rollo sh classic.png",
        brand: "Elite",
        category: "Papel Higienico Alto Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/21a1a-ficha-tecnica-ph-elite-pro-6109.pdf"
    },


    'elite-Papel Higienico Elite Rollo SH Plus 300': {
        image: "img/Papel Higienico Elite Rollo SH Plus 300.png",
        detailImage: "imgdetalles/ph elite rollo sh plus 300.png",
        brand: "Elite",
        category: "Papel Higienico Alto Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/d888c-ficha-tecnica-ph-elite-pro-6112.pdf"
    },

    'elite-Papel Higienico Elite Rollo SH Plus 500': {
        image: "img/Papel Higienico Elite Rollo SH Plus 500.png",
        detailImage: "imgdetalles/ph elite rollo sh plus 500.png",
        brand: "Elite",
        category: "Papel Higienico Alto Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/6194b-ficha-tecnica-ph-elite-pro-6128.pdf"
    },

    'elite-Papel Higienico Elite Rollo SH Plus': {
        image: "img/Papel Higienico Elite Rollo SH Plus.png",
        detailImage: "imgdetalles/ph elite rollo sh plus.png",
        brand: "Elite",
        category: "Papel Higienico Bajo Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/de23c-ficha-tecnica-ph-elite-pro_6607.pdf"
    },

    'elite-Papel Higienico Elite SH Plus': {
        image: "img/Papel Higienico Elite SH Plus.png",
        detailImage: "imgdetalles/ph elite sh plus.png",
        brand: "Elite",
        category: "Papel Higienico Bajo Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/1eea1-ficha-tecnica-ph-elite-pro-6122-renovado.pdf"
    },

    'elite-Papel Higienico Elite DH Excellence': {
        image: "img/Papel Higienico Elite DH Excellence.png",
        detailImage: "imgdetalles/ph dh excellence.png",
        brand: "Elite",
        category: "Papel Higienico Bajo Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/a6a28-ficha-tecnica-ph-elite-pro_6616.pdf"
    },

    'elite-Papel Higienico Interfoliado Doble Hoja': {
        image: "img/Papel Higienico Interfoliado Doble Hoja.png",
        detailImage: "imgdetalles/ph interfoliado doble hoja.png",
        brand: "Elite",
        category: "Papel Higienico Bajo Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.br/assets/uploads/images/611f4-ficha-tecnica-207124.pdf"
    },

    // ELITE TOALLAS DE PAPEL

    'elite-Toalla Elite DH Excellence': {
        image: "img/Toalla Elite DH Excellence.png",
        detailImage: "imgdetalles/tp elite dh excellence.png",
        brand: "Elite",
        category: "Toallas De Papel En Rollo",
        fichaTecnica: "https://www.abastecedoradelsur.com.ar/webfiles/abastecedoradelsur/productos/4459/archivos/FICHA%20TECNICA.pdf?srsltid=AfmBOorYW2sZI0vAMqUtBdalSp79BCUoykW57_Sd0K2hV9jbVE3sp5Uq"
    },

    'elite-Toalla Elite Rollo SH Plus':{
        image: "img/Toalla Elite Rollo SH Plus.png",
        detailImage: "imgdetalles/tp elite rollo sh plus.png",
        brand: "Elite",
        category: "Toallas De Papel En Rollo",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/5fddd-ficha-tecnica-to-elite-pro-6203-renovada.pdf"
    },

    'elite-Toalla Elite SH Plus': {
        image: "img/Toalla Elite SH Plus.png",
        detailImage: "imgdetalles/tp elite sh plus.png",
        brand: "Elite",
        category: "Toallas De Papel En Rollo",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/bcd86-ficha-tecnica-to-elite-pro-6309.pdf"
    },

    'elite-Toallas De Papel Intercaladas Una Hoja': {
        image: "img/Toalla De Papel Intercaladas Una Hoja.png",
        detailImage: "imgdetalles/tp intercaladas una hoja.png",
        brand: "Elite",
        category: "Toallas De Papel Intercaladas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/aa88a-ficha-tecnica-to-elite-pro-6295-renov.pdf"
    },

    'elite-Toalla De Papel Elite HC Excellence': {
        image: "img/Toalla De Papel Elite HC Excellence.png",
        detailImage: "imgdetalles/tp elite hc excellence.png",
        brand: "Elite",
        category: "Toallas De Papel Intercaladas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/0115c-ficha-tecnica-to-elite-pro_6149.pdf"
    },


    'elite-Toallas De Papel Intercaladas Elite SH Plus': {
        image: "img/Toallas Intercaladas Elite SH Plus.png",
        detailImage: "imgdetalles/tp intercaladas elite sh plus.png",
        brand: "Elite",
        category: "Toallas De Papel Intercaladas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/26c05-ficha-tecnica-to-elite-pro-6283.pdf"
    },

    'elite-Toallas De Papel Dobladas Una Hoja': {
        image: "img/Toallas De Papel Dobladas Una Hoja.png",
        detailImage: "imgdetalles/tp dobladas una hoja.png",
        brand: "Elite",
        category: "Toallas De Papel Intercaladas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/8f3b9-ft-to-elite-pro-plus-x250_fajilla_6269_fab-ar-para-ar-1-.pdf"
    },

    // ELITE ROLLOS Y BOBINAS

    'elite-Rollos De Cocina Doble Hoja': {
        image: "img/Rollos De Cocina Doble Hoja.png",
        detailImage: "imgdetalles/rollo cocina.png",
        brand: "Elite",
        category: "Rollos Y Bobinas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/50cbc-ficha-tecnica-rc-elite-pro_6648_ar.pdf"
    },

    'elite-Rollos Multiuso Doble Hoja': {
        image: "img/Rollo Multiuso Doble Hoja.png",
        detailImage: "imgdetalles/rollo multiuso.png",
        brand: "Elite",
        category: "Rollos Y Bobinas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/667e2-ficha-tecnica-rc-elite-pro_6639_ar.pdf"
    },

    'elite-Bobina Elite DH Excellence': {
        image: "img/Bobina Elite DH Excellence.png",
        detailImage: "imgdetalles/bobina elite dh excellence.png",
        brand: "Elite",
        category: "Rollos Y Bobinas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/e6cac-ficha-tecnica-bob-elite-pro-excellence_6213_ar.pdf"
    },

    'elite-Bobina Elite DH Plus': {
        image: "img/Bobina Elite DH Plus.png",
        detailImage: "imgdetalles/bobina elite dh plus.png",
        brand: "Elite",
        category: "Rollos Y Bobinas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/83d1b-ficha-tecnica-bob-elite-pro-plus-6264.pdf"
    },

    // ELITE SERVILLETAS

    'elite-Servilletas Interfoliadas': {
        image: "img/Servilletas Interfoliadas.png",
        detailImage: "imgdetalles/servilletas interfoliadas.png",
        brand: "Elite",
        category: "Servilletas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/83d1b-ficha-tecnica-bob-elite-pro-plus-6264.pdf"
    },

    'elite-Servilletas Fast Food Una Hoja': {
        image: "img/Servilletas Fast Food Una Hoja.png",
        detailImage: "imgdetalles/servilletas fast food.png",
        brand: "Elite",
        category: "Servilletas",
        fichaTecnica: "https://www.abastecedoradelsur.com.ar/webfiles/abastecedoradelsur/productos/1664/archivos/ficha%20tecnica.pdf?srsltid=AfmBOop6gT9Nw6WT-Y0oOEyDBtSwQt0bXnWPmKGEVyHmshdIIzfEqkCS"
    },

    'elite-Servilletas Hoja Simple': {
        image: "img/Servilletas Hoja Simple.png",
        detailImage: "imgdetalles/servilletas hoja Simple.png",
        brand: "Elite",
        category: "Servilletas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/cc9cb-ficha-tecnica-srv-elite-pro-6567.pdf"
    },

    // ELITE PAÑOS DE LIMPIEZA

    'elite-Paños De Limpieza Max50': {
        image: "img/Paños De Limpieza MAX50.png",
        detailImage: "imgdetalles/Max50.png",
        brand: "Elite",
        category: "Paños De Limpieza",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/4a43b-ficha-tecnica-max50_6389_ar.pdf"
    },

    'elite-Paños De Limpieza Max60 50 Paños': {
        image: "img/Paños De Limpieza MAX60 50 Paños.png",
        detailImage: "imgdetalles/Max60 50 paños.png",
        brand: "Elite",
        category: "Paños De Limpieza",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/bae25-ficha-tecnica-max60_6385_ar.pdf"
    },

    'elite-Paños De Limpieza Max60 890 Paños': {
        image: "img/Paños De Limpieza MAX60 890 Paños.png",
        detailImage: "imgdetalles/Max60.png",
        brand: "Elite",
        category: "Paños De Limpieza",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/10351-ficha-tecnica-max60_6384_ar.pdf"
    },

    'elite-Paños De Limpieza Max70 88 Paños': {
        image: "img/Paños De Limpieza MAX70 88 Paños.png",
        detailImage: "imgdetalles/Max70.png",
        brand: "Elite",
        category: "Paños De Limpieza",
        fichaTecnica: "https://www.cdsurargentina.com.ar/sistema/uploads/900/articulos/18f26-ficha-tecnica-maxwipe-6286.pdf"
    },

    'elite-Paños De Limpieza Max70 750 Paños': {
        image: "img/Paños De Limpieza MAX70 750 Paños.png",
        detailImage: "imgdetalles/Max70 750 paños.png",
        brand: "Elite",
        category: "Paños De Limpieza",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/275c2-ficha-tecnica-max70_6386_ar.pdf"
    },

    'elite-Paños De Limpieza Max80': {
        image: "img/Paños De Limpieza MAX80.png",
        detailImage: "imgdetalles/Max80.png",
        brand: "Elite",
        category: "Paños De Limpieza",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/c2895-ficha-tecnica-max80-rollo-azul_6387_ar.pdf"
    },

    // ELITE JABONES Y ALCOHOLES

    'elite-Jabon Liquido Glicerina': {
        image: "img/Jabon Liquido Glicerina.png",
        detailImage: "imgdetalles/jabon glicerina.png",
        brand: "Elite",
        category: "Jabones Y Alcoholes",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/5dc4c-ficha-te-cnica-jabo-n-glicerina-8086.pdf"
    },

    'elite-Jabon Liquido Antibacterial Multiflex': {
        image: "img/Jabon Liquido Antibacterial Multiflex.png",
        detailImage: "imgdetalles/jl antibacterial multiflex.png",
        brand: "Elite",
        category: "Jabones Y Alcoholes",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/20d80-ficha-tecnica-8058-jab-n-antibact.pdf"
    },

    'elite-Jabon Liquido Glicerina Multiflex': {
        image: "img/Jabon Liquido Glicerina Multiflex.png",
        detailImage: "imgdetalles/jl glicerina multiflex.png",
        brand: "Elite",
        category: "Jabones Y Alcoholes",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/c5fcc-ficha-tecnica-8055-jab-n-glicerina.pdf"
    },

    'elite-Jabon Spray Multiflex': {
        image: "img/Jabon Spray Multiflex.png",
        detailImage: "imgdetalles/spray multiflex.png",
        brand: "Elite",
        category: "Jabones Y Alcoholes",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/c2041-ficha-tecnica-8057-jab-n-spray.pdf"
    },

    'elite-Alcohol En Gel Multiflex': {
        image: "img/Alcohol En Gel Multiflex.png",
        detailImage: "imgdetalles/alcohol en gel multiflex.png",
        brand: "Elite",
        category: "Jabones Y Alcoholes",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/37293-ficha-tecnica-8054-alcohon-el-gel.pdf"
    },

    'elite-Jabon Espuma Multiflex': {
        image: "img/Jabon Espuma Multiflex.png",
        detailImage: "imgdetalles/jabon espuma Multiflex.png",
        brand: "Elite",
        category: "Jabones Y Alcoholes",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/0550e-ficha-tecnica-8056-jab-n-espuma.pdf"
    },

    // ELITE DISPENSADORES

    'elite-Dispensadores Jabon Alcohol Multiflex Jabon Granel': {
        image: "img/Jabon Alcohol Multiflex Jabon Granel.png",
        detailImage: "imgdetalles/disp multiflex.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Jabon Alcohol Multiflex': {
        image: "img/Jabon Alcohol Multiflex.png",
        detailImage: "imgdetalles/disp multiflex.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Papel Higienico Jumbo': {
        image: "img/Papel Higienico Jumbo.png",
        detailImage: "imgdetalles/disp Jumbo.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Papel Higienico Intercalado': {
        image: "img/Papel Higienico Intercalado.png",
        detailImage: "imgdetalles/disp intercalado.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Toallas Dobladas Intercaladas': {
        image: "img/Toallas Dobladas Intercaladas.png",
        detailImage: "imgdetalles/disp dobladas intercaladas.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Toalla Jumbo Autocorte Non-Touch': {
        image: "img/Toalla Jumbo Autocorte Non-Touch.png",
        detailImage: "imgdetalles/disp non toch.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Toalla Jumbo Autocorte Automatico': {
        image: "img/Toalla Jumbo Autocorte Automatico.png",
        detailImage: "imgdetalles/disp non toch.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Toalla Jumbo Palanca': {
        image: "img/Toalla Jumbo Palanca.png",
        detailImage: "imgdetalles/disp non toch.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    // WASSINGTON CUIDADOS DE PISO

    'wassington-Cera Autobrillo Uniwax': {
        image: "img2/Cera Autobrillo Uniwax.png",
        detailImage: "imgdetalles/cera Uniwax.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1RQ6xivhsxRfdrS2rK3aTjhvkqnswmVl6/view"
    },

    'wassington-Cera Autobrillo Superwax': {
        image: "img2/Cera Autobrillo Superwax.png",
        detailImage: "imgdetalles/cera Superwax.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1oCO5D-Jhli6PKQ-si83HNDAbuAsqEft4/view"
    },

    'wassington-Cera Autobrillo Rex': {
        image: "img2/Cera Autobrillo Rex.png",
        detailImage: "imgdetalles/cera Rex.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1KNp3DPHx_ZPy-FoEVu0vJKUIkXOJvv4k/view"
    },

    'wassington-Cera Acrilica Acrilwax': {
        image: "img2/Cera Acrilica Acrilwax.png",
        detailImage: "imgdetalles/cera acrilwax.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1ZsPMEm0sdBo3JloKABAwMnhbXUifdIWQ/view"
    },

    'wassington-Sellador Acrilico Acrilwax': {
        image: "img2/Sellador Acrilico Acrilwax.png",
        detailImage: "imgdetalles/sellador acrilico acrilwax.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1-wHdjv6P12WaUClfs21vH2dOY2bzK5p_/view"
    },

    'wassington-Cera Madera Waxin': {
        image: "img2/Cera Madera Waxin.png",
        detailImage: "imgdetalles/cera madera waxin.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1wnOFWlXbsujP5xmIlFss1uI3qvMn9Zwg/view"
    },

    'wassington-Acondicionador Kwik': {
        image: "img2/Acondicionador Kwik.png",
        detailImage: "imgdetalles/Acondicionador Kwik.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1WBQ1OUlDZ5PRAh5ERzcdZYFXvoRL1Cxl/view"
    },

    'wassington-Limpiador Pisos Flotantes Waxin': {
        image: "img2/Limpiador Pisos Flotantes Waxin.png",
        detailImage: "imgdetalles/pisos flotantes Waxin.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1NDvl7JejGjgXw-PrWmdUuh8lJ1rassT7/view"
    },

    'wassington-Limpia Alfombra Klin': {
        image: "img2/Limpia Alfombra Klin.png",
        detailImage: "imgdetalles/limpia alfombra Klin.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1fpn0fJNX_dHw7dhUn2vBx9NEuzWMyHl5/view"
    },

    'wassington-Removedor Cera Acrilica Kito': {
        image: "img2/Removedor Cera Acrilica Kito.png",
        detailImage: "imgdetalles/removedor cera acrilica.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1kKH9H9W2cM7XwWx7j1niWOzp5AZmwniK/view"
    },

    'wassington-Removedor Cera Madera Kito': {
        image: "img2/Removedor Cera Madera Kito.png",
        detailImage: "imgdetalles/cera madera Kito.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1GIMcEEmjaYyItPndrLakd4-qECQ73g4J/view"
    },

    'wassington-Removedor Autobrillo Kito': {
        image: "img2/Removedor Autobrillo Kito.png",
        detailImage: "imgdetalles/removedor autobrillo Kito.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1D99kxucxpKuXgFHLQU_6QTyFOxx5vs5H/view"
    },

    // WASSINGTON CUIDADOS DE BAÑOS

    'wassington-Quita Sarro': {
        image: "img2/Quita Sarro.png",
        detailImage: "imgdetalles/quita Sarro.png",
        brand: "Wassington",
        category: "Cuidado De Baños",
        fichaTecnica: "https://drive.google.com/file/d/1wg7GObAVQwcgEf7dt4R4J955QA9GXT-v/view"
    },

    'wassington-Desodorante Para Mingitorio Power WC': {
        image: "img2/Desodorante Para Minguitorio Power WC.png",
        detailImage: "imgdetalles/removedor autobrillo Kito.png",
        brand: "Wassington",
        category: "Cuidado De Baños",
        fichaTecnica: "https://drive.google.com/file/d/1gcQ_xha1Qwq_6qSCBaYlfURpzCfl5MN_/view"
    },

    // WASSINGTON CUIDADOS DE COCINAS

    'wassington-Limpiador Multiuso Tiger': {
        image: "img2/Limpiador Multiuso Tiger.png",
        detailImage: "imgdetalles/limpiador Tiger.png",
        brand: "Wassington",
        category: "Cuidado De Cocinas",
        fichaTecnica: "https://drive.google.com/file/d/13rYhGWp5hEXC7KOskwNO4fnkdCm49liq/view"
    },

    'wassington-Desengrasante Panter I': {
        image: "img2/Desengrasante Panter I.png",
        detailImage: "imgdetalles/panter i.png",
        brand: "Wassington",
        category: "Cuidado De Cocinas",
        fichaTecnica: "https://drive.google.com/file/d/1L2IUuW0gF3Zh7RcZne536zSx_xsCLFWt/view"
    },

    'wassington-Desengrasante Panter H': {
        image: "img2/Desodorante Panter H.png",
        detailImage: "imgdetalles/panter h.png",
        brand: "Wassington",
        category: "Cuidado De Cocinas",
        fichaTecnica: "https://drive.google.com/file/d/1UyajV4OKpQhNWe9KVyxDQ4yb97yAA9OZ/view"
    },

    'wassington-Detergente 15 Back': {
        image: "img2/Detergente 15 Back.png",
        detailImage: "imgdetalles/15 back.png",
        brand: "Wassington",
        category: "Cuidado De Cocinas",
        fichaTecnica: "https://drive.google.com/file/d/1jG4KoqZZwvwG7hhzc-fwDaeNjD_6g_PA/view"
    },

    'wassington-Lavavajilla Tiger Para Maquina Automatica': {
        image: "img2/Abrillantador Tiger Para Maquina Automatica.png",
        detailImage: "imgdetalles/lavavajillas Tiger.png",
        brand: "Wassington",
        category: "Cuidado De Cocinas",
        fichaTecnica: "https://drive.google.com/file/d/1_B3oPbtTnZbsKukrAnEYWWMMvocglROq/view"
    },

    'wassington-Abrillantador Tiger Para Maquina Automatica': {
        image: "img2/Lavavajilla Tiger Para Maquina Automatica.png",
        detailImage: "imgdetalles/Abrillantador Tiger.png",
        brand: "Wassington",
        category: "Cuidado De Cocinas",
        fichaTecnica: "https://drive.google.com/file/d/1uAoDk-AZDSRikhcTF-pEX74Hs6K41qk1/view"
    },
    
    // WASSINGTON CUIDADO PERSONAL

    'wassington-Limpiador De Manos Desengrasante Klin-up': {
        image: "img2/Limpiador De Manos Desengrasante Klin-up.png",
        detailImage: "imgdetalles/limpiador de manos Klin.png",
        brand: "Wassington",
        category: "Cuidado Personal",
        fichaTecnica: "https://drive.google.com/file/d/1m5z0i17SdE0MB1VbI_We9Z-nIfuMrXVN/view"
    },

    'wassington-Jabon Para Manos Klin-up': {
        image: "img2/Jabon para Manos Klin-up .png",
        detailImage: "imgdetalles/jabon para manos Klin.png",
        brand: "Wassington",
        category: "Cuidado Personal",
        fichaTecnica: "https://drive.google.com/file/d/1_1SQ-bSgTIYopBxNtszf9WM_4tcr6mb6/view"
    },

    'wassington-Jabon Para Manos Bactericida Perfumado Klin-up': {
        image: "img2/Jabon Para Manos Bactericida Perfumado Klin-up.png",
        detailImage: "imgdetalles/jabon para manos bactericida.png",
        brand: "Wassington",
        category: "Cuidado Personal",
        fichaTecnica: "https://drive.google.com/file/d/1AOb6OAE6cYqhhM6YlgxCjqyMmbbIU4zk/view"
    },

    'wassington-Alcohol En Gel': {
        image: "img2/Alcohol En Gel.png",
        detailImage: "imgdetalles/alcohol en gel.png",
        brand: "Wassington",
        category: "Cuidado Personal",
        fichaTecnica: "https://drive.google.com/file/d/1-wcJQlet_TmZU6eQA9tBAt7ZjeQ_Oi7d/view"
    },

    'wassington-Shampoo Perfumado Para Manos Rex': {
        image: "img2/Shampoo Para Manos Perfumado Rex.png",
        detailImage: "imgdetalles/shampoo rex.png",
        brand: "Wassington",
        category: "Cuidado Personal",
        fichaTecnica: "https://drive.google.com/file/d/14Jc_oBbXjeqYhnvoSbUsCPqT_JCxUpt0/view"
    },

    // WASSINGTON LIMPIADORES Y DESINFECTANTES

    'wassington-Limpiador Lysto Bactericida Cherry': {
        image: "img2/Limpiador Lysto Bactericida cherry.png",
        detailImage: "imgdetalles/limpiador lysto bactericida cherry.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
        fichaTecnica: "https://drive.google.com/file/d/1rU9WnulzGpmAzE5_8mrd3OLFpsKKWG5z/view"
    },

    'wassington-Limpiador Desinfectante Sanitol Incoloro': {
        image: "img2/Limpiador Desinf Sanitol Incoloro.png",
        detailImage: "imgdetalles/limpiador sanitol incoloro.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
        fichaTecnica: "https://drive.google.com/file/d/10RjbIFKyS2Bx5O7XVeao4r6nr_j0kQSR/view"
    },

    'wassington-Limpiador Desinfectante Sanitol Azul': {
        image: "img2/Limpiador Desinf Sanitol Azul.png",
        detailImage: "imgdetalles/limpiador sanitol azul.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
        fichaTecnica: "https://drive.google.com/file/d/1AsK3eCRnAZ-oOeScLUDFe1UTCycgj4Gv/view"
    },

    'wassington-Limpiador Desinfectante Sanitol Peroxido': {
        image: "img2/Limpiador Desinf Sanitol Peroxido.png",
        detailImage: "imgdetalles/limpiador sanitol peroxido.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
        fichaTecnica: "https://drive.google.com/file/d/1MG1A57UWMXepcWOfAbk-ywxZbWO_mP02/view"
    },

    'wassington-Limpiador Desodorante Concentrado Lysto': {
        image: "img2/Limpiador Deso Concentrado Lysto.png",
        detailImage: "imgdetalles/limpiador lysto desodorante.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
        fichaTecnica: "https://drive.google.com/file/d/14Jc_oBbXjeqYhnvoSbUsCPqT_JCxUpt0/view"
    },

    'wassington-Limpiador Desodorante Rex': {
        image: "img2/Limpiador Deso Rex.png",
        detailImage: "imgdetalles/limpiador desodorante rex.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
        fichaTecnica: "https://drive.google.com/file/d/14Jc_oBbXjeqYhnvoSbUsCPqT_JCxUpt0/view"
    },

    // WASSINGTON LIMPIAVIDRIOS Y MULTIUSOS
    
    'wassington-Limpiavidrios Spray': {
        image: "img2/Limpiavidrios Spray.png",
        detailImage: "imgdetalles/limpiador desodorante rex.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
    },

    'wassington-Limpiavidrios Y Superficies Rex': {
        image: "img2/Limpiavidrios y superficies Rex.png",
        detailImage: "imgdetalles/limpiador desodorante rex.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
    },

    'wassington-Limpia Acero inoxidable Rex': {
        image: "img2/Limpia Acero Inox Rex.png",
        detailImage: "imgdetalles/limpiador desodorante rex.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
    },

    'wassington-Espuma Limpiadora Multiuso Rex': {
        image: "img2/Espuma Limpiadora Multiuso Aerosol.png",
        detailImage: "imgdetalles/limpiador desodorante rex.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
    },

    'wassington-Limpiametales Rex': {
        image: "img2/Limpiametales Rex.png",
        detailImage: "imgdetalles/limpiador desodorante rex.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
    },

    'wassington-Limpiador Desodorante Extra Concentrado Lysto': {
        image: "img2/Limpiador Deso Extra Concentrado Lysto.png",
        detailImage: "imgdetalles/limpiador lysto extra Concentrado.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
    },

    // ROYCO CARROS CESTOS Y CONTENEDORES

    'royco-Carro Mini Con Prensamopas Horizontal': {
        image: "img3/Carro Mini Con Prensamopas Horizontal.png",
        features: [
            "COLOR: Amarillo, Azul, Rojo, Verde",
            "MEDIDAS: 35 x 56 x 74 cm (alto).",
            "CAPACIDAD TOTAL: 20 lt.",
            "Balde interior removible rojo p/ división de agua.",
            "Clip de fijación de cabo.",
            "Ruedas de 50 mm.",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Carro Hotelero': {
        image: "img3/Carro Hotelero.png",
        features: [
            "COLOR: Negro",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Carro Multiservicios Top': {
        image: "img3/Carro Multiservicios Top.png",
        features: [
            "COLOR: Negro",
            "MEDIDAS: 57 x 116 x 100 cm (alto).",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Carro Double-Bucket': {
        image: "img3/Carro Double-Bucket.png",
        features: [
            "COLOR: Rojo, Azul",
            "MEDIDAS: 40 x 50 x 80 cm (alto)",
            "CAPACIDAD TOTAL: 50 lt.",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Carro Auxiliar Top': {
        image: "img3/Carro Auxiliar Top.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Cesto a Pedal 15/30/60/100 Lts': {
        image: "img3/Cesto a Pedal.png",
        features: [
            "COLOR: Blanco, Negro, Azul, Amarillo, Verde, Rojo",
            "MEDIDAS: 25 x 36 x 28cm (alto) - 15 lt",
            "MEDIDAS: 32 x 42 x 48cm (alto) - 30 lt",
            "MEDIDAS: 42 x 50 x 68cm (alto) - 60 lt",
            "MEDIDAS: 58 x 44 x 86cm (alto) - 100 lt",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },
    
    'royco-Cesto Push 60/100 Lts': {
        image: "img3/Cesto Push.png",
        features: [
            "COLOR: Blanco, Negro, Azul, Amarillo, Verde, Rojo",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Cesto Buzon 50 Lts': {
        image: "img3/Cesto Buzon.png",
        features: [
            "COLOR: Negro, Azul, Amarillo, Verde, Rojo",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Cesto Redondo 14/23 Lts': {
        image: "img3/Cesto Redondo.png",
        features: [
            "COLOR: Negro, Azul, Amarillo, Verde, Rojo",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Contenedores 240 Lts': {
        image: "img3/Contenedores.png",
        features: [
            "COLOR: Negro, Azul, Amarillo, Verde, Rojo",
            "MEDIDAS: 59 x 74 x 120 cm (alto)",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    // ROYCO EQUIPAMIENTO DE LIMPIEZA

    'royco-Kit Wet Mop': {
        image: "img3/Kit Wet Mop.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Balde 12 Lts Con Escurridor': {
        image: "img3/Balde 12lt Con Escurridor.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Balde Plastico 4 Lts': {
        image: "img3/Balde Plastico 4 lt.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Bandeja Portaobjetos': {
        image: "img3/Bandeja Portaobjetos.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Pala Aeropuerto': {
        image: "img3/Pala Aeropuerto.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Fibras Abrasivas y Zocaleros': {
        image: "img3/Fibras Abrasivas y Zocalos.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Discos Abrasivos 13/16/17/20 Pulgadas': {
        image: "img3/Discos Abrasivos.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Extensores Telescopicos': {
        image: "img3/Extensores Telescopicos.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Cambiador De Bebé': {
        image: "img3/Cambiador De Bebe.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Señal De Piso Mojado': {
        image: "img3/Señal De Piso Mojado.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    // ROYCO EQUIPOS DE VIDRIO

    'royco-Lava Secavidrios Ambo Plastico': {
        image: "img3/Lava Secavidrios Ambo Plastico.png",
        features: [
            "COLOR: Blanco,Azul",
            "MEDIDAS: 25cm, 35cm",
        ],
        brand: "Royco",
        category: "Equipos De Vidrio"
    },

    'royco-Secavidrios Profesional Acero Inoxidable': {
        image: "img3/Secavidrios Profesional Acero Inoxidable.png",
        features: [
            "COLOR: Plateado",
            "MEDIDAS: 15cm, 20cm, 25cm, 35cm, 40cm, 45cm, 50cm",
        ],
        brand: "Royco",
        category: "Equipos De Vidrio"
    },

    'royco-Lavavidrios Vellon y Soporte': {
        image: "img3/Lavavidrios Vellon Y Soporte.png",
        features: [
            "COLOR: Blanco,Azul",
            "MEDIDAS: 25cm, 35cm, 45cm, 55cm",
        ],
        brand: "Royco",
        category: "Equipos De Vidrio"
    },

    'royco-Secavidrios King Plastico': {
        image: "img3/Secavidrios King Plastico.png",
        features: [
            "COLOR: Gris",
            "MEDIDAS: 15cm, 20cm, 25cm, 35cm, 40cm, 45cm, 50cm",
        ],
        brand: "Royco",
        category: "Equipos De Vidrio"
    },

    'royco-Soportes Lavavidrios': {
        image: "img3/Soportes Lavavidrios.png",
        features: [
            "COLOR: Azul, Gris",
            "MEDIDAS: 25cm, 35cm, 45cm",
        ],
        brand: "Royco",
        category: "Equipos De Vidrio"
    },

    // ROYCO CABOS

    'royco-Cabo Acero Reforzado': {
        image: "img3/Cabo Acero Reforzado.png",
        features: [
            "COLOR: Blanco, Negro, Azul, Rojo, Verde, Amarillo, Naranja",
            "MEDIDAS: 22mm",
            "ALTURA: 1.50 mt",
            "FORMA DE EMPAQUE: 10 unidades por color",
        ],
        brand: "Royco",
        category: "Cabos"
    },

    'royco-Cabo Aluminio Liso': {
        image: "img3/Cabo De Aluminio Liso.png",
        features: [
            "COLOR: Blanco, Negro, Azul, Rojo, Verde, Amarillo, Naranja",
            "MEDIDAS: 22mm",
            "ALTURA: 1.30 mt, 1.50 mt 1.75 mt",
            "FORMA DE EMPAQUE: 10 unidades por color",
        ],
        brand: "Royco",
        category: "Cabos"
    },


    'royco-Cabo Acero Inoxidable': {
        image: "img3/Cabo Acero Inoxidable.png",
        features: [
            "COLOR: Blanco, Negro, Azul, Rojo, Verde, Amarillo, Naranja",
            "MEDIDAS: 22mm",
            "ALTURA: 1.50 mt",
            "FORMA DE EMPAQUE: 10 unidades por color",
        ],
        brand: "Royco",
        category: "Cabos"
    },

    // ROYCO ESCOBAS BARREDORES Y ESCOBILLONES

    'royco-Escoba Plastica Italia': {
        image: "img3/Escoba Plastica Italia.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Escobillon Plastico 40 Cm': {
        image: "img3/Escobillon Plastico 40cm.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Escobillon Cordero 30 Cm': {
        image: "img3/Escobillon Cordero 30cm.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Barrendero Base Plastica 60 Cm': {
        image: "img3/Barrendero Base Plastica 60cm.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Barrendero Base Madera 80 Cm': {
        image: "img3/Barrendero Base Madera 80cm.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Barredor Profesional Domestico Completo': {
        image: "img3/Barredor Profesional Domestico Completo.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Barredor Profesional Acrilico Completo': {
        image: "img3/Barredor Profesional Acrilico Completo.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Barredor Profesional Algodon Completo': {
        image: "img3/Barredor Profesional Algodon Completo.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Armazon Profesional 45/60/80/100/120 Cm': {
        image: "img3/Armazon Profesional.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    // ROYCO SECADORES DE PISO

    'royco-Musto': {
        image: "img3/Secadores De Piso Musto.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS: 35, 50 y 75 cm.",
            ],
        brand: "Royco",
        category: "Secadores De Piso"
    },

    'royco-Aluminio Blanco': {
        image: "img3/Secadores De Piso De Aluminio Blanco.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS: 37, 52, 80 y 100 cm.",
        ],
        brand: "Royco",
        category: "Secadores De Piso"
    },

    'royco-Twister': {
        image: "img3/Secador De Piso Twister.png",
        features: [
            "COLOR: Blanco",
            "MEDIDAS: 50 cm.",
        ],
        brand: "Royco",
        category: "Secadores De Piso"
    },

    // PRODUCTOS VARIOS TRAPOS Y PAÑOS

    'productos varios-Paños Multiuso De Cocina': {
        title: "PAÑOS MULTIUSO DE COCINA",
        image: "Img4/Paños Multiuso De Cocina.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Paños Microfibra': {
        title: "PAÑOS MICROFIBRA",
        image: "img4/Paños Microfibra.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Rejilla Doble s/coche': {
        title: "REJILLA DOBLE S/DOBLE",
        image: "img4/Rejilla Doble.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Rejilla Simple De Algodon': {
        title: "REJILLA SIMPLE DE ALGODON",
        image: "img4/Rejilla Simple Algodon.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Rejilla Para Coche Grande': {
        title: "REJILLA PARA COCHE Grande",
        image: "img4/Rejilla Para Coche Grande.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Repasador Nido De Abeja': {
        title: "REPASADOR NIDO DE ABEJA",
        image: "img4/Repasador Nido De Abeja.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Rejilla Americana': {
        title: "REJILLA AMERICANA",
        image: "img4/Rejilla Americana.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Rejilla Pabilo': {
        title: "REJILLA PABILO",
        image: "img4/Rejilla Pabilo.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Trapo De Piso Star Costurado Blanco': {
        title: "TRAPO DE PISO STAR COSTURADO BLANCO",
        image: "img4/Trapo De Piso Star Blanco.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Trapo De Piso Star Costurado Gris': {
        title: "TRAPO DE PISO STAR COSTURADO GRIS",
        image: "img4/Trapo De Piso Star Gris.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Trapo De Piso Blanco Reforzado': {
        title: "TRAPO DE PISO BLANCO REFORZADO",
        image: "img4/Trapo De Piso Blanco Reforzado.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Trapo De Piso Gris Reforzado': {
        title: "TRAPO DE PISO GRIS REFORZADO",
        image: "img4/Trapo De Piso Reforzado Gris.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Franela Naranja': {
        title: "FRANELA NARANJA",
        image: "img4/Franela Naranja.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    // PRODUCTOS VARIOS varios

    'productos varios-Blem Lustramuebles En Aerosol': {
        title: "BLEM LUSTRAMUEBLES EN AEROSOL",
        image: "img4/Blen Lustramuebles.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Lustramuebles Ceramicol En Aerosol': {
        title: "LUSTRAMUEBLES CERAMICOL EN AEROSOL",
        image: "img4/Ceramicol Lustramuebles.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Desinfectante Lysoform En Aerosol': {
        title: "DESINFECTANTE LYSOFORM EN AEROSOL",
        image: "img4/Lysoform Desinfectante.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Fuyi Mata Moscas Y Mosquitos': {
        title: "FUYI MATA MOSCAS Y MOSQUITOS",
        image: "img4/Fuyi Mata Moscas Y Mosquitos.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Desodorante De Ambiente Glade': {
        title: "DESODORANTE DE AMBIENTE GLADE",
        image: "img4/Glade Desodorante De Ambiente.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Raid Mata Moscas Y Mosquitos': {
        title: "RAID MATA MOSCAS Y MOSQUITOS",
        image: "img4/Raid Mata Moscas Y Mosquitos .png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Pato Gel': {
        title: "PATO GEL",
        image: "img4/Pato Gel.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Esencia De Ambiente Feel Y Smell': {
        title: "ESENCIA DE AMBIENTE FEEL Y SMELL",
        image: "img4/Esencia De Ambiente Feel Y Smell.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Limpiador Cremoso Cif': {
        title: "LIMPIADOR CREMOSO CIF",
        image: "img4/Cif Limpiador.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Off En Aerosol': {
        title: "OFF EN AEROSOL",
        image: "img4/Off Aerosol.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Detergente Ala Lavavajillas': {
        title: "DETERGENTE ALA LAVAVAJILLAS",
        image: "img4/Ala Lavavajillas Detergente.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Limpiavidrios Cif': {
        title: "LIMPIAVIDRIOS CIF",
        image: "img4/Cif Limpia Vidrios.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Echo Listo': {
        title: "ECHO LISTO",
        image: "img4/Echo Liso.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Ceramicol Autobrillo': {
        title: "CERAMICOL AUTOBRILLO",
        image: "img4/Ceramicol Autobrillo.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Ceramicol Lampazos': {
        title: "CERAMICOL LAMPAZOS",
        image: "img4/Ceramicol Lampazos.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Alcohol Frau 500ml': {
        title: "ALCOHOL FRAU 500ML",
        image: "img4/Alcohol Frau.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Cif Gel Lavandina 2l': {
        title: "CIF GEL LAVANDINA 2L",
        image: "img4/Cif Gel Con Lavandina.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Pato Pastillas Autoadhesivas': {
        title: "PATO PASTILLAS AUTOADHESIVAS",
        image: "img4/Pato Pastillas Autoadhesivas.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Glade Pastillas': {
        title: "GLADE PASTILLAS",
        image: "img4/Glade Pastillas.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Pulverizadores 500/1000 ml': {
        title: "PULVERIZADORES 500/1000 ML",
        image: "img4/Pulverizadores.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Fibra Esponja Lisa': {
        title: "FIBRA ESPONJA LISA",
        image: "img4/Fibra Esponja Lisa.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Fibra Verde Multiuso': {
        title: "FIBRA VERDE MULTIUSO",
        image: "img4/Fibra Verde Multiuso.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Esponja De Acero Inoxidable': {
        title: "ESPONJA DE ACERO INOXIDABLE",
        image: "img4/Esponja De Acero Inoxidable.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Lana De Acero Batuque': {
        title: "LANA DE ACERO BATUQUE",
        image: "img4/Lana De Acero Batuque.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Pala Con Cabo': {
        title: "PALA CON CABO",
        image: "img4/Pala Con Cabo.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Balde 13 lt Con Mango Metalico': {
        title: "BALDE 13 LT CON MANGO METALICO",
        image: "img4/Balde 13 lt Con Mango Metalico.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Balde Plastico 10 lt': {
        title: "BALDE PLASTICO 10 LT",
        image: "img4/Balde Plastico 10 lt.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Escobilla De Baño': {
        title: "ESCOBILLA DE BAÑO",
        image: "img4/Escoba De Baño.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Plumero De Techo': {
        title: "PLUMERO DE TECHO",
        image: "img4/Plumero De Techo.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Plumero De Lana': {
        title: "PLUMERO DE LANA",
        image: "img4/Plumero De Lana.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Bolsas De Residuos': {
        title: "BOLSAS DE RESIDUOS",
        image: "img4/Bolsas De Residuos.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Guantes Moteados': {
        title: "GUANTES MOTEADOS",
        image: "img4/Guantes Moteados.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Guantes De Latex S/M/L': {
        title: "GUANTES DE LATEX S/M/L",
        image: "img4/Guantes De Latex.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Guantes De Nitrilo S/M/L': {
        title: "GUANTES DE NITRILO S/M/L",
        image: "img4/Guantes De Nitrilo.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Mopa Microfibra Blanca': {
        title: "MOPA MICROFIBRA BLANCA",
        image: "img4/Mopa Microfibra Blanca.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Mopin Algodon Blanco': {
        title: "MOPIN ALGODON BLANCO",
        image: "img4/Mopin Algodon Blanco.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Plumero Nacional': {
        title: "PLUMERO NACIONAL",
        image: "img4/Plumero Nacional.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Pasacera': {
        title: "PASACERA",
        image: "img4/Pasacera.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Sopapa': {
        title: "SOPAPA",
        image: "img4/Sopapa.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Secadores De Pisos 40/50 cm': {
        title: "SECADORES DE PISOS 40/50 CM",
        image: "img4/Secadores De Piso.png",
        description: "breve Descripción?",
        features: [
            "COLOR: Blanco",
            "MEDIDAS DE BULTO/CAJA: 224mm x 205mm x 237mm",
            "PAQUETES POR BULTO/CAJA: 6",
            "DOSIFICACIÓN: 2000",
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

};

// Variables para el slider de testimonios
let currentTestimonial = 1;
const totalTestimonials = 3;

// Variables globales
let currentFilter = { brand: 'all', category: 'all' };
let allProducts = [];

// Función para alternar categorías
function toggleCategory(categoryId) {
    const content = document.getElementById(`${categoryId}-content`);
    const arrow = document.getElementById(`${categoryId}-arrow`);
    
    // Cerrar todas las otras categorías
    const allContents = document.querySelectorAll('.category-content');
    const allArrows = document.querySelectorAll('.category-arrow');
    
    allContents.forEach((item, index) => {
        if (item.id !== `${categoryId}-content`) {
            item.classList.remove('active');
            allArrows[index].classList.remove('fa-chevron-up');
            allArrows[index].classList.add('fa-chevron-down');

            // 🧽 LIMPIAMOS sub-subcategorías internas cuando cerramos
            const sublists = item.querySelectorAll('.sub-subcategory-list.active');
            sublists.forEach(sub => sub.classList.remove('active'));
        }
    });

    // Alternar la categoría seleccionada
    content.classList.toggle('active');
    
    if (content.classList.contains('active')) {
        arrow.classList.remove('fa-chevron-down');
        arrow.classList.add('fa-chevron-up');
    } else {
        arrow.classList.remove('fa-chevron-up');
        arrow.classList.add('fa-chevron-down');

        // 🧽 LIMPIAMOS sub-subcategorías internas al cerrar ESTA
        const sublists = content.querySelectorAll('.sub-subcategory-list.active');
        sublists.forEach(sub => sub.classList.remove('active'));
    }
}

    // Toggle sub-subcategorías
function toggleSubSubcategory(event, id) {
    event.preventDefault(); // Evita scroll al top
    const el = document.getElementById(id);
    el.classList.toggle('active'); // Alterna clase 'active' que muestra la sub-subcategoría
}

    // Función para filtrar productos
    function filterProducts(brand, category) {
    currentFilter = { brand, category };
    
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productBrand = product.getAttribute('data-brand');
        const productCategory = product.getAttribute('data-category');
        
        if  (
            productBrand === brand && (
                productCategory === category || 
                productCategory.startsWith(category) // Coincide con Alto/Bajo metraje, etc.
            )
        ) {
            product.classList.remove('hidden');
            product.classList.add('filtered');
        } else {
            product.classList.add('hidden');
            product.classList.remove('filtered');
        }

        document.getElementById('productsTitle').textContent = category;
    });
 
    
// Scroll al titulo del producto cuando clickeo la categoria
const pageTitle = document.querySelector('.page-title h1');
const headerHeight = document.querySelector('header').offsetHeight;

// Función optimizada de scroll suave con easing
function smoothScrollTo(targetY, duration = 1200) {
    const startY = window.pageYOffset;
    const diff = targetY - startY;
    let startTime = null;

    // Curva de aceleración/desaceleración más agradable
    function ease(t) {
        return t * (2 - t);
    }

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const time = timestamp - startTime;
        const percent = ease(Math.min(time / duration, 1));

        window.scrollTo(0, startY + diff * percent);

        if (time < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

// Cálculo del destino
const y = pageTitle.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

// Llamado al scroll (ajusta la duración si querés más lento)
smoothScrollTo(y, 1000);
}

// Función para actualizar el título de la sección
function updateSectionTitle(brand, category) {
    const pageTitle = document.querySelector('.page-title h1');
    const brandNames = {
        'elite': 'ELITE',
        'wassington': 'WASSINGTON',
        'royco': 'ROYCO',
        'productos varios': 'PRODUCTOS VARIOS'
    };

    pageTitle.innerText = category.toUpperCase();
     
    const categoryNames = {
        'Papel Higienico': 'PAPEL HIGIÉNICO',
        'Alto Metraje': 'ALTO METRAJE',
        'Papel Higiénico Bajo Metraje': 'PAPEL HIGIÉNICO BAJO METRAJE',
        'Toallas De Papel': 'TOALLAS DE PAPEL',
        'Toallas De Papel En Rollo': 'TOALLAS DE PAPEL EN ROLLO',
        'Toallas De Papel Intercaladas': 'TOALLAS DE PAPEL INTERCALADAS',
        'Rollos Y Bobinas': 'ROLLOS Y BOBINAS',
        'Servilletas': 'SERVILLETAS',
        'Paños De Limpieza': 'PAÑOS DE LIMPIEZA',
        'Jabones Y Alcoholes': 'JABONES Y ALCOHOLES',
        'Dispensadores': 'DISPENSADORES',
        'Cuidado De Pisos': 'CUIDADO DE PISOS',
        'Cuidado De Baños': 'CUIDADO DE BAÑOS',
        'Cuidado De Cocinas': 'CUIDADO DE COCINAS',
        'Cuidado Personal': 'CUIDADO PERSONAL',
        'Limpiadores Y Desinfectantes': 'LIMPIADORES Y DESINFECTANTES',
        'Limpiavidrios Y Multiusos': 'LIMPIAVIDRIOS Y MULTIUSOS',
        'Carros, Cestos Y Contenedores': 'CARROS, CESTOS Y CONTENEDORES',
        'Equipamiento De Limpieza': 'EQUIPAMIENTO DE LIMPIEZA',
        'Equipos De Vidrio': 'EQUIPOS DE VIDRIO',
        'Cabos': 'CABOS',
        'Escobas, Barredores Y Escobillones': 'ESCOBAS, BARREDORES Y ESCOBILLONES',
        'Secadores De Piso': 'SECADORES DE PISO',
        'Trapos Y Paños': 'TRAPOS Y PAÑOS',
        'Varios': 'VARIOS',
    };
    
    pageTitle.textContent = `${brandNames[brand]} - ${categoryNames[category]}`;
}

// Función para mostrar todos los productos
function showAllProducts() {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        product.classList.remove('hidden');
        product.classList.add('filtered');
    });
    
    document.querySelector('.page-title h1').textContent = 'PRODUCTOS';
}

// Función para buscar productos
function searchProducts(searchTerm) {
    const products = document.querySelectorAll('.product-card');
    const term = searchTerm.toLowerCase();
    
    if (term === '') {
        showAllProducts();
        return;
    }
    
    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        const brand = product.getAttribute('data-brand').toLowerCase();
        const category = product.getAttribute('data-category').toLowerCase();
        
        if (title.includes(term) || brand.includes(term) || category.includes(term)) {
            product.classList.remove('hidden');
            product.classList.add('filtered');
        } else {
            product.classList.add('hidden');
            product.classList.remove('filtered');
        }
    });
    
    document.querySelector('.page-title h1').textContent = `RESULTADOS: "${searchTerm}"`;
}

// Función para mostrar información del producto
function showProductInfo(productId) {
    const product = productData[productId];
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');

    // Valores seguros (evita mostrar "undefined")
    const title = product.title ? product.title : "";
    const description = product.description ? product.description : "";

    modalBody.innerHTML = `
        <img src="${product.image}" alt="${title}" 
             style="width: 100%; max-height: 400px; object-fit: contain; border-radius: 15px; margin-bottom: 1rem; background: #fff;">

        ${title ? `<h2 style="color: #0064a2; font-size: 1.8rem; margin-bottom: 0.5rem;">${title}</h2>` : ""}

        ${description ? `<p style="color: #255668; font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">${description}</p>` : ""}

        ${product.features ? `
            <ul style="color: #255668; font-size: 1.1rem; margin-bottom: 1.5rem; padding-left: 20px; list-style: disc;">
                ${product.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        ` : ""}

        ${product.detailImage ? `
            <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                <img src="${product.detailImage}" 
                    alt="${title} detalle" 
                    style="width: 100%; max-width: 1200px; height: auto; border-radius: 15px; background: rgba(255,255,255,0.9); padding: 15px; object-fit: contain;">
            </div>
        ` : ""}

        <div style="text-align: center; margin-top: 1.5rem;">
            <a href="${product.fichaTecnica}" target="_blank"
            style="background: #0064a2; color: white; border: none; padding: 15px 25px; border-radius: 25px; font-weight: 800; cursor: pointer; margin-right: 1rem; text-decoration: none; display: inline-block;">
            FICHA TÉCNICA
            </a>
            <a href="https://api.whatsapp.com/send?phone=543412151619&text=Hola,%20quiero%20cotizar%20el%20producto"
            target="_blank"
            style="background: #0064a2; color: white; border: none; padding: 15px 25px; border-radius: 25px; font-weight: 800; cursor: pointer; text-decoration: none; display: inline-block;">
            COTIZACIÓN
            </a>
        </div>

    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0; 
}

// Función para cerrar modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Función para alternar chatbot
function toggleChat() {
    const popup = document.getElementById('chatPopup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

// Función para mostrar respuestas FAQ
function showAnswer(questionNumber) {
    const answer = document.getElementById('answer' + questionNumber);
    const allAnswers = document.querySelectorAll('.answer');
    
    allAnswers.forEach(ans => {
        if (ans !== answer) {
            ans.style.display = 'none';
        }
    });
    
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Configurar buscador
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim();
        searchProducts(searchTerm);
    });
    
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        searchProducts(searchTerm);
    });
    
    // Búsqueda con Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value.trim();
            searchProducts(searchTerm);
        }
    });
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('productModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    // Cerrar chatbot al hacer clic fuera
    document.addEventListener('click', (e) => {
        const chatbot = document.querySelector('.chatbot');
        const popup = document.getElementById('chatPopup');
        
        if (!chatbot.contains(e.target) && popup.style.display === 'block') {
            popup.style.display = 'none';
        }
    });
    
    // Animación inicial de productos
    const products = document.querySelectorAll('.product-card');
    products.forEach((product, index) => {
        setTimeout(() => {
            product.style.opacity = '1';
            product.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Inicializar productos
    allProducts = Array.from(products);
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Función para limpiar búsqueda
function clearSearch() {
    document.getElementById('searchInput').value = '';
    showAllProducts();
}

// Función para destacar texto en búsqueda
function highlightSearchTerm(text, term) {
    if (!term) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark style="background: #fef3c7; padding: 2px 4px; border-radius: 3px;">$1</mark>');
}

// Animación de entrada para productos filtrados
function animateFilteredProducts() {
    const visibleProducts = document.querySelectorAll('.product-card:not(.hidden)');
    
    visibleProducts.forEach((product, index) => {
        product.style.opacity = '0';
        product.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            product.style.transition = 'all 0.5s ease';
            product.style.opacity = '1';
            product.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Contador de productos visibles
function updateProductCount() {
    const visibleProducts = document.querySelectorAll('.product-card:not(.hidden)');
    const totalProducts = document.querySelectorAll('.product-card');
    
    console.log(`Mostrando ${visibleProducts.length} de ${totalProducts.length} productos`);
}

function highlightSelectedSubcategory(element) {
    // Remueve la clase activa previa
    document.querySelectorAll('.subcategory-list a, .sub-subcategory-list a')
        .forEach(el => el.classList.remove('active-subcategory'));

    // Marca la seleccionada
    element.classList.add('active-subcategory');
}

// Mostrar y ocultar menú lateral
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('side-menu');
const menuClose = document.getElementById('menu-close');

menuToggle.addEventListener('click', () => {
  sideMenu.classList.add('active');
});

menuClose.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});

// ===== SUBMENÚ DENTRO DEL MODAL =====
const submenuToggle = document.querySelector('.submenu-toggle');
const submenu = document.getElementById('submenu');
const submenuBack = document.querySelector('.submenu-back');

if (submenuToggle && submenu && submenuBack) {
  submenuToggle.addEventListener('click', () => {
    submenu.classList.add('active');
  });

  submenuBack.addEventListener('click', () => {
    submenu.classList.remove('active');
  });
}

function moveChatbot() {
    const chatbot = document.querySelector('.chatbot');
    const mobileContainer = document.getElementById('mobileChatContainer');

    if (window.innerWidth <= 768) {
        mobileContainer.appendChild(chatbot);
        chatbot.style.display = 'flex';
    } else {
        document.body.appendChild(chatbot);
        chatbot.style.position = 'fixed';
        chatbot.style.bottom = '30px';
        chatbot.style.right = '40px';
    }
}

window.addEventListener('resize', moveChatbot);
moveChatbot();
