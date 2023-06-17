import React from "react";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">^ Wybierz typ strony ^</h1>

      <div className="bg-gray-200 p-8 rounded mt-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Lazy (CLS i LCP)</h2>
        <p className="text-gray-600 mt-2">
          - Każda podstrona zawiera DIV z opóźnionym ładowaniem realizowanym w
          inny sposób.
        </p>
        <p className="text-gray-600 mt-2">
          - Na dole każdej podstrony znajdują się szczegółowe wnioski na temat
          lazy loada (np. jego potencjalny wpływ na CLS i LCP).
        </p>
      </div>

      <h1 className="text-3xl font-bold mb-4">Server rendering</h1>
      <p className="text-gray-600 mt-2">
        - Na każdej stronie znajduje się obrazek w sekcji Server rendering,
        który renderowany jest jak najszybciej (generuje on zawsze zielone CLS i
        LCP).
      </p>

      <div className="bg-gray-200 p-8 rounded mt-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Wnioski z całego testu</h2>
        <p className="text-gray-600 mt-2">
          - Aby być pewnym, że CLS będzie zielony, wszystkie lazy loady powinny
          posiadać placeholdery.
        </p>
        <p className="text-gray-600 mt-2">
          - Aby być pewnym, że LCP będzie zielony, wszystkie duże obrazy powinny
          być ładowane jak najszybciej (chyba że będziemy mieli pewność, że w
          viewporcie załaduje się szybciej inny, większy obraz).
        </p>
        <p className="text-gray-600 mt-2">
          - Wyniki CLS i LCP zależą od mocy obliczeniowej urządzenia, wielkości
          ekranu, prędkości internetu, akcji użytkownika (np. scroll),
          początkowej pozycji użytkownika.
        </p>
        <p className="text-gray-600 mt-2">
          - Nie da się określić jednego wyniku webvitalsów strony. Możliwe jest
          tylko uśrednienie różnych wyników.
        </p>
        <p className="text-gray-600 mt-2">
          - Google podczas badania korzysta z ogromnej liczby próbek, których
          unikalność będzie różna - np. najwięcej będzie próbek standardowych
          rozmiarów telefonów na górze strony.
        </p>
        <p className="text-gray-600 mt-2">
          - Wśród próbek będą również tablety trzymane pionowo oraz poziomo,
          scrolle na różną wysokość lub inne akcje wpływające na ostateczny
          viewport
        </p>
        <p className="text-gray-600 mt-2">
          - Przybliżony wynik można uzyskać tylko wielokrotnie symulując
          najpopularniejsze urządzenia, rozmiary ekranów, prędkości internetu i
          akcje użytkownika (najlepiej w sposób automatyczny ograniczający błąd
          ludzki).
        </p>
      </div>
    </div>
  );
};

export default HomePage;
