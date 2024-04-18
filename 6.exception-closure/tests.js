console.log('проверка работы githuv pages')
//почему гитхаб страницы не работают, поэтому попробовал вставить код из task js сюда
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

describe('Домашнее задание к лекции «Обработка исключений и замыкания»', () => {
    describe('Задача №1', () => {
      it('функция parseCount должна парсить целое значение', () => {
        expect(parseCount("123")).toEqual(123);
      });
  
      it('функция parseCount должна парсить значение 012', () => {
        expect(parseCount("012")).toEqual(12);
      });
  
      it('функция validateCount должна парсить дробное значение', () => {
        expect(validateCount("56.65")).toEqual(56.65);
      });

      it('функция parseCount не должна парсить невалидное значение', () => {
        expect(() => parseCount("ыфва")).toThrowError("Невалидное значение");
    });

      it('функция validateCount должна возвращать перехваченную ошибку', () => {
        expect(validateCount("ыфва").stack.includes("parseCount")).toBeTruthy();
      });
    });

    describe('Задача №2', () => {
      it('объект Triangle должен создаваться', () => {
        expect(new Triangle(1,3,3)).toBeDefined();
      });
  
      it('объект Triangle должен создаваться и правильно считаться периметр и прощадь №1', () => {
        const triangle = new Triangle(2,5,5);
        expect(triangle).toBeDefined();
        expect(triangle.perimeter).toEqual(12);
        expect(triangle.area).toEqual(4.899);
      });
  
      it('объект Triangle должен создаваться и правильно считаться периметр и прощадь №2', () => {
        const triangle = new Triangle(6,10,15);
        expect(triangle).toBeDefined();
        expect(triangle.perimeter).toEqual(31);
        expect(triangle.area).toEqual(20.123);
      });

      it('объект Triangle не должен менять свойства периметра и площади', () => {
        const triangle = new Triangle(6,10,15);
        expect(triangle).toBeDefined();

        triangle.perimeter = "неправильное значение";
        triangle.area = "неправильное значение";
        expect(triangle.perimeter).toEqual(31);
        expect(triangle.area).toEqual(20.123);
      });
  
      it('объект Triangle не должен создаваться №1', () => {
        expect(() => new Triangle(1,3,100)).toThrowError("Треугольник с такими сторонами не существует");
      });
  
      it('объект Triangle не должен создаваться №2', () => {
        expect(() => new Triangle(100,3,10)).toThrowError("Треугольник с такими сторонами не существует");
      });
  
      it('объект Triangle не должен создаваться №3', () => {
        expect(() => new Triangle(1,300,10)).toThrowError("Треугольник с такими сторонами не существует");
      });
  
      it('функция getTriangle должна возвращать объект треугольника', () => {
        expect(getTriangle(2,5,5)).toEqual(new Triangle(2,5,5));
      });
  
      it('функция getTriangle не должна возвращать объект треугольника', () => {
        const triangle = getTriangle(1,3,100);
        expect(triangle.area).toEqual('Ошибка! Треугольник не существует');
        expect(triangle.perimeter).toEqual('Ошибка! Треугольник не существует');
      });

      it('у возвращаемого объекта нельзя менять свойства получения периметра и площади', () => {
        const triangle = getTriangle(1,3,100);

        triangle.perimeter = "неправильное значение";
        triangle.area = "неправильное значение";
        expect(triangle.area).toEqual('Ошибка! Треугольник не существует');
        expect(triangle.perimeter).toEqual('Ошибка! Треугольник не существует');
      });
    })

});
