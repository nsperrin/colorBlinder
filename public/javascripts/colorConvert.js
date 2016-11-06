/*
 * I got the color matrix from the following website
 * http://web.archive.org/web/20081014161121/http://www.colorjack.com/labs/colormatrix/
 */

colorBlinder.factory('colorConvert', function(){
    var colorConvert = function() {
        this.blindness = {
            'Normal': [
                1, 0, 0, 0, 0,
                0, 1, 0, 0, 0,
                0, 0, 1, 0, 0,
                0, 0, 0, 1, 0,
                0, 0, 0, 0, 1],
            'Protanopia': [
                0.567, 0.433, 0, 0, 0,
                0.558, 0.442, 0, 0, 0,
                0, 0.242, 0.758, 0, 0,
                0, 0, 0, 1, 0,
                0, 0, 0, 0, 1],
            'Protanomaly': [
                0.817, 0.183, 0, 0, 0,
                0.333, 0.667, 0, 0, 0,
                0, 0.125, 0.875, 0, 0,
                0, 0, 0, 1, 0,
                0, 0, 0, 0, 1],
            'Deuteranopia': [
                0.625, 0.375, 0, 0, 0,
                0.7, 0.3, 0, 0, 0,
                0, 0.3, 0.7, 0, 0,
                0, 0, 0, 1, 0,
                0, 0, 0, 0, 1],
            'Deuteranomaly': [
                0.8, 0.2, 0, 0, 0,
                0.258, 0.742, 0, 0, 0,
                0, 0.142, 0.858, 0, 0,
                0, 0, 0, 1, 0,
                0, 0, 0, 0, 1],
            'Tritanopia': [
                0.95, 0.05, 0, 0, 0,
                0, 0.433, 0.567, 0, 0,
                0, 0.475, 0.525, 0, 0,
                0, 0, 0, 1, 0,
                0, 0, 0, 0, 1],
            'Tritanomaly': [
                0.967, 0.033, 0, 0, 0,
                0, 0.733, 0.267, 0, 0,
                0, 0.183, 0.817, 0, 0,
                0, 0, 0, 1, 0,
                0, 0, 0, 0, 1],
            'Achromatopsia': [
                0.299, 0.587, 0.114, 0, 0,
                0.299, 0.587, 0.114, 0, 0,
                0.299, 0.587, 0.114, 0, 0,
                0, 0, 0, 1, 0,
                0, 0, 0, 0, 1],
            'Achromatomaly': [
                0.618, 0.320, 0.062, 0, 0,
                0.163, 0.775, 0.062, 0, 0,
                0.163, 0.320, 0.516, 0, 0,
                0, 0, 0, 1, 0,
                0, 0, 0, 0, 1]

        };
    };

    colorConvert.prototype.ensureIsValidColorAttribute = function(attribute){
        return((typeof attribute != "number")?0:((attribute<0)?0:((attribute>255)?255:(attribute))));
    };

    colorConvert.prototype.ensureInputColorIsValid = function(color){
        return {
            R: this.ensureIsValidColorAttribute(color.R),
            G: this.ensureIsValidColorAttribute(color.G),
            B: this.ensureIsValidColorAttribute(color.B)
        };
    };

    colorConvert.prototype.ensureOutputColorIsValid = function(color){
        return {
            R: this.ensureIsValidColorAttribute(color.R),
            G: this.ensureIsValidColorAttribute(color.G),
            B: this.ensureIsValidColorAttribute(color.B),
            A: this.ensureIsValidColorAttribute(color.A)
        };
    };

    colorConvert.prototype.ensureMatrixIsValid = function(matrix){
        if(typeof matrix == typeof [] && matrix.length === 25){
            for(var i=0; i<255;i++) {
                if (matrix[i] < 0) {
                    matrix[i] = 0;
                }
                if (matrix[i] > 255) {
                    matrix[i] = 255;
                }
            }
            return matrix;

        }else{
            return this.blindness['Normal'];
        }
    };

    colorConvert.prototype.convert = function(original,matrix){
        if((original = this.ensureInputColorIsValid(original)) && (matrix = this.ensureMatrixIsValid(this.blindness[matrix]))){
            return this.generateNewColor(original, matrix);
        }
    };

    colorConvert.prototype.generateNewColor = function(original, matrix){
        original.A = original.A || 255;
        original.R=Math.round((original.R*matrix[0]) +(original.G*matrix[1]) +(original.B*matrix[2]) +(original.A*matrix[3]) +matrix[4]);
        original.G=Math.round((original.R*matrix[5]) +(original.G*matrix[6]) +(original.B*matrix[7]) +(original.A*matrix[8]) +matrix[9]);
        original.B=Math.round((original.R*matrix[10])+(original.G*matrix[11])+(original.B*matrix[12])+(original.A*matrix[13])+matrix[14]);
        original.A=Math.round((original.R*matrix[15])+(original.G*matrix[16])+(original.B*matrix[17])+(original.A*matrix[18])+matrix[19]);
        return this.ensureOutputColorIsValid(original);
    };

    return colorConvert;
});

