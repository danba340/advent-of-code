const fs = require('fs');
const input = fs.readFileSync('side-scripts/gava.csv', 'utf8');

// https://stackoverflow.com/a/1293163/5415663
function CSVToArray( strData, strDelimiter ){
  strDelimiter = (strDelimiter || ",");

  var objPattern = new RegExp(
      (
          "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
          "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
          "([^\"\\" + strDelimiter + "\\r\\n]*))"
      ),
      "gi"
      );

  var arrData = [[]];
  var arrMatches = null;

  while (arrMatches = objPattern.exec( strData )){
      var strMatchedDelimiter = arrMatches[ 1 ];
      if (
          strMatchedDelimiter.length &&
          strMatchedDelimiter !== strDelimiter
          ){
          arrData.push( [] );
      }
      var strMatchedValue;
      if (arrMatches[ 2 ]){
          strMatchedValue = arrMatches[ 2 ].replace(
              new RegExp( "\"\"", "g" ),
              "\""
              );
      } else {
          strMatchedValue = arrMatches[ 3 ];
      }
      arrData[ arrData.length - 1 ].push( strMatchedValue );
  }
  return( arrData );
}

const arr = CSVToArray(input);
const ipIndex = 5;

const output = arr.filter((gift, i) => {
  // debugger;
  if(i === 0 || typeof gift[ipIndex] !== 'string') return false
  const ipMatches = arr.filter((a) => a[ipIndex] === gift[ipIndex])
  console.log('ipMatches:', ipMatches)
  if (ipMatches.length > 1) return false
  return true
})

console.log('output:', output)
