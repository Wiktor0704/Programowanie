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
