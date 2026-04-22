//zadanie 2



class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary
    }
    wypisz(){
        const sign = this.imaginary >= 0 ? '+' :  '-'
        return `${this.real} ${sign} ${Math.abs(this.imaginary)}i`;
    }
    module(){
        return Math.sqrt(this.real ** 2 + this.imaginary **2)
    }
}

//zadanie 3
const generateComplexArray = (n) => {
    const arr = []
    for(let i=0; i<n; i++) {
        const r = Math.floor(Math.random() *21) - 10;
        const im =Math.floor(Math.random() *21) - 10
        arr.push(new ComplexNumber(r,im))
    }
    return arr
}
const ComplexArray = generateComplexArray(5)
console.log("Wygenerowana tablica:")
complexArray.forEach(c => console.log(c.wypisz()))

//zadanie 4
[span_6](start_span)
const positiveComplexNumbers = arr => arr.filter(C -> c.real > 0 && c.imaginary >0)
console.log("Zadanie 4- Tylko dodatnie: ")
positiveComplexNumbers(complexArray).forEach(c => console.log(c.wypisz()))

//zadanie 5
