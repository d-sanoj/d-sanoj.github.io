import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(<HashRouter> <App /> </HashRouter> document.getElementById("root")!).render(<App />);
