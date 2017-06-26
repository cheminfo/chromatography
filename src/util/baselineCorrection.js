export function baselineCorrection(total, base, kind) {
    switch (kind) {
        case 'trapezoid':
            return {
                integral: total - ((base.end.time - base.start.time) * (base.end.height + base.start.height) / 2),
                base
            };
        case 'min':
            if (base.end.height > base.start.height) {
                base.end.height = base.start.height;
                return {
                    integral: total - ((base.end.time - base.start.time) * base.start.height),
                    base
                };
            } else {
                base.start.height = base.end.height;
                return {
                    integral: total - ((base.end.time - base.start.time) * base.end.height),
                    base
                };
            }
        default:
            throw new Error(`Unknown baseline method "${kind}"`);
    }
}
