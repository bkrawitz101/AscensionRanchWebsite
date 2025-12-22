import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Story from './pages/Story.jsx'
import StayDetail from './pages/StayDetail.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))
const pathname = window.location.pathname || '/'
const base = import.meta.env.BASE_URL || '/'

const isStory = (
  pathname === `${base}story` ||
  pathname === `${base}story/` ||
  pathname === '/story' ||
  pathname === '/story/'
)

const stayMatch = (() => {
  // Accept paths like /stay/slug or /<base>stay/slug
  const prefix = `${base}stay/`;
  if (pathname.startsWith(prefix)) return pathname.slice(prefix.length).replace(/\/$/, '');
  if (pathname.startsWith('/stay/')) return pathname.slice('/stay/'.length).replace(/\/$/, '');
  return null;
})();

if (isStory) {
  root.render(
    <React.StrictMode>
      <Story />
    </React.StrictMode>
  )
} else if (stayMatch) {
  root.render(
    <React.StrictMode>
      <StayDetail slug={stayMatch} />
    </React.StrictMode>
  )
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
