
const CheckTemp = () =>{
    const numberValue = document.getElementById("number").value;
    // console.log(numberValue);
    const tempValue = document.getElementById("selectTemp");
    const selectedValue = selectTemp.options[tempValue.selectedIndex].value;
    // console.log(selectedValue);

    const celToFaren = (celsius) =>{
        let farenheitvalue = Math.round((celsius * 9 / 5) + 32);
        return farenheitvalue;

    }
    const farenToCel = (farenheit) =>{
        let celsiusValue  = Math.round((farenheit - 32) * 5 /9);
        return celsiusValue;
    }

    let result;

    if(selectedValue == "Cel"){
        result = celToFaren(numberValue);
        document.getElementById("finalResult").innerHTML = ` = ${result} Farenheit`;
    }
    else{
         result = farenToCel(numberValue);
        document.getElementById("finalResult").innerHTML = ` = ${result} Celsius`;
    }

    
}