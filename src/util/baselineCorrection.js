export function baselineCorrection(total, base, kind) {
    switch (kind) {
        case 'trapezoid':
            return total - ((base.end.time - base.start.time) * (base.end.height + base.start.height) / 2);
        case 'min':
            if (base.end.height > base.start.height) {
                return total - ((base.end.time - base.start.time) * base.start.height);
            } else {
                return total - ((base.end.time - base.start.time) * base.end.height);
            }
        default:
            throw new Error(`Unknown baseline method "${kind}"`);
    }
}
