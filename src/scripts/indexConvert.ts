export default function oneToTwo(idx: number): number[] {
    return [~~(idx / 9), idx % 9];
}