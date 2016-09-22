/**
 * Created by Nick on 9/14/2016.
 */


describe('Tests for /javascripts/colorConvert.js', function() {
    describe('Test that I can in fact call the blindness and get the correct data', function() {
        var expectedData = {
            Normal: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            Protanopia: [.567, .433, 0, 0, 0, .558, .442, 0, 0, 0, 0, .242, .758, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            Protanomaly: [.817, .183, 0, 0, 0, .333, .667, 0, 0, 0, 0, .125, .875, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            Deuteranopia: [.625, .375, 0, 0, 0, .7, .3, 0, 0, 0, 0, .3, .7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            Deuteranomaly: [.8, .2, 0, 0, 0, .258, .742, 0, 0, 0, 0, .142, .858, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            Tritanopia: [.95, .05, 0, 0, 0, 0, .433, .567, 0, 0, 0, .475, .525, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            Tritanomaly: [.967, .033, 0, 0, 0, 0, .733, .267, 0, 0, 0, .183, .817, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            Achromatopsia: [.299, .587, .114, 0, 0, .299, .587, .114, 0, 0, .299, .587, .114, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            Achromatomaly: [.618, .32, .062, 0, 0, .163, .775, .062, 0, 0, .163, .32, .516, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]
        };

        it('Normal',function(done){
            expect(typeof colorBlinder.blindness['Normal']).toEqual(typeof []);
            expect(colorBlinder.blindness['Normal'].length).toEqual(25);
            expect(JSON.stringify(colorBlinder.blindness['Normal'])).toEqual(JSON.stringify(expectedData['Normal']));
            done();
        });

        it('Protanopia',function(done){
            expect(typeof colorBlinder.blindness['Protanopia']).toEqual(typeof []);
            expect(colorBlinder.blindness['Protanopia'].length).toEqual(25);
            expect(JSON.stringify(colorBlinder.blindness['Protanopia'])).toEqual(JSON.stringify(expectedData['Protanopia']));
            done()
        });

        it('Protanomaly',function(done){
            expect(typeof colorBlinder.blindness['Protanomaly']).toEqual(typeof []);
            expect(colorBlinder.blindness['Protanomaly'].length).toEqual(25);
            expect(JSON.stringify(colorBlinder.blindness['Protanomaly'])).toEqual(JSON.stringify(expectedData['Protanomaly']));
            done();
        });

        it('Deuteranopia',function(done){
            expect(typeof colorBlinder.blindness['Deuteranopia']).toEqual(typeof []);
            expect(colorBlinder.blindness['Deuteranopia'].length).toEqual(25);
            expect(JSON.stringify(colorBlinder.blindness['Deuteranopia'])).toEqual(JSON.stringify(expectedData['Deuteranopia']));
            done();
        });

        it('Deuteranomaly',function(done){
            expect(typeof colorBlinder.blindness['Deuteranomaly']).toEqual(typeof []);
            expect(colorBlinder.blindness['Deuteranomaly'].length).toEqual(25);
            expect(JSON.stringify(colorBlinder.blindness['Deuteranomaly'])).toEqual(JSON.stringify(expectedData['Deuteranomaly']));
            done();
        });

        it('Tritanopia',function(done){
            expect(typeof colorBlinder.blindness['Tritanopia']).toEqual(typeof []);
            expect(colorBlinder.blindness['Tritanopia'].length).toEqual(25);
            expect(JSON.stringify(colorBlinder.blindness['Tritanopia'])).toEqual(JSON.stringify(expectedData['Tritanopia']));
            done();
        });

        it('Tritanomaly',function(done){
            expect(typeof colorBlinder.blindness['Tritanomaly']).toEqual(typeof []);
            expect(colorBlinder.blindness['Tritanomaly'].length).toEqual(25);
            expect(JSON.stringify(colorBlinder.blindness['Tritanomaly'])).toEqual(JSON.stringify(expectedData['Tritanomaly']));
            done();
        });

        it('Achromatopsia',function(done){
            expect(typeof colorBlinder.blindness['Achromatopsia']).toEqual(typeof []);
            expect(colorBlinder.blindness['Achromatopsia'].length).toEqual(25);
            expect(JSON.stringify(colorBlinder.blindness['Achromatopsia'])).toEqual(JSON.stringify(expectedData['Achromatopsia']));
            done();
        });

        it('Achromatomaly',function(done){
            expect(typeof colorBlinder.blindness['Achromatomaly']).toEqual(typeof []);
            expect(colorBlinder.blindness['Achromatomaly'].length).toEqual(25);
            expect(JSON.stringify(colorBlinder.blindness['Achromatomaly'])).toEqual(JSON.stringify(expectedData['Achromatomaly']));
            done();
        });
    });

    describe('Tests for ensureIsValidColorAttribute',function() {
        it('less than zero', function (done) {
            expect(colorBlinder.ensureIsValidColorAttribute(-1)).toEqual(0);
            done();
        });

        it('greater than 255', function (done) {
            expect(colorBlinder.ensureIsValidColorAttribute(256)).toEqual(255);
            done();
        });

        it('all from zero through 255', function (done) {
            for(var i=0; i<256; i++) {
                expect(colorBlinder.ensureIsValidColorAttribute(i)).toEqual(i);
            }
            done();
        });
    });

    describe('Tests for ensureInputColorIsValid', function(){
        it('if all numbers are 0-255 then they should be returned as such', function(done){
            for(var i=0; i<256; i+=16){
                for(var j=0; j<256; j+=4){
                    for(var k=0; k<256; k+=1){
                        expect(JSON.stringify(colorBlinder.ensureInputColorIsValid({R:i,G:j,B:k}))).toEqual(JSON.stringify({R:i,G:j,B:k}));
                    }
                }
            }
            done();
        });

        it('returns a fixed set of attributes if a bad set is input', function(done){
            expect(JSON.stringify(colorBlinder.ensureInputColorIsValid({R:-1, G:-1,B:-1}))).toEqual(JSON.stringify({R:0,G:0,B:0}));
            done();
        });

        it('ensureIsValidColorAttributeIsCalled three times', function(done){
            spyOn(colorBlinder, 'ensureIsValidColorAttribute');
            colorBlinder.ensureInputColorIsValid({R:1,G:1,B:1});
            expect(colorBlinder.ensureIsValidColorAttribute.calls.count()).toBe(3);
            colorBlinder.ensureIsValidColorAttribute.calls.reset();
            done();
        });
    });

    describe('Tests for ensureOutputColorIsValid', function(){
        it('if all numbers are 0-255 then they should be returned as such', function(done){
            for(var i=0; i<256; i+=32){
                for(var j=0; j<256; j+=32){
                    for(var k=0; k<256; k+=32){
                        for(var l=0; l<256;l+=32) {
                            expect(JSON.stringify(colorBlinder.ensureOutputColorIsValid({R: i, G: j, B: k, A: l}))).toEqual(JSON.stringify({R: i, G: j, B: k, A: l}));
                        }
                    }
                }
            }
            done();
        });

        it('returns a fixed set of attributes if a bad set is input', function(done){
            expect(JSON.stringify(colorBlinder.ensureOutputColorIsValid({R:-1, G:-1,B:-1,A:-1}))).toEqual(JSON.stringify({R:0, G:0,B:0,A:0}));
            done();
        });

        it('ensureIsValidColorAttributeIsCalled four times', function(done){
            spyOn(colorBlinder, 'ensureIsValidColorAttribute');
            colorBlinder.ensureOutputColorIsValid({R:1,G:1,B:1,A:1});
            expect(colorBlinder.ensureIsValidColorAttribute.calls.count()).toBe(4);
            colorBlinder.ensureIsValidColorAttribute.calls.reset();
            done();
        });
    });

    describe('Tests for ensureMatrix Is Valid', function(){
        it('If given an {} the function returns blindness["Normal"]', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid({}))).toEqual(JSON.stringify(colorBlinder.blindness["Normal"]));
            done();
        });

        it('If given a Number the function returns blindness["Normal"]', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid(25))).toEqual(JSON.stringify(colorBlinder.blindness["Normal"]));
            done();
        });

        it('If given an bool the function returns blindness["Normal"]', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid(true))).toEqual(JSON.stringify(colorBlinder.blindness["Normal"]));
            done();
        });

        it('If given an string the function returns blindness["Normal"]', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid("string"))).toEqual(JSON.stringify(colorBlinder.blindness["Normal"]));
            done();
        });

        it('If given an []size 24 the function returns blindness["Normal"]', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]))).toEqual(JSON.stringify(colorBlinder.blindness["Normal"]));
            done();
        });

        it('If given an []size 26 the function returns blindness["Normal"]', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]))).toEqual(JSON.stringify(colorBlinder.blindness["Normal"]));
            done();
        });


        it('If given []size 25 it returns a valid matrix', function(done){
            var expected = [0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0];
            var input=[-1,-1,-1,-1,-1,  -1,-1,-1,-1,-1,  -1,-1,-1,-1,-1,  -1,-1,-1,-1,-1,  -1,-1,-1,-1,-1];
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid(input))).toEqual(JSON.stringify(expected));
            done();
        });

        it('If given a colorBlinder.blindess["Normal"] it returns it', function(done) {
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid(colorBlinder.blindness['Normal'])))
                .toEqual(JSON.stringify(colorBlinder.blindness['Normal']));
            done();
        });

        it('If given a colorBlinder.blindess["Protanopia"] it returns it', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid(colorBlinder.blindness['Protanopia'])))
                .toEqual(JSON.stringify(colorBlinder.blindness['Protanopia']));
            done();
        });

        it('If given a colorBlinder.blindess["Protanomaly"] it returns it', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid(colorBlinder.blindness['Protanomaly'])))
                .toEqual(JSON.stringify(colorBlinder.blindness['Protanomaly']));
            done();
        });

        it('If given a colorBlinder.blindess["Deuteranopia"] it returns it', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid(colorBlinder.blindness['Deuteranopia'])))
                .toEqual(JSON.stringify(colorBlinder.blindness['Deuteranopia']));
            done();
        });

        it('If given a colorBlinder.blindess["Deuteranomaly"] it returns it', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid(colorBlinder.blindness['Deuteranomaly'])))
                .toEqual(JSON.stringify(colorBlinder.blindness['Deuteranomaly']));
            done();
        });

        it('If given a colorBlinder.blindess["Tritanopia"] it returns it', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid(colorBlinder.blindness['Tritanopia'])))
                .toEqual(JSON.stringify(colorBlinder.blindness['Tritanopia']));
            done();
        });

        it('If given a colorBlinder.blindess["Tritanomaly"] it returns it', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid(colorBlinder.blindness['Tritanomaly'])))
                .toEqual(JSON.stringify(colorBlinder.blindness['Tritanomaly']));
            done();
        });

        it('If given a colorBlinder.blindess["Achromatopsia"] it returns it', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid(colorBlinder.blindness['Achromatopsia'])))
                .toEqual(JSON.stringify(colorBlinder.blindness['Achromatopsia']));
            done();
        });

        it('If given a colorBlinder.blindess["Achromatomaly"] it returns it', function(done){
            expect(JSON.stringify(colorBlinder.ensureMatrixIsValid(colorBlinder.blindness['Achromatomaly'])))
                .toEqual(JSON.stringify(colorBlinder.blindness['Achromatomaly']));
            done();
        });
    });

    describe('Tests convert', function(){
        it('Calls ensureInputColorIsValid once', function(done){
            spyOn(colorBlinder, 'ensureInputColorIsValid');
            colorBlinder.convert({R:255,G:255,B:255},colorBlinder.blindness['Normal']);
            expect(colorBlinder.ensureInputColorIsValid.calls.count()).toBe(1);
            colorBlinder.ensureInputColorIsValid.calls.reset();
            done();
        });

        it('Calls ensureMatrixIsValid once', function(done){
            spyOn(colorBlinder, 'ensureMatrixIsValid');
            colorBlinder.convert({R:255,G:255,B:255},colorBlinder.blindness['Normal']);
            expect(colorBlinder.ensureMatrixIsValid.calls.count()).toBe(1);
            colorBlinder.ensureMatrixIsValid.calls.reset();
            done();
        });

        it('Calls generateNewColor once', function(done){
            for(var i=0;i<1000; i++) {
                spyOn(colorBlinder, 'generateNewColor');
                colorBlinder.convert({R: 256, G: 256, B: 256}, 25);
                expect(colorBlinder.generateNewColor.calls.count()).toBe(1);
                expect(colorBlinder.generateNewColor).toHaveBeenCalledWith({R: 255, G: 255, B: 255}, colorBlinder.blindness['Normal']);
                colorBlinder.generateNewColor.calls.reset();
                done();
            }
        });
    });

    describe('Tests generateNewColor', function(){
        var start = 0;
        var sampleSize=8;
        var input=[
            {R:255,G:255,B:255},{R:255,G:255,B:128},{R:255,G:128,B:128},
            {R:255,G:128,B:255},{R:128,G:128,B:255},{R:128,G:255,B:255},
            {R:128,G:255,B:128},{R:128,G:128,B:128}
        ];
        var normal=[
            {"R":255,"G":255,"B":255,"A":255}, {"R":255,"G":255,"B":128,"A":255},
            {"R":255,"G":128,"B":128,"A":255}, {"R":255,"G":128,"B":255,"A":255},
            {"R":128,"G":128,"B":255,"A":255}, {"R":128,"G":255,"B":255,"A":255},
            {"R":128,"G":255,"B":128,"A":255}, {"R":128,"G":128,"B":128,"A":255}
        ];
        var protanopia=[
            {"R":255,"G":255,"B":255,"A":255}, {"R":255,"G":255,"B":159,"A":255},
            {"R":200,"G":168,"B":138,"A":255}, {"R":200,"G":168,"B":234,"A":255},
            {"R":128,"G":128,"B":224,"A":255}, {"R":183,"G":215,"B":245,"A":255},
            {"R":183,"G":215,"B":149,"A":255}, {"R":128,"G":128,"B":128,"A":255}
        ];
        var protanomaly=[
            {"R":255,"G":255,"B":255,"A":255}, {"R":255,"G":255,"B":144,"A":255},
            {"R":232,"G":163,"B":132,"A":255}, {"R":232,"G":163,"B":244,"A":255},
            {"R":128,"G":128,"B":239,"A":255}, {"R":151,"G":220,"B":251,"A":255},
            {"R":151,"G":220,"B":140,"A":255}, {"R":128,"G":128,"B":128,"A":255}
        ];
        var deuteranopia=[
            {"R":255,"G":255,"B":255,"A":255}, {"R":255,"G":255,"B":166,"A":255},
            {"R":207,"G":183,"B":145,"A":255}, {"R":207,"G":183,"B":233,"A":255},
            {"R":128,"G":128,"B":217,"A":255}, {"R":176,"G":200,"B":239,"A":255},
            {"R":176,"G":200,"B":150,"A":255}, {"R":128,"G":128,"B":128,"A":255}

        ];
        var deuteranomaly=[
            {"R":255,"G":255,"B":255,"A":255}, {"R":255,"G":255,"B":146,"A":255},
            {"R":230,"G":154,"B":132,"A":255}, {"R":230,"G":154,"B":241,"A":255},
            {"R":128,"G":128,"B":237,"A":255}, {"R":153,"G":229,"B":251,"A":255},
            {"R":153,"G":229,"B":142,"A":255}, {"R":128,"G":128,"B":128,"A":255}
        ];
        var tritanopia=[
            {R: 255, G: 255, B: 255, A: 255}, {R: 255, G: 183, B: 154, A: 255},
            {R: 249, G: 128, B: 128, A: 255}, {R: 249, G: 200, B: 229, A: 255},
            {R: 128, G: 200, B: 229, A: 255}, {R: 134, G: 255, B: 255, A: 255},
            {R: 134, G: 183, B: 154, A: 255}, {R: 128, G: 128, B: 128, A: 255}
        ];
        var tritanomaly=[
            {R: 255, G: 255, B: 255, A: 255}, {R: 255, G: 221, B: 145, A: 255},
            {R: 251, G: 128, B: 128, A: 255}, {R: 251, G: 162, B: 238, A: 255},
            {R: 128, G: 162, B: 238, A: 255}, {R: 132, G: 255, B: 255, A: 255},
            {R: 132, G: 221, B: 145, A: 255}, {R: 128, G: 128, B: 128, A: 255}

        ];
        var achromatopsia=[
            {R: 255, G: 255, B: 255, A: 255}, {R: 241, G: 236, B: 225, A: 255},
            {R: 166, G: 139, B: 146, A: 255}, {R: 180, G: 158, B: 176, A: 255},
            {R: 142, G: 147, B: 158, A: 255}, {R: 217, G: 244, B: 237, A: 255},
            {R: 203, G: 225, B: 207, A: 255}, {R: 128, G: 128, B: 128, A: 255}
        ];
        var achromatomaly=[
            {R: 255, G: 255, B: 255, A: 255}, {R: 247, G: 246, B: 185, A: 255},
            {R: 206, G: 141, B: 145, A: 255}, {R: 214, G: 150, B: 214, A: 255},
            {R: 136, G: 137, B: 198, A: 255}, {R: 177, G: 242, B: 238, A: 255},
            {R: 169, G: 233, B: 168, A: 255}, {R: 128, G: 128, B: 128, A: 255}
        ];

        it('calls ensureOutputColorIsValid once', function(done){
            spyOn(colorBlinder, 'ensureOutputColorIsValid');
            colorBlinder.convert({R: 255, G: 255, B: 255}, colorBlinder.blindness['Normal']);
            expect(colorBlinder.ensureOutputColorIsValid.calls.count()).toBe(1);
            expect(colorBlinder.ensureOutputColorIsValid).toHaveBeenCalledWith({R:255,G:255,B:255,A:255});
            colorBlinder.ensureOutputColorIsValid.calls.reset();
            done();
        });

        it('Normal', function(done){
            for(var i=start; i<sampleSize; i++){
                var out = colorBlinder.convert(input[i],colorBlinder.blindness['Normal']);
                expect(JSON.stringify(out)).toEqual(JSON.stringify(normal[i]));
            }
            done();
        });

        it('Protanopia', function(done){
            for(var i=start; i<sampleSize; i++){
                var out = colorBlinder.convert(input[i],colorBlinder.blindness['Protanopia']);
                expect(JSON.stringify(out)).toEqual(JSON.stringify(protanopia[i]));
            }
            done();
        });

         it('Protanomaly', function(done){
            for(var i=start; i<sampleSize; i++){
                var out = colorBlinder.convert(input[i],colorBlinder.blindness['Protanomaly']);
                expect(JSON.stringify(out)).toEqual(JSON.stringify(protanomaly[i]));
            }
            done();
        });

        it('Deuteranopia', function(done){
            for(var i=start; i<sampleSize; i++){
                var out = colorBlinder.convert(input[i],colorBlinder.blindness['Deuteranopia']);
                expect(JSON.stringify(out)).toEqual(JSON.stringify(deuteranopia[i]));
            }
            done();
        });

        it('Deuteranomaly', function(done){
            for(var i=start; i<sampleSize; i++){
                var out = colorBlinder.convert(input[i],colorBlinder.blindness['Deuteranomaly']);
                expect(JSON.stringify(out)).toEqual(JSON.stringify(deuteranomaly[i]));
            }
            done();
        });

        it('Tritanopia', function(done){
            for(var i=start; i<sampleSize; i++){
                var out = colorBlinder.convert(input[i],colorBlinder.blindness['Tritanopia']);
                expect(JSON.stringify(out)).toEqual(JSON.stringify(tritanopia[i]));
            }
            done();
        });

        it('Tritanomaly', function(done){
            for(var i=start; i<sampleSize; i++){
                var out = colorBlinder.convert(input[i],colorBlinder.blindness['Tritanomaly']);
                expect(JSON.stringify(out)).toEqual(JSON.stringify(tritanomaly[i]));
            }
            done();
        });

        it('Achromatopsia', function(done){
            for(var i=start; i<sampleSize; i++){
                var out = colorBlinder.convert(input[i],colorBlinder.blindness['Achromatopsia']);
                expect(JSON.stringify(out)).toEqual(JSON.stringify(achromatopsia[i]));
            }
            done();
        });

        it('Achromatomaly', function(done){
            for(var i=start; i<sampleSize; i++){
                var out = colorBlinder.convert(input[i],colorBlinder.blindness['Achromatomaly']);
                expect(JSON.stringify(out)).toEqual(JSON.stringify(achromatomaly[i]));
            }
            done();
        });
    });
});