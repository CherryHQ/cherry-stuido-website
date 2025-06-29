import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { script } from '@/assets/js/script.ts'
import SimpleHeader from '@/components/website/SimpleHeader.tsx'
import AgentsPage from '@/pages/agents'
import DownloadPage from '@/pages/download'
import EnterprisePage from '@/pages/enterprise'
import HomePage from '@/pages/home'
import ThemePage from '@/pages/theme'

function App() {
  useEffect(() => {
    setTimeout(script, 500)
  }, [])

  return (
    <BrowserRouter>
      <SimpleHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/theme" element={<ThemePage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
