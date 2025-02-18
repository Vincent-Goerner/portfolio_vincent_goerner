import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TranslationService {
  selectedLanguage: string = '';
  translate = {
    en: {
      HEADER: {
        ABOUT: 'About me',
        SKILLS: 'Skills',
        PROJECTS: 'Projects'
      },
      ATF: {
        H2: 'Frontend Developer',
        H1: 'Vincent Görner',
        WORK: 'Check my work',
        CONTACT: 'Contact me',
        MARQUEE1: 'Available for remote work',
        MARQUEE2: 'Frontend Developer',
        MARQUEE3: 'Based in Dresden',
        MARQUEE4: 'Open for learning'
      },
      ABOUTME: {
        H3: 'Who I Am',
        H1: 'About me',
        TEXT1: 'Hi, i`m a german speaking Fullstack Developer based in Dresden. Motivated by the limitless opportunities within IT. I am excited about crafting visually captivating and intuitive websites and applications.',
        TEXT2: 'Flexible in terms of working environments, i can work effectively both on-site in Dresden and remotely.',
        TEXT3: 'I am open-minded and always looking for personal challanges to constantly improve my knownledge and skills.',
        TEXT4: 'In my profession, programming isn`t just about wiriting code; it`s a creative form of problem-solving, i take pride in my ability to distill complex technical challanges into simple, user-friendly solutions. This way, i help you achieve your goals and bring your visions to life.'
      },
      SKILLS: {
        H3: 'Technologies',
        H1: 'Skill Set',
        TEXT1: 'My journey has involved working on diverse projects, employing a range of frontend technologies and concepts. I am open to embracing new technologies and methologies to Continously enhance my skills and stay ahead in the ever-evolving landscape of web development.',
        H2CLASS: 'You need',
        H2: 'another skill?',
        TEXT2: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
        BTN: 'Let`s Talk',
        MINDSET: 'Growth mindset',
        INTREST: 'I have a special intrest in learing'
      },
      PROJECTS: {
        H3: 'Portfolio',
        H1: 'Featured Projects',
        TEXT1: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
        H2: 'What is this project about?',
        BTN: 'Next project'
      },
      REFERENCES: {
        H2: 'What my colleagues say about me',
        REF1: 'Vincent is brimming with creativity and always has clever ideas. He is very committed and finds a solution for every problem. With him in the team, things just run smoothly!',
        REF2: 'Our project benefited enormously from Vincent efficient way of working.',
        REF3: 'Working with Vincent was really good and effectily. His knowledge is impressiv and his kind to think always useful.'
      },
      CONTACTME: {
        H3: 'Contact me',
        H1: 'Let`s work togther',
        H2: 'Got a problem to solve?',
        TEXT1: 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
        TEXT2: 'Need a Frontend developer?',
        TEXT3: 'Let`s talk!',
        NAMELABEL: 'What`s your name?',
        NAME: 'Your name goes here',
        EMAILLABEL: 'What`s your email?',
        EMAIL: 'youremail@email.com',
        TEXTLABEL: 'How can I help you?',
        TEXTFIELD: 'Hello Vincent, I am intrested in...',
        POLICY1: 'I`ve read the',
        POLICY2: 'privacy policy',
        POLICY3: 'and agree to the processing of my dara as outlined.',
        BTN: 'Say Hello ;)'
      },
      FOOTER: {
        TEXT1: 'Web Developer',
        TEXT2: 'Dresden Germany',
        LINK: 'Legal Notice',
      }
    },

    de: {
      HEADER: {
        ABOUT: 'Über mich',
        SKILLS: 'Fähigkeiten',
        PROJECTS: 'Projekte'
      },
      ATF: {
        H2: 'Frontend-Entwickler',
        H1: 'Vincent Görner',
        WORK: 'Meine Projekte',
        CONTACT: 'Konatkt',
        MARQUEE1: 'Verfügbar für Home Office',
        MARQUEE2: 'Frontend Developer',
        MARQUEE3: 'Wohnhaft in Radeberg',
        MARQUEE4: 'Offen für Weiterentwicklung'
      },
      ABOUTME: {
        H3: 'Wer bin ich',
        H1: 'Über mich',
        TEXT1: 'Hallo, ich bin ein deutschsprachiger Frontend-Entwickler, wohnhaft in Radeberg. Motiviert durch die grenzenlosen Möglichkeiten innerhalb der IT. Es begeistert mich, visuell fesselnde und intuitive Websites und Anwendungen zu erstellen.',
        TEXT2: 'Momentan Arbeite ich bei B|Braun im der Qualitätsmanagment und stelle sicher das Prozesse stabil und innerhalb der Parameter laufen.',
        TEXT3: 'Ich bin aufgeschlossen und immer auf der Suche nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten stetig zu verbessern.',
        TEXT4: 'In meinem Beruf geht es beim Programmieren nicht nur darum, Code zu schreiben; Es ist eine kreative Form der Problemlösung. Ich bin stolz auf meine Fähigkeit, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu übersetzen. Auf diese Weise helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.'
      },
      SKILLS: {
        H3: 'Technologien',
        H1: 'Fähigkeiten',
        TEXT1: 'Meine Reise umfasste die Arbeit an verschiedenen Projekten und den Einsatz verschiedener Frontend-Technologien und -Konzepte. Ich bin offen für die Nutzung neuer Technologien und Methoden, um meine Fähigkeiten kontinuierlich zu verbessern und in der sich ständig weiterentwickelnden Landschaft der Webentwicklung an der Spitze zu bleiben.',
        H2CLASS: 'Sie benötigen',
        H2: 'andere Fertigkeiten?',
        TEXT2: 'Kontaktieren Sie mich gerne. Ich freue mich darauf, mein bisheriges Wissen zu erweitern.',
        BTN: 'Lass uns reden',
        MINDSET: 'Lernbegeistert',
        INTREST: 'Ich interessiere mich besonders für'
      },
      PROJECTS: {
        H3: 'Portfolio',
        H1: 'Projekte',
        TEXT1: 'Entdecken Sie hier eine Auswahl meiner Arbeiten. Interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.',
        H2: 'Worum geht es in diesem Projekt?',
        BTN: 'Nächstes Projekt'
      },
      REFERENCES: {
        H2: 'Was meine Kollegen über mich sagen:',
        REF1: 'Vincent  sprudelt vor Kreativität und hat immer clevere Ideen parat. Er bringt sich mit viel Engagement ein und findet für jedes Problem eine Lösung. Mit ihm im Team läuft es einfach rund!',
        REF2: 'Unser Projekt hat enorm von der effizienten Arbeitsweise von Vincent profitiert.',
        REF3: 'Die Zusammenarbeit mit Vincent war wirklich gut und effektiv. Sein Wissen ist beeindruckend und seine Art zu denken ist immer nützlich.'
      },
      CONTACTME: {
        H3: 'Kontakt',
        H1: 'Lasst uns zusammenarbeiten',
        H2: 'Haben Sie ein Problem zu lösen?',
        TEXT1: 'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.',
        TEXT2: 'Brauchen Sie einen Frontend-Entwickler?',
        TEXT3: 'Lasst uns reden!',
        NAMELABEL: 'Wie ist Ihr Name?',
        NAME: 'Hier den Name...',
        EMAILLABEL: 'Wie ist Ihre Email?',
        EMAIL: 'deineemail@email.com',
        TEXTLABEL: 'Wie kann ich helfen?',
        TEXTFIELD: 'Hallo Vincent, ich bin interessiert an...',
        POLICY1: 'Ich habe die',
        POLICY2: 'Datenschutzerklärung',
        POLICY3: 'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
        BTN: 'Sag Hallo ;)'
      },
      FOOTER: {
        TEXT1: 'Web-Entwickler',
        TEXT2: 'Radeberg, Deutschland',
        LINK: 'Impressum',
      }
    }
  };
}