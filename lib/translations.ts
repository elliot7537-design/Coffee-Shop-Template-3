export type Locale = "es" | "en";

type Dict = {
  nav: {
    home: string;
    story: string;
    menu: string;
    experience: string;
    visit: string;
    reserve: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    marquee: string[];
  };
  story: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    feature1Title: string;
    feature1Body: string;
    feature2Title: string;
    feature2Body: string;
    feature3Title: string;
    feature3Body: string;
    feature4Title: string;
    feature4Body: string;
  };
  menu: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      name: string;
      region: string;
      notes: string;
      price: string;
      weight: string;
      tag: string;
    }[];
    cta: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: { title: string; body: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; name: string; role: string }[];
  };
  visit: {
    eyebrow: string;
    title: string;
    address: string;
    hours: string;
    phone: string;
    ctaDirections: string;
    ctaReserve: string;
  };
  footer: {
    tagline: string;
    explore: string;
    contact: string;
    follow: string;
    newsletter: string;
    placeholder: string;
    subscribe: string;
    rights: string;
  };
};

export const translations: Record<Locale, Dict> = {
  es: {
    nav: {
      home: "Inicio",
      story: "Historia",
      menu: "Menú",
      experience: "Experiencia",
      visit: "Visítanos",
      reserve: "Reservar",
      language: "EN",
    },
    hero: {
      eyebrow: "Tostado en la Ciudad de México",
      line1: "Café de",
      line2: "Nuestra",
      line3: "Tierra",
      description:
        "Granos seleccionados a mano en las sierras de Chiapas, Oaxaca y Veracruz. Tostados lento, servidos con cariño.",
      ctaPrimary: "Ver el menú",
      ctaSecondary: "Nuestra historia",
      stat1Value: "100%",
      stat1Label: "Granos mexicanos",
      stat2Value: "12+",
      stat2Label: "Años tostando",
      stat3Value: "3",
      stat3Label: "Regiones de origen",
      marquee: [
        "café de especialidad",
        "tostado artesanal",
        "hecho en méxico",
        "comercio justo",
        "granos de altura",
      ],
    },
    story: {
      eyebrow: "Nuestra historia",
      title: "Desde la milpa hasta tu taza",
      paragraph1:
        "Fundado en 2012 por Doña Lupita y su hijo Mateo, Café del Sol nació con un sueño: honrar a los productores de café de México y compartir su trabajo con el mundo.",
      paragraph2:
        "Cada grano que servimos viaja menos de 600 kilómetros. Conocemos a las familias que los cultivan, los caminos de tierra y el aroma a leña de sus cocinas.",
      feature1Title: "Cultivado en altura",
      feature1Body:
        "Fincas entre 1,200 y 1,800 metros sobre el nivel del mar, en sombra de árboles nativos.",
      feature2Title: "Tostado lento",
      feature2Body:
        "Perfiles de tueste diseñados grano por grano, en nuestro tostador de hierro en la Roma Norte.",
      feature3Title: "Comercio directo",
      feature3Body:
        "Pagamos hasta tres veces el precio de mercado a nuestras familias productoras.",
      feature4Title: "Sin prisa",
      feature4Body:
        "Métodos de extracción manuales. El espresso tarda 28 segundos. La charla, un poquito más.",
    },
    menu: {
      eyebrow: "Nuestros blends",
      title: "Sabores de tres sierras",
      subtitle:
        "Cada uno cuenta una historia distinta — escoge el que tu mañana pida.",
      items: [
        {
          name: "Chiapas Alto",
          region: "Sierra Madre, Chiapas",
          notes: "Cacao, nuez moscada, naranja",
          price: "$180",
          weight: "250g",
          tag: "Suave",
        },
        {
          name: "Oaxaca Pluma",
          region: "Sierra Sur, Oaxaca",
          notes: "Chocolate oscuro, caramelo, tabaco",
          price: "$210",
          weight: "250g",
          tag: "Intenso",
        },
        {
          name: "Veracruz Coatepec",
          region: "Coatepec, Veracruz",
          notes: "Miel, manzana, flor de jamaica",
          price: "$195",
          weight: "250g",
          tag: "Afrutado",
        },
      ],
      cta: "Ver carta completa",
    },
    experience: {
      eyebrow: "La experiencia",
      title: "Más que una cafetería",
      subtitle:
        "Un espacio donde el café, el arte popular y la sobremesa se encuentran.",
      cards: [
        {
          title: "Catas abiertas",
          body: "Cada sábado a las 10am. Descubre los perfiles de cada región, gratis.",
        },
        {
          title: "Talleres de barismo",
          body: "Aprende a preparar un espresso perfecto con nuestros maestros baristas.",
        },
        {
          title: "Mercado de productores",
          body: "El último domingo del mes, conoce a las familias que cultivan tu café.",
        },
        {
          title: "Sobremesa larga",
          body: "Wi-Fi, enchufes y sillones. Quédate el tiempo que necesites.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Lo que dicen",
      title: "Voces de la casa",
      items: [
        {
          quote:
            "El mejor café de la Roma. La gente, el ambiente, y ese latte con canela... me enamoré.",
          name: "Valeria Mendoza",
          role: "Regular, CDMX",
        },
        {
          quote:
            "Visité en mi primer viaje a México y volví tres veces la misma semana. Auténtico y acogedor.",
          name: "James O'Connor",
          role: "Visitante, Dublín",
        },
        {
          quote:
            "Me encanta que conozcan de dónde viene cada grano. Eso se prueba en cada sorbo.",
          name: "Carlos Iturbe",
          role: "Chef, Polanco",
        },
      ],
    },
    visit: {
      eyebrow: "Visítanos",
      title: "Te esperamos en la Roma",
      address: "Calle Orizaba 142, Roma Norte, CDMX",
      hours: "Lun – Dom · 7:00am – 9:00pm",
      phone: "+52 55 1234 5678",
      ctaDirections: "Cómo llegar",
      ctaReserve: "Reservar mesa",
    },
    footer: {
      tagline: "Hecho con café y cariño en la Ciudad de México.",
      explore: "Explora",
      contact: "Contacto",
      follow: "Síguenos",
      newsletter: "Recibe nuestras catas",
      placeholder: "tu@correo.com",
      subscribe: "Suscribirse",
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      home: "Home",
      story: "Story",
      menu: "Menu",
      experience: "Experience",
      visit: "Visit",
      reserve: "Reserve",
      language: "ES",
    },
    hero: {
      eyebrow: "Roasted in Mexico City",
      line1: "Coffee from",
      line2: "Our",
      line3: "Land",
      description:
        "Beans hand-picked in the highlands of Chiapas, Oaxaca and Veracruz. Slow-roasted, served with heart.",
      ctaPrimary: "See the menu",
      ctaSecondary: "Our story",
      stat1Value: "100%",
      stat1Label: "Mexican beans",
      stat2Value: "12+",
      stat2Label: "Years roasting",
      stat3Value: "3",
      stat3Label: "Origin regions",
      marquee: [
        "specialty coffee",
        "artisan roasted",
        "made in mexico",
        "fair trade",
        "highland beans",
      ],
    },
    story: {
      eyebrow: "Our story",
      title: "From the milpa to your cup",
      paragraph1:
        "Founded in 2012 by Doña Lupita and her son Mateo, Café del Sol was born from one dream: to honor Mexican coffee growers and share their craft with the world.",
      paragraph2:
        "Every bean we serve travels less than 600 kilometers. We know the families who grow it, the dirt roads and the woodsmoke of their kitchens.",
      feature1Title: "Grown at altitude",
      feature1Body:
        "Farms between 1,200 and 1,800 meters above sea level, shaded by native trees.",
      feature2Title: "Slow roasted",
      feature2Body:
        "Roast profiles designed bean by bean, on our cast-iron roaster in Roma Norte.",
      feature3Title: "Direct trade",
      feature3Body:
        "We pay up to three times market price to our producing families.",
      feature4Title: "No rush",
      feature4Body:
        "Hand-brewed methods. Espresso takes 28 seconds. Conversation, a little longer.",
    },
    menu: {
      eyebrow: "Our blends",
      title: "Flavors of three sierras",
      subtitle:
        "Each one tells a different story — pick the one your morning is asking for.",
      items: [
        {
          name: "Chiapas Alto",
          region: "Sierra Madre, Chiapas",
          notes: "Cocoa, nutmeg, orange",
          price: "$180",
          weight: "250g",
          tag: "Smooth",
        },
        {
          name: "Oaxaca Pluma",
          region: "Sierra Sur, Oaxaca",
          notes: "Dark chocolate, caramel, tobacco",
          price: "$210",
          weight: "250g",
          tag: "Bold",
        },
        {
          name: "Veracruz Coatepec",
          region: "Coatepec, Veracruz",
          notes: "Honey, apple, hibiscus",
          price: "$195",
          weight: "250g",
          tag: "Fruity",
        },
      ],
      cta: "See full menu",
    },
    experience: {
      eyebrow: "The experience",
      title: "More than a coffee shop",
      subtitle:
        "A place where coffee, folk art, and lingering conversation meet.",
      cards: [
        {
          title: "Open cuppings",
          body: "Every Saturday at 10am. Discover the profile of each region — free of charge.",
        },
        {
          title: "Barista workshops",
          body: "Learn how to pull a perfect espresso with our master baristas.",
        },
        {
          title: "Farmers market",
          body: "Last Sunday of the month — meet the families who grow your coffee.",
        },
        {
          title: "Long sobremesa",
          body: "Wi-Fi, outlets, and cozy sofas. Stay as long as you need.",
        },
      ],
    },
    testimonials: {
      eyebrow: "What folks say",
      title: "Voices of the house",
      items: [
        {
          quote:
            "The best coffee in Roma. The people, the vibe, and that cinnamon latte... I fell in love.",
          name: "Valeria Mendoza",
          role: "Regular, CDMX",
        },
        {
          quote:
            "I visited on my first trip to Mexico and came back three times the same week. Authentic and warm.",
          name: "James O'Connor",
          role: "Visitor, Dublin",
        },
        {
          quote:
            "I love that they know where each bean comes from. You can taste it in every sip.",
          name: "Carlos Iturbe",
          role: "Chef, Polanco",
        },
      ],
    },
    visit: {
      eyebrow: "Visit us",
      title: "We'll be waiting in Roma",
      address: "Calle Orizaba 142, Roma Norte, CDMX",
      hours: "Mon – Sun · 7:00am – 9:00pm",
      phone: "+52 55 1234 5678",
      ctaDirections: "Get directions",
      ctaReserve: "Book a table",
    },
    footer: {
      tagline: "Made with coffee and care in Mexico City.",
      explore: "Explore",
      contact: "Contact",
      follow: "Follow",
      newsletter: "Get our tasting notes",
      placeholder: "you@email.com",
      subscribe: "Subscribe",
      rights: "All rights reserved",
    },
  },
};

export type TranslationKeys = Dict;
