/*blocklyRoboy_lib-1.0.0 by Arthur Léonard*/

var robotCommands = [];

var getContext = function(display, infos, curLevel) {
   var localLanguageStrings = {
      fr: {
         label: {},
         code: {},
         messages: {},
         description: {}
      },
      es: {
         label: {},
         code: {},
         messages: {},
         description: {}
      },
      de: {
        label: {},
        code: {},
        messages: {},
        description: {}
      },
      en: {
         label: {},
         code: {},
         messages: {},
         description: {}
      },
      nl: {
         label: {},
         code: {},
         messages: {},
         description: {}
       }
   };

   var contextStrings = {
      none: {
         fr: {
            label: {
               row: "ligne du robot",
               col: "colonne du robot",
               north: "avancer vers le haut",
               south: "avancer vers le bas",
               east: "avancer vers la droite",
               west: "avancer vers la gauche",
               left: "tourner à gauche",
               right: "tourner à droite",
               turnAround: "faire demi-tour",
               forward: "avancer",
               backwards: "reculer",
               jump: "sauter",
               obstacleInFront: "obstacle devant",
               obstacleEast: "obstacle à droite",
               obstacleWest: "obstacle à gauche",
               obstacleNorth: "obstacle en haut",
               obstacleSouth: "obstacle en bas",
               obstacleRight: "obstacle à droite",
               obstacleLeft: "obstacle à gauche",
               gridEdgeEast: "bord de la grille à droite",
               gridEdgeWest: "bord de la grille à gauche",
               gridEdgeNorth: "bord de la grille en haut",
               gridEdgeSouth: "bord de la grille en bas",
               platformInFront: "plateforme devant",
               platformAbove: "plateforme au-dessus",
               withdrawObject: "ramasser l'objet",
               dropObject: "déposer l'objet",
               onObject: "sur un objet",
               onContainer: "sur un conteneur",
               onNumber: "sur un nombre",
               onWritable: "sur un tableau",
               onLauncher: "sur un lanceur laser",
               writeNumber: "écrire le nombre",
               readNumber: "nombre de la case",
               pushObject: "pousser l'objet",
               pushableInFront: "poussable devant",
               shoot: "tirer au laser dans la direction %1",
               shoot_noShadow: "tirer au laser dans la direction %1",
               shootCondition: "retour départ tir direction %1",
               shootCondition_noShadow: "retour départ tir direction %1"
            },
            code: {
               row: "ligneRobot",
               col: "colonneRobot",
               north: "haut",
               south: "bas",
               east: "droite",
               west: "gauche",
               left: "tournerGauche",
               right: "tournerDroite",
               turnAround: "demiTour",
               forward: "avancer",
               backwards: "reculer",
               jump: "sauter",
               obstacleInFront: "obstacleDevant",
               obstacleEast: "obstacleDroite",
               obstacleWest: "obstacleGauche",
               obstacleNorth: "obstacleHaut",
               obstacleSouth: "obstacleBas",
               obstacleRight: "obstacleDroiteRel",
               obstacleLeft: "obstacleGaucheRel",
               gridEdgeEast: "bordGrilleDroite",
               gridEdgeWest: "bordGrilleGauche",
               gridEdgeNorth: "bordGrilleHaut",
               gridEdgeSouth: "bordGrilleBas",
               platformInFront: "plateformeDevant",
               platformAbove: "plateformeDessus",
               withdrawObject: "ramasserObjet",
               dropObject: "deposerObjet",
               onObject: "surObjet",
               onContainer: "surConteneur",
               onNumber: "surNombre",
               onWritable: "surTableau",
               onLauncher: "surLanceur",
               writeNumber: "ecrireNombre",
               readNumber: "nombreSurCase",
               pushObject: "pousserObjet",
               pushableInFront: "poussableDevant",
               shoot: "tirerLaser",
               shoot_noShadow: "tirerLaser",
               shootCondition: "tirerCondition",
               shootCondition_noShadow: "tirerCondition"
            },
            messages: {
               leavesGrid: "Le robot sort de la grille !",
               obstacle: "Le robot essaie de se déplacer sur un obstacle !",
               nothingToPickUp: "Il n'y a rien à ramasser !",
               nothingToLookAt: "Il n'y a ni carte ni conteneur sur cette case",
               falls: "Le robot va se jeter dans le vide !",
               willFallAndCrash: "Le robot va tomber de haut et s'écraser !",
               jumpOutsideGrid: "Le robot essaie de sauter en dehors de la grille !",
               jumpObstacleBlocking: "Le robot essaie de sauter mais il y a un obstacle qui le bloque",
               jumpNoPlatform: "Le robot essaie de sauter mais il n'y a pas de plateforme au dessus !",
               tooManyObjects: "Le robot essaie de transporter trop d'objets à la fois !",
               emptyBag: "Le robot essaie de déposer un objet alors qu'il n'en transporte pas !",
               successReachExit: "Bravo, votre robot a atteint la sortie !",
               failureReachExit: "Votre robot n'a pas atteint la sortie.",
               successPickedAllWithdrawables: "Bravo, votre robot a tout ramassé !",
               failurePickedAllWithdrawables: "Votre robot n'a pas tout ramassé.",
               successContainersFilled: "Bravo, votre robot a rempli tous les conteneurs",
               failureContainersFilled: "Il y a un objet hors des conteneurs",
               failureContainersFilledLess: "Votre robot n'a pas rempli tous les conteneurs",
               failureContainersFilledBag: "Votre robot n'a pas posé tous les objets",
               failureUnfilteredObject: "Votre robot a ramassé un objet invalide",
               failureTooManyMoves: "Votre robot a effectué trop de déplacements.",
               failureWriteHere: "Votre robot ne peut pas écrire ici !",
               failureReadHere: "Il n'y a pas de nombre écrit ici !",
               successNumbersWritten: "Bravo, votre robot a écrit les bons nombres !",
               failureNumbersWritten: "Votre robot n'a pas écrit les bons nombres !",
               failureNothingToPush: "Il n'y a pas d'objet à pousser !",
               failureWhilePushing: "Le robot ne peut pas pousser cet objet !",
               failureDropObject: "On ne peut pas poser d'objet ici",
               failureDropOutside: "Votre robot essaie de poser un objet hors de la grille",
               failureNotEnoughPlatform: "Pas assez de plateformes",
               failureLights: "Il reste des spots à allumer.",
               successLights: "Bravo, votre robot a allumé tous les spots !",
               failureLaser: "Le robot doit se trouver sur une borne laser pour pouvoir tirer !"
            },
            startingBlockName: "Programme du robot"
         },

         es: {
            label: {
               row: "fila del robot",
               col: "columna del robot",
               north: "avanzar hacia arriba",
               south: "avanzar hacia abajo",
               east: "avanzar hacia la derecha",
               west: "avanzar hacia la izquierda",
               left: "girar a la izquierda",
               right: "girar a la derecha",
               turnAround: "dar media vuelta",
               forward: "avanzar",
               backwards: "retroceder",
               jump: "saltar",
               obstacleInFront: "obstáculo adelante",
               obstacleEast: "obstáculo a la derecha",
               obstacleWest: "obstáculo a la izquierda",
               obstacleNorth: "obstáculo arriba",
               obstacleSouth: "obstáculo abajo",
               obstacleRight: "obstáculo a la derecha",
               obstacleLeft: "obstáculo a la izquierda",
               gridEdgeEast: "borde de la cuadrícula a la derecha",
               gridEdgeWest: "borde de la cuadrícula a la izquierda",
               gridEdgeNorth: "borde de la cuadrícula arriba",
               gridEdgeSouth: "borde de la cuadrícula abajo",
               platformInFront: "plataforma adelante",
               platformAbove: "plataforma arriba",
               withdrawObject: "recoger el objeto",
               dropObject: "soltar el objeto",
               onObject: "sobre un objeto",
               onContainer: "sobre un contenedor",
               onNumber: "sobre un número",
               onWritable: "sobre un cuadro",
               writeNumber: "escribir el número",
               readNumber: "número en la casilla",
               pushObject: "empujar el objeto",
               pushableInFront: "objeto empujable adelante",
               shoot: "disparar el láser en la dirección %1",
               shoot_noShadow: "disparar el laser en la dirección %1",
               shootCondition: "dirección del tiro de retorno %1",
               shootCondition_noShadow: "dirección del tiro de retorno %1"
            },
            code: {
               row: "filaRobot",
               col: "columnaRobot",
               north: "arriba",
               south: "abajo",
               east: "derecha",
               west: "izquierda",
               left: "girarIzquierda",
               right: "girarDerecha",
               turnAround: "mediaVuelta",
               forward: "avanzar",
               backwards: "retroceder",
               jump: "saltar",
               obstacleInFront: "obstaculoAdelante",
               obstacleRight: "obstaculoDerechaRel",
               obstacleLeft: "obstaculoIzquierdaRel",
               obstacleEast: "obstaculoDerecha",
               obstacleWest: "obstaculoIzquierda",
               obstacleNorth: "obstaculoArriba",
               obstacleSouth: "obstaculoAbajo",
               gridEdgeEast: "bordeCuadriculaDerecha",
               gridEdgeWest: "bordeCuadriculaIzquierda",
               gridEdgeNorth: "bordeCuadriculaArriba",
               gridEdgeSouth: "bordeCuadriculaAbajo",
               platformInFront: "plataformaAdelante",
               platformAbove: "plataformaArriba",
               withdrawObject: "recogerObjeto",
               dropObject: "soltarObjeto",
               onObject: "sobreObjeto",
               onContainer: "sobreContenedor",
               onNumber: "sobreNumero",
               onWritable: "sobreCuadro",
               writeNumber: "escribirNumero",
               readNumber: "leerNumero",
               pushObject: "empujarObjeto",
               pushableInFront: "empujableAdelante",
               shoot: "dispararLaser",
               shoot_noShadow: "dispararLaser",
               shootCondition: "condicionDisparo",
               shootCondition_noShadow: "condicionDisparo"
            },
            messages: {
               leavesGrid: "¡El robot salió de la cuadrícula!",
               obstacle: "¡El robot intenta moverse sobre un obstáculo!",
               nothingToPickUp: "No hay algo para recoger",
               nothingToLookAt: "No hay carta ni contenedor en esta casilla",
               falls: "¡El robot va a caer al vacío!",
               willFallAndCrash: "¡El robot va a caer y chocar!",
               jumpOutsideGrid: "¡El robot intenta saltar fuera de la cuadrícula!",
               jumpObstacleBlocking: "El robot intenta saltar pero hay un obstáculo que lo bloquea",
               jumpNoPlatform: "¡El robot intenta saltar pero no hay una plataforma arriba!",
               tooManyObjects: "¡El robot intenta transportar demasiados objetos al mismo tiempo!",
               emptyBag: "El robot intenta soltar un objeto, ¡pero no carga nada!",
               successReachExit: "Bravo, ¡su robot a llegado a la salida!",
               failureReachExit: "Su robot no ha llegado a la salida.",
               successPickedAllWithdrawables: "Bravo, su robot ha recogido todo!",
               failurePickedAllWithdrawables: "Su robot no ha recogido todo.",
               successContainersFilled: "Bravo, su robot ha llenado todos los contenedores",
               failureContainersFilled: "Hay un objeto fuera de los contenedores",
               failureContainersFilledLess: "Su robot no ha llenado todos los contenedores",
               failureContainersFilledBag: "Su robot no ha puesto todos los objetos",
               failureUnfilteredObject: "Su robot ha recogido un objeto inválido",
               failureTooManyMoves: "Su robot ha realizado demasiados desplazamientos.",
               failureWriteHere: "¡Su robot no puede escribir aquí!",
               failureReadHere: "¡No hay un número aquí!",
               successNumbersWritten: "Bravo, su robot ha escrito los números correctos!",
               failureNumbersWritten: "Su robot no ha escrito los números correctos!",
               failureNothingToPush: "¡No hay un objeto que empujar!",
               failureWhilePushing: "¡El robot no puede empujar este objeto!",
               failureDropObject: "No es posible poner el objeto aquí",
               failureDropOutside: "Su robot intenta poner un objeto fuera de la cuadrícula",
               failureNotEnoughPlatform: "No hay suficiente plataforma",
               failureLights: "Aún faltan lugares que iluminar.",
               successLights: "Bravo, ¡su robot ha iluminado todos los lugares!",
               failureLaser: "¡El robot debe encontrarse sobre una terminal láser para poder disparar!"
            },
            startingBlockName: "Programa del robot"
         },
         de: {
            label: {
               row: "Spalte des Roboters",
               col: "Zeile des Roboters",
               north: "gehe nach oben",
               south: "gehe nach unten",
               east: "gehe nach rechts",
               west: "gehe nach links",
               left: "drehe nach links",
               right: "drehe nach rechts",
               turnAround: "drehe um",
               forward: "gehe",
               backwards: "gehe rückwärts",
               jump: "springe",
               obstacleInFront: "vor Hindernis",
               obstacleEast: "Hindernis rechts",
               obstacleWest: "Hindernis links",
               obstacleNorth: "Hindernis oben",
               obstacleSouth: "Hindernis unten",
               obstacleRight: "Hindernis rechts",
               obstacleLeft: "Hindernis links",
               gridEdgeAbove: "unter Rand des Gitters",
               gridEdgeBelow: "über Rand des Gitters",
               gridEdgeEast: "links vom Gitterrand",
               gridEdgeWest: "rechts vom Gitterrand",
               platformInFront: "vor Plattform",
               platformAbove: "Plattform darüber",
               withdrawObject: "hebe Objekt auf",
               dropObject: "lege Objekt ab",
               onObject: "auf Objekt",
               onContainer: "auf Kiste",
               onNumber: "auf Zahl",
               onWritable: "auf Tafel",
               onLauncher: "sur un lanceur laser",
               writeNumber: "schreibe Zahl",
               readNumber: "Zahl auf dem Feld",
               pushObject: "schiebe Kiste",
               pushableInFront: "vor Kiste",
               shoot: "schieße Laser in Richtung %1",
               shoot_noShadow: "schieße Laser in Richtung %1",
               shootCondition: "Rückkehr von der Schießrichtung %1",
               shootCondition_noShadow: "Rückkehr von der Schießrichtung %1"
            },
            code: {
               row: "zeileRoboter",
               col: "spalteRoboter",
               north: "oben",
               south: "unten",
               east: "rechts",
               west: "links",
               left: "linksDrehen",
               right: "rechtsDrehen",
               turnAround: "umkehren",
               forward: "vorwaerts",
               backwards: "rueckwaerts",
               jump: "springen",
               obstacleInFront: "hindernisVoraus",
               obstacleEast: "hindernisRechts",
               obstacleWest: "hindernisLinks",
               obstacleNorth: "hindernisOben",
               obstacleSouth: "hindernisUnten",
               obstacleRight: "hindernisRechtsRel",
               obstacleLeft: "hindernisLinksRel",
               gridEdgeEast: "gitterrandRechts",
               gridEdgeWest: "gitterrandLinks",
               gridEdgeNorth: "gitterrandOben",
               gridEdgeSouth: "gitterrandUnten",
               platformInFront: "plattformVoraus",
               platformAbove: "plattformOben",
               withdrawObject: "objektEinsammeln",
               dropObject: "objektAbsetzen",
               onObject: "aufObjekt",
               onContainer: "aufContainer",
               onNumber: "aufZahl",
               onWritable: "aufTabelle",
               onLauncher: "aufLaser",
               writeNumber: "schreibeZahl",
               readNumber: "leseZahl",
               pushObject: "objektDruecken",
               pushableInFront: "verschiebbaresObjektVoraus",
               shoot: "laserFeuern",
               shoot_noShadow: "laserFeuern",
               shootCondition: "abfeuerBedingung",
               shootCondition_noShadow: "abfeuerBedingung"
            },
            messages: {
               leavesGrid: "Der Roboter hat das Gitter verlassen!",
               obstacle: "Der Roboter ist gegen ein Hindernis gelaufen!",
               nothingToPickUp: "An dieser Stelle gibt es nichts zum aufheben!",
               nothingToLookAt: "An dieser Stelle gibt es nichts zum betrachten!",
               falls: "Der Roboter fällt in den Abgrund!",
               willFallAndCrash: "Der Roboter würde hier runterfallen und kaputt gehen!",
               jumpOutsideGrid: "Der Roboter versucht, aus dem Gitter zu springen!",
               jumpObstacleBlocking: "Der Roboter kann hier nicht springen, weil ein Hindernis ihn blockiert.",
               jumpNoPlatform: "Der Roboter kann hier nicht springen, weil über ihm keine Plattform ist.",
               tooManyObjects: "Der Roboter kann nicht so viele Objekte auf einmal tragen!",
               emptyBag: "Der Roboter kann nichts ablegen, weil er gar nichts transportiert!",
               successReachExit: "Bravo! Der Roboter hat den Ausgang erreicht.",
               failureReachExit: "Der Roboter hat den Ausgang nicht erreich!",
               successPickedAllWithdrawables: "Bravo! Der Roboter hat alles eingesammelt.",
               failurePickedAllWithdrawables: "Der Roboter hat nicht alles eingesammelt!",
               successContainersFilled: "Gut gemacht! Der Roboter hat alle Behälter gefüllt.",
               failureContainersFilled: "Es befindet sich ein Objekt außerhalb der Behälter.",
               failureContainersFilledLess: "Der Roboter hat nicht alle Behälter gefüllt.",
               failureContainersFilledBag: "Der Roboter hat nicht alle Objekte platziert.",
               failureUnfilteredObject: "Dein Roboter hat ein nicht erlaubtes Objekt aufgehoben!",
               failureTooManyMoves: "Dein Roboter hat zu viele Bewegungen ausgeführt.",
               failureWriteHere: "Der Roboter kann an dieser Stelle nicht schreiben!",
               failureReadHere: "An dieser Stelle steht keine Zahl!",
               successNumbersWritten: "Bravo! Der Roboter hat die richtigen Zahlen geschrieben.",
               failureNumbersWritten: "Dein Roboter hat nicht die richtigen Zahlen geschrieben!",
               failureNothingToPush: "An dieser Stelle gibt es nichts zum Schieben!",
               failureWhilePushing: "Der Roboter hat es nicht geschafft, das Objekt zu schieben!",
               failureDropObject: "An dieser Stelle kann kein Objekt abgelegt werden!",
               failureDropOutside: "Der Roboter hat versucht ein Objekt vom Gitterrand zu schieben!",
               failureNotEnoughPlatform: "Nicht genügend Plattformen!",
               failureLights: "Der Roboter hat nicht alles beleuchtet!",
               successLights: "Bravo! Der Roboter hat alles beleuchtet.",
               failureLaser: "Der Roboter muss auf einem Laser stehen, um schießen zu können!",
            },
            startingBlockName: "Roboter-Programm"
         },
         nl: {
            label: {
               wait: "wachten",
               right: "draai naar rechts",
               left: "draai naar links",
               forward: "ga vooruit",
               backwards: "ga achteruit",
               turnAround: "maak rechtsomkeer",
               jump: "spring",
               down: "naar beneden",
               east: "ga naar rechts",
               south: "ga naar onder",
               west: "ga naar links",
               north: "ga naar boven",
               paint: "kleur het vakje",
               pickTransportable: "neem de knikker",
               dropTransportable: "laat de knikker los",
               onTransportable: "op een knikker",
               onRoundObject: "op een rond object",
               onSquareObject: "op een vierkant object",
               onTriangleObject: "op een driehoekig object",
               onDottedObject: "op een gestippeld object",
               onFullObject: "op een volgekleurd object",
               onStripedObject: "op een gestreept object",
               onHole: "op een gat",
               onContainer: "op een container",
               transportableShape: "vorm van het object",
               transportableColor: "kleur van het object",
               transportableRed:  "het object is rood",
               transportableBlue: "het object is blauw",
               transportableSquare: "het object is vierkant",
               greenCell: "op een groen vakje",
               brownCell: "op een bruin vakje",
               markedCell: "op een gemarkeerd vakje",
               addPlatformAbove: "maak een platform boven",
               addPlatformInFront: "maak een platform recht voor",
               platformInFront: "platform recht voor",
               platformInFrontAndBelow: "platform voor en lager",
               platformAbove: "platform boven",
               gridEdgeInFront: "rand van het rooster recht voor",
               gridEdgeAbove: "rand van het rooster bovenaan",
               gridEdgeBelow: "rand van het rooster onderaan",
               gridEdgeEast: "rand van het rooster rechts",
               gridEdgeWest: "rand van het rooster links",
               obstacleInFront: "obstakel recht voor",
               obstacleRight: "obstakel rechts",
               obstacleLeft: "obstakel links",
               obstacleEast: "obstakel rechts",
               obstacleWest: "obstakel links",
               obstacleNorth: "obstakel boven",
               obstacleSouth: "obstakel onder",
               paintInFront: "kleur recht voor",
               paintOnCell: "kleur op het vakje",
               paintNorthWest: "kleur linksboven",
               paintNorth: "kleur boven",
               paintNorthEast: "kleur rechtsboven",
               colorUnder: "kleur van het vakje",
               numberUnder: "nummer van het vakje",
               readNumber: "nummer van het vakje",
               writeNumber: "geef het vakje nummer",
               dir: "richting van de robot",
               col: "kolom van de robot",
               row: "rij van de robot",
               alert: "let op",
               onPill: "op een pil",

               number: "totaal aantal objecten te verplaatsen",
               exists: "er is een object te verplaatsen",
               trans_row: "rij van het te verplaatsen object",
               trans_col: "kolom van het te verplaatsen object",

               decrement: "verminder het nummer van het vakje met 1",
               numberIsZero: "robot op een 0",

               withdrawObject: "ramasser l'objet",
               dropObject: "déposer l'objet",
               onObject: "sur un objet",
               onNumber: "sur un nombre",
               onWritable: "sur un tableau",
               onLauncher: "sur un lanceur laser",
               pushObject: "pousser l'objet",
               pushableInFront: "poussable devant",
               shoot: "tirer au laser dans la direction %1",
               shoot_noShadow: "tirer au laser dans la direction %1",
               shootCondition: "retour départ tir direction %1",
               shootCondition_noShadow: "retour départ tir direction %1"

            },
            code: {
               wait: "wachten",
               right: "draaiRechts",
               left: "draaiLinks",
               turnAround: "draaiRechtsomkeer",
               jump: "springen",
               down: "dalen",
               forward: "vooruit",
               backwards: "achteruit",
               east: "rechts",
               south: "onder",
               west: "links",
               north: "boven",
               paint: "kleuren",
               pickTransportable: "nemen",
               dropTransportable: "loslaten",
               onTransportable: "opObject",
               onRoundObject: "opRond",
               onSquareObject: "opVierkant",
               onTriangleObject: "opDriehoek",
               onDottedObject: "opGestippeld",
               onFullObject: "opVolgekleurd",
               onStripedObject: "opGestreept",
               onHole: "opGat",
               onContainer: "opContainer",
               transportableShape: "vormObject",
               transportableColor: "kleurObject",
               transportableRed: "objectRood",
               transportableBlue: "objectBlauw",
               transportableSquare: "objectVierkant",
               greenCell: "vakjeGroen",
               brownCell: "vakjeBruin",
               markedCell: "vakjeGemarkeerd",
               platformInFront: "platformVoor",
               addPlatformAbove: "maakPlatformBoven",
               addPlatformInFront: "maakPlatformVoor",
               platformInFrontAndBelow: "platformVoorOnder",
               platformAbove: "platformBoven",
               gridEdgeInFront: "randGridVoor",
               obstacleInFront: "obstakelVoor",
               gridEdgeEast: "randGridRechts",
               gridEdgeWest: "randGridLinks",
               gridEdgeAbove: "randGridBoven",
               gridEdgeBelow: "randGridOnder",
               obstacleRight: "obstakelRechts",
               obstacleLeft: "obstakelLinks",
               obstacleEast: "obstakelRechts",
               obstacleWest: "obstakelLinks",
               obstacleNorth: "obstakelBoven",
               obstacleSouth: "obstakelOnder",
               paintInFront: "kleurVoor",
               paintOnCell: "kleurOpVakje",
               paintNorthWest: "kleurLinksboven",
               paintNorth: "kleurBoven",
               paintNorthEast: "kleurRechtsboven",
               colorUnder: "kleurVakje",
               numberUnder: "nummerVakje",
               readNumber: "nummerVakje",
               writeNumber: "schrijfNummer",
               dir: "richting",
               col: "kolom",
               row: "rij",
               alert: "letOp",
               onPill: "opPil",

               number: "aantalTransportables",
               exists: "bestaatTransportable",
               trans_row: "rijTransportable",
               trans_col: "kolomTransportable",

               decrement: "trekEenAf",
               numberIsZero: "nummerIsNul",

               jump: "sauter",
               gridEdgeNorth: "bordGrilleHaut",
               gridEdgeSouth: "bordGrilleBas",
               withdrawObject: "ramasserObjet",
               dropObject: "deposerObjet",
               onObject: "surObjet",
               onContainer: "surConteneur",
               onNumber: "surNombre",
               onWritable: "surTableau",
               onLauncher: "surLanceur",
               pushObject: "pousserObjet",
               pushableInFront: "poussableDevant",
               shoot: "tirerLaser",
               shoot_noShadow: "tirerLaser",
               shootCondition: "tirerCondition",
               shootCondition_noShadow: "tirerCondition"
            },
            messages: {
               nothingToPickUp: "Niets op te rapen.",
               alreadyTransporting: "De robot draagt al iets.",
               notTransporting: "De robot probeert iets neer te zetten maar draagt niets.",
               successDroppedAllObjects: "Bravo, je hebt alle objecten neergezet!",
               successMarkersPainted: "Bravo, je robot heeft de tekening gemaakt!",
               failureMarkersPainted: "De robot heeft niet de juiste vakjes gekleurd.",
               successPickedAllCollectibles: "Bravo, je robot heeft alles opgeraapt!",
               failurePickedAllCollectibles: "Je robot heeft niet alles opgeraapt!",
               successReachGeenArea: "Bravo, de robot heeft de groene zone bereikt!",
               failureReachGeenArea: "De robot heeft de groene zone niet bereikt!",
               successOneMarbleInHole: "Bravo, je hebt de knikker opgeruimd!",
               successAllMarblesInHoles: "Bravo, je hebt alle knikkers opgeruimd!",
               failureOneMarbleInHole: "De knikker is niet opgeruimd!",
               failureAllMarblesInHoles: "Niet alle knikkers zijn opgeruimd!",
               leavesGrid: "De robot probeer het rooster te verlaten!",
               obstacle: "De robot probeert zich op een obstakel te plaatsen !",
               nothingToLookAt: "Er is noch een kaart noch een container op dit vakje !",
               falls: "De robot gaat zich in de leegte storten !",
               willFallAndCrash: "De robot gaat van een hoogte vallen en neerstorten !",
               jumpOutsideGrid: "De robot probeert buiten het rooster te springen !",
               jumpObstacleBlocking: "De robot probeert te springen, maar er staat een obstakel in de weg.",
               jumpNoPlatform: "De robot probeert te springen, maar staat niet onder een platform !",
               tooManyObjects: "De robot probeert te veel tegelijkertijd te dragen !",
               emptyBag: "De robot probeert iets neer te zetten maar draagt niets !",
               successReachExit: "Bravo, jouw robot heeft de uitgang bereikt !",
               failureReachExit: "Jouw robot heeft de uitgang niet bereikt.",
               successPickedAllWithdrawables: "Bravo, jouw robot heeft alles opgeruimd !",
               failurePickedAllWithdrawables: "Jouw robot heeft niet alles opgeruimd.",
               successContainersFilled: "Bravo, jouw robot heeft alle containers gevuld",
               failureContainersFilled: "Er is een object dat niet in een container zit",
               failureContainersFilledLess: "Jouw robot heeft niet alle containers gevuld",
               failureContainersFilledBag: "Jouw robot heeft niet alles neergezet",
               failureUnfilteredObject: "Jouw robot heeft een ongeldig object opgeruimd",
               failureTooManyMoves: "Jouw robot heeft teveel stappen gezet.",
               failureWriteHere: "Jouw robot kan hier niet schrijven !",
               failureReadHere: "Er is hier geen getal geschreven !",
               successNumbersWritten: "Bravo, jouw robot heeft de juiste getallen geschreven !",
               failureNumbersWritten: "Jouw robot heeft niet de juiste getallen geschreven !",
               failureNothingToPush: "Er is geen object om te duwen !",
               failureWhilePushing: "De robot kan dit object niet duwen !",
               failureDropObject: "Hier kan je geen objecten neerzetten",
               failureDropOutside: "Jouw robot probeert een object buiten het rooster te plaatsen",
               failureNotEnoughPlatform: "Niet genoeg platformen",
               failureLights: "Er branden nog lichten.",
               successLights: "Bravo, jouw robot heeft alle lichten aangestoken !",
               failureLaser: "De robot moet op een laserterminal staan om te kunnen schieten !"
            },
            description: {
               platformAbove: "platformBoven() : is er een platform boven de robot?",
               obstacleInFront: "obstakelVoor() : is er een obstakel recht voor de robot?",
               onHole: "opGat() : staat de robot op een gat?",
               onTransportable: "opObject() : staat de robot op een verplaatsbaar object?",
               onRoundObject: "opRond() : staat de robot op een rond object?",
               onSquareObject: "opVierkant() : staat de robot op een vierkant object?",
               onTriangleObject: "opDriehoek() : staat de robot op een driehoekig object?",
               onDottedObject: "opGestippeld() : staat de robot op een gestippeld object?",
               onFullObject: "opVolgekleurd() : staat de robot op een volgekleurd object?",
               onStripedObject: "opGestreept() : staat de robot op een gestreept object?",
               paintOnCell: "kleurOpVakje() : staat de robot op een ingekleurd vakje?",
               gridEdgeInFront: "randGridVoor() : staat de robot voor de rand van het rooster?",
               gridEdgeEast: "randGridRechts() : is de rand van het rooster direct rechts van de robot?",
               gridEdgeWest: "randGridLinks() : is de rand van het rooster direct links van de robot?",
               gridEdgeAbove: "randGridBoven() : is de rand van het rooster direct boven de robot?",
               gridEdgeBelow: "randGridOnder() : is de rand van het rooster direct onde de robot?",
               platformInFront: "platformVoor() : is er een platform recht voor de robot?",
               numberUnder: "nummerVakje() : nummer van geschreven op het vakje van de robot",
               col: "kolom() : kolom van de robot",
               row: "rij() : rij van de robot",
               paintNorth: "kleurBoven() : is het vakje boven gekleurd??",
               paintNorthWest: "kleurLinksboven() : is het vakje linksboven gekleurd?",
               paintNorthEast: "kleurRechtsboven() : is het vakje rechtsboven gekleurd?",
               writeNumber: "schrijfNummer(nummer) : schrijf dit nummer op het vakje van de robot",
               decrement: "trekEenAf(): trek 1 af van het nummer van het vakje van de robot"
            },
            obstacle: "De robot probeert zich te verplaatsen op een obstakel!",
            startingBlockName: "Programma van de robot",
            exit_grid: "De robot verlaat het rooster!",
            nothingToPickUp: "Niets op te rapen",
            alreadyTransportingObject: "De robot draagt al iets",
            jumpOutsideGrid: "De robot probeert uit het rooster te springen!",
            jumpObstacleBlocking: "De robot probeert te springen maar er is een obstakel dat blokkeert",
            jumpNoPlatform: "De robot probeert te springen maar er is geen platform boven!",
            downOutsideGrid: "De robot probeert te dalen tot buiten het rooster!",
            downNoPlatform: "De robot probeert te dalen maar er is geen platform onder!",
            falls: "De robot gooit zich in de leegte",
            willFallAndCrash: "De robot gaat vallen van de hoogte en crashen!",
            dropWithoutItem: "De robot probeert iets los te laten maar draagt niets.",
            droppedAllItems: "Bravo, je hebt alle objecten neergezet!",
            obstacleOnCell: "Er is een obstakel op dit vakje",
            platformOnCell: "Er is al een platform op dit vakje"
         },

         en: {
            label: {
               row: "row of the robot",
               col: "column of the robot",
               north: "move north",
               south: "move south",
               east: "move east",
               west: "move west",
               left: "left turn",
               right: "right turn",
               turnAround: "turn around",
               forward: "forward",
               backwards: "backwards",
               jump: "jump",
               obstacleInFront: "obstacle in front",
               obstacleEast: "obstacle east",
               obstacleWest: "obstacle west",
               obstacleNorth: "obstacle north",
               obstacleSouth: "obstacle south",
               obstacleRight: "obstacle to the right",
               obstacleLeft: "obstacle to the left",
               gridEdgeEast: "grid edge east",
               gridEdgeWest: "grid edge west",
               gridEdgeNorth: "grid edge north",
               gridEdgeSouth: "grid edge south",
               platformInFront: "platform in front",
               platformAbove: "platform above",
               withdrawObject: "withdraw the object",
               dropObject: "drop the object",
               onObject: "on an objet",
               onContainer: "on a container",
               onNumber: "on a number",
               onWritable: "on a board",
               onLauncher: "on a laser launcher",
               writeNumber: "write the number",
               readNumber: "read the number",
               pushObject: "push the object",
               pushableInFront: "pushable in front",
               shoot: "shoot the laser in %1 direction",
               shoot_noShadow: "shoot the laser in the %1 direction",
               shootCondition: "return from shooting direction %1",
               shootCondition_noShadow: "reeturn from shooting direction %1"
            },
            code: {
               row: "RobotRow",
               col: "RobotColumn",
               north: "north",
               south: "south",
               east: "east",
               west: "west",
               left: "turnleft",
               right: "turnright",
               turnAround: "turnAround",
               forward: "forward",
               backwards: "backwards",
               jump: "jump",
               obstacleInFront: "obstacleInFront",
               obstacleEast: "obstacleEast",
               obstacleWest: "obstacleWest",
               obstacleNorth: "obstacleNorth",
               obstacleSouth: "obstacleSouth",
               obstacleRight: "obstacleRight",
               obstacleLeft: "obstacleLeft",
               gridEdgeEast: "gridEdgeEast",
               gridEdgeWest: "gridEdgeWest",
               gridEdgeNorth: "gridEdgeNorth",
               gridEdgeSouth: "gridEdgeSouth",
               platformInFront: "platformInFront",
               platformAbove: "platformAbove",
               withdrawObject: "withdrawObject",
               dropObject: "dropObject",
               onObject: "onObject",
               onContainer: "onContainer",
               onNumber: " onNumber",
               onWritable: "onWritable",
               onLauncher: "onLauncher",
               writeNumber: "writeNumber",
               readNumber: "readNumber",
               pushObject: "pushObject",
               pushableInFront: "pushableInFront",
               shoot: "shootLaser",
               shoot_noShadow: "shootLaser",
               shootCondition: "shootCondition",
               shootCondition_noShadow: "shootCondition"
            },
            messages: {
               leavesGrid: "The robot leaves the grid !",
               obstacle: "The robot tries to move over an obstacle!",
               nothingToPickUp: "There is nothing to pick up!",
               nothingToLookAt: "There is nothing to look at.",
               falls: "The robot will fall!",
               willFallAndCrash: "The robot will fall and crash!",
               jumpOutsideGrid: "The robot tries to jump outside the grid !",
               jumpObstacleBlocking: "The rbot tries to jump but there is an obstacle blocking it",
               jumpNoPlatform: "The robot tries to jump but there is no platform above!",
               tooManyObjects: "The robot tries to transport too many objects at the same time!",
               emptyBag: "The robot tries to deposit an object while it is not transporting one !",
               successReachExit: "Well done, your robot has reached the exit!",
               failureReachExit: "Your robot has not reached the exit! ",
               successPickedAllWithdrawables: "Well done, your robot has picked everything up!",
               failurePickedAllWithdrawables: "Your robot has not picked everything up!",
               successContainersFilled: "Well done, your robot has filled all the containers",
               failureContainersFilled: "There is an object left outside the containers",
               failureContainersFilledLess: "Your robot has not filled all the containers",
               failureContainersFilledBag: "Your robot has not placed all the objects",
               failureUnfilteredObject: "Your robot picked up an invalid object",
               failureTooManyMoves: "Your robot has done too many moves",
               failureWriteHere: "Your robot cannot write here !",
               failureReadHere: "There is no number written here!",
               successNumbersWritten: "Well done, your robot has written the right numbers !",
               failureNumbersWritten: "Your robot has not written the right numbers !",
               failureNothingToPush: "There is nothing to push!",
               failureWhilePushing: "The robot cannnot push this object!",
               failureDropObject: "Objects cannot be dropped here",
               failureDropOutside: "Your robot cannot drop an object outside the grid",
               failureNotEnoughPlatform: "Not enough platformes",
               failureLights: "There are still lights to put on.",
               successLights: "Well done, your robot has put on all the lights!",
               failureLaser: "The robot must be on a laser terminal to be able to fire !"
            },
            startingBlockName: "Robot Program"
         }
      },
      arrows: {
         fr: {
            messages: {
               obstacle: "Le robot va sortir du parcours fléché !",
               successReachExit: "Bravo, votre robot a récupéré le coffre !",
               failureReachExit: "Votre robot s'est perdu en chemin."
            }
         },

         es: {
            messages: {
               obstacle: "¡El robot va a salirse del camino marcado!",
               successReachExit: "Bravo, ¡su robot ha recuperado el cofre!",
               failureReachExit: "Su robot se perdió en el camino."
            }
         }
      },
      cards: {
         fr: {
            label: {
               withdrawObject: "ramasser la carte",
               dropObject: "déposer la carte",
               onObject: "sur une carte",
               onContainer: "sur un emplacement de dépôt",
            },
             messages: {
               successContainersFilled: "Bravo, votre robot a rangé les cartes au bon endroit !",
               failureContainersFilled: "Il y a des cartes mal rangées",
               failureContainersFilledLess: "Il y a encore des cartes à ranger.",
               failureContainersFilledBag: "Votre robot doit déposer sa carte."
            }
         },

         es: {
            label: {
               withdrawObject: "recoger la carta",
               dropObject: "soltar la carta",
               onObject: "sobre una carta",
               onContainer: "en un sitio de depósito",
            },
             messages: {
               successContainersFilled: "Bravo, su robot ha ordenado las cartas en un buen lugar!",
               failureContainersFilled: "Hay cartas ordenadas incorrectamente.",
               failureContainersFilledLess: "Aún quedan cartas sin ordenar.",
               failureContainersFilledBag: "Su robot debe depositar su carta."
            }
         }
      },
      chticode_abs: {
         fr: {
            label: {

            },
             messages: {
               successPickedAllWithdrawables: "Bravo, votre robot a réussi la mission !",
               failureReachExit: "Votre robot n'a pas atteint la case verte."
            }
         },

         es: {
            label: {

            },
             messages: {
               successPickedAllWithdrawables: "Bravo, ¡su robot ha completado la misión!",
               failureReachExit: "Su robot no llegó a la casilla verde."
            }
         }
      },
      chticode_rel: {
         fr: {
            label: {

            },
             messages: {
               successReachExit: "Bravo, votre robot a atteint la case verte !",
               failureReachExit: "Votre robot n'a pas atteint la case verte."
            }
         },

         es: {
            label: {

            },
             messages: {
               successReachExit: "Bravo, ¡su robot llegó a la casilla verde!",
               failureReachExit: "Su robot no ha llegado a la casilla verde."
            }
         }
      },
      cones: {
         fr: {
            label: {
               dropObject: "déposer un plot",
               onContainer: "sur une case marquée",
               obstacleInFront: "plot devant"
            },
            code: {
               dropObject: "deposerPlot",
               onContainer: "surCaseMarquee",
               obstacleInFront: "plotDevant"
            },
            messages: {
               successContainersFilled: "Bravo, votre robot a déposé des plots sur les bonnes cases !",
               failureContainersFilled: "Il manque des plots ou ils ne sont pas au bon endroit."
            }
         },

         en: {
            label: {
               dropObject: "drop a cone",
               onContainer: "on marked cell",
               obstacleInFront: "cone in front"
            },
            code: {
               dropObject: "dropCone",
               onContainer: "onMarkedCell",
               obstacleInFront: "coneInFront"
            },
            messages: {
               successContainersFilled: "Congratulations, your robot has dropped all cones on the right cells !",
               failureContainersFilled: "Some cones are missing or are not at the right place."
            }
         },

         nl: {
            label: {
               dropObject: "een kegel plaatsen",
               onContainer: "op een gemarkeerd vak",
               obstacleInFront: "kegel voor"
            },
            code: {
               dropObject: "kegelPlaatsen",
               onContainer: "opGemarkeerdVak",
               obstacleInFront: "kegelVoor"
            },
            messages: {
               successContainersFilled: "Bravo, je robot heeft kegels geplaatst op de juiste vakjes!",
               failureContainersFilled: "Er ontbreken nog kegels of ze staan niet op de juiste plaats."
            }
         },

         de: {
            label: {
               dropObject: "eine Markierung setzen",
               onContainer: "auf eine Box mit Aufschrift",
               obstacleInFront: "Markierung voraus"
            },
            code: {
               dropObject: "markierungSetzen",
               onContainer: "aufMarkierterBox",
               obstacleInFront: "markierungVoraus"
            },
            messages: {
               successContainersFilled: "Glückwunsch, dein Roboter hat Markierungen auf die richtigen Boxen gesetzt!",
               failureContainersFilled: "Es fehlen einige Markierungen oder sie sind an der falschen Stelle."
            }
         },

         es: {
            label: {
               dropObject: "soltar un cono",
               onContainer: "sobre una casilla marcada",
               obstacleInFront: "cono adelante"
            },
            code: {
               dropObject: "soltarCono",
               onContainer: "sobreCasillaMarcada",
               obstacleInFront: "conoAdelante"
            },
            messages: {
               successContainersFilled: "Bravo, ¡Su robot ha puesto los conos en las casillas correctas!",
               failureContainersFilled: "Aún hay conos en lugares incorrectos."
            }
         }
      },
      flowers: {
         fr: {
            label: {
               dropObject: "semer une graine",
               onContainer: "terre sur la case",
               obstacleInFront: "fleur devant"
            },
            code: {
               dropObject: "semerGraine",
               onContainer: "terreSurCase",
               obstacleInFront: "fleurDevant"
            },
            messages: {
               successContainersFilled: "Bravo, votre robot est un bon jardinier !",
               failureContainersFilled: "Votre robot a semé hors des zones de terre.",
               failureContainersFilledLess: "Il reste de la terre vide de fleur !",
					obstacle: "Attention à la fleur !",
            }
         },

         en: {
            label: {
               dropObject: "sow a seed",
               onContainer: "on a plot of soil",
               obstacleInFront: "flower in front"
            },
            code: {
               dropObject: "sowSeed",
               onContainer: "onPlotOfSoil",
               obstacleInFront: "flowerInFront"
            },
            messages: {
               successContainersFilled: "Congratulations, your robot is a good gardener!",
               failureContainersFilled: "Your robot sowed seeds outside plots of soil!",
               failureContainersFilledLess: "Some plots of soil have no flower!",
               obstacle: "Beware of the flower!",
            }
         },

         es: {
            label: {
               dropObject: "sembrar una semilla",
               onContainer: "tierra en la casilla",
               obstacleInFront: "flor adelante"
            },
            code: {
               dropObject: "sembrarSemilla",
               onContainer: "tierraEnCasilla",
               obstacleInFront: "florAdelante"
            },
            messages: {
               successContainersFilled: "Bravo, ¡el robot es un gran jardinero!",
               failureContainersFilled: "El robot ha sembrado fuera de las casillas con tierra",
               failureContainersFilledLess: "¡Aún hay tierra sin flores!"
            }
         },

         nl: {
            label: {
               dropObject: "een zaadje zaaien",
               onContainer: "aarde op het vakje",
               obstacleInFront: "bloem voor"
            },
            code: {
               dropObject: "zaadjeZaaien",
               onContainer: "aardeOpVakje",
               obstacleInFront: "bloemVoor"
            },
            messages: {
               successContainersFilled: "Bravo, jouw robot is een goede tuinman!",
               failureContainersFilled: "Jouw robot heeft buiten de vakjes met aarde gezaaid.",
               failureContainersFilledLess: "Er is nog aarde zonder bloemen!",
					obstacle: "Opgepast voor de bloem!",
            }
         },

         de: {
            label: {
               dropObject: "Ein Samenkorn säen",
               onContainer: "Erde auf dem Feld",
               obstacleInFront: "Blume voraus"
            },
            code: {
               dropObject: "samenkornSaen",
               onContainer: "erdeAufFeld",
               obstacleInFront: "blumeVoraus"
            },
            messages: {
               successContainersFilled: "Bravo, dein Roboter ist ein guter Gärtner !",
               failureContainersFilled: "Dein Roboter hat ausserhalb der Erde gesät.",
               failureContainersFilledLess: "Es gibt noch Erde ohne Blumen !",
					obstacle: "Achtung, beachte die Blume !",
            }
         },

      },
      course: {
         fr: {
            messages: {
               successReachExit: "Bravo, le robot a atteint la case verte !",
               failureReachExit: "Le robot n'est pas arrivé sur la case verte.",
               obstacle: "Le robot tente de foncer dans un mur !"
            }
         },

         es: {
            messages: {
               successReachExit: "Bravo, ¡El robot llegó a la casilla verde!",
               failureReachExit: "El robot no llegó a la casilla verde.",
               obstacle: "¡El robot intenta traspasar un muro!"
            }
         }
      },
      dominoes: {
         fr: {
            label: {
               withdrawObject: "ramasser le domino",
            },
            code: {
               withdrawObject: "ramasserDomino"
            },
            messages: {
               "successPickedAllWithdrawables": "Bravo, le robot a ramassé tous les dominos demandés !",
               "failurePickedAllWithdrawables": "Le robot n'a pas ramassé les dominos demandés."
            }
         },
         es: {
            label: {
               withdrawObject: "recoger el dominó",
            },
            code: {
               withdrawObject: "recogerDomino"
            },
            messages: {
               "successPickedAllWithdrawables": "Bravo, ¡el robot recogió todos los dominó requeridos!",
               "failurePickedAllWithdrawables": "El robot no recogió todos los dominó requeridos."
            }
         }
      },
      gears: {
         fr: {
            label: {
               withdrawObject: "ramasser la roue dentée",
               dropObject: "accrocher la roue dentée",
               onObject: "sur une roue dentée",
               onContainer: "sur une machine"
            },
            code: {
               withdrawObject: "ramasserRoue",
               dropObject: "deposerRoue",
               onObject: "surRoueDentee",
               onContainer: "surMachine"
            },
            messages: {
               successContainersFilled: "Bravo, les machines sont prêtes à fonctionner !",
               failureContainersFilled: "Votre robot n'a pas replacé toutes les roues dentées au bon endroit.",
               failureContainersFilledLess: "Votre robot n'a pas replacé toutes les roues dentées au bon endroit.",
               failureContainersFilledBag: "Votre robot doit déposer la roue dentée sur la machine.",
               failureDropOutside: "Votre robot essaie de construire une plateforme hors de la grille.",
               failureDropObject: "Il y a déjà une plateforme ici !",
               emptyBag: "Le robot essaie d'accrocher une roue dentée alors qu'il n'en transporte pas !"
            }
         },

         es: {
            label: {
               withdrawObject: "recoger el engranaje",
               dropObject: "soltar el engranaje",
               onObject: "sobre engranaje",
               onContainer: "sur une machine"
            },
            code: {
               withdrawObject: "recogerEngranaje",
               dropObject: "soltarEngranaje",
               onObject: "sobreEngranaje",
               onContainer: "surMachine"
            },
            messages: {
               successContainersFilled: "Bravo, ¡la máquina está lista para funcionar!",
               failureContainersFilled: "Su robot no ha puesto todos los engranajes en el lugar correcto.",
               failureContainersFilledLess: "Su robot no ha puesto todos los engranajes en el lugar correcto.",
               failureContainersFilledBag: "Su robot debe colocar el engranaje en la máquina.",
               failureDropOutside: "Su robot intenta construir una plataforma fuera de la cuadrícula."
            }
         }
      },
      marbles: {
         fr: {
            label: {
               withdrawObject: "ramasser la bille",
               dropObject: "déposer la bille",
               onObject: "sur une bille",
               onContainer: "sur un trou",
            },
            code: {
               withdrawObject: "ramasserBille",
               dropObject: "deposerBille",
               onObject: "surBille",
               onContainer: "surTrou",
            },
            messages: {
               emptyBag: "Le robot ne porte pas de bille !",
               tooManyObjects: "Le robot porte déjà une bille !",
               successContainersFilled: "Bravo, vous avez rangé les billes !",
               failureContainersFilled: "Les billes ne sont pas toutes bien rangées.",
               failureContainersFilledLess: "Il reste une bille à ranger.",
               failureContainersFilledBag: "Il faut déposer la bille dans le trou !",
            }
         },

         es: {
            label: {
               withdrawObject: "recoger la bola",
               dropObject: "soltar la bola",
               onObject: "sobre una bola",
               onContainer: "sobre un agujero",
            },
            code: {
               withdrawObject: "recogerBola",
               dropObject: "soltarBola",
               onObject: "sobreBola",
               onContainer: "sobreAgujero",
            },
            messages: {
               emptyBag: "¡El robot no carga ninguna bola!",
               tooManyObjects: "¡El robot ya está cargando una bola!",
               successContainersFilled: "Bravo, ¡el robot ordenó las bolas!",
               failureContainersFilled: "Hay bolas en lugares incorrectos.",
               failureContainersFilledLess: "Aún falta colocar una bola.",
               failureContainersFilledBag: "¡Debe colocar la bola en un agujero!",
            }
         },

         nl: {
            label: {
               withdrawObject: "de knikker oprapen",
               dropObject: "de knikker neerleggen",
               onObject: "op een knikker",
               onContainer: "op een gat",
            },
            code: {
               withdrawObject: "knikkerOprapen",
               dropObject: "knikkerNeerleggen",
               onObject: "opKnikker",
               onContainer: "opGat",
            },
            messages: {
               emptyBag: "De robot draagt geen knikker!",
               tooManyObjects: "De robot draagt reeds een knikker!",
               successContainersFilled: "Bravo, je hebt de knikkers correct verlegd!",
               failureContainersFilled: "De knikkers zijn niet allemaal goed verlegd.",
               failureContainersFilledLess: "Je moet nog één knikker correct leggen.",
               failureContainersFilledBag: "Je moet de knikkers in een gat leggen!",
            }
         },

         de: {
            label: {
               withdrawObject: "die Kugel einsammeln",
               dropObject: "die Kugel absetzen",
               onObject: "auf einer Kugel",
               onContainer: "auf einem Loch",
            },
            code: {
               withdrawObject: "kugelEinsammeln",
               dropObject: "kugelAbsetzen",
               onObject: "aufKugel",
               onContainer: "aufLoch",
            },
            messages: {
               emptyBag: "Der Roboter trägt keine Kugel !",
               tooManyObjects: "Der Roboter trägt schon eine Kugel !",
               successContainersFilled: "Bravo, du hast alle Kugeln sortiert !",
               failureContainersFilled: "Nicht alle Kugeln sind richtig sortiert.",
               failureContainersFilledLess: "Eine Kugel muss noch sortiert werden.",
               failureContainersFilledBag: "Du musst die Kugel in einem Loch absetzen !",
            }
         },

      },
      objects_in_space: {
         fr: {
            label: {
               obstacleInFront: "astéroïde devant"
            },
            code: {
               obstacleInFront: "astéroideDevant"
            },
            messages: {
               obstacle: "Attention à l'astéroïde !"
            }
         },

         es: {
            label: {
               obstacleInFront: "asteroide adelante"
            },
            code: {
               obstacleInFront: "asteroideAdelante"
            },
            messages: {
               obstacle: "¡Cuidado con el asteroide!"
            }
         }
      },
      paint: {
         fr: {
             label: {
               dropObject: "peindre la case",
               onContainer: "sur une case marquée",
               readNumber: "nombre de la case",
             },
             code: {
                dropObject: "peindreCase",
                onContainer: "surCaseMarquee",
                readNumber: "nombreSurCase",
             },
             messages: {
               successContainersFilled: "Bravo, votre robot a peint le motif !",
               failureContainersFilled: "Votre robot n'a pas peint les bonnes cases.",
               failureContainersFilledLess: "Votre robot n'a pas peint toutes les cases marquées.",
               failureContainersFilledBag: "Votre robot n'a pas posé tous les objets",
             }
         },

         de: {
            label: {
              dropObject: "Feld ausmalen",
              onContainer: "auf ausgemaltem Feld",
              readNumber: "Zahl des Feldes",
            },
            code: {
               dropObject: "FeldAusmalen",
               onContainer: "aufAusgemaltemFeld",
               readNumber: "ZahlDesFeldes",
            },
            messages: {
              successContainersFilled: "Bravo, dein Roboter hat dein Feld ausgemalt !",
              failureContainersFilled: "Dein Roboter hat nicht die richtigen Felder ausgemalt.",
              failureContainersFilledLess: "Dein Roboter hat nicht alle Felder ausgemalt.",
              failureContainersFilledBag: "Dein Roboter hat nicht alle Objekte abgesetzt !",
            }
        },

         en: {
            label: {
               dropObject: "paint the cell",
               onContainer: "on a marked cell",
               readNumber: "cell number",
            },
            code: {
               dropObject: "paintCell",
               onContainer: "onMarkedCell",
               readNumber: "readNumber",
            },
            messages: {
               successContainersFilled: "Well done, your robot painted the pattern!",
               failureContainersFilled: "Your robot has not painted the right cells.",
               failureContainersFilledLess: "Your robot has not painted all the cells",
               failureContainersFilledBag: "Your robot has not placed all the objects.",
            }
         },


         nl: {
             label: {
               dropObject: "schilder het vakje",
               onContainer: "op een gemarkeerd vakje",
               readNumber: "nummer van het vakje",
             },
             code: {
                dropObject: "schilderVakje",
                onContainer: "opGemarkeerdVakje",
                readNumber: "nummerVanVakje",
             },
             messages: {
               successContainersFilled: "Proficiat, jouw robot heeft het motief geschilderd!",
               failureContainersFilled: "Jouw robot heeft niet de juiste vakjes geschilderd.",
               failureContainersFilledLess: "Jouw robot heeft niet alle gemarkeerde vakjes geschilderd.",
               failureContainersFilledBag: "Jouw robot heeft niet alle objecten geplaatst.",
             }
         },

         es: {
             label: {
               dropObject: "pintar la casilla",
               onContainer: "sobre una casilla marcada",
               readNumber: "número en la casilla",
             },
             code: {
                dropObject: "pintarCasilla",
                onContainer: "sobreCasillaMarcada",
                readNumber: "númeroEnCasilla",
             },
             messages: {
               successContainersFilled: "Bravo, ¡su robot ha pintado el patrón!",
               failureContainersFilled: "El robot no pintó las casillas correctas.",
               failureContainersFilledLess: "Su robot no ha pintado todas las casillas marcadas.",
               failureContainersFilledBag: "Su robot no ha puesto todos los objetos",
             }
         }
      },
      rocket: {
         fr: {
            label: {
               obstacleRight: "asteroïde à droite",
               obstacleInFront: "asteroïde devant",
            },
            messages: {
               successReachExit: "Bravo, le robot a rejoint la fusée !",
               failureReachExit: "Le robot est perdu dans l'espace. Recommencez pour l'aider à rejoindre la fusée.",
               obstacle: "Attention à l'astéroïde !"
            }
         },

         es: {
            label: {
               obstacleRight: "asteroide a la derecha",
               obstacleInFront: "asteroide adelante",
            },
            messages: {
               successReachExit: "Bravo, ¡el robot llegó al cohete!",
               failureReachExit: "El robot está perdido en el espacio. Vuelva a comenzar para ayudarle a llegar al cohete.",
               obstacle: "¡Cuidado con el asteroide!"
            }
         }
      },
      sokoban: {
         fr: {
            label: {
               pushObject: "pousser la caisse",
               onContainer: "sur une case marquée",
               pushableInFront: "caisse devant",
               obstacleInFront: "obstacle devant",
               readNumber: "nombre de la case"
            },
            code: {
               pushObject: "pousserCaisse",
               onContainer: "surCaseMarquee",
               pushableInFront: "caisseDevant",
               obstacleInFront: "obstacleDevant",
               readNumber: "nombreSurCase"
            },
            messages: {
               successContainersFilled: "Bravo, les caisses sont bien rangées !",
               failureContainersFilled: "Il y a encore des caisses qui ne sont pas à leur place.",
               failureNothingToPush: "Il n'y a pas de caisse à pousser ici !",
               failureWhilePushing: "Le robot ne peut pas pousser ici !",
               obstacle: "Le robot essaie de foncer dans un mur ou dans une caisse !"
            }
         },

         es: {
            label: {
               pushObject: "empujar la caja",
               onContainer: "sobre una casilla marcada",
               pushableInFront: "caja adelante",
               obstacleInFront: "obstáculo adelante",
               readNumber: "número en la casilla"
            },
            code: {
               pushObject: "empujarCaja",
               onContainer: "sobreCasillaMarcada",
               pushableInFront: "cajaAdelante",
               obstacleInFront: "obstáculoAdelante",
               readNumber: "númeroEnCasilla"
            },
            messages: {
               successContainersFilled: "Bravo, ¡las cajas están bien ordenadas!",
               failureContainersFilled: "Aún hay cajas que no están en su lugar.",
               failureNothingToPush: "¡Aquí no hay caja para empujar!",
               failureWhilePushing: "¡El robot no puede empujar aquí!",
               obstacle: "El robot intenta traspasar un muro o una caja!"
            }
         },

         nl: {
            label: {
               pushObject: "duw de kist vooruit",
               onContainer: "op een gemarkeerd vak",
               pushableInFront: "kist voor",
               obstacleInFront: "obstakel voor",
               readNumber: "nummer van de kist"
            },
            code: {
               pushObject: "duwKist",
               onContainer: "opGemarkeerdVak",
               pushableInFront: "kistVoor",
               obstacleInFront: "obstakelVoor",
               readNumber: "nummerVanKist"
            },
            messages: {
               successContainersFilled: "Proficiat, de kisten staan juist!",
               failureContainersFilled: "Er zijn nog kisten die niet op hun plaats staan.",
               failureNothingToPush: "Er is hier geen kist om tegen te duwen!",
               failureWhilePushing: "De robot kan hier niet duwen!",
               obstacle: "De robot botst tegen een muur of een kist!"
            }
         },

         de: {
            label: {
               pushObject: "schiebe die Kiste",
               onContainer: "auf einem markiertem Feld",
               pushableInFront: "kisteVoraus",
               obstacleInFront: "hindernisVoraus",
               readNumber: "Feldzahl"
            },
            code: {
               pushObject: "schiebeKiste",
               onContainer: "aufMarkiertemFeld",
               pushableInFront: "kisteVoraus",
               obstacleInFront: "hindernisVoraus",
               readNumber: "feldzahl"
            },
            messages: {
               successContainersFilled: "Bravo, die Kisten sind alle sortiert !",
               failureContainersFilled: "Es geben noch Kisten, die nicht an ihrer richtigen Stelle sind.",
               failureNothingToPush: "Hier kann keine Kiste geschoben werden !",
               failureWhilePushing: "Der Roboter kann hier nicht schieben !",
               obstacle: "Der Roboter versucht in eine Mauer oder in eine Kiste zu schieben !"
            }
         },

      },
   };

   var contextParams = {
      none: {
         hideSaveOrLoad: true,
         actionDelay: 200,
         ignoreInvalidMoves: false,
         checkEndEveryTurn: false,
         cellSide: 60
      },
      arrows: {
         newBlocks: [
            {
               name: "onRightArrow",
               strings: {
                  fr: {
                     label: "sur une flèche vers la droite",
                     code: "surFlecheDroite",
                     description: "surFlecheDroite(): Le robot est-il sur une flèche vers la droite ?"
                  },
                  es: {
                     label: "sobre una flecha hacia la derecha",
                     code: "sobreFlechaHaciaLaDerecha",
                     description: "sobreFlechaHaciaLaDerecha(): ¿Se encuentra el robot sobre una flecha hacia la derecha?"
                  }
               },
               category: "robot",
               type: "sensors",
               block: {
                  name: "onRightArrow",
                  yieldsValue: true
               },
               func: function(callback) {
                  this.callCallback(callback, this.isOn(function(obj) {return obj.forwardsRight===true;}));
               }
            },
            {
               name: "onLeftArrow",
               strings: {
                  fr: {
                     label: "sur une flèche vers la gauche",
                     code: "surFlecheGauche",
                     description: "surFlecheGauche(): Le robot est-il sur une flèche vers la gauche ?"
                  },

                  es: {
                     label: "sobre una flecha hacia la izquierda",
                     code: "sobreFlechaHaciaLaIzquierda",
                     description: "sobreFlechaHaciaLaIzquierda(): ¿Se encuentra el robot sobre una flecha hacia la izquierda?"
                  }
               },
               category: "robot",
               type: "sensors",
               block: {
                  name: "onLeftArrow",
                  yieldsValue: true
               },
               func: function(callback) {
                  this.callCallback(callback, this.isOn(function(obj) {return obj.forwardsLeft===true;}));
               }
            },
            {
               name: "onTopArrow",
               strings: {
                  fr: {
                     label: "sur une flèche vers le haut",
                     code: "surFlecheHaut",
                     description: "surFlecheHaut(): Le robot est-il sur une flèche vers le haut ?"
                  },

                  es: {
                     label: "sobre una flecha hacia arriba",
                     code: "sobreFlechaHaciaArriba",
                     description: "sobreFlechaHaciaArriba(): ¿Se encuentra el robot sobre una flecha hacia arriba?"
                  }
               },
               category: "robot",
               type: "sensors",
               block: {
                  name: "onTopArrow",
                  yieldsValue: true
               },
               func: function(callback) {
                  this.callCallback(callback, this.isOn(function(obj) {return obj.forwardsTop===true;}));
               }
            },
            {
               name: "onBottomArrow",
               strings: {
                  fr: {
                     label: "sur une flèche vers le bas",
                     code: "surFlecheBas",
                     description: "surFlecheBas(): Le robot est-il sur une flèche vers le bas ?"
                  },

                  es: {
                     label: "sobre una flecha hacia abajo",
                     code: "sobreFlechaHaciaAbajo",
                     description: "sobreFlechaHaciaAbajo(): ¿Se encuentra el robot sobre una flecha hacia abajo?"
                  }
               },
               category: "robot",
               type: "sensors",
               block: {
                  name: "onBottomArrow",
                  yieldsValue: true
               },
               func: function(callback) {
                  this.callCallback(callback, this.isOn(function(obj) {return obj.forwardsBottom===true;}));
               }
            }
         ],
         backgroundColor: "#d3e7b6",
         itemTypes: {
            red_robot: { img: "red_robot.png", side: 90, nbStates: 1, isRobot: true, offsetX: -15, offsetY: 15, zOrder: 2 },
            cell: {num: 1, color: "#d3e7b6", side: 60, isObstacle: true, zOrder: 0 },
            box: { num: 3, img: "box.png", side: 60, isExit: true },
            leftArrow: { num: 4, img: "leftArrow.png", side: 60, forwardsLeft: true, zOrder: 0},
            rightArrow: { num: 5, img: "rightArrow.png", side: 60, forwardsRight: true, zOrder: 0},
            topArrow: { num: 6, img: "topArrow.png", side: 60, forwardsTop: true, zOrder: 0},
            bottomArrow: { num: 7, img: "bottomArrow.png", side: 60, forwardsBottom: true, zOrder: 0}
         },
         checkEndCondition: robotEndConditions.checkReachExit
      },
      cards: {
         newBlocks: [
            {
               name: "onRound",
               strings: {
                  fr: {
                     label: "rond sur la carte",
                     code: "rondCarte",
                     description: "rondCarte(): Le robot est-il sur une carte qui contient un rond ?"
                  },

                  es: {
                     label: "círculo sobre la carta",
                     code: "círculoCarta",
                     description: "círculoCarta(): ¿está el robot sobre una carta que contiene un círculo?"
                  }
               },
               category: "robot",
               type: "sensors",
               block: {
                  name: "onRound",
                  yieldsValue: true
               },
               func: function(callback) {
                  if(!this.isOn(function(obj) {return obj.isWithdrawable===true || obj.isContainer===true;}))
                     throw(strings.messages.nothingToLookAt);
                  this.callCallback(callback, this.isOn(function(obj) {return obj.isRound===true;}));
               }
            },
            {
               name: "onSquare",
               strings: {
                  fr: {
                     label: "carré sur la carte",
                     code: "carreCarte",
                     description: "carreCarte(): Le robot est-il sur une carte qui contient un carré ?"
                  },
                  es: {
                     label: "cuadrado sobre la carta",
                     code: "cuadradoCarta",
                     description: "cuadradoCarta(): ¿está el robot sobre una carta que contiene un cuadrado?"
                  }
               },
               category: "robot",
               type: "sensors",
               block: {
                  name: "onSquare",
                  yieldsValue: true
               },
               func: function(callback) {
                  if(!this.isOn(function(obj) {return obj.isWithdrawable===true || obj.isContainer===true;}))
                     throw(strings.messages.nothingToLookAt);
                  this.callCallback(callback, this.isOn(function(obj) {return obj.isSquare===true;}));
               }
            },
            {
               name: "onTriangle",
               strings: {
                  fr: {
                     label: "triangle sur la carte",
                     code: "triangleCarte",
                     description: "rondCarte(): Le robot est-il sur une carte qui contient un triangle ?"
                  },
                  es: {
                     label: "triángulo sobre la carta",
                     code: "triánguloCarta",
                     description: "triánguloCarta(): ¿está el robot sobre una carta que contiene un triángulo?"
                  }
               },
               category: "robot",
               type: "sensors",
               block: {
                  name: "onTriangle",
                  yieldsValue: true
               },
               func: function(callback) {
                  if(!this.isOn(function(obj) {return obj.isWithdrawable===true || obj.isContainer===true;}))
                     throw(strings.messages.nothingToLookAt);
                  this.callCallback(callback, this.isOn(function(obj) {return obj.isTriangle===true;}));
               }
            },
            {
               name: "onQuadrille",
               strings: {
                  fr: {
                     label: "sur un motif quadrillé",
                     code: "surQuadrille",
                     description: "surQuadrille(): Le robot est-il sur une carte quadrillée ?"
                  },
                  es: {
                     label: "patrón cuadriculado",
                     code: "sobreCudarícula",
                     description: "sobreCudarícula(): ¿Está el robot sobre una carta cuadriculada?"
                  }
               },
               category: "robot",
               type: "sensors",
               block: {
                  name: "onQuadrille",
                  yieldsValue: true
               },
               func: function(callback) {
                  if(!this.isOn(function(obj) {return obj.isWithdrawable===true || obj.isContainer===true;}))
                     throw(strings.messages.nothingToLookAt);
                  this.callCallback(callback, this.isOn(function(obj) {return obj.isQuadrille===true;}));
               }
            },
            {
               name: "onStriped",
               strings: {
                  fr: {
                     label: "sur un motif rayé",
                     code: "surRaye",
                     description: "surRaye(): Le robot est-il sur une carte rayée ?"
                  },
                  es: {
                     label: "patrón rayado",
                     code: "sobreRayado",
                     description: "sobreRayado(): ¿Está el robot sobre una carta rayada?"
                  }
               },
               category: "robot",
               type: "sensors",
               block: {
                  name: "onStriped",
                  yieldsValue: true
               },
               func: function(callback) {
                  if(!this.isOn(function(obj) {return obj.isWithdrawable===true || obj.isContainer===true;}))
                     throw(strings.messages.nothingToLookAt);
                  this.callCallback(callback, this.isOn(function(obj) {return obj.isStriped===true;}));
               }
            },
            {
               name: "onDotted",
               strings: {
                  fr: {
                     label: "sur un motif à pois",
                     code: "surPois",
                     description: "surPois(): Le robot est-il sur une carte à pois ?"
                  },
                  es: {
                     label: "patrón con puntos",
                     code: "sobrePuntos",
                     description: "sobrePuntos(): ¿Está el robot sobre una carta con puntos?"
                  }
               },
               category: "robot",
               type: "sensors",
               block: {
                  name: "onDotted",
                  yieldsValue: true
               },
               func: function(callback) {
                  if(!this.isOn(function(obj) {return obj.isWithdrawable===true || obj.isContainer===true;}))
                     throw(strings.messages.nothingToLookAt);
                  this.callCallback(callback, this.isOn(function(obj) {return obj.isDotted===true ;}));
               }
            }
         ],
         bagSize: 1,
         backgroundColor: "#abeaf4",
         itemTypes: {
            red_robot: { img: "red_robot.png", side: 90, nbStates: 1, isRobot: true, offsetX: -15, offsetY: 15, zOrder: 2 },
            square: { num: 2, img: "purple.png", side: 60, isContainer: true, containerFilter: function(obj) { return obj.isSquare === true; }, zOrder: 0 },
            round: { num: 3, img: "green.png", side: 60, isContainer: true, containerFilter: function(obj) { return obj.isRound === true; }, zOrder: 0 },
            triangle: { num: 4, img: "orange.png", side: 60, isContainer: true, containerFilter: function(obj) { return obj.isTriangle === true; }, zOrder: 0 },
            dotted: { num: 5, img: "dotted.png", side: 60, isContainer: true, containerFilter: function(obj) { return obj.isDotted === true; }, zOrder: 0 },
            striped: { num: 6, img: "striped.png", side: 60, isContainer: true, containerFilter: function(obj) { return obj.isStriped === true; }, zOrder: 0 },
            quadrille: { num: 7, img: "quadrille.png", side: 60, isContainer: true, containerFilter: function(obj) { return obj.isQuadrille === true; }, zOrder: 0 },
            roundQuadrille: { img: "roundQuadrille.png", side: 60, isWithdrawable: true, isRound: true, isQuadrille: true, zOrder: 1 },
            squareQuadrille: { img: "squareQuadrille.png", side: 60, isWithdrawable: true, isSquare: true, isQuadrille: true, zOrder: 1 },
            triangleQuadrille: { img: "triangleQuadrille.png", side: 60, isWithdrawable: true, isTriangle: true, isQuadrille: true, zOrder: 1 },
            roundStriped: { img: "roundStriped.png", side: 60, isWithdrawable: true, isRound: true, isStriped: true, zOrder: 1 },
            squareStriped: { img: "squareStriped.png", side: 60, isWithdrawable: true, isSquare: true, isStriped: true, zOrder: 1 },
            triangleStriped: { img: "triangleStriped.png", side: 60, isWithdrawable: true, isTriangle: true, isStriped: true, zOrder: 1 },
            roundDotted: { img: "roundDotted.png", side: 60, isWithdrawable: true, isRound: true, isDotted: true, zOrder: 1 },
            squareDotted: { img: "squareDotted.png", side: 60, isWithdrawable: true, isSquare: true, isDotted: true, zOrder: 1 },
            triangleDotted: { img: "triangleDotted.png", side: 60, isWithdrawable: true, isTriangle: true, isDotted: true, zOrder: 1 }
         },
         checkEndCondition: robotEndConditions.checkContainersFilled
      },
      chticode_abs: {
         itemTypes: {
            red_robot: { img: "red_robot.png", side: 90, nbStates: 1, isRobot: true, offsetX: -15, offsetY: 15, zOrder: 2 },
            obstacle: { num: 2, img: "obstacle.png", side: 60, isObstacle: true },
            green: { num: 3, color: "#b5e61d", side: 60, isExit: true, zOrder: 0 },
            gem: { num: 4, img: "gem.png", side: 60, isWithdrawable: true, autoWithdraw: true, zOrder: 1 }
         },
         checkEndCondition: robotEndConditions.checkBothReachAndCollect
      },
      chticode_rel: {
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -14, zOrder: 2 },
            obstacle: { num: 2, img: "obstacle.png", side: 60, isObstacle: true },
            green: { num: 3, color: "#b5e61d", side: 60, isExit: true},
            gem: { num: 4, img: "gem.png", side: 60, isWithdrawable: true, autoWithdraw: true, zOrder: 1 }
         },
         checkEndCondition: robotEndConditions.checkReachExit
      },
      cones: {
         bagInit: {
           count: 200,
           type: "cone"
         },
         backgroundColor: "#f9f9c1",
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, zOrder: 2 },
            marker: { num: 2, img: "marker.png", side: 60, isContainer: true, zOrder: 0 },
            cone: { num: 3, img: "cone.png", side: 60, isWithdrawable: true, isObstacle: true, zOrder: 1 },
            contour: { num: 4, img: "contour.png", side: 60, zOrder: 1 },
            fixed_cone: { num: 5, img: "cone.png", side: 60, isObstacle: true, zOrder: 1 },
            number: { num: 6, side: 60, zOrder: 1 }
         },
         checkEndCondition: robotEndConditions.checkContainersFilled
      },
      flowers: {
         bagInit: {
           count: 200,
           type: "flower"
         },
         backgroundColor: "#f9f9c1",
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, zOrder: 2 },
            marker: { num: 2, img: "marker.png", side: 60, isContainer: true, zOrder: 0 },
            flower: { num: 3, img: "flower.png", side: 60, isWithdrawable: true, isObstacle: true, zOrder: 1 },
            fixed_flower: { num: 5, img: "fixed_flower_fixed.png", side: 60, isObstacle: true, zOrder: 1 }
         },
         checkEndCondition: robotEndConditions.checkContainersFilled
      },
      course: {
         itemTypes: {
            red_robot: { img: "red_robot.png", side: 70, nbStates: 1, offsetX: -5, offsetY: 5, isRobot: true, zOrder: 2 },
            obstacle: { num: 2, img: "obstacle.png", side: 60, isObstacle: true, zOrder: 0 },
            green: { num: 3, color: "#b5e61d", side: 60, isExit: true, zOrder: 0},
            number: { num: 5, side: 60, zOrder: 1 },
            top_horizontal_closed_door: { num: 6, img: "top_horizontal_closed_door.png", side: 60, isObstacle: true, zOrder: 1 },
            bottom_horizontal_closed_door: { num: 7, img: "bottom_horizontal_closed_door.png", side: 60, isObstacle: true, zOrder: 1 },
            left_vertical_closed_door: { num: 8, img: "left_vertical_closed_door.png", side: 60, isObstacle: true, zOrder: 1 },
            right_vertical_closed_door: { num: 9, img: "right_vertical_closed_door.png", side: 60, isObstacle: true, zOrder: 1 },
            top_horizontal_open_door: { num: 10, img: "top_horizontal_open_door.png", side: 60, zOrder: 1},
            bottom_horizontal_open_door: { num: 11, img: "bottom_horizontal_open_door.png", side: 60, zOrder: 1},
            left_vertical_open_door: { num: 12, img: "left_vertical_open_door.png", side: 60, zOrder: 1},
            right_vertical_open_door: { num: 13, img: "right_vertical_open_door.png", side: 60, zOrder: 1},
         },
         checkEndCondition: robotEndConditions.checkReachExit
      },
      dominoes: {
         newBlocks: [
           {
             name: "onCross",
             strings: {
               fr: {
                 label: "sur croix",
                 code: "surCroix",
                 description: "surCroix(): Le robot est-il sur une croix ?"
               },
               es: {
                 label: "sobre cruz",
                 code: "sobreCruz",
                 description: "sobreCruz(): ¿Se encuentra el robot sobre una cruz?"
               }
             },
             category: "robot",
             type: "sensors",
             block: {
               name: "onCross",
               yieldsValue: true
             },
             func: function(callback) {
               this.callCallback(callback, this.isOn(function(obj) {return obj.isCross===true;}));
             }
           },
           {
             name: "onStar",
             strings: {
               fr: {
                 label: "sur étoile",
                 code: "surEtoile",
                 description: "surEtoile(): Le robot est-il sur une étoile ?"
               },
               es: {
                 label: "sobre estrella",
                 code: "sobreEstrella",
                 description: "sobreEstrella(): ¿Se encuentra el robot sobre una estrella?"
               }
             },
             category: "robot",
             type: "sensors",
             block: {
               name: "onStar",
               yieldsValue: true
             },
             func: function(callback) {
               this.callCallback(callback, this.isOn(function(obj) {return obj.isStar===true;}));
             }
           },
           {
             name: "onSquare",
             strings: {
               fr: {
                 label: "sur carré",
                 code: "surCarre",
                 description: "surCarre(): Le robot est-il sur du bleu ?"
               },
               es: {
                 label: "sobre cuadrado",
                 code: "sobreCuadrado",
                 description: "sobreCuadrado(): ¿Se encuentra el robot sobre un cuadrado?"
               }
             },
             category: "robot",
             type: "sensors",
             block: {
               name: "onSquare",
               yieldsValue: true
             },
             func: function(callback) {
               this.callCallback(callback, this.isOn(function(obj) {return obj.isSquare===true;}));
             }
           }
         ],
         noBorders: true,
         backgroundColor: "#a40e0e",
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, zOrder: 2 },
            contour: { num: 2, img: "contour.png", side: 60, zOrder: 0 },
            GG: { num: 3, img: "GG.png", side: 60, isWithdrawable: true, isCross: true, zOrder: 1 },
            GO: { num: 4, img: "GO.png", side: 60, isWithdrawable: true, isCross: true, isStar: true, zOrder: 1 },
            GB: { num: 5, img: "GB.png", side: 60, isWithdrawable: true, isCross: true, isSquare: true, zOrder: 1 },
            OG: { num: 6, img: "OG.png", side: 60, isWithdrawable: true, isStar: true, isCross: true, zOrder: 1 },
            OO: { num: 7, img: "OO.png", side: 60, isWithdrawable: true, isStar: true, zOrder: 1 },
            OB: { num: 8, img: "OB.png", side: 60, isWithdrawable: true, isStar: true, isSquare: true, zOrder: 1 },
            BG: { num: 9, img: "BG.png", side: 60, isWithdrawable: true, isSquare: true, isCross: true, zOrder: 1 },
            BO: { num: 10, img: "BO.png", side: 60, isWithdrawable: true, isSquare: true, isStar: true, zOrder: 1 },
            BB: { num: 11, img: "BB.png", side: 60, isWithdrawable: true, isSquare: true, zOrder: 1 },
            board_background: { num: 12, color: "#ffffff", side: 60, zOrder: 0 },
            board: {num: 13, side: 60, isWritable: true, zOrder: 1 }
         }
      },
      gears: {
         newBlocks: [
           {
             name: "dropPlatformInFront",
             strings: {
               fr: {
                 label: "construire une plateforme devant",
                 code: "construirePlateformeDevant"
               },
               es: {
                  label: "Construir una plataforma adelante",
                  code: "construirPlataformaAdelante"
               }
             },
             category: "robot",
             type: "actions",
             block: {
               name: "dropPlatformInFront"
             },
             func: function(callback) {
               if(this.nbPlatforms == 0)
                  throw(window.languageStrings.messages.failureNotEnoughPlatform);
               var coords = {row: this.coordsInFront().row + 1, col: this.coordsInFront().col};
               if(this.getItemsOn(coords.row, coords.col, function(item) { return item.isObstacle === true; }).length != 0) {
                  throw(window.languageStrings.messages.failureDropObject);
               }
               this.nbPlatforms -= 1;
               this.dropObject({type: "platform"}, coords);
               this.callCallback(callback);
             }
           },
            {
             name: "dropPlatformAbove",
             strings: {
               fr: {
                 label: "construire une plateforme au-dessus",
                 code: "construirePlateformeAuDessus"
               },
               es: {
                  label: "Construir una plataforma arriba",
                  code: "construirPlataformaArriba"
               }
             },
             category: "robot",
             type: "actions",
             block: {
               name: "dropPlatformAbove"
             },
             func: function(callback) {
               if(this.nbPlatforms == 0)
                  throw(window.languageStrings.messages.failureNotEnoughPlatform);
               var coords = {row: this.getRobot().row - 1, col: this.getRobot().col};
               if(this.getItemsOn(coords.row, coords.col, function(item) { return item.isObstacle === true; }).length != 0) {
                  throw(window.languageStrings.messages.failureDropObject);
               }
               this.nbPlatforms -= 1;
               this.dropObject({type: "platform"}, coords);
               this.callCallback(callback);
             }
           }
         ],
         backgroundColor: "#f2f1e3",
         hasGravity: true,
         bagSize: 1,
         containerSize: 1,
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, offsetY: 3, zOrder: 3 },
            platform: { num: 2, img: "platform.png", side: 60, isObstacle: true, zOrder: 0 },
            gears: { num: 4, img: "gears.png", side: 60, isContainer: true, zOrder: 1},
            wheel: { num:5, img: "wheel.png", side: 60, isWithdrawable: true, zOrder: 2}
         },
         checkEndCondition: robotEndConditions.checkContainersFilled
      },
      gems: {
         backgroundColor: "#e6b5d3",
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, zOrder: 2 },
            gem: { num: 3, img: "gem.png", side: 60, isWithdrawable: true, autoWithdraw: true, zOrder: 1 },
            obstacle: { num: 4, img: "obstacle.png", side: 60, isObstacle: true, zOrder: 0 },
            number: { num: 5, side: 60, zOrder: 1 }
         },
         checkEndCondition: robotEndConditions.checkPickedAllWithdrawables
      },
      help: {
         newBlocks: [
            {
               name: "onGreen",
               strings: {
                  fr: {
                     label: "sur la case verte",
                     code: "surCaseVerte",
                     description: "surCaseVerte(): Le robot est-il sur la case verte ?"
                  },
                  es: {
                     label: "sobre la casilla verde",
                     code: "sobreCasillaVerde",
                     description: "sobreCasillaVerde(): ¿Se encuentra el robot sobre la casilla verde?"
                  }
               },
               category: "robot",
               type: "sensors",
               block: {
                  name: "onGreen",
                  yieldsValue: true
               },
               func: function(callback) {
                  this.callCallback(callback, this.isOn(function(obj) {return obj.isGreen===true;}));
               }
            },
         ],
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, zOrder: 2 },
            obstacle: { num: 2, img: "obstacle.png", side: 60, isObstacle: true },
            green: { num: 3, color: "#b5e61d", side: 60, isGreen: true, isExit: true},
            number: { num: 4, side: 60, zOrder: 1 },
            board: {num: 5, side: 60, isWritable: true, zOrder: 1 },
            object: {num: 6, img: "object.png", side : 40, isWithdrawable: true, autoWithdraw: true, offsetX: 10, offsetY: -10, zOrder: 1}
         },
         checkEndCondition: robotEndConditions.checkReachExit
      },
      laser: {
         backgroundColor: "#33237a",
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, zOrder: 2, isOpaque: true },
            obstacle: { num: 2, img: "obstacle.png", side: 60, isObstacle: true, isOpaque: true },
            light: { num: 3, img: "off_spot.png", states: ["off_spot.png", "on_spot.png"], isLight: true, state: 0, side: 60 },
            launcher: { num: 5, img: "launcher.png", isLaser: true, side: 60 },
            mirrorN: { num: 6, img: "mirrorN.png", isMirror: true, mirrorFunction: function(dir) { return (14 - dir) % 8; }, side: 60 },
            mirrorZ: { num: 7, img: "mirrorZ.png", isMirror: true, mirrorFunction: function(dir) { return (10 - dir) % 8; }, side: 60 },
            mirrorH: { num: 8, img: "mirrorH.png", isMirror: true, mirrorFunction: function(dir) { return (12 - dir) % 8; }, side: 60 },
            mirrorI: { num: 9, img: "mirrorI.png", isMirror: true, mirrorFunction: function(dir) { return (8 - dir) % 8; }, side: 60 },
         },
         checkEndCondition: robotEndConditions.checkLights
      },
      marbles: {
         bagSize: 1,
         backgroundColor: "#dadada",
         itemTypes: {
            red_robot: { img: "red_robot.png", side: 90, nbStates: 1, isRobot: true,  offsetX: -15, offsetY: 15, zOrder: 2 },
            hole: { num: 3, img: "hole.png", side: 60, isContainer: true, zOrder: 0 },

            marble: { num: 4, img: "marble.png", side: 60, isWithdrawable: true, zOrder: 1 },
            number: { num: 5, side: 60, zOrder: 1 },
            board: { num: 6, side: 60, isWritable: true, zOrder: 1 },
         },
         checkEndCondition: robotEndConditions.checkContainersFilled
      },
      objects_in_space: {
         backgroundColor: "#666699",
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, zOrder: 2 },
            stars: { num: 3, img: "stars.png", side: 60, zOrder: 0},
            objet1: { num: 4, img: "objet1.png", side: 60, isWithdrawable: true, zOrder: 1 },
            objet2: { num: 5, img: "objet2.png", side: 60, isWithdrawable: true, zOrder: 1 },
            obstacle: { num: 6, img: "asteroide.png", side: 60, isObstacle: true, zOrder: 0 }
         },
         checkEndCondition: robotEndConditions.checkPickedAllWithdrawables
      },
      paint: {
         newBlocks: [
            {
               name: "onPaint",
               strings: {
                  fr: {
                     label: "peinture sur la case",
                     code: "surPeinture",
                     description: "surPeinture(): Le robot est-il sur une case déjà peinte ?"
                  },
                  es: {
                     label: "casilla pintada",
                     code: "casillaPintada",
                     description: "casillaPintada(): ¿El robot se encuentra sobre una casilla pintada?"
                  },
                  nl: {
                     label: "op geverfd vakje",
                     code: "kleurOpVakje",
                     description: "kleurOpVakje() : staat de robot op een ingekleurd vakje?"
                  },
                  en: {
                     label: "paint on cell",
                     code: "paintOnCell",
                     description: "paintOnCell() : whether the robot is a painted cell"
                  },
                  de: {
                     label: "Farbe auf Feld",
                     code: "farbeAufFeld",
                     description: "farbeAufFeld(): Le robot est-il sur une case déjà peinte ?"
                  }
               },
               category: "robot",
               type: "sensors",
               block: {
                  name: "onPaint",
                  yieldsValue: true
               },
               func: function(callback) {
                  this.callCallback(callback, this.isOn(function(obj) {return obj.isPaint===true;}));
               }
            }
         ],
         bagInit: {
           count: 200,
           type: "paint"
         },
         backgroundColor: "#ffbf5e",
         itemTypes: {
            red_robot: { img: "red_robot.png", side: 90, nbStates: 1, isRobot: true, offsetX: -15, offsetY: 15, zOrder: 2 },
            initialPaint: { num: 2, color: "#2e1de5", side: 60, isPaint: true, zOrder: 1 },
            marker: { num: 3, img: "marker.png", side: 60, isContainer: true, zOrder: 0 },
            marker_white: { num: 4, img: "marker_white.png", isContainer: true, isFake: true, side: 60, zOrder: 0 },
            paint: { color: "#2e1de5", side: 60, isWithdrawable: true, zOrder: 1 },
            number: { side: 60, zOrder: 1 },
            board_background: { num: 5, color: "#ffffff", side: 60, zOrder: 0 },
            board: { side: 60, isWritable: true, zOrder: 1 }
         },
         checkEndCondition: robotEndConditions.checkContainersFilled
      },
      rocket: {
         backgroundColor: "#666699",
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, zOrder: 2 },
            stars: { num: 3, img: "stars.png", side: 60, zOrder: 0},
            asteroide: { num: 4, img: "asteroide.png", side: 60, isObstacle: true, zOrder: 1 },
            rocket: { num: 5, img: "rocket.png", side: 60, isExit: true, zOrder: 1 },
            obstacle: { num: 6, img: "obstacle.png", side: 60, isObstacle: true, zOrder: 1 },
            objet1: { num: 7, img: "objet1.png", side: 60, isWithdrawable: true, zOrder: 1 },
            objet2: { num: 8, img: "objet2.png", side: 60, isWithdrawable: true, zOrder: 1 },
            number: { side: 60, zOrder: 1 }
         },
         checkEndCondition: robotEndConditions.checkReachExit
      },
      sokoban: {
         backgroundColor: "#ffeead",
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, zOrder: 2 },
            wall: { num: 2, img: "wall.png", side: 60, isObstacle: true, zOrder: 0 },
            marker: { num: 3, img: "marker.png", side: 60, isContainer: true, zOrder: 0 },
            box: { num: 4, img: "box.png", side: 60, isObstacle: true, isPushable: true, isWithdrawable: true, zOrder: 1 },
            number: { num: 5, side: 60, zOrder: 1 }
         },
         checkEndCondition: robotEndConditions.checkContainersFilled
      },
      beoi2020bruno: {
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, zOrder: 2 },
            wall: { num: 5, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true },
            0: { num: 10, side: 60, category: "number", isObstacle: false, value: 0, zOrder: 3, isWritable: true },
            1: { num: 11, side: 60, category: "number", isObstacle: false, value: 1, zOrder: 3, isWritable: true },
            2: { num: 12, side: 60, category: "number", isObstacle: false, value: 2, zOrder: 3, isWritable: true },
            3: { num: 13, side: 60, category: "number", isObstacle: false, value: 3, zOrder: 3, isWritable: true },
            4: { num: 14, side: 60, category: "number", isObstacle: false, value: 4, zOrder: 3, isWritable: true },
            5: { num: 15, side: 60, category: "number", isObstacle: false, value: 5, zOrder: 3, isWritable: true },
            6: { num: 16, side: 60, category: "number", isObstacle: false, value: 6, zOrder: 3, isWritable: true },
            7: { num: 17, side: 60, category: "number", isObstacle: false, value: 7, zOrder: 3, isWritable: true },
            8: { num: 18, side: 60, category: "number", isObstacle: false, value: 8, zOrder: 3, isWritable: true },
            9: { num: 19, side: 60, category: "number", isObstacle: false, value: 9, zOrder: 3, isWritable: true }
         }
      },
      beoi2020q08: {
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, zOrder: 2 },
            marker: { num: 2, img: "marker.png", side: 60, isContainer: true, zOrder: 0 },
            cone: { num: 3, img: "cone.png", side: 60, isWithdrawable: true, isObstacle: true, zOrder: 1 },
            contour: { num: 4, img: "contour.png", side: 60, zOrder: 1 },
            fixed_cone: { num: 5, img: "radioactive.png", side: 60, isObstacle: true, zOrder: 1 },
            number: { num: 6, side: 60, zOrder: 1 }
         }
      },
      beoi2022qcolor: {
         itemTypes: {
            green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, zOrder: 2 },
            red: { num: 5, side: 60, category: "paint", color: "red", isObstacle: false, hasColor: true },
            blue: { num: 6, side: 60, category: "paint", color: "blue", isObstacle: false, hasColor: true },
         }
      }

   };
   var iconSrc = $("img[src$='icon.png']").attr("src");
   var imgPrefix = iconSrc.substring(0, iconSrc.length - 8);

   if(infos.newBlocks == undefined)
      infos.newBlocks = [];
   if(infos.maxFallAltitude == undefined)
      infos.maxFallAltitude = 2;

   var loadContext = function(name) {
      for(var language in contextStrings[name]) {
         var ctx = contextStrings[name][language];
         for(var type in ctx) {
            if((typeof ctx[type]) === "string") {
               localLanguageStrings[language][type] = ctx[type];
            }
            else {
               if(localLanguageStrings[language][type] == undefined)
                  localLanguageStrings[language][type] = {};
               for(var line in ctx[type]) {
                  localLanguageStrings[language][type][line] = ctx[type][line];
               }
            }
         }
      }

      for(var param in contextParams[name]) {
         if(infos[param] === undefined || param == "newBlocks") {
            infos[param] = contextParams[name][param];
         }
      }
   };

   loadContext("none");
   if(infos.contextType != undefined) {
      loadContext(infos.contextType);
   }

   infos.newBlocks.push({
      name: "row",
      type: "sensors",
      block: { name: "row", yieldsValue: 'int' },
      func: function(callback) {
         this.callCallback(callback, 1 + this.getRobot().row);
      }
   });

   infos.newBlocks.push({
      name: "col",
      type: "sensors",
      block: { name: "col", yieldsValue: 'int' },
      func: function(callback) {
         this.callCallback(callback, 1 + this.getRobot().col);
      }
   });

   infos.newBlocks.push({
      name: "north",
      type: "actions",
      block: { name: "north" },
      func: function(callback) {
         this.north(callback);
      }
   });

   infos.newBlocks.push({
      name: "south",
      type: "actions",
      block: { name: "south" },
      func: function(callback) {
         this.south(callback);
      }
   });

   infos.newBlocks.push({
      name: "east",
      type: "actions",
      block: { name: "east" },
      func: function(callback) {
         this.east(callback);
      }
   });

   infos.newBlocks.push({
      name: "west",
      type: "actions",
      block: { name: "west" },
      func: function(callback) {
         this.west(callback);
      }
   });

   infos.newBlocks.push({
      name: "left",
      type: "actions",
      block: { name: "left" },
      func: function(callback) {
         this.turnLeft(callback);
      }
   });

   infos.newBlocks.push({
      name: "right",
      type: "actions",
      block: { name: "right" },
      func: function(callback) {
         this.turnRight(callback);
      }
   });

   infos.newBlocks.push({
      name: "turnAround",
      type: "actions",
      block: { name: "turnAround" },
      func: function(callback) {
         this.turnAround(callback);
      }
   });

   infos.newBlocks.push({
      name: "forward",
      type: "actions",
      block: { name: "forward" },
      func: function(callback) {
         this.forward(callback);
      }
   });

   infos.newBlocks.push({
      name: "backwards",
      type: "actions",
      block: { name: "backwards" },
      func: function(callback) {
         this.backwards(callback);
      }
   });

   infos.newBlocks.push({
      name: "jump",
      type: "actions",
      block: { name: "jump" },
      func: function(callback) {
         this.jump(callback);
      }
   });

   infos.newBlocks.push({
      name: "obstacleInFront",
      type: "sensors",
      block: { name: "obstacleInFront", yieldsValue: true },
      func: function(callback) {
         this.callCallback(callback, this.obstacleInFront());
      }
   });

   infos.newBlocks.push({
      name: "obstacleEast",
      type: "sensors",
      block: { name: "obstacleEast", yieldsValue: true },
      func: function(callback) {
         var robot = this.getRobot();
         this.callCallback(callback, this.hasOn(robot.row, robot.col + 1, function(obj) { return obj.isObstacle === true; }));
      }
   });

   infos.newBlocks.push({
      name: "obstacleWest",
      type: "sensors",
      block: { name: "obstacleWest", yieldsValue: true },
      func: function(callback) {
         var robot = this.getRobot();
         this.callCallback(callback, this.hasOn(robot.row, robot.col - 1, function(obj) { return obj.isObstacle === true; }));
      }
   });

   infos.newBlocks.push({
      name: "obstacleNorth",
      type: "sensors",
      block: { name: "obstacleNorth", yieldsValue: true },
      func: function(callback) {
         var robot = this.getRobot();
         this.callCallback(callback, this.hasOn(robot.row - 1, robot.col, function(obj) { return obj.isObstacle === true; }));
      }
   });

   infos.newBlocks.push({
      name: "obstacleSouth",
      type: "sensors",
      block: { name: "obstacleSouth", yieldsValue: true },
      func: function(callback) {
         var robot = this.getRobot();
         this.callCallback(callback, this.hasOn(robot.row + 1, robot.col, function(obj) { return obj.isObstacle === true; }));
      }
   });

   infos.newBlocks.push({
      name: "obstacleRight",
      type: "sensors",
      block: { name: "obstacleRight", yieldsValue: true },
      func: function(callback) {
         var robot = this.getRobot();
         var coords = this.coordsInFront(1);
         this.callCallback(callback, this.hasOn(coords.row, coords.col, function(obj) { return obj.isObstacle === true; }));
      }
   });

   infos.newBlocks.push({
      name: "obstacleLeft",
      type: "sensors",
      block: { name: "obstacleLeft", yieldsValue: true },
      func: function(callback) {
         var robot = this.getRobot();
         var coords = this.coordsInFront(3);
         this.callCallback(callback, this.hasOn(coords.row, coords.col, function(obj) { return obj.isObstacle === true; }));
      }
   });

   infos.newBlocks.push({
      name: "gridEdgeEast",
      type: "sensors",
      block: { name: "gridEdgeEast", yieldsValue: true },
      func: function(callback) {
         var robot = this.getRobot();
         this.callCallback(callback, !this.isInGrid(robot.row, robot.col + 1));
      }
   });

   infos.newBlocks.push({
      name: "gridEdgeWest",
      type: "sensors",
      block: { name: "gridEdgeWest", yieldsValue: true },
      func: function(callback) {
         var robot = this.getRobot();
         this.callCallback(callback, !this.isInGrid(robot.row, robot.col - 1));
      }
   });

   infos.newBlocks.push({
      name: "gridEdgeNorth",
      type: "sensors",
      block: { name: "gridEdgeNorth", yieldsValue: true },
      func: function(callback) {
         var robot = this.getRobot();
         this.callCallback(callback, !this.isInGrid(robot.row - 1, robot.col));
      }
   });

   infos.newBlocks.push({
      name: "gridEdgeSouth",
      type: "sensors",
      block: { name: "gridEdgeSouth", yieldsValue: true },
      func: function(callback) {
         var robot = this.getRobot();
         this.callCallback(callback, !this.isInGrid(robot.row + 1, robot.col));
      }
   });

   infos.newBlocks.push({
      name: "platformInFront",
      type: "sensors",
      block: { name: "platformInFront", yieldsValue: true },
      func: function(callback) {
         this.callCallback(callback, this.platformInFront());
      }
   });

   infos.newBlocks.push({
      name: "platformAbove",
      type: "sensors",
      block: { name: "platformAbove", yieldsValue: true },
      func: function(callback) {
         this.callCallback(callback, this.platformAbove());
      }
   });

   infos.newBlocks.push({
      name: "withdrawObject",
      type: "actions",
      block: { name: "withdrawObject" },
      func: function(callback) {
         this.withdraw();
         this.waitDelay(callback);
      }
   });

   infos.newBlocks.push({
      name: "dropObject",
      type: "actions",
      block: { name: "dropObject" },
      func: function(callback) {
         this.drop();
         this.waitDelay(callback);
      }
   });

   infos.newBlocks.push({
      name: "onObject",
      type: "sensors",
      block: { name: "onObject", yieldsValue: true },
      func: function(callback) {
         this.callCallback(callback, this.isOn(function(obj) { return obj.isWithdrawable === true;}));
      }
   });

   infos.newBlocks.push({
      name: "onContainer",
      type: "sensors",
      block: { name: "onContainer", yieldsValue: true },
      func: function(callback) {
         this.callCallback(callback, this.isOn(function(obj) { return obj.isContainer === true;}));
      }
   });

   infos.newBlocks.push({
      name: "onNumber",
      type: "sensors",
      block: { name: "onNumber", yieldsValue: true },
      func: function(callback) {
         this.callCallback(callback, this.isOn(function(obj) { return obj.value !== undefined;}));
      }
   });

	infos.newBlocks.push({
      name: "onLauncher",
      type: "sensors",
      block: { name: "onLauncher", yieldsValue: true },
      func: function(callback) {
         this.callCallback(callback, this.isOn(function(obj) { return obj.isLaser === true;}));
      }
   });

   infos.newBlocks.push({
      name: "onWritable",
      type: "sensors",
      block: { name: "onWritable", yieldsValue: true },
      func: function(callback) {
         this.callCallback(callback, this.isOn(function(obj) { return obj.isWritable === true; }));
      }
   });

   infos.newBlocks.push({
      name: "writeNumber",
      type: "actions",
      block: { name: "writeNumber", params: [null] },
      func: function(value, callback) {
         var robot = this.getRobot();
         this.writeNumber(robot.row, robot.col, value);
         this.waitDelay(callback);
      }
   });

   infos.newBlocks.push({
      name: "readNumber",
      type: "sensors",
      block: { name: "readNumber", yieldsValue: true },
      func: function(callback) {
         var robot = this.getRobot();
         this.callCallback(callback, this.readNumber(robot.row, robot.col));
      }
   });

   infos.newBlocks.push({
      name: "pushObject",
      type: "actions",
      block: { name: "pushObject" },
      func: function(callback) {
         this.pushObject(callback);
      }
   });

   infos.newBlocks.push({
      name: "pushableInFront",
      type: "sensors",
      block: { name: "pushableInFront", yieldsValue: true },
      func: function(callback) {
         this.callCallback(callback, this.isInFront(function(obj) { return obj.isPushable === true; }));
      }
   });

   infos.newBlocks.push({
      name: "dropInFront",
      type: "actions",
      block: { name: "dropInFront" },
      func: function(callback) {
         this.drop(1, this.coordsInFront());
         this.callCallback(callback);
      }
   });

   infos.newBlocks.push({
      name: "dropAbove",
      type: "actions",
      block: { name: "dropAbove" },
      func: function(callback) {
         this.drop(1, {row: this.getRobot().row - 1, col: this.getRobot().col});
         this.callCallback(callback);
      }
   });

   infos.newBlocks.push({
      name: "shoot_noShadow",
      type: "actions",
      block: {
         name: "shoot_noShadow",
         params: [null]
      },
      func: function(value, callback) {
         if((typeof value) == "function") {
            this.callCallback(value);
            return;
         }
         if(this.isOn(function(obj) { return obj.isLaser === true; })) {
            this.shoot(this.getRobot().row, this.getRobot().col, value);
            if(this.display) {
               var robot = this.getRobot();
               var lasers = context.getItemsOn(robot.row, robot.col, function(obj) {
                  return obj.isLaser === true;
               });

               if(lasers.length != 0) {
                  lasers[0].element.toFront();
               }

               robot.element.toFront();
            }
         }
         else {
            throw(window.languageStrings.messages.failureLaser);
         }
         this.waitDelay(callback);
      }
   });

   infos.newBlocks.push({
      name: "shoot",
      type: "actions",
      block: { name: "shoot", blocklyXml: "<block type='shoot_noShadow'>" +
                              "  <value name='PARAM_0'>" +
                              "    <shadow type='math_number'>" +
                              "      <field name='NUM'>0</field>" +
                              "    </shadow>" +
                              "  </value>" +
                              "</block>"},
      func: function(value, callback) {
         if((typeof value) == "function") {
            this.callCallback(value);
            return;
         }
         if(this.isOn(function(obj) { return obj.isLaser === true; })) {
            this.shoot(this.getRobot().row, this.getRobot().col, value);
            if(this.display) {
               var robot = this.getRobot();
               var lasers = context.getItemsOn(robot.row, robot.col, function(obj) {
                  return obj.isLaser === true;
               });

               if(lasers.length != 0) {
                  lasers[0].element.toFront();
               }

               robot.element.toFront();
            }
         }
         else {
            throw(window.languageStrings.messages.failureLaser);
         }
         this.waitDelay(callback);
      }
   });

   infos.newBlocks.push({
      name: "shootCondition_noShadow",
      type: "actions",
      block: {
         name: "shootCondition_noShadow",
         params: [null],
         yieldsValue: true
      },
      func: function(value, callback) {
         if((typeof value) == "function") {
            this.callCallback(value);
            return;
         }

         if(this.isOn(function(obj) { return obj.isLaser === true; })) {
            var retour = this.shoot(this.getRobot().row, this.getRobot().col, value);
            if(this.display) {
               var robot = this.getRobot();
               var lasers = context.getItemsOn(robot.row, robot.col, function(obj) {
                  return obj.isLaser === true;
               });

               if(lasers.length != 0) {
                  lasers[0].element.toFront();
               }

               robot.element.toFront();
            }
            this.waitDelay(callback, retour);
         }
         else {
            throw(window.languageStrings.messages.failureLaser);
            this.callCallback(callback);
         }
      }
   });

   infos.newBlocks.push({
      name: "shootCondition",
      type: "actions",
      block: { name: "shootCondition", blocklyXml: "<block type='shootCondition_noShadow'>" +
                              "  <value name='PARAM_0'>" +
                              "    <shadow type='math_number'>" +
                              "      <field name='NUM'>0</field>" +
                              "    </shadow>" +
                              "  </value>" +
                              "</block>"},
      func: function(value, callback) {
         if((typeof value) == "function") {
            this.callCallback(value);
            return;
         }

         if(this.isOn(function(obj) { return obj.isLaser === true; })) {
            var retour = this.shoot(this.getRobot().row, this.getRobot().col, value);
            if(this.display) {
               var robot = this.getRobot();
               var lasers = context.getItemsOn(robot.row, robot.col, function(obj) {
                  return obj.isLaser === true;
               });

               if(lasers.length != 0) {
                  lasers[0].element.toFront();
               }

               robot.element.toFront();
            }
            this.waitDelay(callback, retour);
         }
         else {
            throw(window.languageStrings.messages.failureLaser);
            this.callCallback(callback);
         }
      }
   });

   var context = quickAlgoContext(display, infos);
   context.robot = {};
   context.customBlocks = {
      robot: {
         actions: [],
         sensors: []
      }
   };

   for(var command in infos.newBlocks) {
      cmd = infos.newBlocks[command];
      context.customBlocks.robot[cmd.type].push(cmd.block);
      if(cmd.strings) {
         for(var language in cmd.strings) {
            for(var type in cmd.strings[language]) {
               localLanguageStrings[language][type][cmd.name] = cmd.strings[language][type];
            }
         }
      }
      if(cmd.func) {
         context.robot[cmd.name] = cmd.func.bind(context);
      }
   }

   var strings = context.setLocalLanguageStrings(localLanguageStrings);

   function replaceStringsRec(source, dest) {

      if((typeof source != "object") || (typeof dest != "object")) {
         return;
      }
      for(var key1 in source) {
         if(dest[key1] != undefined) {
            if(typeof dest[key1] == "object") {
               replaceStringsRec(source[key1], dest[key1]);
            }
            else {
               dest[key1] = source[key1];
            }
         }
      }
   }

   if(infos.languageStrings != undefined) {
      replaceStringsRec(infos.languageStrings.blocklyRobot_lib, strings);
   }

   var cells = [];
   var colsLabels = [];
   var rowsLabels = [];
   var scale = 1;
   var paper;

   if(infos.leftMargin === undefined) {
      infos.leftMargin = 10;
   }
   if(infos.rightMargin === undefined) {
      infos.rightMargin = 10;
   }
   if(infos.bottomMargin === undefined) {
      infos.bottomMargin = 10;
   }
   if(infos.topMargin === undefined) {
      if(infos.showLabels) {
         infos.topMargin = 10;
      }
      else {
         infos.topMargin = infos.cellSide / 2;
      }
   }
   if(infos.showLabels) {
      infos.leftMargin += infos.cellSide;
      infos.topMargin += infos.cellSide;
   }

   switch(infos.blocklyColourTheme) {
      case "bwinf":
         context.provideBlocklyColours = function() {
            return {
               categories: {
                  logic: 100,
                  loops: 180,
                  math: 220,
                  text: 250,
                  lists: 60,
                  colour: 310,
                  variables: 340,
                  functions: 20,
                  actions: 260,
                  sensors : 340,
                  _default: 280
               },
               blocks: {}
            };
         }
         break;
      default:
   }

   context.reset = function(gridInfos) {
      if(gridInfos) {
         context.tiles = gridInfos.tiles;
         context.initItems = gridInfos.initItems;
         context.nbRows = context.tiles.length;
         context.nbCols = context.tiles[0].length;
      }
      context.nbPlatforms = infos.nbPlatforms;
      context.items = [];
      context.lost = false;
      context.success = false;
      context.nbMoves = 0;
      context.bag = [];

      if(infos.bagInit != undefined) {
         for(var i = 0;i < infos.bagInit.count;i++) {
            var item = {};

            var initItem = infos.itemTypes[infos.bagInit.type];

            item.type = infos.bagInit.type;
            item.side = 0;
            item.offsetX = 0;
            item.offsetY = 0;
            item.nbStates = 1;
            item.zOrder = 0;
            for(var property in initItem) {
               item[property] = initItem[property];
            }

            context.bag.push(item);
         }
      }

      if(context.display) {
         context.resetDisplay();
         $("#nbMoves").html(context.nbMoves);
      }
      else {
         resetItems();
      }
   };

   context.resetDisplay = function() {
      this.delayFactory.destroyAll();
      this.raphaelFactory.destroyAll();
      paper = this.raphaelFactory.create("paperMain", "grid", infos.cellSide * context.nbCols * scale, infos.cellSide * context.nbRows * scale);
      resetBoard();
      resetItems();
      context.updateScale();
   };

   context.unload = function() {
      if(context.display && paper != null) {
         paper.remove();
      }
   };

   var itemAttributes = function(item) {
      var itemType = infos.itemTypes[item.type];
      var x = (infos.cellSide * item.col + item.offsetX + infos.leftMargin) * scale;
      var y = (infos.cellSide * item.row - (item.side - infos.cellSide) + item.offsetY + infos.topMargin) * scale;
      var xClip = x;
      if(item.dir != undefined) {
         var dirToState = [0, 2, 4, 6];
         x = x - (dirToState[item.dir] * item.side * scale);
      }
      var clipRect = "" + xClip + "," + y + "," + (item.side * scale) + "," + (item.side * scale);
      if(!itemType.img && !itemType.color) {
         x += item.side * scale / 2;
         y += item.side * scale / 2;
      }

      var ret = {x: x, y: y, width: item.side * item.nbStates * scale, height: item.side * scale, "clip-rect": clipRect};
      return ret;//{x: x, y: y, width: item.side * item.nbStates * scale, height: item.side * scale, "clip-rect": clipRect};
   }

   var resetBoard = function() {
      for(var iRow = 0;iRow < context.nbRows;iRow++) {
         cells[iRow] = [];
         for(var iCol = 0;iCol < context.nbCols;iCol++) {
            cells[iRow][iCol] = paper.rect(0, 0, 10, 10);
            if(context.tiles[iRow][iCol] == 0)
               cells[iRow][iCol].attr({'stroke-width': '0'});
            if(infos.backgroundColor && context.tiles[iRow][iCol] != 0)
               cells[iRow][iCol].attr({'fill': infos.backgroundColor});
            if(infos.noBorders && context.tiles[iRow][iCol] != 0)
               cells[iRow][iCol].attr({'stroke': infos.backgroundColor});
         }
      }
      if(infos.showLabels) {
         for(var iRow = 0;iRow < context.nbRows;iRow++) {
            rowsLabels[iRow] = paper.text(0, 0, (iRow + 1));
         }
         for(var iCol = 0;iCol < context.nbCols;iCol++) {
            colsLabels[iCol] = paper.text(0, 0, (iCol + 1));
         }
      }
   };

   var resetItem = function(initItem, redisplay) {
      if(redisplay === undefined)
         redisplay = true;
      var item = {};
      context.items.push(item);
      for(var property in initItem) {
         item[property] = initItem[property];
      }

      item.side = 0;
      item.offsetX = 0;
      item.offsetY = 0;
      item.nbStates = 1;
      item.zOrder = 0;
      for(var property in infos.itemTypes[item.type]) {
         item[property] = infos.itemTypes[item.type][property];
      }
      if(context.display && redisplay) {
         redisplayItem(item);
      }
   };

   var resetItems = function() {
      context.items = [];
      var itemTypeByNum = {};
      for(var type in infos.itemTypes) {
         var itemType = infos.itemTypes[type];
         if(itemType.num != undefined) {
            itemTypeByNum[itemType.num] = type;
         }
      }
      for(var iRow = 0;iRow < context.nbRows;iRow++) {
         for(var iCol = 0;iCol < context.nbCols;iCol++) {
            var itemTypeNum = context.tiles[iRow][iCol];
            if(itemTypeByNum[itemTypeNum] != undefined) {
               resetItem({
                  row: iRow,
                  col: iCol,
                  type: itemTypeByNum[itemTypeNum]
               }, false);
            }
         }
      }
      for(var iItem = context.initItems.length - 1;iItem >= 0;iItem--) {
         resetItem(context.initItems[iItem], false);
      }

      if(context.display)
         redisplayAllItems();
   };

   var resetItemsZOrder = function(row, col) {
      var cellItems = [];
      for(var iItem = context.items.length - 1;iItem >= 0;iItem--) {
         var item = context.items[iItem];
         if((item.row == row) && (item.col == col)) {
            cellItems.push(item);
         }
      }
      cellItems.sort(function(itemA, itemB) {
         if(itemA.zOrder < itemB.zOrder) {
            return -1;
         }
         if(itemA.zOrder > itemB.zOrder) {
            return 1;
         }
         return 0;
      });
      for(var iItem = 0;iItem < cellItems.length;iItem++) {
         if(cellItems[iItem].element)
         cellItems[iItem].element.toFront();
      }
   };

   var redisplayItem = function(item, resetZOrder) {
      if(resetZOrder === undefined)
         resetZOrder = true;
      if(item.element != null) {
         item.element.remove();
      }
      var x = (infos.cellSide * item.col + infos.leftMargin) * scale;
      var y = (infos.cellSide * item.row + infos.topMargin) * scale;
      var itemType = infos.itemTypes[item.type];
      if(item.img) {
         item.element = paper.image(imgPrefix + item.img, x, y, item.side * item.nbStates * scale, item.side * scale);
      }
      else if(item.value !== undefined) {
         item.element = paper.text(x + item.side * scale / 2, y + item.side * scale / 2, item.value).attr({"font-size": item.side * scale / 2});
      }
      else if(item.color !== undefined) {
         item.element = paper.rect(0, 0, item.side, item.side).attr({"fill": item.color});
      }
      item.element.attr(itemAttributes(item));
      if(resetZOrder)
         resetItemsZOrder(item.row, item.col);
   };

   context.updateScale = function() {
      if(!context.display) {
         return;
      }
      if(paper == null) {
         return;
      }
      if(window.quickAlgoResponsive) {
         var areaWidth = Math.max(200, $('#grid').width()-24);
         var areaHeight = Math.max(150, $('#grid').height()-24);
      } else {
         var areaWidth = 400;
         var areaHeight = 600;
      }
      var newCellSide = 0;
      if(context.nbCols && context.nbRows) {
         var marginAsCols = infos.leftMargin / infos.cellSide;
         var marginAsRows = infos.topMargin / infos.cellSide;
         newCellSide = Math.min(infos.cellSide, Math.min(areaWidth / (context.nbCols + marginAsCols), areaHeight / (context.nbRows + marginAsRows)));
      }
      scale = newCellSide / infos.cellSide;
      paper.setSize((infos.cellSide * context.nbCols + infos.leftMargin + infos.rightMargin) * scale, (infos.cellSide * context.nbRows + infos.topMargin + infos.bottomMargin) * scale);

      for(var iRow = 0;iRow < context.nbRows;iRow++) {
         for(var iCol = 0;iCol < context.nbCols;iCol++) {
            if(cells[iRow][iCol] === undefined)
               continue;
            var x = (infos.cellSide * iCol + infos.leftMargin) * scale;
            var y = (infos.cellSide * iRow + infos.topMargin) * scale;
            cells[iRow][iCol].attr({x: x, y: y, width: infos.cellSide * scale, height: infos.cellSide * scale});
         }
      }
      if(infos.showLabels) {
         for(var iRow = 0;iRow < context.nbRows;iRow++) {
            var x = (infos.leftMargin - infos.cellSide / 2) * scale;
            var y = (infos.cellSide * (iRow + 0.5) + infos.topMargin) * scale;
            rowsLabels[iRow].attr({x: x, y: y}).attr({"font-size": infos.cellSide * scale / 2});
         }
         for(var iCol = 0;iCol < context.nbCols;iCol++) {
            var x = (infos.cellSide * iCol + infos.leftMargin + infos.cellSide / 2) * scale;
            var y = (infos.topMargin - infos.cellSide / 2) * scale;
            colsLabels[iCol].attr({x: x, y: y}).attr({"font-size": infos.cellSide * scale / 2});
         }
      }

      redisplayAllItems();
   };

   var redisplayAllItems = function() {
      for(var iItem = 0;iItem < context.items.length;iItem++) {
         var item = context.items[iItem];
         redisplayItem(item, false);
         item.element.attr(itemAttributes(item));
      }

      var cellItems = [];

      for(var iItem = context.items.length - 1;iItem >= 0;iItem--) {
         var item = context.items[iItem];
         cellItems.push(item);
      }

      cellItems.sort(function(itemA, itemB) {
         if(itemA.zOrder < itemB.zOrder) {
            return -1;
         }
         if(itemA.zOrder > itemB.zOrder) {
            return 1;
         }
         return 0;
      });
      for(var iItem = 0;iItem < cellItems.length;iItem++) {
         cellItems[iItem].element.toFront();
      }
   };

   context.getRobotId = function() {
      for(var id in context.items) {
         if(context.items[id].isRobot != undefined) {
            return id;
         }
      }
      return undefined;
   };

   context.getRobot = function() {
      return context.items[context.getRobotId()];
   };

   context.getInfo = function(name) {
      return infos[name];
   };

   context.setInfo = function(name, value) {
      infos[name] = value;
   };

   context.hasOn = function(row, col, filter) {
      for(var id in context.items) {
         var item = context.items[id];
         if(item.row == row && item.col == col && filter(item)) {
            return true;
         }
      }
      return false;
   };

   context.getItemsOn = function(row, col, filter) {
      if(filter === undefined) {
         filter = function(obj) { return true; };
      }
      var selected = [];
      for(var id in context.items) {
         var item = context.items[id];
         if(item.row == row && item.col == col && filter(item)) {
            item.index = id;
            selected.push(item);
         }
      }
      return selected;
   };

   context.gridEdgeInFront = function() {
      var coords = context.coordsInFront();
      return context.hasOn(coords.row, coords.col, function(obj){ return true;});
   };

   context.isOn = function(filter) {
      var item = context.getRobot();
      return context.hasOn(item.row, item.col, filter);
   };

   context.isInFront = function(filter) {
      var coords = context.coordsInFront();
      return context.hasOn(coords.row, coords.col, filter);
   };

   context.isInGrid = function(row, col) {
      if(row < 0 || col < 0 || row >= context.nbRows || col >= context.nbCols) {
         return false;
      }
      if (context.tiles[row][col] == 0) {
         return false;
      }
      return true;
   };

   context.tryToBeOn = function(row, col) {
      if(!context.isInGrid(row, col)) {
         if(infos.ignoreInvalidMoves)
            return false;
         throw(strings.messages.leavesGrid);
      }

      if(context.hasOn(row, col, function(item) { return item.isObstacle === true; })) {
         if(infos.ignoreInvalidMoves)
            return false;
         throw(strings.messages.obstacle);
      }
      return true;
   };

   context.coordsInFront = function(dDir, mult) {
      if(dDir === undefined)
         dDir = 0;
      if(mult === undefined)
         mult = 1;
      var item = context.getRobot();
      var lookDir = (item.dir + dDir + 4) % 4;
      var delta = [[0,1],[1,0],[0,-1],[-1,0]];
      return {
         row: item.row + delta[lookDir][0] * mult,
         col: item.col + delta[lookDir][1] * mult
      };
   };

   context.moveRobot = function(newRow, newCol, newDir, callback) {
      var iRobot = context.getRobotId();
      var item = context.items[iRobot];
      if (context.display)
         item.element.toFront();
      var animate = (item.row != newRow) || (item.col != newCol) || (newDir == item.dir);

      if((item.dir != newDir) && ((item.row != newRow) || (item.col != newCol))) {
         if(item.dir !== undefined)
            item.dir = newDir;
         if(context.display) {
            var attr = itemAttributes(item);
            item.element.attr(attr);
         }
      }

      if(item.dir !== undefined)
         item.dir = newDir;
      item.row = newRow;
      item.col = newCol;

      context.withdraw(function(obj) { return obj.autoWithdraw === true; }, false);

      if(context.display) {
         if(animate) {
            attr = itemAttributes(item);
            context.raphaelFactory.animate("animRobot" + iRobot + "_" + Math.random(), item.element, attr, infos.actionDelay);
         }
         else {
            attr = itemAttributes(item);
            if(infos.actionDelay > 0) {
               context.delayFactory.createTimeout("moveRobot" + iRobot + "_" + Math.random(), function() {
                  item.element.attr(attr);
               }, infos.actionDelay / 2);
            } else {
               item.element.attr(attr);
            }
         }
         $("#nbMoves").html(context.nbMoves);
      }

      context.waitDelay(callback);
   };

   context.moveItem = function(item, newRow, newCol) {
      var animate = (item.row != newRow) || (item.col != newCol);
      var robot = context.getRobot();
      if(context.display) {
         resetItemsZOrder(newRow, newCol);
         resetItemsZOrder(item.row, item.col);
         resetItemsZOrder(robot.row, robot.col);
      }
      item.row = newRow;
      item.col = newCol;

      if(context.display) {
         if(animate) {
            attr = itemAttributes(item);
            context.raphaelFactory.animate("animItem" + "_" + Math.random(), item.element, attr, infos.actionDelay);
         }
         else {
            attr = itemAttributes(item);
            if(infos.actionDelay > 0) {
               context.delayFactory.createTimeout("moveItem" + "_" + Math.random(), function() {
                  item.element.attr(attr);
               }, infos.actionDelay / 2);
            } else {
               item.element.attr(attr);
            }
         }
      }
   };

   context.fall = function(item, row, col, callback) {
      var startRow = row;
      var platforms = context.getItemsOn(row + 1, col, function(obj) { return obj.isObstacle === true; });

      while(context.isInGrid(row + 1, col) && platforms.length == 0) {
         row++;
         platforms = context.getItemsOn(row + 1, col, function(obj) { return obj.isObstacle === true; });
      }

      if(!context.isInGrid(row + 1, col)) {
         throw(context.strings.messages.falls);
      }

      if(row - startRow > infos.maxFallAltitude) {
         throw(context.strings.messages.willFallAndCrash);
      }
      context.nbMoves++;
      context.moveRobot(row, col, item.dir, callback);
   };

   context.jump = function(callback) {
      if(!infos.hasGravity) {
         throw("Error: can't jump without gravity");
      }

      var item = context.getRobot();
      if(!context.isInGrid(item.row - 1, item.col)) {
         throw(context.strings.messages.jumpOutsideGrid);
      }
      var obstacle = context.getItemsOn(item.row - 2, item.col, function(obj) { return obj.isObstacle === true; });
      if(obstacle.length > 0) {
         throw(context.strings.messages.jumpObstacleBlocking);
      }
      var platforms = context.getItemsOn(item.row - 1, item.col, function(obj) { return obj.isObstacle === true; });
      if(platforms.length == 0) {
         throw(context.strings.messages.jumpNoPlatform);
      }
      context.nbMoves++;
      context.moveRobot(item.row - 2, item.col, item.dir, callback);
   };

   context.withdraw = function(filter, errorWhenEmpty) {
      if(filter === undefined) {
         filter = function(obj) { return true; };
      }
      if(errorWhenEmpty === undefined) {
         errorWhenEmpty = true;
      }
      var item = context.getRobot();
      var withdrawables = context.getItemsOn(item.row, item.col, function(obj) { return obj.isWithdrawable === true && filter(obj); });
      if(withdrawables.length == 0) {
         if(errorWhenEmpty)
            throw(context.strings.messages.nothingToPickUp);
         return;
      }

      if(infos.bagSize != undefined && context.bag.length == infos.bagSize) {
         throw(context.strings.messages.tooManyObjects);
      }

      var withdrawable = withdrawables[0];
      context.items.splice(withdrawable.index, 1);
      context.bag.push(withdrawable);

      if(context.display) {
         if (infos.actionDelay > 0) {
            context.delayFactory.createTimeout("takeItem_" + Math.random(), function() {
               withdrawable.element.remove();
            }, infos.actionDelay);
         } else {
            withdrawable.element.remove();
         }
      }
   };

   context.drop = function(count, coords, filter) {
      if(count === undefined) {
         count = 1;
      }
      if(filter === undefined) {
         filter = function(obj) { return true; };
      }
      if(coords == undefined) {
         var item = context.getRobot();
         coords = {row: item.row, col: item.col};
      }

      for(var i = 0;i < count;i++) {
         if(context.bag.length == 0) {
            throw(context.strings.messages.emptyBag);
         }

         var object = context.bag.pop();
         object.row = coords.row;
         object.col = coords.col;
         object.isPaint = true;
         var itemsOn = context.getItemsOn(coords.row, coords.col);
         var maxi = object.zOrder;
         for(var item in itemsOn) {
            if(itemsOn[item].isWithdrawable === true && itemsOn[item].zOrder > maxi) {
               maxi = itemsOn[item].zOrder;
            }
         }
         object.zOrder = maxi + 0.000001;
         context.items.push(object);

         if(context.display) {
            redisplayItem(object);
         }
      }
   };

   context.dropObject = function(object, coords) {
      if(coords == undefined) {
         var item = context.getRobot();
         coords = {row: item.row, col: item.col};
      }

      if(!context.isInGrid(coords.row, coords.col)) {
         throw(window.languageStrings.messages.failureDropOutside);
         return;
      }

      object.row = coords.row;
      object.col = coords.col;
      var itemsOn = context.getItemsOn(coords.row, coords.col);
      var maxi = object.zOrder;
      for(var item in itemsOn) {
         if(itemsOn[item].isWithdrawable === true && itemsOn[item].zOrder > maxi) {
            maxi = itemsOn[item].zOrder;
         }
      }
      object.zOrder = maxi + 0.000001;
      context.items.push(object);

      resetItem(object);
   };

   context.turnLeft = function(callback) {
      var robot = context.getRobot();
      context.moveRobot(robot.row, robot.col, (robot.dir + 3) % 4, callback);
   };

   context.turnRight = function(callback) {
      var robot = context.getRobot();
      context.moveRobot(robot.row, robot.col, (robot.dir + 1) % 4, callback);
   };

   context.turnAround = function(callback) {
      var robot = context.getRobot();
      context.moveRobot(robot.row, robot.col, (robot.dir + 2) % 4, callback);
   };

   context.forward = function(callback) {
      var robot = context.getRobot();
      var coords = context.coordsInFront();
      if(!context.tryToBeOn(coords.row, coords.col)) {
         context.waitDelay(callback);
      }
      if(infos.hasGravity) {
         context.fall(robot, coords.row, coords.col, callback);
      }
      else {
         context.nbMoves++;
         context.moveRobot(coords.row, coords.col, robot.dir, callback);
      }
   };

   context.backwards = function(callback) {
      var robot = context.getRobot();
      var coords = context.coordsInFront(2);
      if(!context.tryToBeOn(coords.row, coords.col)) {
         context.waitDelay(callback);
      }
      if(infos.hasGravity) {
         context.fall(robot, coords.row, coords.col, callback);
      }
      else {
         context.nbMoves++;
         context.moveRobot(coords.row, coords.col, robot.dir, callback);
      }
   };

   context.north = function(callback) {
      var item = context.getRobot();
      if(!context.tryToBeOn(item.row - 1, item.col)) {
         context.waitDelay(callback);
      } else {
         context.nbMoves++;
         context.moveRobot(item.row - 1, item.col, 3, callback);
      }
   };

   context.south = function(callback) {
      var item = context.getRobot();
      if(!context.tryToBeOn(item.row + 1, item.col)) {
         context.waitDelay(callback);
      } else {
         context.nbMoves++;
         context.moveRobot(item.row + 1, item.col, 1, callback);
      }
   };

   context.east = function(callback) {
      var item = context.getRobot();
      if(!context.tryToBeOn(item.row, item.col + 1)) {
         context.waitDelay(callback);
      } else {
         context.nbMoves++;
         context.moveRobot(item.row, item.col + 1, 0, callback);
      }
   };

   context.west = function(callback) {
      var item = context.getRobot();
      if(!context.tryToBeOn(item.row, item.col - 1)) {
         context.waitDelay(callback);
      } else {
         context.nbMoves++;
         context.moveRobot(item.row, item.col - 1, 2, callback);
      }
   };

   context.obstacleInFront = function() {
      return context.isInFront(function(obj) { return obj.isObstacle === true; });
   };

   context.platformInFront = function() {
      var coords = context.coordsInFront();
      return context.hasOn(coords.row + 1, coords.col, function(obj) { return obj.isObstacle === true; });
   };

   context.platformAbove = function() {
      var robot = context.getRobot();
      return context.hasOn(robot.row - 1, robot.col, function(obj) { return obj.isObstacle === true; });
   };

   context.writeNumber = function(row, col, value) {
      var numbers = context.getItemsOn(row, col, function(obj) { return obj.isWritable === true; });

      if(numbers.length == 0) {
         throw(strings.messages.failureWriteHere);
      }

      var number = numbers[0];
      number.value = value;
      if(context.display) {
         redisplayItem(number);
      }
   };

   context.readNumber = function(row, col) {
      var numbers = context.getItemsOn(row, col, function(obj) { return obj.value !== undefined; });

      if(numbers.length == 0) {
         throw(strings.messages.failureReadHere);
      }

      return numbers[0].value;
   };

   context.pushObject = function(callback) {
      var robot = context.getRobot();
      var coords = context.coordsInFront();

      var items = context.getItemsOn(coords.row, coords.col, function(obj) { return obj.isPushable === true ; });

      if(items.length == 0) {
         throw(strings.messages.failureNothingToPush);
      }

      var coordsAfter = context.coordsInFront(0, 2);

      if(!context.isInGrid(coordsAfter.row, coordsAfter.col))
         throw(strings.messages.failureWhilePushing);
      if(context.hasOn(coordsAfter.row, coordsAfter.col, function(obj) { return obj.isObstacle === true; } ))
         throw(strings.messages.failureWhilePushing);
      if(context.tiles[coordsAfter.row][coordsAfter.col] == 0)
         throw(strings.messages.failureWhilePushing);

      context.moveItem(items[0], coordsAfter.row, coordsAfter.col);

      context.forward(callback);
   };

   context.shoot = function(lig, col, dir) {
      dir = dir % 8;
      var dirs = [
         [-1, 0],
         [-1, 1],
         [0, 1],
         [1, 1],
         [1, 0],
         [1, -1],
         [0, -1],
         [-1, -1]
      ];

      var lights = context.getItemsOn(lig, col, function(obj) {
         return obj.isLight === true;
      });

      for(var light in lights) {
         lights[light].state = 1;
         lights[light].img = lights[light].states[lights[light].state];
         if(context.display)
            redisplayItem(lights[light]);
      }

      var x = (infos.cellSide * (col + 0.5) + infos.leftMargin) * scale;
      var y = (infos.cellSide * (lig + 0.5) + infos.topMargin) * scale;

      var taille = infos.cellSide;

      var findRobot = false;

      var plig = lig + dirs[dir][0];
      var pcol = col + dirs[dir][1];
      if(!context.isInGrid(plig, pcol) || context.hasOn(plig, pcol, function(obj) { return obj.isOpaque === true; })) {
         taille /= 2;

         findRobot = context.hasOn(plig, pcol, function(obj) { return obj.isRobot === true; });
      }
      else {
         var pdir = dir;
         var mirrors = context.getItemsOn(plig, pcol, function(obj) { return obj.isMirror === true; });
         if(mirrors.length != 0) {
            pdir = mirrors[0].mirrorFunction(dir);
         }

         findRobot = context.hasOn(plig, pcol, function(obj) { return obj.isRobot === true; });

         if(context.shoot(plig, pcol, pdir)) {
            findRobot = true;
         }
      }

      var dx = (taille * dirs[dir][1]) * scale;
      var dy = (taille * dirs[dir][0]) * scale;

      if(context.display && paper != undefined) {
         var segment = paper.path("M " + x + " " + y + " l " + dx + " " + dy);

         segment.attr({'stroke-width': 5, 'stroke': '#ffff93'});

         context.delayFactory.createTimeout("deleteSegement_" + Math.random(), function() {
            segment.remove();
         }, infos.actionDelay * 2);
      }

      return findRobot;
   };

   return context;
};

var robotEndConditions = {
   checkReachExit: function(context, lastTurn) {
      var robot = context.getRobot();
      if(context.isOn(function(obj) { return obj.isExit === true; })) {
         context.success = true;
         throw(window.languageStrings.messages.successReachExit);
      }
      if(lastTurn) {
         context.success = false;
         throw(window.languageStrings.messages.failureReachExit);
      }
   },
   checkPickedAllWithdrawables: function(context, lastTurn) {
      var solved = true;
      for(var row = 0;row < context.nbRows;row++) {
         for(var col = 0;col < context.nbCols;col++) {
            if(context.hasOn(row, col, function(obj) { return obj.isWithdrawable === true; })) {
               solved = false;
            }
         }
      }

      if(solved) {
         context.success = true;
         throw(window.languageStrings.messages.successPickedAllWithdrawables);
      }
      if(lastTurn) {
         context.success = false;
         throw(window.languageStrings.messages.failurePickedAllWithdrawables);
      }
   },
   checkContainersFilled: function(context, lastTurn) {
      var solved = true;

      var messages = [
         window.languageStrings.messages.failureContainersFilled,
         window.languageStrings.messages.failureContainersFilledLess,
         window.languageStrings.messages.failureContainersFilledBag
      ];
      var message = 2;
      if (context.infos.maxMoves != undefined) {
         if (context.nbMoves > context.infos.maxMoves) {
            context.success = false;
            throw(window.languageStrings.messages.failureTooManyMoves + " : " + context.nbMoves);
         }
      }
      for(var row = 0;row < context.nbRows;row++) {
         for(var col = 0;col < context.nbCols;col++) {
            var containers = context.getItemsOn(row, col, function(obj) { return (obj.isContainer === true) && (!obj.isFake) });
            if(containers.length != 0) {
               var container = containers[0];
               if(container.containerSize == undefined && container.containerFilter == undefined) {
                  container.containerSize = 1;
               }
               var filter;
               if(container.containerFilter == undefined)
                  filter = function(obj) { return obj.isWithdrawable === true; };
               else
                  filter = function(obj) { return obj.isWithdrawable === true && container.containerFilter(obj) };

               if(container.containerSize != undefined && context.getItemsOn(row, col, filter).length < container.containerSize) {
                  solved = false;
                  message = Math.min(message, 1);
               }
               if(container.containerFilter != undefined) {
                  if(context.hasOn(row, col, function(obj) { return obj.isWithdrawable === true && !container.containerFilter(obj) })) {
                     solved = false;
                     message = Math.min(message, 0);
                  }
                  for(var item in context.bag) {
                     if(filter(context.bag[item])) {
                        solved = false;
                        message = Math.min(message, 2);
                     }
                  }
               }
            }
            else {
               if(context.getItemsOn(row, col, function(obj) { return obj.isWithdrawable === true && obj.canBeOutside !== true; }).length > 0) {
                  solved = false;
                  message = Math.min(message, 0);
               }
            }
         }
      }

      if(solved) {
         context.success = true;
         throw(window.languageStrings.messages.successContainersFilled);
      }
      if(lastTurn) {
         context.success = false;
         throw(messages[message]);
      }
   },
   checkBothReachAndCollect: function(context, lastTurn) {
      var robot = context.getRobot();
      if(context.isOn(function(obj) { return obj.isExit === true; })) {
         var solved = true;
         for(var row = 0;row < context.nbRows;row++) {
            for(var col = 0;col < context.nbCols;col++) {
               if(context.hasOn(row, col, function(obj) { return obj.isWithdrawable === true; })) {
                  solved = false;
                  throw(window.languageStrings.messages.failurePickedAllWithdrawables);
               }
            }
         }

         if(solved) {
            context.success = true;
            throw(window.languageStrings.messages.successPickedAllWithdrawables);
         }
      }
      if(lastTurn) {
         context.success = false;
         throw(window.languageStrings.messages.failureReachExit);
      }
   },
   checkLights: function(context, lastTurn) {
      var solved = true;
      for(var row = 0;row < context.nbRows;row++) {
         for(var col = 0;col < context.nbCols;col++) {
            if(context.hasOn(row, col, function(obj) { return obj.isLight === true && obj.state === 0; })) {
               solved = false;
            }
         }
      }

      if(solved) {
         context.success = true;
         throw(window.languageStrings.messages.successLights);
      }
      if(lastTurn) {
         context.success = false;
         throw(window.languageStrings.messages.failureLights);
      }
   }
};


var robotEndFunctionGenerator = {
   allFilteredPicked: function(filter) {
      return function(context, lastTurn) {
         var solved = true;
         for(var row = 0;row < context.nbRows;row++) {
            for(var col = 0;col < context.nbCols;col++) {
               var filtered = context.getItemsOn(row, col, function(obj) { return obj.isWithdrawable && filter(obj); })
               if(filtered.length != 0) {
                  solved = false;
               }
            }
         }

         for(var item in context.bag) {
            if(!filter(context.bag[item])) {
               context.success = false;
               throw(window.languageStrings.messages.failureUnfilteredObject);
            }
         }

         if(solved) {
            context.success = true;
            throw(window.languageStrings.messages.successPickedAllWithdrawables);
         }
         if(lastTurn) {
            context.success = false;
            throw(window.languageStrings.messages.failurePickedAllWithdrawables);
         }
      };
   },
   allNumbersWritten: function(numbers) {
      return function(context, lastTurn) {
         var solved = true;
         for(var iNumber in numbers) {
            var number = numbers[iNumber];
            var items = context.getItemsOn(number.row, number.col, function(obj) { return obj.value !== undefined; });
            if(items.length == 0)
               throw("Error: no number here");

            var expected;
            if(typeof number.value === "number") {
               expected = number.value;
            } else {
               expected = number.value.bind(context)();
            }

            if(expected != items[0].value) {
               solved = false;
            }
         }

         if(solved) {
            context.success = true;
            throw(window.languageStrings.messages.successNumbersWritten);
         }

         if(lastTurn) {
            context.success = false;
            throw(window.languageStrings.messages.failureNumbersWritten);
         }
      };
   }
};

if(window.quickAlgoLibraries) {
   quickAlgoLibraries.register('robot', getContext);
} else {
   if(!window.quickAlgoLibrariesList) { window.quickAlgoLibrariesList = []; }
   window.quickAlgoLibrariesList.push(['robot', getContext]);
}
