import React, { useEffect, useCallback } from 'react';
import useInterval from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

import bellStart from '../sounds/bell-start.mp3';
import bellFinish from '../sounds/bell-finish.mp3';
import secondsToTime from '../utils/seconds-to-time';

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

interface Props {
    PomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
    const [mainTime, setMainTime] = React.useState(props.PomodoroTime);
    const [timeCounting, setTimeCounting] = React.useState(false);
    const [working, setWorking] = React.useState(false);
    const [resting, setResting] = React.useState(false);
    const [cyclesQtdManager, setCyclesQtdManager] = React.useState(
        new Array(props.cycles - 1).fill(true),
    );

    const [completedCycles, setCompletedCycles] = React.useState(0);
    const [fullWorkingTime, setFullWorkingTime] = React.useState(0);
    const [numberOfPomodoros, setNumberOfPomodoros] = React.useState(0);

    useInterval(
        () => {
            setMainTime(mainTime - 1);
            if (working) setFullWorkingTime(fullWorkingTime + 1);
        },
        timeCounting ? 1000 : null,
    );

    const configureWorking = useCallback(() => {
        setTimeCounting(true);
        setWorking(true);
        setResting(false);
        setMainTime(props.PomodoroTime);

        audioStartWorking.play();
    }, [props.PomodoroTime]);

    const configureRest = useCallback(
        (long: boolean = false) => {
            setTimeCounting(true);
            setWorking(false);
            setResting(true);
            setMainTime(long ? props.longRestTime : props.shortRestTime);

            audioStopWorking.play();
        },
        [props.longRestTime, props.shortRestTime],
    );

    useEffect(() => {
        if (working) document.body.classList.add('working');
        if (resting) document.body.classList.remove('working');

        if (mainTime > 0) return;

        if (working && cyclesQtdManager.length > 0) {
            configureRest(false);
            cyclesQtdManager.pop();
        } else if (working && cyclesQtdManager.length <= 0) {
            configureRest(true);
            setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
            setCompletedCycles(completedCycles + 1);
        }

        if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
        if (resting) configureWorking();
    }, [
        working,
        resting,
        mainTime,
        cyclesQtdManager,
        props.cycles,
        configureRest,
        setCyclesQtdManager,
        numberOfPomodoros,
        configureWorking,
        completedCycles,
    ]);

    return (
        <>
            <div className="pomodoro">
                <h2>Você esta {working ? 'trabalhando' : 'descansando'}!</h2>

                <Timer mainTime={mainTime} />

                <div className="controls">
                    <Button onClick={() => configureWorking()}>Work</Button>
                    <Button onClick={() => configureRest()}>Rest</Button>
                    <Button
                        onClick={() => setTimeCounting(!timeCounting)}
                        className={!working && !resting ? 'hidden' : 'null'}
                    >
                        {timeCounting ? 'Pause' : 'Play'}
                    </Button>
                </div>

                <div className="details">
                    <p>Ciclos concluídos: {completedCycles}</p>
                    <p>Tempo de dedicação: {secondsToTime(fullWorkingTime)}</p>
                    <p>Pomodoros concluídos: {numberOfPomodoros}</p>
                </div>
            </div>
        </>
    );
}
