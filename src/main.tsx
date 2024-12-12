import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import General from './components/General.tsx';
import Professional from './components/Professional.tsx';
import Educational from './components/Educational.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <General />
    <Professional />
    <Educational />
  </StrictMode>,
)