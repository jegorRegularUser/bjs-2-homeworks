const parseCount = (unparsedCount) => {
    try {
        const parsedCount = Number.parseFloat(unparsedCount)

        if (parsedCount !== parsedCount) {
            throw new Error("Невалидное значение")
        }

        return parsedCount
    } catch (error) {
        throw error
    }
}

const validateCount = (parsedCount) => {
    try {
        return parseCount(parsedCount)
    } catch (error) {
        return error
    }
}

class Triangle {
    constructor(a, b, c) {
        try {
            if (a == 0 || b == 0 || c == 0 || a > (b + c) || b > (a + c) || c > (a + b)) {
                throw new Error('Треугольник с такими сторонами не существует')
            }
        } catch (e) {
            throw e
        }
        this.a = a
        this.b = b
        this.c = c
    }
    get perimeter() {
        return this.a + this.b + this.c
    }
    get area() {
        return +Math.sqrt(0.5 * this.perimeter * (0.5 * this.perimeter - this.a) * (0.5 * this.perimeter - this.b) * (0.5 * this.perimeter - this.c)).toFixed(3)
    }
}
const getTriangle = (a, b, c) => {
    try {
        return new Triangle(a, b, c)
    } catch (e) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует'
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует'
            }
        }
    }
}
