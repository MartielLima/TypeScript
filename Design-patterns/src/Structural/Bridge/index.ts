import { Tv } from './Device/tv';
import { RemoteControl } from './Remote-Control/remote-control';
import { RemoteControlWithVolume } from './Remote-Control/remote-control-with-volume';
import { Radio } from './Device/radio';

function client(abstraction: RemoteControl | RemoteControlWithVolume): void {
    abstraction.togglePower(); // true

    if (!('volumeUp' in abstraction)) return;
    abstraction.volumeUp(); //20
    abstraction.volumeUp(); //30
    abstraction.volumeDown(); //20
}

const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
client(radioRemoteControl);

console.log();

const tv = new Tv();

const tvRemoteControl = new RemoteControlWithVolume(tv);
client(tvRemoteControl);
