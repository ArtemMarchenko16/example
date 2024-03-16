function addStyles () {
    let styles = []; 

    //width:
    let getId = document.getElementById("inpWidth").value;
    
    let getSilverBlock = document.getElementById("silverBlock");
    let unit = document.getElementById("unit1").value;
    getSilverBlock.style.width = `${getId}${unit}`;    
    styles.push(`width: ${getId}${unit};`)

    //height:
    let idHeight = document.getElementById("inpHeight").value;

    let unit2 = document.getElementById("unit2").value;
    getSilverBlock.style.height = `${idHeight}${unit2}`;
    styles.push(`height: ${idHeight}${unit2};`)

    //color:
    let colorForBlock = document.getElementById("colorForBlock");
    getSilverBlock.style.backgroundColor = colorForBlock.value;
    styles.push(`background-color: ${colorForBlock.value};`);

    //text:
    let getText = document.getElementById("getText").value;
    getSilverBlock.innerText = `${getText}`;

    //border:
    let getInpBorder = document.getElementById("inpBorder").value;
    let getUnit3 = document.getElementById("unit3").value;
    
    
    
    let getBorder = document.getElementById("getCheckBox");
    // if (getBorder.checked) {
    //     getSilverBlock.style.border = "3px solid black";
    // } else {
    //     getSilverBlock.style.border = " "
    // }

   (getBorder.checked)?(getSilverBlock.style.border = `${getInpBorder}${getUnit3} solid`):(getSilverBlock.style.border = "");
   styles.push(`border: ${getInpBorder}${getUnit3} solid;`);
   
    //output:

    let getCodeInfo = document.getElementById("infoAboutCode");
    let xxx = styles.join(" ");
    console.log(styles);
    getCodeInfo.innerText = xxx;
    


}