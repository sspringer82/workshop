# Context

Haltet die Rezepte in einem separaten Context vor.
Der Context soll einen eigenen State haben und sowohl lesenden als auch schreibenden Zugriff erlauben.

Verwende den Context zusammen mit dem CustomHook, der aktuell die Rezepte verwaltet.

Tipp: der state des custom hooks wird durch den Context ersetzt

Bonus: Lagere die Form-Komponente aus der List-Komponente aus und lass' sie den Kontext ebenfalls verwenden
