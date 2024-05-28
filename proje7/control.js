class control{
    static isHaveOperator(value){
        let result=false;
        for(let i=0;i<value.length;i++){
            if(this.getOperator().has(value[i])){
             result=true;
             break;
            }

        }

        return result;
    }


    static getOperator(){
        const map=new Map();
        map.set("+","toplama");
        map.set("-","cıkarma");
        map.set("/","bölme");
        map.set("*","çarpma");
        map.set(".","nokta");

        return map;
    }

    static isDotHave(value){
        
        for(let i=0;i<value.length;i++){
            if(this.getOperator().has(value[i])){
              return true;
             break;
            }
    }
    return false;
}


static deleteLastChar(value){
   return  value.slice(0,value.length-1);
}
}