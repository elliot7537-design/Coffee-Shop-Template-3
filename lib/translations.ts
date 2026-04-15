export type Locale = "es" | "en";

type Dict = {
  nav: {
    menu: string;
    story: string;
    why: string;
    visit: string;
    reserve: string;
    language: string;
  };
  hero: {
    hello: string;
    welcome: string;
    brand: string;
    brandSub: string;
    tagline: string;
    cta: string;
    ctaAlt: string;
    badge: string;
    sticker1: string;
    sticker2: string;
    sticker3: string;
    handNote: string;
  };
  recipe: {
    eyebrow: string;
    title: string;
    parts: { label: string; note: string }[];
    caption: string;
  };
  menu: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      name: string;
      desc: string;
      price: string;
      mood: string;
    }[];
    cta: string;
  };
  story: {
    eyebrow: string;
    title: string;
    intro: string;
    notes: {
      title: string;
      body: string;
    }[];
    pinned: string;
  };
  why: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
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
    cta1: string;
    cta2: string;
    mapNote: string;
  };
  footer: {
    bye: string;
    tagline: string;
    newsletter: string;
    placeholder: string;
    sub: string;
    rights: string;
    madeWith: string;
  };
};

export const translations: Record<Locale, Dict> = {
  es: {
    nav: {
      menu: "Menú",
      story: "Nuestra historia",
      why: "Por qué",
      visit: "Cómo llegar",
      reserve: "Reservar",
      language: "EN",
    },
    hero: {
      hello: "¡holaaaa!",
      welcome: "bienvenid@ a",
      brand: "Cafecito",
      brandSub: "tu rincón de café en la Roma",
      tagline:
        "Granos chiquitos, corazones grandes. Café tostado a mano en el corazón de CDMX, con pan recién salido del horno y mucha mucha plática.",
      cta: "ver el menú",
      ctaAlt: "nuestra historia",
      badge: "recién tostado",
      sticker1: "100% mexicano",
      sticker2: "abierto todos los días",
      sticker3: "pan casero",
      handNote: "léelo con café en mano ✿",
    },
    recipe: {
      eyebrow: "la receta de la casa",
      title: "así se arma un cafecito",
      parts: [
        { label: "agua de manantial", note: "de Veracruz" },
        { label: "granos de Chiapas", note: "tueste medio" },
        { label: "leche de la ranchera", note: "o de avena :)" },
        { label: "canela en polvo", note: "pizca chiquita" },
        { label: "un poco de amor", note: "ingrediente secreto" },
      ],
      caption: "(shhh, no le digas a nadie del último ingrediente)",
    },
    menu: {
      eyebrow: "la cartita",
      title: "nuestros favoritos",
      subtitle:
        "Lo hacemos todos los días — escogidos con cariño por la Doña y servidos con una sonrisa.",
      items: [
        {
          name: "Café de olla",
          desc: "con piloncillo, canela y anís. como lo hacía la abuela.",
          price: "$45",
          mood: "acurrucable",
        },
        {
          name: "Latte de cajeta",
          desc: "espresso doble, cajeta de cabra y espuma tibia.",
          price: "$62",
          mood: "dulcecito",
        },
        {
          name: "Mazapán frappé",
          desc: "café frío, mazapán y una pizca de sal.",
          price: "$72",
          mood: "refrescante",
        },
        {
          name: "Chocolate mexicano",
          desc: "cacao de Tabasco con chile pasilla y canela.",
          price: "$58",
          mood: "picosito",
        },
        {
          name: "Conchita con café",
          desc: "concha de vainilla recién hecha + cualquier cafecito.",
          price: "$85",
          mood: "el combo perfecto",
        },
        {
          name: "Agua de jamaica latte",
          desc: "jamaica, leche de coco y espresso. raro pero rico.",
          price: "$68",
          mood: "experimental",
        },
      ],
      cta: "ver la cartita completa",
    },
    story: {
      eyebrow: "nuestra historia",
      title: "empezó con una taza",
      intro:
        "Un día en 2017, Lupita y su sobrina Fer abrieron una ventanita en la Roma. Pensaron que nadie iba a venir. Ocho años después, aquí seguimos — platicando con los mismos clientes de siempre y conociendo a los nuevos.",
      notes: [
        {
          title: "la abuela Lupita",
          body: "maestra pastelera, reina de la concha, jefa oficial.",
        },
        {
          title: "Fer",
          body: "barista, tostadora, DJ de los domingos.",
        },
        {
          title: "Firuláis",
          body: "perrito oficial. duerme bajo la mesa 3.",
        },
      ],
      pinned: "foto del primer día!",
    },
    why: {
      eyebrow: "por qué cafecito",
      title: "cosas que nos importan",
      items: [
        {
          title: "café chiquito, mundo grande",
          body: "compramos directo a 8 familias productoras en Chiapas, Oaxaca y Veracruz.",
        },
        {
          title: "todo hecho aquí",
          body: "tostamos cada miércoles. el pan sale a las 6am, cuando abrimos.",
        },
        {
          title: "queremos que te quedes",
          body: "wifi rapidito, enchufes en cada mesa, y nadie te va a apurar. lo prometemos.",
        },
        {
          title: "bienvenid@s todos",
          body: "pet-friendly, peque-friendly, laptop-friendly. sólo no mal-vibes-friendly.",
        },
      ],
    },
    testimonials: {
      eyebrow: "lo que dicen",
      title: "cositas lindas",
      items: [
        {
          quote:
            "el mejor latte de cajeta de toda la ciudad. pedí uno y me quedé tres horas.",
          name: "Sofía R.",
          role: "ingeniera, CDMX",
        },
        {
          quote:
            "me enseñaron a preparar café de olla en casa. ahora soy la estrella de los desayunos familiares.",
          name: "Mateo G.",
          role: "papá de dos",
        },
        {
          quote:
            "Firuláis es la mejor parte. ah y el café también está riquísimo.",
          name: "Ana P.",
          role: "diseñadora",
        },
      ],
    },
    visit: {
      eyebrow: "cómo llegar",
      title: "ven a visitarnos",
      address: "Av. Álvaro Obregón 185, Roma Norte, CDMX",
      hours: "todos los días · 7am – 9pm",
      phone: "+52 55 4321 0987",
      cta1: "ver en el mapa",
      cta2: "reservar mesita",
      mapNote: "aquí te esperamos! →",
    },
    footer: {
      bye: "¡nos vemos pronto!",
      tagline: "un cafecito con cariño, hecho en la Roma.",
      newsletter: "te mandamos recetas los viernes",
      placeholder: "tu@correo.com",
      sub: "suscribirme",
      rights: "todos los derechos reservados",
      madeWith: "hecho con café y amor en CDMX",
    },
  },
  en: {
    nav: {
      menu: "Menu",
      story: "Our story",
      why: "Why us",
      visit: "Find us",
      reserve: "Book",
      language: "ES",
    },
    hero: {
      hello: "heyyyy!",
      welcome: "welcome to",
      brand: "Cafecito",
      brandSub: "your coffee nook in Roma, CDMX",
      tagline:
        "Tiny beans, big hearts. Hand-roasted coffee from the heart of Mexico City, bread fresh from the oven, and lots and lots of chatting.",
      cta: "see the menu",
      ctaAlt: "our story",
      badge: "freshly roasted",
      sticker1: "100% mexican",
      sticker2: "open every day",
      sticker3: "homemade bread",
      handNote: "read with coffee in hand ✿",
    },
    recipe: {
      eyebrow: "the house recipe",
      title: "how a cafecito is made",
      parts: [
        { label: "spring water", note: "from Veracruz" },
        { label: "chiapas beans", note: "medium roast" },
        { label: "farm-fresh milk", note: "or oat :)" },
        { label: "a pinch of cinnamon", note: "just a tiny one" },
        { label: "a little love", note: "secret ingredient" },
      ],
      caption: "(shhh, don't tell anyone about the last ingredient)",
    },
    menu: {
      eyebrow: "the little menu",
      title: "our favorites",
      subtitle:
        "Made fresh every day — picked with love by la Doña and served with a smile.",
      items: [
        {
          name: "Café de olla",
          desc: "with piloncillo, cinnamon & anise. like abuela used to make.",
          price: "$45",
          mood: "cozy",
        },
        {
          name: "Cajeta latte",
          desc: "double espresso, goat-milk caramel, warm foam.",
          price: "$62",
          mood: "sweet lil thing",
        },
        {
          name: "Mazapán frappé",
          desc: "iced coffee, mazapán candy, tiny pinch of salt.",
          price: "$72",
          mood: "refreshing",
        },
        {
          name: "Mexican chocolate",
          desc: "Tabasco cocoa, pasilla chili, a stick of cinnamon.",
          price: "$58",
          mood: "a lil spicy",
        },
        {
          name: "Concha with coffee",
          desc: "fresh vanilla concha + any coffee of your choice.",
          price: "$85",
          mood: "perfect combo",
        },
        {
          name: "Hibiscus latte",
          desc: "hibiscus, coconut milk and espresso. weird but good.",
          price: "$68",
          mood: "experimental",
        },
      ],
      cta: "see the full menu",
    },
    story: {
      eyebrow: "our story",
      title: "it started with a cup",
      intro:
        "One day in 2017, Lupita and her niece Fer opened a tiny window in Roma. They thought nobody would come. Eight years later, we're still here — chatting with the same regulars and meeting new friends every day.",
      notes: [
        {
          title: "grandma Lupita",
          body: "pastry master, concha queen, official boss.",
        },
        {
          title: "Fer",
          body: "barista, roaster, Sunday morning DJ.",
        },
        {
          title: "Firuláis",
          body: "official pup. sleeps under table 3.",
        },
      ],
      pinned: "photo from opening day!",
    },
    why: {
      eyebrow: "why cafecito",
      title: "things that matter to us",
      items: [
        {
          title: "little coffee, big world",
          body: "we buy direct from 8 growing families in Chiapas, Oaxaca and Veracruz.",
        },
        {
          title: "everything made here",
          body: "we roast every wednesday. bread comes out at 6am, right when we open.",
        },
        {
          title: "we want you to stay",
          body: "speedy wifi, outlets at every table, and nobody will rush you. promise.",
        },
        {
          title: "everyone's welcome",
          body: "pet-friendly, kid-friendly, laptop-friendly. just not bad-vibes-friendly.",
        },
      ],
    },
    testimonials: {
      eyebrow: "what folks say",
      title: "sweet lil words",
      items: [
        {
          quote:
            "the best cajeta latte in the whole city. I ordered one and stayed three hours.",
          name: "Sofía R.",
          role: "engineer, CDMX",
        },
        {
          quote:
            "they taught me how to make café de olla at home. now I'm the breakfast star.",
          name: "Mateo G.",
          role: "dad of two",
        },
        {
          quote:
            "Firuláis is the best part. oh, and the coffee is also delicious.",
          name: "Ana P.",
          role: "designer",
        },
      ],
    },
    visit: {
      eyebrow: "find us",
      title: "come say hi",
      address: "Av. Álvaro Obregón 185, Roma Norte, CDMX",
      hours: "every day · 7am – 9pm",
      phone: "+52 55 4321 0987",
      cta1: "see on the map",
      cta2: "book a tiny table",
      mapNote: "we're right here! →",
    },
    footer: {
      bye: "see you soon!",
      tagline: "a cafecito made with love in Roma.",
      newsletter: "we send recipes on fridays",
      placeholder: "you@email.com",
      sub: "subscribe",
      rights: "all rights reserved",
      madeWith: "made with coffee and love in CDMX",
    },
  },
};

export type TranslationKeys = Dict;
