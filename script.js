let i = 1
    let y = 0 , resX = resO = equXO = 0 ;  
    
    function x_o1() {
        var elt = document.getElementById("td1") ; 
        if (i%2 == 0 && elt.innerHTML == "") {
            elt.innerHTML = "O" ; 
            i++ ;
        }
        else if (i%2 == 1 && elt.innerHTML == "") {
            elt.innerHTML = "X" ; 
            i++ ;
        }  
    }
    function x_o2() {
        var elt = document.getElementById("td2") ; 
        if (i%2 == 0 && elt.innerHTML == "") {
            elt.innerHTML = "O" ; 
            i++;
        }
        else if (i%2 == 1 && elt.innerHTML == "") {
            elt.innerHTML = "X" ; 
            i++;
        }  
    }
    function x_o3() {
        var elt = document.getElementById("td3") ; 
        if (i%2 == 0 && elt.innerHTML == "") {
            elt.innerHTML = "O" ; 
            i++;
        }
        else if (i%2 == 1 && elt.innerHTML == "") {
            elt.innerHTML = "X" ; 
            i++;
        }  
    }
    function x_o4() {
        var elt = document.getElementById("td4") ; 
        if (i%2 == 0 && elt.innerHTML == "") {
            elt.innerHTML = "O" ; 
            i++;
        }
        else if (i%2 == 1 && elt.innerHTML == "") {
            elt.innerHTML = "X" ; 
            i++;
        }  
    }
    function x_o5() {
        var elt = document.getElementById("td5") ; 
        if (i%2 == 0 && elt.innerHTML == "") {
            elt.innerHTML = "O" ; 
            i++;
        }
        else if (i%2 == 1 && elt.innerHTML == "") {
            elt.innerHTML = "X" ; 
            i++;
        }  
    }
    function x_o6() {
        var elt = document.getElementById("td6") ; 
        if (i%2 == 0 && elt.innerHTML == "") {
            elt.innerHTML = "O" ; 
            i++;
        }
        else if (i%2 == 1 && elt.innerHTML == "") {
            elt.innerHTML = "X" ; 
            i++;
        }  
    }
    function x_o7() {
        var elt = document.getElementById("td7") ; 
        if (i%2 == 0 && elt.innerHTML == "") {
            elt.innerHTML = "O" ; 
            i++;
        }
        else if (i%2 == 1 && elt.innerHTML == "") {
            elt.innerHTML = "X" ; 
            i++;
        }  
    }
    function x_o8() {
        var elt = document.getElementById("td8") ; 
        if (i%2 == 0 && elt.innerHTML == "") {
            elt.innerHTML = "O" ; 
            i++;
        }
        else if (i%2 == 1 && elt.innerHTML == "") {
            elt.innerHTML = "X" ; 
            i++;
        }  
    }
    function x_o9() {
        var elt = document.getElementById("td9") ; 
        if (i%2 == 0 && elt.innerHTML == "") {
            elt.innerHTML = "O" ; 
            i++;
        }
        else if (i%2 == 1 && elt.innerHTML == "") {
            elt.innerHTML = "X" ; 
            i++;
        }  
    }
    function test() {
        
        y++ ; 
        
        i1 = document.getElementById("td1").innerHTML;
        i2 = document.getElementById("td2").innerHTML;
        i3 = document.getElementById("td3").innerHTML;
        i4 = document.getElementById("td4").innerHTML; 
        i5 = document.getElementById("td5").innerHTML;
        i6 = document.getElementById("td6").innerHTML;
        i7 = document.getElementById("td7").innerHTML;
        i8 = document.getElementById("td8").innerHTML;
        i9 = document.getElementById("td9").innerHTML;
            
  
        if ( (i1 == "X" && i2 == "X" && i3 == "X") || (i4 == "X" &&  i5 == "X" &&  i6 == "X") || ( i7 == "X" && i8 == "X" &&  i9 == "X") || (i1 == "X" &&  i4 == "X" &&  i7 == "X") || ( i2 == "X" && i5 == "X" &&  i8 == "X") || ( i3 == "X" &&  i6 == "X" && i9 == "X") || ( i1 == "X" &&  i5 == "X" &&  i9 == "X") || ( i3 == "X" &&  i5 == "X" && i7 == "X") ) {
            
    document.getElementById("res").innerHTML = "X Winner" ;
           resX++ ; 
           clearTimeout( t ) ;
         }
        else if ( (i1 == "O" && i2 == "O" && i3 == "O") || (i4 == "O" &&  i5 == "O" &&  i6 == "O") || ( i7 == "O" && i8 == "O" &&  i9 == "O") || (i1 == "O" &&  i4 == "O" &&  i7 == "O") || ( i2 == "O" && i5 == "O" &&  i8 == "O") || ( i3 == "O" &&  i6 == "O" && i9 == "O") || ( i1 == "O" &&  i5 == "O" &&  i9 == "O") || ( i3 == "O" &&  i5 == "O" && i7 == "O") ) {
            
            document.getElementById("res").innerHTML = "O Winner" ;
            
         resO++ ; 
         clearTimeout( t )  ; 
        }
        else if ( i >= 10 ) {
 document.getElementById("res").innerHTML = "Equality" ;
          equXO++ ;
          clearTimeout( t ) ; 
        }
    
    document.getElementById("game").innerHTML = "X : " + resX + " , O : " + resO + " , EquXO : " + equXO ;            
    }  
    
    var t = setInterval( test , 100 ) ;
    
    function repeatgame() {
       var j ; 
       for ( j = 1 ; j <= 9 ; j++ ) {
document.getElementById("td"+j).innerHTML = "" ; 
       i = 1 ; 
   }
   document.getElementById("res").innerHTML = "Result" ;
  t = setInterval( test , 100 ) ;
    }