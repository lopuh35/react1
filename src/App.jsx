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
					<div></div>
    </>
  );
}

export default App;
