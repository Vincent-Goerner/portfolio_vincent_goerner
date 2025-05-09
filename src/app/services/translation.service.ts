import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TranslationService {
  selectedLanguage: number = 0;
  translate = [
    {
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
        TEXT1: 'Hello, I’m a frontend developer from Radeberg, motivated by the nearly limitless opportunities in IT. I’m passionate about creating visually appealing and user-friendly websites and applications.',
        TEXT2: 'Currently, I work at B. Braun in quality assurance, specifically in gauge management. There, I ensure that processes run smoothly and stay within the defined parameters.',
        TEXT3: 'I am open-minded and always looking for new challenges to continuously expand my knowledge and skills.',
        TEXT4: 'In my profession, programming is more than just writing code – it’s a creative approach to problem-solving. I take pride in translating complex technical challenges into simple, user-friendly solutions.'
      },
      SKILLS: {
        H3: 'Technologies',
        H1: 'Skill Set',
        TEXT1: 'My journey has included working on various projects and utilizing a range of frontend technologies and concepts. I am always open to new technologies and methods to continuously expand my skills.',
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
        REF2: 'Vincent always works professionally and solution-oriented and shows a high level of precision in all tasks. In the team, he ensures open communication and actively contributes to achieving common goals.',
        REF3: 'Working with Vincent is very efficient and always brings creative ideas that improve the quality of our projects.'
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
        NAMEERROR: 'Please enter your name',
        EMAILLABEL: 'What`s your email?',
        EMAIL: 'youremail@email.com',
        EMAILERROR: 'Please enter your email',
        TEXTLABEL: 'How can I help you?',
        TEXTFIELD: 'Hello Vincent, I am intrested in...',
        TEXTERROR: 'Please enter a message',
        CHECKERROR: 'Please accept the privacy policy',
        POLICY1: 'I`ve read the',
        POLICY2: 'privacy policy',
        POLICY3: 'and agree to the processing of my data as outlined.',
        POLICYERROR: 'Please accept the privacy policy',
        BTN: 'Say Hello ;)',
        TEXT4: 'Succesfully sent'
      },
      LEGALNOTICE: {
        H1: 'Legal Notice',
        H3_1: 'General Information',
        TEXT1: 'Service provider name:',
        H3_2: 'Address and contact',
        B: 'Phone:',
        H3_3: 'Liability for links',
        TEXT4: 'Our offer contains links to external third-party websites over whose content we have no influence. We therefore cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not apparent at the time of linking. However, permanent control of the content of the linked pages is unreasonable without concrete evidence of a legal violation. If we become aware of any legal violations, we will immediately remove such links.',
        H3_4: 'Liability for content',
        TEXT5: 'The contents of our pages were created with the greatest care. However, we cannot guarantee that the content is correct, complete or up-to-date. However, as a service provider, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information in accordance with general law remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. If we become aware of any corresponding legal violations, we will immediately remove this content.',
        TEXT6: 'Created by '        
      },
      PRIVACYPOLICY: {
        H1: 'Privacy Policy',
        H2_1: '1. Data protection at a glance',
        H3_1: 'General information',
        TEXT1: 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified. You can find detailed information on data protection in our data protection declaration below this text.',
        H3_2: 'Data collection on this website',
        B1: 'Who is responsible for data collection on this website?',
        TEXT2: 'Data processing on this website is carried out by the website operator. You can find their contact details in the "Note on the responsible body" section in this data protection declaration.',
        B2: 'How do we collect your data?',
        TEXT3: 'Your data is collected on the one hand when you provide it to us. This can, for example, be data that you enter in a contact form.',
        TEXT4: 'Other data is collected automatically or with your consent when you visit the website by our IT systems. This is primarily technical data (e.g. Internet browser, operating system or time of page access). This data is collected automatically as soon as you enter this website.',
        B3: 'What do we use your data for?',
        TEXT5: 'Some of the data is collected to ensure that the website is provided without errors. Other data can be used to analyze your user behavior.',
        B4: 'What rights do you have with regard to your data?',
        TEXT6: 'You have the right to obtain information about the origin, recipient and purpose of your stored personal data free of charge at any time. You also have the right to request that this data be corrected or deleted. If you have given your consent to data processing, you can revoke this consent at any time for the future. You also have the right to request that the processing of your personal data be restricted under certain circumstances. You also have the right to lodge a complaint with the responsible supervisory authority. You can contact us at any time about this and other questions about data protection.',
        H2_2: '2. Hosting',
        TEXT7: 'We host the content of our website with the following provider:',
        H3_3: 'All-Inkl',
        TEXT8: 'The provider is ALL-INKL.COM - Neue Medien Münnich, owner René Münnich, Hauptstraße 68, 02742 Friedersdorf (hereinafter All-Inkl). For details, see All-Inkl`s privacy policy: https://all-inkl.com/datenschutzinformationen/..',
        TEXT9: 'All-Inkl is used on the basis of Art. 6 Para. 1 lit. f GDPR. We have a legitimate interest in our website being presented as reliably as possible. If consent has been requested, processing will be carried out exclusively on the basis of Art. 6 Para. 1 lit. a GDPR and Section 25 Para. 1 TDDDG, insofar as the consent includes the storage of cookies or access to information in the user`s end device (e.g. device fingerprinting) within the meaning of the TDDDG. Consent can be revoked at any time.',
        H2_3: '3. General information and mandatory information',
        H3_4: 'Data protection',
        TEXT10: 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this data protection declaration.',
        TEXT11: 'When you use this website, various personal data is collected. Personal data is data with which you can be personally identified. This data protection declaration explains which data we collect and what we use it for. It also explains how and for what purpose this is done.',
        TEXT12: 'We would like to point out that data transmission on the Internet (e.g. when communicating by email) can have security gaps. Complete protection of data against access by third parties is not possible.',
        H3_5: 'Note on the responsible body',
        TEXT13: 'The responsible body for data processing on this website is:',
        TEXT14: 'Vincent Görner',
        TEXT15: 'Großerkmannsdorferstraße 97',
        TEXT16: '01477 Arnsdorf',
        TEXT17: 'Phone: 015752279545',
        TEXT18: 'Mail: ',
        TEXT19: 'The responsible body is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, email addresses, etc.).',
        H3_6: 'Storage period',
        TEXT20: 'Unless a more specific storage period is specified within this data protection declaration, your personal data will remain with us until the purpose for the data processing no longer applies. If you make a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g. retention periods under tax or commercial law); in the latter case, deletion will take place once these reasons no longer apply.',
        H3_7: 'General information on the legal basis for data processing on this website',
        TEXT21: 'If you have consented to data processing, we will process your personal data on the basis of Art. 6 Para. 1 lit. a GDPR or Art. 9 Para. 2 lit. a GDPR if special categories of data are processed in accordance with Art. 9 Para. 1 GDPR. In the case of express consent to the transfer of personal data to third countries, data processing will also be carried out on the basis of Art. 49 Para. 1 lit. a GDPR. If you have consented to the storage of cookies or to access information on your device (e.g. via device fingerprinting), data processing will also be carried out on the basis of Section 25 Para. 1 TDDDG. Consent can be revoked at any time. If your data is required to fulfill the contract or to carry out pre-contractual measures, we will process your data on the basis of Art. 6 Para. 1 lit. b GDPR. Furthermore, we process your data if it is necessary to fulfil a legal obligation on the basis of Art. 6 Para. 1 lit. c GDPR. The data processing can also be carried out on the basis of our legitimate interest in accordance with Art. 6 Para. 1 lit. f GDPR. The legal bases relevant in each individual case are provided in the following paragraphs of this data protection declaration.',
        H3_8: 'Recipients of personal data',
        TEXT22: 'As part of our business activities, we work with various external bodies. In some cases, it is also necessary to transmit personal data to these external bodies. We only pass on personal data to external bodies if this is necessary to fulfil a contract, if we are legally obliged to do so (e.g. passing on data to tax authorities), if we have a legitimate interest in passing on the data in accordance with Art. 6 Para. 1 lit. f GDPR or if another legal basis allows the data to be passed on. When using contract processors, we only pass on our customers` personal data on the basis of a valid contract for order processing. In the case of joint processing, a contract for joint processing is concluded.',
        H3_9: 'Revocation of your consent to data processing',
        TEXT23: 'Many data processing operations are only possible with your express consent. You can revoke consent that has already been given at any time. The legality of the data processing carried out up to the time of revocation remains unaffected by the revocation.',
        H3_10: 'Right to object to data collection in special cases and to direct advertising (Art. 21 GDPR)',
        TEXT24: 'IF THE DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6 PARAGRAPH 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RELEVANT LEGAL BASIS ON WHICH ANY PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL DATA UNLESS WE CAN PROVE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS, OR THE PROCESSING IS FOR THE PURPOSE OF ASSERTING, EXERCISING OR DEFENDING LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21 PARA. 1 GDPR). IF YOUR PERSONAL DATA IS PROCESSED FOR THE PURPOSE OF DIRECT MARKETING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING IN SO FAR AS IT IS RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR THE PURPOSE OF DIRECT MARKETING (OBJECTION ACCORDING TO ART. 21 PARA. 2 GDPR).',
        H3_11: 'Right to lodge a complaint with the competent supervisory authority',
        TEXT25: 'In the event of violations of the GDPR, those affected have the right to lodge a complaint with a supervisory authority, in particular in the member state of their habitual residence, place of work or place of the alleged violation. The right to lodge a complaint is without prejudice to other administrative or judicial remedies.',
        H3_12: 'Right to data portability',
        TEXT26: 'You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another responsible party, this will only be done if it is technically feasible.',
        H3_13: 'Information, correction and deletion',
        TEXT27: 'Within the framework of the applicable legal provisions, you have the right at any time to obtain free information about your stored personal data, its origin and recipient and the purpose of the data processing and, if applicable, a right to correction or deletion of this data. You can contact us at any time about this and other questions on the subject of personal data.',
        H3_14: 'Right to restriction of processing',
        TEXT28: 'You have the right to request that the processing of your personal data be restricted. You can contact us at any time about this. The right to restriction of processing exists in the following cases:',
        TEXT29: 'If you dispute the accuracy of your personal data stored by us, we usually need time to check this. For the duration of the check, you have the right to request that the processing of your personal data be restricted.',
        TEXT30: 'If the processing of your personal data was/is unlawful, you can request that the data processing be restricted instead of deletion.',
        TEXT31: 'If we no longer need your personal data, but you need it to exercise, defend or assert legal claims, you have the right to request that the processing of your personal data be restricted instead of deleted.',
        TEXT32: 'If you have lodged an objection in accordance with Art. 21 Para. 1 GDPR, a balance must be struck between your interests and ours. As long as it is not yet clear whose interests prevail, you have the right to request that the processing of your personal data be restricted.',
        TEXT33: 'If you have restricted the processing of your personal data, this data - apart from being stored - may only be processed with your consent or for the assertion, exercise or defense of legal claims or to protect the rights of another natural or legal person or for reasons of important public interest of the European Union or a member state.',
        H3_15: 'SSL or TLS encryption',
        TEXT34: 'This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.',
        TEXT35: 'If SSL or TLS encryption is activated, the data that you send to us cannot be read by third parties.',
        TEXT36: 'Source:'
      },
      FOOTER: {
        TEXT1: 'Web Developer',
        TEXT2: 'Radeberg, Germany',
        LINK: 'Legal Notice',
      }
    },
    {
      HEADER: {
        ABOUT: 'Über mich',
        SKILLS: 'Fähigkeiten',
        PROJECTS: 'Projekte'
      },
      ATF: {
        H2: 'Frontend Entwickler',
        H1: 'Vincent Görner',
        WORK: 'Meine Projekte',
        CONTACT: 'Konatkt',
        MARQUEE1: 'Für Home Office verfügbar',
        MARQUEE2: 'Frontend Entwickler',
        MARQUEE3: 'Wohnhaft in Radeberg',
        MARQUEE4: 'Offen für Weiterentwicklung'
      },
      ABOUTME: {
        H3: 'Wer bin ich',
        H1: 'Über mich',
        TEXT1: 'Hallo, ich bin Frontend-Entwickler aus Radeberg und motiviert durch die nahezu unbegrenzten Möglichkeiten der IT. Es begeistert mich, visuell ansprechende und benutzerfreundliche Webseiten sowie Anwendungen zu erstellen',
        TEXT2: 'Derzeit arbeite ich bei B. Braun in der Qualitätssicherung, genauer gesagt in der Prüfmittelüberwachung. Dort sorge ich dafür, dass Prozesse stabil laufen und innerhalb der vorgegebenen Parameter bleiben.',
        TEXT3: 'Ich bin aufgeschlossen und stets auf der Suche nach neuen Herausforderungen, um mein Wissen und meine Fähigkeiten kontinuierlich zu erweitern.',
        TEXT4: 'In meinem Leben ist Programmieren mehr als nur Code zu schreiben – es ist eine kreative Herangehensweise an die Lösung von Problemen. Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu übersetzen.'
      },
      SKILLS: {
        H3: 'Technologien',
        H1: 'Fähigkeiten',
        TEXT1: 'Meine Reise umfasste die Arbeit an verschiedenen Projekten, sowie den Einsatz diverser Frontend-Technologien und -Konzepte. Ich bin stets offen für neue Technologien und Methoden, um meine Fähigkeiten kontinuierlich zu erweitern.',
        H2CLASS: 'Sie benötigen',
        H2: 'andere Fertigkeiten?',
        TEXT2: 'Kontaktieren Sie mich gerne. Ich freue mich darauf, mein bisheriges Wissen zu erweitern.',
        BTN: 'Lass uns reden',
        MINDSET: 'Lernorientiert',
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
        H2: 'Was meine Kollegen über mich sagen',
        REF1: 'Vincent  sprudelt vor Kreativität und hat immer clevere Ideen parat. Er bringt sich mit viel Engagement ein und findet für jedes Problem eine Lösung. Mit ihm im Team läuft es einfach rund!',
        REF2: 'Vincent arbeitet stets professionell und lösungsorientiert und zeigt eine hohe Genauigkeit in allen Aufgaben. Im Team sorgt er für eine offene Kommunikation und trägt aktiv zur Erreichung gemeinsamer Ziele bei.',
        REF3: 'Mit Vincent zu arbeiten ist sehr effizient und bringt immer kreative Ideen ein, die die Qualität unserer Projekte verbessern.'
      },
      CONTACTME: {
        H3: 'Kontakt',
        H1: 'Lasst uns zusammenarbeiten',
        H2: 'Haben Sie ein Problem zu lösen?',
        TEXT1: 'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit, zu Ihren Projekten beizutragen.',
        TEXT2: 'Brauchen Sie einen Frontend-Entwickler?',
        TEXT3: 'Lasst uns reden!',
        NAMELABEL: 'Wie ist Ihr Name?',
        NAME: 'Hier den Name eingeben',
        NAMEERROR: 'Bitte deinen Namen eingeben',
        EMAILLABEL: 'Wie ist Ihre Email?',
        EMAIL: 'deineemail@email.com',
        EMAILERROR: 'Bitte deine Email eingeben',
        TEXTLABEL: 'Wie kann ich helfen?',
        TEXTFIELD: 'Hallo Vincent, ich bin interessiert an...',
        TEXTERROR: 'Bitte Nachricht eingeben',
        CHECKERROR: 'Bitte akzeptiere die Datenschutzerklärung',
        POLICY1: 'Ich habe die',
        POLICY2: 'Datenschutzerklärung',
        POLICY3: 'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
        POLICYERROR: 'Bitte Datenschutzerklärung akzeptieren',
        BTN: 'Sag Hallo ;)',
        TEXT4: 'Erfolgreich versendet'
      },
      LEGALNOTICE: {
        H1: 'Impressum',
        H3_1: 'Allgemeine Angaben',
        TEXT1: 'Name des Diensteanbieters:',
        H3_2: 'Anschrift und Kontakt',
        B1: 'Telefon:',
        H3_3: 'Haftung für Links',
        TEXT4: 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
        H3_4: 'Haftung für Inhalte',
        TEXT5: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Wir sind als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
        TEXT6: 'Erstellt von '
      },
      PRIVACYPOLICY: {
        H1: 'Datenschutzerklärung',
        H2_1: '1. Datenschutz auf einen Blick',
        H3_1: 'Allgemeine Informationen',
        TEXT1: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung unterhalb dieses Textes.',
        H3_2: 'Datenerfassung auf dieser Website',
        B1: 'Wer ist für die Datenerfassung auf dieser Website verantwortlich?',
        TEXT2: 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ dieser Datenschutzerklärung entnehmen.',
        B2: 'Wie erfassen wir Ihre Daten?',
        TEXT3: 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich beispielsweise um Daten handeln, die Sie in ein Kontaktformular eingeben.',
        TEXT4: 'Andere Daten werden automatisch oder mit Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Dabei handelt es sich vor allem um technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
        B3: 'Wofür verwenden wir Ihre Daten?',
        TEXT5: 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens genutzt werden.',
        B4: 'Welche Rechte haben Sie hinsichtlich Ihrer Daten?',
        TEXT6: 'Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem das Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Sofern Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Sie haben außerdem das Recht, unter bestimmten Umständen eine Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Sie haben außerdem das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.',
        H2_2: '2. Hosting',
        TEXT7: 'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:',
        H3_3: 'All-Inkl',
        TEXT8: 'Anbieter ist ALL-INKL.COM – Neue Medien Münnich, Inhaber René Münnich, Hauptstraße 68, 02742 Friedersdorf (nachfolgend All-Inkl). Einzelheiten finden Sie in der Datenschutzerklärung von All-Inkl: https://all-inkl.com/datenschutzinformationen/.',
        TEXT9: 'Die Nutzung von All-Inkl erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z.B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung kann jederzeit widerrufen werden.',
        H2_3: '3. Allgemeine Informationen und Pflichtinformationen',
        H3_4: 'Datenschutz',
        TEXT10: 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
        TEXT11: 'Bei der Nutzung dieser Website werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie verwenden. Außerdem wird erläutert, wie und zu welchem ​​Zweck dies geschieht.',
        TEXT12: 'Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein vollständiger Schutz der Daten vor dem Zugriff Dritter ist nicht möglich.',
        H3_5: 'Hinweis zur verantwortlichen Stelle',
        TEXT13: 'Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
        TEXT14: 'Vincent Görner',
        TEXT15: 'Großerkmannsdorferstraße 97',
        TEXT16: '01477 Arnsdorf',
        TEXT17: 'Phone: 015752279545',
        TEXT18: 'Mail: ',
        TEXT19: 'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.',
        H3_6: 'Speicherdauer',
        TEXT20: 'Sofern in dieser Datenschutzerklärung keine konkretere Speicherdauer angegeben wird, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck der Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschungsverlangen stellen oder Ihre Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letzteren Fall erfolgt die Löschung nach Wegfall dieser Gründe.',
        H3_7: 'Allgemeine Informationen zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website',
        TEXT21: 'Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage des Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Kategorien von Daten nach Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden. 9 Abs. 1 DSGVO. Im Falle einer ausdrücklichen Einwilligung in die Übermittlung personenbezogener Daten in Drittländer erfolgt die Datenverarbeitung zudem auf Grundlage des Art. 6 Abs. 1 lit. a DSGVO. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder den Zugriff auf Informationen auf Ihrem Gerät (z.B. per Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zudem auf Grundlage von § 25 Abs. 1 lit. 1 TDDDG. Die Einwilligung kann jederzeit widerrufen werden. Sofern Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich sind, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. 6 Abs. 1 lit. b DSGVO. Darüber hinaus verarbeiten wir Ihre Daten, soweit dies zur Erfüllung einer rechtlichen Verpflichtung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO erforderlich ist. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann auch auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO erfolgen. 6 Abs. 1 lit. f DSGVO. Die jeweils relevanten Rechtsgrundlagen entnehmen Sie bitte den nachfolgenden Absätzen dieser Datenschutzerklärung.',
        H3_8: 'Empfänger personenbezogener Daten',
        TEXT22: 'Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Teilweise ist auch eine Übermittlung personenbezogener Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten an externe Stellen nur dann weiter, wenn dies zur Vertragserfüllung erforderlich ist, wir gesetzlich dazu verpflichtet sind (z. B. Datenweitergabe an Finanzbehörden), wir ein berechtigtes Interesse an der Datenweitergabe gemäß Art. 6 Abs. 1 lit. f) DSGVO haben. 6 Abs. 1 lit. f DSGVO oder wenn eine andere Rechtsgrundlage eine Weitergabe der Daten erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrages zur Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung kommt ein Vertrag über die gemeinsame Verarbeitung zustande.',
        H3_9: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
        TEXT23: 'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Eine bereits erteilte Einwilligung können Sie jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
        H3_10: 'Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)',
        TEXT24: 'Erfolgt die Datenverarbeitung auf Grundlage von Art. 6 ABSATZ 1 LIT. Gemäß Art. 6 Abs. 1 lit. f DSGVO haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen; Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweiligen Rechtsgrundlagen, auf denen eine Verarbeitung beruht, finden Sie in dieser Datenschutzerklärung. Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21). Abs. 1 DSGVO). Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; Dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Zusammenhang steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zweck der Direktwerbung verwendet (Widerspruch gemäß Art. 21 Abs. 2 DSGVO).',
        H3_11: 'Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde',
        TEXT25: 'Im Falle von Verstößen gegen die DSGVO haben Betroffene ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Ortes des mutmaßlichen Verstoßes. Das Recht auf Beschwerde besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',
        H3_12: 'Recht auf Datenübertragbarkeit',
        TEXT26: 'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
        H3_13: 'Auskunft, Berichtigung und Löschung',
        TEXT27: 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.',
        H3_14: 'Recht auf Einschränkung der Verarbeitung',
        TEXT28: 'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie uns jederzeit kontaktieren. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:',
        TEXT29: 'Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, eine Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
        TEXT30: 'Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig erfolgte/erfolgt, können Sie statt der Löschung eine Einschränkung der Datenverarbeitung verlangen.',
        TEXT31: 'Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie diese jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
        TEXT32: 'Sofern Sie Widerspruch gemäß Art. 21 Abs. 1 DSGVO muss eine Abwägung zwischen Ihren und unseren Interessen erfolgen. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
        TEXT33: 'Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.',
        H3_15: 'SSL- oder TLS-Verschlüsselung',
        TEXT34: 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
        TEXT35: 'Bei aktivierter SSL- bzw. TLS-Verschlüsselung können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.',
        TEXT36: 'Quelle:'
      },
      FOOTER: {
        TEXT1: 'Web-Entwickler',
        TEXT2: 'Radeberg, Deutschland',
        LINK: 'Impressum',
      }
    }
  ];
}