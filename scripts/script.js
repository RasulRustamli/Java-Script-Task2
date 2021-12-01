class CustomMatch{
    constructor(number){
        this.number=number;
    }
    plus(reqem) {

        this.number+=reqem;
        return new CustomMatch(this.number)

    }
    minus(n){
        this.number-= n;
        return new CustomMatch(this.number)
    }
    multiply(number){
        this.number*=number
        return new CustomMatch(this.number)
    }
    divide(number){
        this.number/=number
        return new CustomMatch(this.number)
    }


}

var result= new CustomMatch(100).plus(6).minus(30).multiply(3).divide(2)
console.log(result.number);

