import {Navigate, Route, Routes} from "react-router-dom";
import {MaineLayout} from "./layouts/maineLayout";
import {MainePage} from "./pages";
import {FilmInfoPage} from "./pages/filmInfo/filmInfoPage";



function App() {
  return (
    <Routes>
        <Route path={'/'} element={<Navigate to={'/maine'}/>}/>
        <Route path={'/maine'} element={<MaineLayout/>}>
            <Route path={'/maine'} element={<Navigate to={'/maine/films'}/>}/>
            <Route path={'films'} element={<MainePage/>}/>
            <Route path={'movie/:id'} element={<FilmInfoPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
