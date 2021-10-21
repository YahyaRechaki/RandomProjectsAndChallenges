function rgb(r, g, b){

    if (r > 255){
        r=255;
    }
    if (r<0) {
        r=0;
    }
    if (g > 255){
        g=255;
    }
    if (g<0) {
        g=0;
    }
    if (b > 255){
        b=255;
    }
    if (b<0) {
        b=0;
    }

    // Variables to store division and remainders of RGBs values
    let rDivision = r/16;
    let rRemainderMutilplie16 = (r%16)*16;
    let gDivision = g/16;
    let gRemainderMutilplie16 = (g%16)*16;
    let bDivision = b/16;
    let bRemainderMutilplie16 = (b%16)*16;
    let HexaDecimalValue = "#";
    // Do the Maths
    if (10<=rDivision<11)
        rDivision = 'A';
    if (10<=gDivision<11)
        gDivision = 'A';
    if (10<=bDivision<11)
        bDivision = 'A';
    //
    if (11<=rDivision<12)
        rDivision = 'B';
    if (11<=gDivision<12)
        gDivision = 'B';
    if (11<=bDivision<12)
        bDivision = 'B';
    //
    if (12<=rDivision<13)
        rDivision = 'C';
    if (12<=gDivision<13)
        gDivision = 'C';
    if (12<=bDivision<13)
        bDivision = 'C';
    //
    if (13<=rDivision<14)
        rDivision = 'D';
    if (13<=gDivision<14)
        gDivision = 'D';
    if (13<=bDivision<14)
        bDivision = 'D';
    //
    if (14<=rDivision<15)
        rDivision = 'E';
    if (14<=gDivision<15)
        gDivision = 'E';
    if (14<=bDivision<15)
        bDivision = 'E';
    //
    if (15<=rDivision<16)
        rDivision = 'F';
    if (15<=gDivision<16)
        gDivision = 'F';
    if (15<=bDivision<16)
        bDivision = 'F';
    
    // Print the Hexa Decimal Value
    console.log(HexaDecimalValue.concat(rDivision, rRemainderMutilplie16, gDivision, gRemainderMutilplie16,bDivision, bRemainderMutilplie16));
}

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
rgb(0, 0, -20) // return 000000

// correct method
function rgb(r, g, b) {
    const convert = function(val) {
      if(val < 0) {
        return '00';
      }
      if(val > 255) {
        return 'FF';
      }
      return (val > 15 ? val.toString(16) : '0' + val.toString(16)).toUpperCase();
    }
    return convert(r) + convert(g) + convert(b); 
  }