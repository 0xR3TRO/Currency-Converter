## Opis projektu:

### Cel:

Projekt ma na celu stworzenie prostego przelicznika walut, który wykorzystuje interfejs API do pobierania bieżących kursów wymiany.

### Opis funkcji:

- **Przeliczanie Walut:** Umożliwienie użytkownikom wprowadzenia kwoty w jednej walucie i przeliczenia jej na inną, z wykorzystaniem aktualnych kursów wymiany.
- **Wybór Walut:** Dostarczenie listy dostępnych walut, z których użytkownicy mogą wybierać.
- **Aktualizacja Kursów:** Automatyczne pobieranie najnowszych kursów wymiany z zewnętrznego API.

## Analiza wymagań:

### Wymagania funkcjonalne:

- **Przeliczanie Walut:** Interaktywny interfejs umożliwiający wprowadzenie kwoty, wybór waluty źródłowej i docelowej, a następnie przeliczenie kwoty.
- **Wybór Walut:** Lista rozwijana z dostępnymi walutami do wyboru.
- **Aktualizacja Kursów:** Automatyczne pobieranie najnowszych kursów z zewnętrznego API.

### Wymagania niefunkcjonalne:

- **Bezpieczeństwo:** Bezpieczne zarządzanie danymi użytkowników i zabezpieczenia przed atakami.
- **Responsywność:** Interfejs dostosowany do różnych urządzeń.
- **Prostota Obsługi:** Intuicyjny interfejs, zapewniający łatwą obsługę.

## Projekt interfejsu:

### Szkice/wizualizacje interfejsu:

- *Pole wprowadzania kwoty*
- *Listy rozwijane z wyborem walut źródłowej i docelowej*
- *Przycisk "Przelicz"*
- *Wyświetlenie wyniku przeliczenia*

### Mapa strony:

- *Strona główna*: Interfejs użytkownika z formularzem do wprowadzania danych i przeliczania walut.

## Architektura systemu:

### Technologie:

- **Frontend:** HTML, CSS, JavaScript (ewentualnie z użyciem frameworka, np. React).
- **Backend:** Node.js z frameworkiem Express lub inny odpowiedni język i framework.
- **API do Kursów Wymiany:** Skorzystanie z publicznego API dostarczającego aktualne kursy wymiany.

## Testowanie:

### Plan testów:

- **Testy jednostkowe:** Sprawdzenie poprawności działania funkcji przeliczania walut.
- **Testy interfejsu:** Upewnienie się, że interfejs działa poprawnie na różnych urządzeniach.
- **Testy bezpieczeństwa:** Weryfikacja bezpiecznego zarządzania danymi użytkowników.

## Implementacja:

### Opis technologii:

- **Frontend:** HTML, CSS, JavaScript (lub React dla bardziej zaawansowanych funkcji).
- **Backend:** Node.js, Express (lub inny framework), baza danych (do przechowywania ustawień użytkowników).
- **API:** Skorzystanie z dostępnego API do kursów wymiany.

### Struktura kodu:

- *Katalogi/pliki*: Oddzielne pliki dla logiki przeliczania walut, interfejsu użytkownika, zarządzania danymi.

## Testowanie:

### Plan testów:

- **Testy jednostkowe:** Sprawdzenie poprawności poszczególnych funkcji przeliczania walut.
- **Testy interfejsu użytkownika:** Sprawdzenie interakcji z użytkownikiem na różnych urządzeniach.
- **Testy bezpieczeństwa:** Weryfikacja odporności systemu na próby naruszenia.

### Procedury testowania:

- Opracowanie zestawu przypadków testowych dla każdej funkcji przeliczania walut.
- Ustalenie procedur raportowania i naprawiania znalezionych błędów.

## Wdrożenie i konserwacja:

### Plan wdrożenia:

- **Etapy wdrażania**: Testowanie, poprawki, publikacja na serwerze produkcyjnym.
- **Terminy:** Określenie dat planowanych etapów.

### Procedury konserwacji:

- **Wsparcie techniczne:** Ustanowienie kanałów komunikacji z użytkownikami w celu zgłaszania problemów.
- **Aktualizacje:** Planowanie regularnych aktualizacji w zależności od potrzeb i feedbacku użytkowników.

## Harmonogram:

### Plan projektu:

- **Etapy realizacji:** Podział prac na konkretne zadania (np. projektowanie interfejsu, implementacja funkcji, testowanie).
- **Terminy:** Określenie czasu potrzebnego na każdy etap.

## Kosztorys:

### Szacunkowe koszty:

- **Rozwój aplikacji:** Wg godzin pracy lub zespołu programistów.
- **Koszty utrzymania:** Serwery, usługi zewnętrzne, ewentualne opłaty za wsparcie techniczne.

---
[English](README.md)