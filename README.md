# Tiervermittlung
Das Repository für unsere Projektarbeit zum Thema "Tiervermittlung".
Im Ordner "schedule" befindet sich unsere scraping-Applikation, im Ordner "Tiervermittlung" unsere eigentliche Webapplikation.


## Scraping und Schedule (eigene Applikation)
Zum Scrapen der Tierheime wird die Applikation "schedule" benötigt.

Die Applikation wurde über now deployed und sollte alle 4 Stunden die Tierheime neu auslesen, um zu verhindern, dass Hunde in unserer Datenbank stehen, die es im Tierheim gar nicht mehr gibt. 

Wenn man manuell "scrapen" möchte, wird folgender _Befehl_ benötigt (im **schedule**-Ordner!):
``` 
node index.js
```
Da die Applikation im Intervall immer weiter läuft, kann man diese abbrechen (STRG+c) sobald diese auf der Konsole -"Written into database for "München"- ausgegeben hat, denn dann hat sie einmal die beiden Tierheime "Oldenburg" und "München" gescraped und wartet auf das nächste Intervall zum erneuten Starten. Die gescrapten Hunde sind dann in der Datenbank (siehe unten) in der collection "dogs" sichtbar (Refresh nach dem Scraping!)

## Seeding

Es gibt zwei von uns erstellte Hunde zum Seeden, Moreno und Mabel. Diese haben von uns "Charaktereigenschaften" bekommen, damit man diese testen konnte bzw. auch mal Hunde mit solchen "traits" hat. 

 -> _Zum Moment der Abgabe sind die beiden Hunde schon in die Datenbank "gepflanzt" worden, falls nötig, hier trotzdem die Erklärung zum Seeden:_



**Zum Seeden wird folgender _Befehl_ benötigt:**

im Ordner "Tiervermittlung":
``` 
NODE_ENV=dev npm run import 
```


## Datenbank
Unsere Datenbank läuft über mLab mit folgender URL: *mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim*

- In der collection "dogs" befinden sich die Hunde, egal ob gescraped, geseedet oder selbst eingetragen. 

 - In der collection "dogs_new" befinden sich die Hunde Moreno und Mabel, die auch geseedet werden können. Zur Not kann man von dort die Dokumente kopieren, wenn man es braucht. (Haben wir für Testzwecke drin gelassen.)

- In der collection "photos" werden beim per Hand Eintragen der Hunde die Profilbilder gespeichert.

- In der collection "mails" werden die Nachrichten die im Kontaktformular abgeschickt werden, gespeichert.

- In der collection "users" werden die registrierten Benutzer gespeichert.


## Login/Profile

Es gibt bisher zwei eingetragene Benutzer (zu finden in der collection "users"), diese wurden von uns zum Testen erstellt. 

Logindaten lauten wie folgt:

**Profil 1**
``` 
Emailadresse: tierheim-bremen@web.de
Passwort: 1234
```

**Profil 2**
``` 
Emailadresse: tierheim-dortmund@hotmail.de
Passwort: 1234
```

Jedes Profil hat bereits zwei eingetragene Hunde, um das Eintragen, Editieren und Löschen von Hunden zu demonstrieren, sowie die Zugehörigkeit von Profil und Hund. 

Nur über das Profil können Hunde eingetragen, geändert oder gelöscht werden. Alle anderen Funktionen sind auch ohne Login verwendbar.

Es kann jederzeit ein neues Profil registriert werden und auch darüber sind alle oben genannten Funktionen zugänglich.


## Starten der Applikation "Tiervermittlung"
Unsere "Haupt"-Applikation _Tiervermittlung_ wird im Ordner **Tiervermittlung** über folgenden Befehl gestartet:
```
node index.js
```
Im Webbrowser ist unsere Website dann über **localhost:8080** erreichbar (oder natürlich über das Deployment).

## Deployment

Die Anwendung ist über now deployed, man erreicht sie über folgende URL:
ifi-tierheim.now.sh

Die schedule-Applikation ist ebenfalls deployed, allerdings wird man beim Aufruf der URL nichts sehen. Sie läuft trotzdem, aber reagiert nur alle 4 Stunden zur richtigen Zeit von selbst. (_Beobachtung: 9:30, 13:30, 17:30, ..._)

-------
**Internationaler Frauenstudiengang Informatik, Hochschule Bremen**


**Projekt, Sommersemester 2017 bei Herrn König**


**Entwicklerinnen:** Hajiba Belmass, Christiane Manfo, Martha Düpont, Diana Malewski
