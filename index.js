//ini value
let z = 0;
let c = 0;
let mp = 0; 
//main program

document.getElementById("submit").onclick = function getResult(){
    first_choice = document.getElementById("first_Q").value;
    second_choice = document.getElementById("second_Q").value;
    third_choice = document.getElementById("third_Q").value;
    forth_choice = document.getElementById("forth_Q").value;
    fifth_choice = document.getElementById("fifth_Q").value;

    z = 0;
    c = 0;
    mp = 0;
    
    //First Q
    if (first_choice == "A"){
        z += 1;
        c -= 1;
        mp -=1;
    } else if (first_choice == "B"){
        z -= 1;
        c += 1;
        mp -=1;
    } else if (first_choice == "C"){
        z += 1;
        c -= 1;
        mp +=1;
    } else if (first_choice == "D"){
        z -= 1;
        c -= 1;
        mp +=1;
    }

    //Second Q
    if (second_choice == "A"){
        z -= 1;
        c -= 1;
        mp -=1;
    } else if (second_choice == "B"){
        z -= 1;
        c += 1;
        mp -=1;
    } else if (second_choice == "C"){
        z -= 1;
        c -= 1;
        mp -=1;
    } else if (second_choice == "D"){
        z += 1;
        c -= 1;
        mp +=1;
    }

    //Third_Q
    if (third_choice == "A"){
        z -= 1;
        c += 1;
        mp -=1;
    } else if (third_choice == "B"){
        z += 1;
        c += 1;
        mp +=1;
    } else if (third_choice == "C"){
        z -= 1;
        c -= 1;
        mp -=1;
    } else if (third_choice == "D"){
        z += 1;
        c -= 1;
        mp +=1;
    }

    //Forth_Q
    if (forth_choice == "A"){
        z -= 1;
        c -= 1;
        mp +=1;
    } else if (forth_choice == "B"){
        z -= 1;
        c += 1;
        mp +=1;
    } else if (forth_choice == "C"){
        z += 1;
        c += 1;
        mp -=1;
    } else if (forth_choice == "D"){
        z += 1;
        c -= 1;
        mp -=1;
    }

    //Fifth
    if (fifth_choice == "A"){
        z -= 1;
        c -= 1;
        mp +=1;
    } else if (fifth_choice == "B"){
        z += 1;
        c -= 1;
        mp -=1;
    } else if (fifth_choice == "C"){
        z += 1;
        c += 1;
        mp -= 1;
    }

    //checking

    if (z > 0){
        if (c > 0){
            if (mp > 0){
                console.log('浣上不睡教')
            } else if (mp <= 0){
                console.log('我不想浣了')
            }            
        } else if (c <= 0){
            if (mp > 0){
                console.log('鐵手浣')
            } else if (mp <= 0){
                console.log('護食浣')
            }
        }
    } else if (z <=0){
        if (c > 0){
            if (mp > 0){
                console.log('交浣生')
            } else if (mp <= 0){
                console.log('壺壺浣')
            }            
        } else if (c <= 0){
            if (mp > 0){
                console.log('浣蛋了')
            } else if (mp <= 0){
                console.log('洗浣')
            }
        }
    }
}
