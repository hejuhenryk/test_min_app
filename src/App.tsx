import Page from './Components/page'
import logo from './logo.svg'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { SingleEvent } from './pages/singleEvent'
import { ManagePage } from './pages/managePage'
import { Auth } from './pages/auth'


const MainPage = (): JSX.Element => <Page logo={logo}>
  <Link to="/event/1">event no 1</Link>
  <Link to="/event/2">event no 2</Link>
  <Link to="/event/3">event no 3</Link>
  <Link to="/event/4">event no 4</Link>
</Page>


function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: 'grid',
          gap: '10px',
          gridTemplateColumns: 'repeat(6, 1fr) ',
          padding: '30px',
          backgroundColor: "#5b6ca2",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/events/manage/8769">Events Menager 8769</Link>
        <Link to="/events/manage/8768">Events Menager 8768</Link>
        <Link to="/events/manage/8770">Events Menager 8770</Link>
        <Link to="/events/manage/8771">Events Menager 8771</Link>
        <Link to="/auth/">Auth</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/event/:id" element={<SingleEvent />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/events/manage/:id" element={<ManagePage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
