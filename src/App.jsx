import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import OverviewPage from './pages/OverviewPage'
import DetailPage from './pages/DetailPage'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/city/:citySearch" element={<DetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
