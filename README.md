# WDP Projekt Zespołowy

## Opis projektu

Przykładowa strona sklepu internetowego "Bazar Online Shopping", opracowana na podstawie darmowego szablonu graficznego. Projekt realizowano w grupie kursantów, którzy uczestniczą w 9-miesięcznym kursie programowania Kodilla.

## Demo

DO UZUPEŁNIENIA

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `npm install`.

Teraz możesz zacząć pracę, korzystając z przygotowanych zadania `npm run watch`.

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderze `src/`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderu `src` buduje project w folderze `dist`
- `watch`: odpala `browser-sync`, obserwuje zmiany w folderze `src` i przebudowuje projekt
- `code-quality`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu i sprawdza błędy w JS.

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostanie uruchomiony skrypt `code-quality`
dla plików, które zostały wybrane do za-commit'owania.

## Konwencje i dobre praktyki

- RWD ustalono następujące punkty w media queries:
  - extra small `@media (max-width: 575.98px)`
  - small `@media (min-width: 576px) and (max-width: 767.98px)`
  - medium `@media (min-width: 768px) and (max-width: 991.98px)`
  - large `@media (min-width: 992px) and (max-width: 1199.98px)`
  - extra large `@media (min-width: 1200px)`
- tytułu branchy zgodne z nazwami tasków w Jirze
- tytuły commitów powinny zawierać nazwy tasków
- wykorzystano bibliotekę Mustache.js
  - generowanie kart produktów
  - generowanie wpisów na blogu
  - możliwe dalsze wykorzystanie mustache przy innych sekcjach strony
