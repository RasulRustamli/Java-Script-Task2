class CustomMatch{
    constructor(number){
        this.number=number;
    }
    plus(number) {

        this.number+=number;
        return this

    }
    minus(number){
        this.number-= number;
        return this
    }
    multiply(number){
        this.number*=number
        return this
    }
    divide(number){
        this.number/=number
        return this
    }


}

var result= new CustomMatch(100).plus(6).minus(30).multiply(3).divide(2)
console.log(result.number);

