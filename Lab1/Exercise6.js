
String.prototype.filter= function (str){
  //final = this.split(" ");
  let final = this.toString();
  //console.log(final);
          for(key of str){
             // console.log(arguments[key]);
          final = final.replace(key, "***");
         // console.log(result);
         
          }
          return final;
        }

console.log("This house is nice!".filter(['house', 'nice']));