export function save(score:number,s:String):number{
    switch(s){
        case "0":{
            break;
        }
        case "2000":{score=1+score;
            break;}
        case "4000":{score=2+score;
            break;}
        case "6000":{score=3+score;
            break;}
        case "8000":{score=4+score;
            break;}
        case "10000":{score=5+score;
            break;}
    }
    return score;
}
export function loan(score:number,s:String):number{
    switch(s){
        case "0":{score+=5;break;}
        case "2000":{score+=4;break;}
        case "4000":{score+=3;break;}
        case "6000":{score+=2;break;}
        case "8000":{score+=1;break;}
        case "10000":{break;}
    }
    return score;
}