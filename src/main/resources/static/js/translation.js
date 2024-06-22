document.addEventListener("DOMContentLoaded", (event) => {
    const translations = {
        pt: {
            navHome: "Início",
            navServ: "Serviços",
            navHowItWork: "Como funciona?",
            navDocs: "Documentos",
            navContact: "Contrato",
            navAdm: "Administrador",
            navClients: "Clientes",
            navProcesses: "Processos",
            navPayments: "Pagamentos",
            navOptionPt: "Português",
            navOptionEn: "Inglês",
            navOptionEs: "Espanhol",
            title: "Se você busca o processo de naturalização, a <span>WELCOME2BRAZIL</span> é a escolha certa!",
            subtitle: "Focados em prestar o melhor serviço com expertise profissional",
            cardsHeader: "Conheça nossos serviços!",
            cardHeaderNB: "Naturalização Brasileira",
            cardTextNB: "Naturalização é quando um residente permanente decide se tornar brasileiro, obtendo os mesmos direitos e deveres que os cidadãos brasileiros de acordo com as leis do país.",
            cardHeaderRNM: "Registro Nacional Migratório",
            cardTextRNM: "O Registro Nacional Migratório (RNM) é um documento emitido pela Polícia Federal do Brasil para estrangeiros que querem viver no país. Ele contém informações como tipo de visto e datas importantes.",
            cardHeaderVistos: "Vistos",
            cardTextVistos: "Pedir visto é importante para quem quer vir ao Brasil. Nós processamos pedidos de visto para visitas temporárias ou permanentes, garantindo um procedimento seguro e personalizado.",
            cardHeaderPB: "Passaporte Brasileiro",
            cardTextPB: "O passaporte brasileiro é um documento oficial emitido pelo governo do Brasil, que atesta a identidade e nacionalidade do seu portador, permitindo viagens internacionais e servindo como prova de identidade.",
            loginLink: "Entrar"
        },
        en: {
            navHome: "Home",
            navServ: "Services",
            navHowItWork: "How it works?",
            navDocs: "Documents",
            navContact: "Contract",
            navAdm: "Administrator",
            navClients: "Clients",
            navProcesses: "Processes",
            navPayments: "Payments",
            navOptionPt: "Portuguese",
            navOptionEn: "English",
            navOptionEs: "Spanish",
            title: "If you are looking for the naturalization process, <span>WELCOME2BRAZIL</span> is the right choice!",
            subtitle: "Focused on providing the best service with professional experience",
            cardsHeader: "Get to know our services!",
            cardHeaderNB: "Brazilian Naturalization",
            cardTextNB: "Naturalization is when a permanent resident decides to become Brazilian, obtaining the same rights and duties as Brazilian citizens according to the country's laws.",
            cardHeaderRNM: "National Migration Registry",
            cardTextRNM: "The National Migration Registry (RNM) is a document issued by the Brazilian Federal Police for foreigners who want to live in the country. It contains information such as visa type and important dates.",
            cardHeaderVistos: "Visas",
            cardTextVistos: "Applying for a visa is important for those who want to come to Brazil. We process visa applications for temporary or permanent visits, ensuring a safe and personalized procedure.",
            cardHeaderPB: "Brazilian Passport",
            cardTextPB: "The Brazilian passport is an official document issued by the Brazilian government, which certifies the identity and nationality of its holder, allowing international travel and serving as proof of identity.",
			loginLink: "Login"            
        },
        es: {
            navHome: "Inicio",
            navServ: "Servicios",
            navHowItWork: "¿Cómo funciona?",
            navDocs: "Documentos",
            navContact: "Contrato",
            navAdm: "Administrador",
            navClients: "Clientes",
            navProcesses: "Procesos",
            navPayments: "Pagos",
            navOptionPt: "Portugués",
            navOptionEn: "Inglés",
            navOptionEs: "Español",
            title: "Si está buscando el proceso de naturalización, <span>¡WELCOME2BRAZIL</span> es la elección correcta!",
            subtitle: "Enfocados en brindar el mejor servicio con experiencia profesional.",
            cardsHeader: "¡Conozca nuestros servicios!",
            cardHeaderNB: "Naturalización Brasileña",
            cardTextNB: "La naturalización es cuando un residente permanente decide convertirse en brasileño, obteniendo los mismos derechos y deberes que los ciudadanos brasileños de acuerdo con las leyes del país.",
            cardHeaderRNM: "Registro Nacional de Migración",
            cardTextRNM: "El Registro Nacional de Migración (RNM) es un documento emitido por la Policía Federal de Brasil para extranjeros que quieren vivir en el país. Contiene información como el tipo de visa y fechas importantes.",
            cardHeaderVistos: "Visas",
            cardTextVistos: "Solicitar una visa es importante para quienes quieren venir a Brasil. Procesamos solicitudes de visa para visitas temporales o permanentes, garantizando un procedimiento seguro y personalizado.",
            cardHeaderPB: "Pasaporte Brasileño",
            cardTextPB: "El pasaporte brasileño es un documento oficial emitido por el gobierno de Brasil, que certifica la identidad y nacionalidad de su portador, permitiendo viajes internacionales y sirviendo como prueba de identidad.",
            loginLink: "Entrar"
        }
    }

    const languageSelected = document.querySelector("#select");
    let homeHeader = document.getElementById("homeHeader");
    let homeSub = document.getElementById("homeSub");
    const navElements = {
        navHome: document.getElementById("navHome"),
        navHowItWork: document.getElementById("navHowItWork"),
        navDocs: document.getElementById("navDocs"),
        navContact: document.getElementById("navContact"),
        navAdm: document.getElementById("navAdm"),
        navClients: document.getElementById("navClients"),
        navProcesses: document.getElementById("navProcesses"),
        navPayments: document.getElementById("navPayments"),
        loginLink: document.getElementById("loginLink")
    };
    const cardElements = {
        cardsHeader: document.getElementById("cardsHeader"),
        cardHeaderNB: document.getElementById("cardHeaderNB"),
        cardTextNB: document.getElementById("cardTextNB"),
        cardHeaderRNM: document.getElementById("cardHeaderRNM"),
        cardTextRNM: document.getElementById("cardTextRNM"),
        cardHeaderVistos: document.getElementById("cardHeaderVistos"),
        cardTextVistos: document.getElementById("cardTextVistos"),
        cardHeaderPB: document.getElementById("cardHeaderPB"),
        cardTextPB: document.getElementById("cardTextPB")
    };

    const setLanguage = (language) => {
        if (translations[language]) {
            navElements.navHome.innerHTML = translations[language].navHome;
            navElements.navHowItWork.innerHTML = translations[language].navHowItWork;
            navElements.navDocs.innerHTML = translations[language].navDocs;
            navElements.navContact.innerHTML = translations[language].navContact;
            navElements.navAdm.innerHTML = translations[language].navAdm;
            navElements.navClients.innerHTML = translations[language].navClients;
            navElements.navProcesses.innerHTML = translations[language].navProcesses;
            navElements.navPayments.innerHTML = translations[language].navPayments;
            
            homeHeader.innerHTML = translations[language].title;
            homeSub.innerHTML = translations[language].subtitle;
            loginLink.innerHTML = translations[language].loginLink;

            cardElements.cardsHeader.innerHTML = translations[language].cardsHeader;
            cardElements.cardHeaderNB.innerHTML = translations[language].cardHeaderNB;
            cardElements.cardTextNB.innerHTML = translations[language].cardTextNB;
            cardElements.cardHeaderRNM.innerHTML = translations[language].cardHeaderRNM;
            cardElements.cardTextRNM.innerHTML = translations[language].cardTextRNM;
            cardElements.cardHeaderVistos.innerHTML = translations[language].cardHeaderVistos;
            cardElements.cardTextVistos.innerHTML = translations[language].cardTextVistos;
            cardElements.cardHeaderPB.innerHTML = translations[language].cardHeaderPB;
            cardElements.cardTextPB.innerHTML = translations[language].cardTextPB;

            localStorage.setItem('selectedLanguage', language); // Salva a linguagem selecionada no localStorage
        } else {
            console.log("Language not supported");
        }
    }

    languageSelected.addEventListener("change", (event) => {
        setLanguage(event.target.value);
    });

    
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        languageSelected.value = savedLanguage;
        setLanguage(savedLanguage); 
    }
});