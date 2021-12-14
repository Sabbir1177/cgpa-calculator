// onclick Event function call to get all input value.
document.querySelector('#btn_sub').addEventListener('click',() =>{

    // first input value get
    let first_gpa=document.querySelector('#first-gpa').value;
    let first_gpa_per=(first_gpa /100)*8.33;
    // first input final  value 
    let first_gpa_per_result=first_gpa_per.toPrecision(3);
    
    
    
    // two input value get
    let two_gpa=document.querySelector("#two-gpa").value;
    let two_gpa_per=(two_gpa / 100) * 8.33;
    // two input final  value 
    let two_gpa_per_result=two_gpa_per.toPrecision(3);
    
    
    // three input value get
    let three_gpa=document.querySelector("#three-gpa").value;
    let three_gpa_per=(three_gpa / 100) * 8.33;
    // three input final  value 
    let three_gpa_per_result=three_gpa_per.toPrecision(3);
    
    
    // four input value get
    let four_gpa=document.querySelector("#four-gpa").value;
    let four_gpa_per=(four_gpa / 100) * 8.33;
    // four input final  value 
    let four_gpa_per_result=four_gpa_per.toPrecision(3);
    
    
    // five input value get
    let five_gpa=document.querySelector("#five-gpa").value;
    let five_gpa_per=(five_gpa / 100) * 8.33;
    // five input final  value 
    let five_gpa_per_result=five_gpa_per.toPrecision(3);
    
    
    // six input value get
    let six_gpa=document.querySelector("#six-gpa").value;
    let six_gpa_per=(six_gpa / 100) * 8.33;
    // six input final  value 
    let six_gpa_per_result=six_gpa_per.toPrecision(3);
    
    // seven input value get
    let seven_gpa=document.querySelector("#seven-gpa").value;
    let seven_gpa_per=(seven_gpa / 100) * 8.33;
    // seven input final  value 
    let seven_gpa_per_result=seven_gpa_per.toPrecision(3);
    
    // eight input value get
    let eight_gpa=document.querySelector("#eight-gpa").value;
    let eight_gpa_per=(eight_gpa / 100) * 8.33;
    // eight input final  value 
    let eight_gpa_per_result=eight_gpa_per.toPrecision(3);
    
    // nine input value get
    let nine_gpa=document.querySelector("#nine-gpa").value;
    let nine_gpa_per=(nine_gpa / 100) * 8.33;
    // eight input final  value 
    let nine_gpa_per_result=nine_gpa_per.toPrecision(3);
    
    //  ten input value get
    let ten_gpa=document.querySelector("#ten-gpa").value;
    let ten_gpa_per=(ten_gpa / 100) * 8.33;
    // ten input final  value 
    let ten_gpa_per_result=ten_gpa_per.toPrecision(3);
    
    // eleven input value get
    let eleven_gpa=document.querySelector("#eleven-gpa").value;
    let eleven_gpa_per=(eleven_gpa / 100) * 8.33;
    // eleven input final  value 
    let eleven_gpa_per_result=eleven_gpa_per.toPrecision(3);
    
    // twelve input value get
    let twelve_gpa=document.querySelector("#twelve-gpa").value;
    let twelve_gpa_per=(twelve_gpa / 100) * 8.33;
    // twelve input final  value 
    let twelve_gpa_per_result=twelve_gpa_per.toPrecision(3);
    
    
    // total final value sum 
    let total =
    parseFloat(first_gpa_per_result)+
    parseFloat(two_gpa_per_result)+
    parseFloat(three_gpa_per_result)+
    parseFloat(four_gpa_per_result)+
    parseFloat(five_gpa_per_result)+
    parseFloat(six_gpa_per_result)+
    parseFloat(seven_gpa_per_result)+
    parseFloat(eight_gpa_per_result)+
    parseFloat(nine_gpa_per_result)+
    parseFloat(ten_gpa_per_result)+
    parseFloat(eleven_gpa_per_result)+
    parseFloat(twelve_gpa_per_result);
    let total_cgpa=total.toPrecision(3);
    // total value show output
    document.querySelector('.cgpa_output h1').innerHTML=`TOTAL CGPA = ${total_cgpa}`
    })
    
    document.querySelector('#btn_re').addEventListener('click',() =>{
      document.querySelector('.cgpa_output h1').innerHTML=`TOTAL CGPA =`
      document.querySelector('#first-gpa').value='';
      document.querySelector('#two-gpa').value='';
      document.querySelector('#three-gpa').value='';
      document.querySelector('#four-gpa').value='';
      document.querySelector('#five-gpa').value='';
      document.querySelector('#six-gpa').value='';
      document.querySelector('#seven-gpa').value='';
      document.querySelector('#eight-gpa').value='';
      document.querySelector('#nine-gpa').value='';
      document.querySelector('#ten-gpa').value='';
      document.querySelector('#eleven-gpa').value='';
      document.querySelector('#twelve-gpa').value='';
    })
    // onclick Event function call reset all input and output value
    