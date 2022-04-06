# :computer: Browser Technologies 

## Table of Contents 
* [Assesment](https://github.com/samclarkb/browser-technologies-2122#books-assessment)
* [Concept](https://github.com/samclarkb/browser-technologies-2122#bulb-concept)
* [Process](https://github.com/samclarkb/browser-technologies-2122#chart_with_upwards_trend-process)
* [Progressive enhancement](https://github.com/samclarkb/browser-technologies-2122#doughnut-progressive-enhancement)
* [Wishlist](https://github.com/samclarkb/browser-technologies-2122#memo-wishlist)
* [Installation](https://github.com/samclarkb/browser-technologies-2122#wrench-installation)
* [Recources](https://github.com/samclarkb/browser-technologies-2122#mag_right-recources)
* [License](https://github.com/samclarkb/browser-technologies-2122#bookmark-license)

## :books: Assesment 
De opdracht luidt als volgt: Maak een demo op basis van een user story. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien/horen/voelen krijgen en maximaal een hele goede user experience.

Bouw je demo in 3 lagen, volgens het principe van Progressive Enhancement. Gebruik als enhancement een Browser Technologie die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning. Je onderzoekt hoe je verschillende features door verschillende browsers worden ondersteund, hoe je voor goede fallback kan zorgen en je test de features op verschillende browsers en het Device Lab.

**Rubric:** 

<img src="https://github.com/samclarkb/browser-technologies-2122/blob/main/public/images/rubric.png" width="800">

## :bulb: Concept
Ik heb een applicatie gemaakt die gebasseerd is op deze user story: 'Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven'.
Op de eerste pagina krijgt de gebruiker een korte introductie over de enquete en de gebruiker is geacht zijn naam en studentennummer in te vullen. Vervolgens krijgt de gebruiker per vak een aantal vragen.

De essentie van de applicatie is dat hij in iedere denkbare omgeving het zo goed mogelijk doet. Ik heb progressive enhancement zo goed mogelijk proberen te implenteren door: 
* Door geen overbodige javascript te gebruiken
* Gebruik te maken van CSS @support
* Gebruik te maken van het br element als fallback voor wanneer de CSS niet werkt
* Door goed te kijken naar wat de core functionaliteit is, en er vervolgens voor zorgen dat die als eerste werkt.

Tijdens het proces heb ik de applicatie op verschillende devices en in verschillende browsers getest. Dit heeft er toe geleid dat het eindproduct in iedere browser en op ieder device zijn core functionalitieten kan uitvoeren.

Uiterlijk applicatie:

|  Without CSS & Javascript | With CSS & Javascript  |   
|---|---|
| Functional  | Pleasurable  |  
|  <img src="https://github.com/samclarkb/browser-technologies-2122/blob/main/public/images/functional.gif" width="400"> | <img src="https://github.com/samclarkb/browser-technologies-2122/blob/main/public/images/pleasurable.gif" width="400">  |  
|   |   |   


## :doughnut: Progressive enhancement

**Progressive enhancement:**

De kern functionaliteiten van een website moeten het ten alle tijden doen, dat is het principe achter progressive enhancement. Niet iedereen beschikt over de mooiste en beste computers/telefoons. Dit betekent dat je jouw applicatie dus in lagen moet bouwen/maken. De onderste foto illustreerd het begrip progressive enhancement:

<img src="https://github.com/samclarkb/browser-technologies-2122/blob/main/public/images/progressiveEnhancement.png" width="600">

**Mijn toepassing van progressive enhancement:**

**- Functional:** De gebruiker kan de enquete invullen en versturen. Ik heb de required property toegepast, zodat de gebruikers niets anders kunnen dan alle input velden invullen.

**- Usable:** Door het gebruik van kleuren heb ik het contrast aangescherpt, zodat de tekst beter leesbaar is. Met dispklay flex heb ik meer witruimte toegevoegd, zodat het formulier beter leesbaar is. Ik heb het br element toegevoegd voor het geval dat display: flex niet wordt ondersteund. Wanneer de gebruiker een input correct heeft ingevuld, kleurt de border van de input groen. De gebruiker weet op deze manier waar hij aan toe is. Ik heb het * icoon achter ieder label gezet, zodat het duidelijk is dat het ingevuld moet worden.

**- Pleasurable:** Om de gebruikerservaring te optimalizeren heb ik ervoor gezorgd dat de ingevulde data wordt opgeslagen. Wanneer de gebruiker iets post naar de server, wordt het daar opgeslagen en kan hij op een later moment weer verder gaan waar hij gebleven is.

## :chart_with_upwards_trend: Process

geinteresseerd in mijn proces tijdens het maken van dit project? klik [hier](https://github.com/samclarkb/browser-technologies-2122/wiki/Proces)!

## :memo: Wishlist
Er zijn een paar dingen waar ik niet aan toe ben gekomen, maar graag had willen doen:
* Enable button function (wel gelukt, maar niet goedgekeurd door Peter Paul)

## :wrench: Installation

Mocht je er zelf wat aan toe willen voegen, neem vooral je tijd! 

``` git clone https://github.com/samclarkb/browser-technologies-2122.git ```

## :mag_right: Recources 
- webdeasy. (z.d.). Node.js Tutorial – Basics for Beginners. webdeasy.de. Geraadpleegd op 22 maart 2022, van https://webdeasy.de/en/node-js-tutorial-en/
- Can I use. (z.d.). Can I use. Geraadpleegd op 6 april 2022, van https://caniuse.com/
- Dev Ed. (2020, 10 september). Input Animations With HTML And CSS [Video]. YouTube. https://www.youtube.com/watch?v=IxRJ8vplzAo

## :bookmark: License 
Copyright (c) 2021 Sam Clark Boot, [MIT](https://github.com/samclarkb/browser-technologies-2122/blob/main/LICENSE)


