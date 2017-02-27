import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('First test', ()=>{
    it('should pass', ()=>{
        expect(true).to.equal(true);
    });
});

describe('First test index.html', ()=>{
    it('should say hellp', (done)=>{
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(error, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Hello world!');
            done();
            window.close();
        });
    });
});

