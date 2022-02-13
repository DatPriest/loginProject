###

Projekt für die Darstellung von API Daten im Frontend.
Jeder Endpunkt soll vom Frontend bedient werden können.

Um das Projekt zu starten navigieren sie nach ./frontend und führen sie npm run start aus. Oder konfigurieren sie per WebStorm die Package.json als Konfigurationsdatei, um es zu starten.

Der Docker Ordner befindet sich im Hauptverzeichnis.

Es sind alle Routen abgedeckt, jedoch wurde die Implementierung des Speichern der Qualfikation zum Employee nicht erreicht. Sowie fehlt die Frontendmechanik, alle Employees zur Qualifikation zu finden. Die Services dafür existieren jedoch.

Folgende Fehler sind bekannt:
SessionStorage funktioniert nur bedingt.
Falls eine Qualifikation gelöscht wird, wird man jedoch trotzdem auf die inzwischen gelöschte Seite hingeleitet.
Es ist möglich Qualifikationen mit dem gleichen Namen anzulegen, dies führt dazu, dass man diese nicht mehr löschen kann. Dies ist jedoch ein Problem des Docker Services. Lokal könnte dieser Fehler abgefangen werden.

### Zusätzliche Informationen
