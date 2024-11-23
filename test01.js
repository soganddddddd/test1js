//calculator

class calculator{
    add (i,j){
        return i+j;
    }

    minus (i,j){
    return i-j;
    }

    multiply(i,j){
        return i*j;
    }

    devide(i,j){
        if ( j=== 0){
            console.log("cannot devide by zero")
        }else
        return i/j;
    }
}