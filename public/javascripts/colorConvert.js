/*
 * I got the color matricies from the following website
 * http://web.archive.org/web/20081014161121/http://www.colorjack.com/labs/colormatrix/
 */

var blindness = {
    'Normal':       [      1,     0,     0,     0,     0,
                           0,     1,     0,     0,     0,
                           0,     0,     1,     0,     0,
                           0,     0,     0,     1,     0,
                           0,     0,     0,     0,     1],
    'Protanopia':   [  0.567, 0.433,     0,     0,     0,
                       0.558, 0.442,     0,     0,     0,
                           0, 0.242, 0.758,     0,     0,
                           0,     0,     0,     1,     0,
                           0,     0,     0,     0,     1],
    'Protanomaly':  [  0.817, 0.183,     0,     0,     0,
                       0.333, 0.667,     0,     0,     0,
                           0, 0.125, 0.875,     0,     0,
                           0,     0,     0,     1,     0,
                           0,     0,     0,     0,     1],
    'Deuteranopia': [  0.625, 0.375,     0,     0,     0,
                         0.7,   0.3,     0,     0,     0,
                           0,   0.3,   0.7,     0,     0,
                           0,     0,     0,     1,     0,
                           0,     0,     0,     0,     1],
    'Deuteranomaly':[    0.8,   0.2,     0,     0,     0,
                       0.258, 0.742,     0,     0,     0,
                           0, 0.142, 0.858,     0,     0,
                           0,     0,     0,     1,     0,
                           0,     0,     0,     0,     1],
    'Tritanopia':   [   0.95,  0.05,     0,     0,     0,
                           0, 0.433, 0.567,     0,     0,
                           0, 0.475, 0.525,     0,     0,
                           0,     0,     0,     1,     0,
                           0,     0,     0,     0,     1],
    'Tritanomaly':  [  0.967, 0.033,     0,     0,     0,
                           0, 0.733, 0.267,     0,     0,
                           0, 0.183, 0.817,     0,     0,
                           0,     0,     0,     1,     0,
                           0,     0,     0,     0,     1],
    'Achromatopsia':[  0.299, 0.587, 0.114     ,0,     0,
                       0.299, 0.587, 0.114,     0,     0,
                       0.299, 0.587, 0.114,     0,     0,
                           0,     0,     0,     1,     0,
                           0,     0,     0,     0,     1],
    'Achromatomaly':[  0.618, 0.320, 0.062,     0,     0,
                       0.163, 0.775, 0.062,     0,     0,
                       0.163, 0.320, 0.516,     0,     0,
                           0,     0,     0,     1,     0,
                           0,     0,     0,     0,     1]

};

var ensureIsValidColorAttribute = function(attribute){
    return((typeof attribute == "number")?0:((attribute<0)?0:((attribute>255)?255:(attribute))));
};

var ensureInputColorIsValid = function(color){
    return {
        R: ensureIsValidColorAttribute(color.R),
        G: ensureIsValidColorAttribute(color.G),
        B: ensureIsValidColorAttribute(color.B)
    };
};

var ensureOutputColorIsValid = function(color){
    return {
        R: ensureIsValidColorAttribute(color.R),
        G: ensureIsValidColorAttribute(color.G),
        B: ensureIsValidColorAttribute(color.B),
        A: ensureIsValidColorAttribute(color.A)
    };
};

var ensureMatrixIsValid = function(matrix){
    if(typeof matrix == typeof [] && matrix.length === 25){
        for(var i=0; i<25; i++){
            matrix[i] = ensureIsValidColorAttribute(matrix[i]);
        }
        return matrix;
    }else{
        return blindness['Normal'];
    }
};

var convert = function(original,matrix){
    return generateNewColor(
        ensureInputColorIsValid(original),
        ensureMatrixIsValid(matrix)
    );
};

var generateNewColor = function(original, matrix){
    var r=((original.R*matrix[0]) +(original.G*matrix[1]) +(original.B*matrix[2]) +(original.A*matrix[3]) +matrix[4]);
    var g=((original.R*matrix[5]) +(original.G*matrix[6]) +(original.B*matrix[7]) +(original.A*matrix[8]) +matrix[9]);
    var b=((original.R*matrix[10])+(original.G*matrix[11])+(original.B*matrix[12])+(original.A*matrix[13])+matrix[14]);
    var a=((original.R*matrix[15])+(original.G*matrix[16])+(original.B*matrix[17])+(original.A*matrix[18])+matrix[19]);
    return ensureOutputColorIsValid({R:r,G:g,B:b,A:a});
};