// функция - реакт компонент. Это тег необычный
// динамические данные {}
// props пропсы атрибуты
// state - изменение состояния объекта

import { Header } from "./components/Header.jsx";
import { CoreConcepts } from "./components/CoreConcepts.jsx";
import { Examples } from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <CoreConcepts />
      <Examples />
	  <div class="div_copyright page__section">
      <p class="footer__copyright">© 2024 Adil. All rights reserved.</p>
      </div>
    </>
  );
}

export default App;
