function calculateMinCost() {
    //your code here
    let name = document.getElementById("rope-lengths");
      let c = name.value;
      let a = c.split(",");
  
      a.sort((a,b)=>
          a-b
            );
      let b = new Array();
          let j=0;
      
	let i=0;
    for(i=0;i<a.length-1;i+=2){
            let k = parseInt(a[i])+parseInt(a[i+1]);
            b[j]=k;
            j++;
           
        }
       


       if(i==a.length-1){
		   let last = parseInt(a[i]);
           let length=b.length;
		   for(let l = 0;l<length;l++){
            
			   last+=parseInt(b[l]);
			   b[j++]=last;
               
		   }
         
	   }
      let ans =0;
      for (let index = 0; index < b.length; index++) {
          ans+=b[index];
      }
     
    let div = document.getElementById("result");
      div.innerText=ans;
   
}
  