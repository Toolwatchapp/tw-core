import {async, TestBed} from '@angular/core/testing';
import {ArethmeticSign} from './arethmetic-sign.pipe';

describe('ArethmeticSignPipe:', () => {
    let pipe: ArethmeticSign;

    beforeEach(() => {
        pipe = new ArethmeticSign();
    });

    it('should add a + sign', () => {
        let result = pipe.transform(2);
        expect(result).toBe("+2");
    });

    it('should add a - sign', () => {
        let result = pipe.transform(-2);
        expect(result).toBe("-2");
    });

});