import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import OverviewPage from './pages/OverviewPage'
import DetailPage from './pages/DetailPage'
import ErrorPage from './pages/ErrorPage'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/city/:cityName" element={<DetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
