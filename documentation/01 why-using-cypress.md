# E2E Testing mit cypress

## Was ist E2E Testing?

Beim End-to-End (E2E) testing geht es darum, die Anwendung vom Anfang bis zum Ende zu testen.
Es muss sichergestellt werden, dass alle integrierten Teile einer Anwendung funktionieren und wie erwartet zusammenarbeiten.
End-to-End-Tests simulieren reale Benutzerszenarien und testen im wesentlichen, wie ein realer Benutzer die Anwendung verwenden würde.

**Wie sollte man beim E2E Tests schreiben vorgehen?**

1) Smoke Tests für wichtige Komponenten, z.B. einfach nur eine einfache Prüfung ob die Startseite richtig aufgebaut wurde.
Sollte beim Deplyoment etwas schiefgehen, würden die Smoketests sofort Alarm schlagen.

2) Tests für den **_Happy path_** und **_Unhappy path_**: Standard User Szenarien (erfolgreiche und nicht erfolgreiche) die vermutlich bei einem
großteil der Aufrufe verwendet werden. Sonderfälle werden bei diesen Tests ignoriert. In der Regel sind diese
 **Happy path Tests** sehr schnell geschrieben und decken schon einen Großteil der Anwendung ab.
 
3) Detailerte Tests und der versuch alle möglichen Sonderfälle abzudecken. 
Gefühlt 99% des Aufwandes wird vermutlich auf diese Detailierten Tests fallen!

**Was soll getestet werden?**

+ Standard Szenarien um sicherzustellen, das die Anwendung überhaupt funktioniert.
+ Funktionalitäten, die nicht so einfach von den Entwicklern via Unittests abgedeckt werden kann.
    + Ein Beispiel ist der Wiedereinstieg (da wo man aufgehört hat, will der Nutzer später wieder weitermachen).
      Es ist nahezu unmöglich, so etwas über einen Unittest zu realisieren, mit einem E2E Test geht es sehr einfach.
    + Ein weiteres Beispiel ist das Testen des globale Frontend Error Handlings. Nachdem die Anwendung hochgefahren wurde kann man sehr 
      einfach über Cypress einen JavaScript error werden und prüfen ob dieser wie erwartet abgehandelt wird!
+ Komponentenübergeifende Business Logik: z.B. Auf der Startseite wird die Option "Keine Kinder" gewählt. In einem E2E Test
  sollte abgedeckt werden, ob alle Seiten die nur für Kunden mit Kindern Sinn machen nichtmehr erscheinen. Komponentenübegreifende Logik 
  ist in der Regel sehr fehleranfällig. Programmierer kennen die fachlichen Anfoderungen oft nur sehr schlecht, daher ist ihnen oft gar nicht
  bewusst was für Auswirkungen einfache Änderungen haben können!

**Was sollte NICHT getestet werden?**  

+ Details einer Komponente wie z.B. sollten nicht bis ins kleinste Detail getestet werden, das machen die Entwickler schon
  mit Unittests. Generell sollte immer geklärt werden was von den Entwicklern als Unittests und was von den E2E Tests 
  abgedeckt werden soll. Doppelte Tests müssen auf jeden Fall (aus Zeit und Kostengründen) vermieden werden!
+ E2E Tester sollten ihren Fokus auf keinen Fall auf das Testen von verschiedenen Browsern legen. Unterscheide werden immer mehr
  von Frameworks und Standatisierten Webapis kompensiert. Man kann das automatisierte Browsertesting also vernachlässigen.
  Manuelle Tests reichen vollkommend aus. Sollte man tatsächlich unterschiede finden, sollte die implemntierung so angepasst werden,
  dass sie wieder auf allen Browser funktioniert!

## Vergleich mit anderen E2E-Testing Frameworks

Es gibt 3 Typen von E2E Frameworks:
+ Basierend auf Selenium (Protractor)
+ Testcaffee -> https://medium.com/yld-blog/evaluating-cypress-and-testcafe-for-end-to-end-testing-fcd0303d2103
+ Direkt auf den Browsertreibern basierend (Cypress chromium Treiber)


## Zusammenfassung

 


