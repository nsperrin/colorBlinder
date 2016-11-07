/**
 * Created by Nick on 11/6/2016.
 */
var schemes = [];
var colors = [];
var r,g,b;
var fs = require('fs');

for(r=255;r>=0;r-=64){
    for(g=255;g>=0;g-=64){
        for(b=255;b>=0;b-=64){
            colors.push({R:r,G:g,B:b});
        }
    }
}

for(i=1;i<colors.length;i++){
    schemes.push({
        name:'Scheme: '+i,
        colors:[]
    });
    for(j=0;j<i;j++){
        schemes[i-1].colors.push(colors[j]);
    }
}
fs.writeFileSync('schemes.js','[');
for(var i=0;i<schemes.length;i++) {
    fs.appendFileSync('schemes.js', JSON.stringify(schemes[i])+',');
}
fs.appendFileSync('schemes.js','];');