import Cover from './components/Cover';
import EditorialQuote from './components/EditorialQuote';
import Story from './components/Story';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import ScratchNote from './components/ScratchNote';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <main className="w-full min-h-screen bg-paper">
      <AudioPlayer />
      <Cover />
      <EditorialQuote />
      <Story />
      <Timeline />
      <Gallery />
      <RSVP />
      <ScratchNote />
      <Footer />
    </main>
  );
}

export default App;
