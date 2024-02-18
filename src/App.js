
import About from './components/About';
import FAQs from './components/FAQs';
import Navbar from './components/Navbar';
import Road from './components/Road';
import Team from './components/Team';
import Video from './components/Video';
import Vision from './components/Vision';
import './index.css';



export default function App() {
  return (
    <>
    <Navbar/>
    <Video/>
    <About/>
    <Team/>
    <Vision/>
    <FAQs/>
    <Road/>
    </>
  )
}
