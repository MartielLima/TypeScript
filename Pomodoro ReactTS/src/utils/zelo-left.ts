export default function zeroLeft(num: number): string {
    return Math.floor(num).toString().padStart(2, '0');
}
