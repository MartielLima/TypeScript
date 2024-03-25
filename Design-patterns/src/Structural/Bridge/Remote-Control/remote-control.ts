import { DeviceImplementation } from '../Device/device-implementation';

export class RemoteControl {
    constructor(protected device: DeviceImplementation) {}

    togglePower(): void {
        this.device.setPower(!this.device.getPower());
        console.log(`${this.device.getName()} power status: ${this.device.getPower()}`);
    }
}
