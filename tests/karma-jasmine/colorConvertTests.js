/**
 * Created by Nick on 9/14/2016.
 */

describe('Tests for /javascripts/colorConvert.js', function() {
    it('Test that I can in fact call the blindness and get the correct data', function(done){
        var expectedData = {
            'Normal':       [
                1,     0,     0,     0,     0,
                0,     1,     0,     0,     0,
                0,     0,     1,     0,     0,
                0,     0,     0,     1,     0,
                0,     0,     0,     0,     1],
            'Protanopia':   [
                0.567, 0.433,     0,     0,     0,
                0.558, 0.442,     0,     0,     0,
                    0, 0.242, 0.758,     0,     0,
                    0,     0,     0,     1,     0,
                    0,     0,     0,     0,     1],
            'Protanomaly':  [
                0.817, 0.183,     0,     0,     0,
                0.333, 0.667,     0,     0,     0,
                    0, 0.125, 0.875,     0,     0,
                    0,     0,     0,     1,     0,
                    0,     0,     0,     0,     1],
            'Deuteranopia': [
                0.625, 0.375,     0,     0,     0,
                  0.7,   0.3,     0,     0,     0,
                    0,   0.3,   0.7,     0,     0,
                    0,     0,     0,     1,     0,
                    0,     0,     0,     0,     1],
            'Deuteranomaly':[
                  0.8,   0.2,     0,     0,     0,
                0.258, 0.742,     0,     0,     0,
                    0, 0.142, 0.858,     0,     0,
                    0,     0,     0,     1,     0,
                    0,     0,     0,     0,     1],
            'Tritanopia':   [
                 0.95,  0.05,     0,     0,     0,
                    0, 0.433, 0.567,     0,     0,
                    0, 0.475, 0.525,     0,     0,
                    0,     0,     0,     1,     0,
                    0,     0,     0,     0,     1],
            'Tritanomaly':  [
                0.967, 0.033,     0,     0,     0,
                    0, 0.733, 0.267,     0,     0,
                    0, 0.183, 0.817,     0,     0,
                    0,     0,     0,     1,     0,
                    0,     0,     0,     0,     1],
            'Achromatopsia':[
                0.299, 0.587, 0.114     ,0,     0,
                0.299, 0.587, 0.114,     0,     0,
                0.299, 0.587, 0.114,     0,     0,
                    0,     0,     0,     1,     0,
                    0,     0,     0,     0,     1],
            'Achromatomaly':[
                0.618, 0.320, 0.062,     0,     0,
                0.163, 0.775, 0.062,     0,     0,
                0.163, 0.320, 0.516,     0,     0,
                    0,     0,     0,     1,     0,
                    0,     0,     0,     0,     1]

        };
        var colorNames = ['Normal', 'Protanopia', 'Protanomaly', 'Deuteranopia','Deuteranomaly', 'Tritanopia', 'Tritanomaly' ,'Achromatopsia', 'Achromatomaly']
        for(var i=0;i<9;i++){
            expect(colorBlinder.blindness[colorNames[i]].length).toEqual(expectedData[colorNames[i]].length);
            expect(typeof colorBlinder.blindness[colorNames[i]]).toEqual(typeof expectedData[colorNames[i]]);
            expect(JSON.stringify(colorBlinder.blindness[colorNames[i]])).toEqual(JSON.stringify(expectedData[colorNames[i]]));
        }
        done();
    });
});