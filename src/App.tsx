import { Route, Routes, Navigate } from 'react-router'
import { Home, Projects, Research, Experience } from 'pages'
import { Navigation } from 'components'

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/research" element={<Research />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
