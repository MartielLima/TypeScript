import { PomodoroTimer } from './components/pomodoro-timer';

function App() {
    return (
        <div className="container">
            <PomodoroTimer
                PomodoroTime={8}
                shortRestTime={2}
                longRestTime={8}
                cycles={4}
            />
        </div>
    );
}

export default App;
