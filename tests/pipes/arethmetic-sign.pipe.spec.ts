import { ArethmeticSign } from './../../src/pipes/arethmetic-sign.pipe';


describe('ArethmeticSignPipe', () => {
    // This pipe is a pure, stateless function so no need for BeforeEach
    let pipe = new ArethmeticSign();

    it('should transforms "1" to "+1"', () => {
        expect(pipe.transform(1)).toBe('+1');
    });

    it('should transforms "0" to "+0"', () => {
        expect(pipe.transform(0)).toBe('+0');
    });

    it('should transforms "-1" to "-1"', () => {
        expect(pipe.transform(-1)).toBe('-1');
    });
});