import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Educational from './components/Educational.tsx';
// import General from './components/General.tsx';
// import Professional from './components/Professional.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Educational />
  </StrictMode>,
)