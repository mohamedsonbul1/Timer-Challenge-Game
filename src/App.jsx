import Player from './components/Player.jsx';
import TimerChalleng from './components/TimerChalleng.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChalleng title="Easy" targetTime={1} />
        <TimerChalleng title="Not Easy" targetTime={5} />
        <TimerChalleng title="Getting Tough" targetTime={10} />
        <TimerChalleng title="Pros Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
