/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    
    result = input.split(/[a-zA-Z]/, 1)[0];
    if (result == '')
      result = 1;
    else {
      if (/^\d+(\.\d+)?(\/\d+(\.\d+)?)?$/.test(result)) {
        result = result.split('/');
        if (result.length == 2){
          result = Number(result[0]) / Number(result[1]);
        }
        else
          result = result[0];
      } 
      else
        result = 'invalid number';
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    result = input.split(/[^a-zA-Z]+/, );
    result = result[result.length-1];
    
    
    
//     switch (result) {
//       case 'gal':
//       case 'lbs':
//       case 'mi':
//       case 'l':
//       case 'kg':
//       case 'km':
//         break;
//       default:
//         result = 'invalid unit';
//     }
    
    return /^gal$|^lbs$|^mi$|^l$|^kg$|^km$/i.test(result) ? result.toLowerCase() : 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    var result = {
      gal:  'l',
      l:    'gal',
      lbs:  'kg',
      kg:   'lbs',
      mi:   'km',
      km:   'mi'
    };
    
    return result[initUnit];
  };

  this.spellOutUnit = function(unit) {
    var result = {
      gal:  'gallon',
      l:    'litre',
      lbs:  'pound',
      kg:   'kilograms',
      mi:   'mile',
      km:   'kilometre'
    };
    
    return result[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result, factor;
    
    switch (initUnit) {
      case 'gal':
        factor = galToL;
        break;
      case 'l':
        factor = 1/galToL;
        break;
      case 'lbs':
        factor = lbsToKg;
        break;
      case 'kg':
        factor = 1/lbsToKg;
        break;
      case 'mi':
        factor = miToKm;
        break;
      case 'km':
        factor = 1/miToKm;
        break;
      default:
        return false;
    }
    
    return result = initNum * factor;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
