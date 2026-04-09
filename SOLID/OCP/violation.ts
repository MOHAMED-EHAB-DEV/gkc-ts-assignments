type Shape = {
    kind: 'circle' | 'rectangle'
    radius?: number
    width?: number
    height?: number
}

class AreaCalculator {
    calculate(shape: Shape): number {
        if (shape.kind === 'circle') {
            return Math.PI * shape.radius! ** 2
        } else if (shape.kind === 'rectangle') {
            return shape.width! * shape.height!
        }

        throw new Error('Unknown shape')
    }
}