import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: {
      welcome: "What is your preferred language?",
      welcomeArray: ["English", "French", "German", "Spanish"],
      gender: {
        title: "What gender do you identify with?",
        subtitle: "Please share how do you identify yourself",

        option: ["Female", "Male", "Other"],
      },
      age: {
        title: "What is your age?",
        option: ["18-29 years", "30-39 years", "40-49 years", "50+"],
      },
      hate: {
        title: "What do you hate the most in a book?",
        option: [
          "Lack of logic",
          "A slow speed",
          "Lack of Humor",
          "Way too generic ending",
        ],
      },
      topics: {
        title: "What are your favorite topics?",
        subtitle: "Choose up to 3 topics you like",
        option: [
          "Werewolf",
          "Action",
          "Royal Obsession",
          "Billionaire",
          "Romance",
          "Young Adult",
          "Bad Boy",
        ],
        optionForOver40: [
          "Science Fiction",
          "Fantasy",
          "Biography",
          "Self-Help",
          "Classics",
          "Thriller",
          "Non-Fiction",
        ],
      },
      email: {
        title: "Email",
        subtitle: "Enter your email to get full access",
        placeholder: "Your email",
        errorNotCorrect: "not correct email",
        errorEmptyField: "Field not correct",
        agree: {
          continue: "By continuing I agree with",
          privacyPolicy: "Privacy policy",
          and: "and",
          termsOfUse: "Terms of use",
        },
      },
      thanks: {
        title: "Thank you",
        description: "for supporting us and passing quiz",
        downloadText: "Download my answers",
        retake: "Retake quiz",
      },
      buttonNext: "Next",
      loading: "Finding collections for you...",
      questionLanguagePdf: "What is your preferred language?",
    },
  },
  fr: {
    translation: {
      welcome: "What is your preferred language?",
      gender: {
        title: "Avec quel genre vous identifiez-vous ?",
        subtitle: "Merci de nous indiquer comment vous vous identifiez",

        option: ["Femme ", "Homme ", "Autre"],
      },
      age: {
        title: "Quel est votre âge ?",
        option: ["18-29 Années ", "30-39 Années", "40-49 Années", "50+"],
      },
      hate: {
        title: "Qu'est-ce que vous détestez le plus dans un livre ?",
        option: [
          "Manque de logique",
          "Vitesse lente",
          "Manque d'humour",
          "Fin beaucoup trop générique",
        ],
      },
      topics: {
        title: "Quels sont vos sujets préférés ?",
        subtitle: "Choisissez jusqu'à 3 sujets que vous aimez",

        option: [
          "Loup-garou",
          "Action",
          "Obsession royale",
          "Milliardaire",
          "Romance",
          "Jeune adulte",
          "Mauvais garçon",
        ],
        optionForOver40: [
          "Science-fiction",
          "Fantaisie",
          "Biographie",
          "Développement personnel",
          "Classiques",
          "Thriller",
          "Non-fiction",
        ],
      },
      email: {
        title: "Email",
        subtitle: "Entrez votre email pour obtenir un accès complet",
        placeholder: "Votre email",
        errorNotCorrect: "email incorrect",
        errorEmptyField: "Champ incorrect",
        agree: {
          continue: "En continuant, j'accepte la",
          privacyPolicy: "politique de confidentialité",
          and: "et les",
          termsOfUse: "conditions d'utilisation",
        },
      },
      thanks: {
        title: "Merci",
        description: "pour votre soutien et pour avoir passé le quiz",
        downloadText: "Télécharger mes réponses",
        retake: "Reprendre le quiz",
      },
      buttonNext: "Suivant",
      loading: "Nous trouvons des collections pour vous...",
      questionLanguagePdf: "Quelle est votre langue préférée ?",
    },
  },
  de: {
    translation: {
      welcome: "What is your preferred language?",
      gender: {
        title: "Mit welchem Geschlecht identifizieren Sie sich?",
        subtitle: "Bitte teilen Sie uns mit, wie Sie sich identifizieren",

        option: ["Frau", "Mann", "Divers "],
      },
      age: {
        title: "Wie alt sind Sie?",
        option: ["18-29 Jahre ", "30-39 Jahre ", "40-49 Jahre", "50+"],
      },
      hate: {
        title: "Was hassen Sie am meisten an einem Buch?",
        option: [
          "Mangel an Logik",
          "Langsame Geschwindigkeit",
          "Mangel an Humor",
          "Viel zu generisches Ende",
        ],
      },
      topics: {
        title: "Was sind Ihre Lieblingsthemen?",
        subtitle: "Wählen Sie bis zu 3 Themen aus, die Ihnen gefallen",

        option: [
          "Werwolf",
          "Action",
          "Königliche Besessenheit",
          "Milliardär",
          "Romantik",
          "Junge Erwachsene",
          "Böser Junge",
        ],
        optionForOver40: [
          "Science-Fiction",
          "Fantasy",
          "Biografie",
          "Selbsthilfe",
          "Klassiker",
          "Thriller",
          "Sachbuch",
        ],
      },
      email: {
        title: "Email",
        subtitle: "Geben Sie Ihre E-Mail ein, um vollen Zugriff zu erhalten",
        placeholder: "Ihre E-Mail",
        errorNotCorrect: "falsche E-Mail",
        errorEmptyField: "Feld nicht korrekt",
        agree: {
          continue: "Mit der Fortsetzung stimme ich der",
          privacyPolicy: "Datenschutzrichtlinie",
          and: "und den",
          termsOfUse: "Nutzungsbedingungen",
        },
      },
      thanks: {
        title: "Danke",
        description: "für Ihre Unterstützung und das Ausfüllen des Quiz",
        downloadText: "Meine Antworten herunterladen",
        retake: "Quiz erneut machen",
      },
      buttonNext: "Weiter",
      loading: "Wir finden Kollektionen für Sie...",
      questionLanguagePdf: "Was ist Ihre bevorzugte Sprache?",
    },
  },
  es: {
    translation: {
      welcome: "What is your preferred language?",
      gender: {
        title: "¿Con qué género te identificas?",
        subtitle: "Por favor, comparte cómo te identificas",
        option: ["Mujer", "Hombre", "Otro"],
      },
      age: {
        title: "¿Cuál es tu edad?",
        option: ["18-29 Años", "30-39 Años", "40-49 Años", "50+"],
      },
      hate: {
        title: "¿Qué es lo que más odias en un libro?",
        option: [
          "Falta de lógica",
          "Velocidad lenta",
          "Falta de humor",
          "Final demasiado genérico",
        ],
      },
      topics: {
        title: "¿Cuáles son tus temas favoritos?",
        subtitle: "Elige hasta 3 temas que te gusten",

        option: [
          "Hombre lobo",
          "Acción",
          "Obsesión real",
          "Multimillonario",
          "Romance",
          "Joven adulto",
          "Chico malo",
        ],
        optionForOver40: [
          "Ciencia ficción",
          "Fantasía",
          "Biografía",
          "Autoayuda",
          "Clásicos",
          "Suspense",
          "No ficción",
        ],
      },
      email: {
        title: "Email",
        subtitle:
          "Introduce tu correo electrónico para obtener acceso completo",
        placeholder: "Tu correo electrónico",

        errorNotCorrect: "correo electrónico incorrecto",
        errorEmptyField: "Campo no correcto",
        agree: {
          continue: "Al continuar, acepto la",
          privacyPolicy: "política de privacidad",
          and: "y los",
          termsOfUse: "términos de uso",
        },
      },
      thanks: {
        title: "Gracias",
        description: "por apoyarnos y realizar el cuestionario",
        downloadText: "Descargar mis respuestas",
        retake: "Volver a hacer el cuestionario",
      },
      buttonNext: "Siguiente",
      loading: "Encontrando colecciones para ti...",
      questionLanguagePdf: "¿Cuál es tu idioma preferido?",
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
