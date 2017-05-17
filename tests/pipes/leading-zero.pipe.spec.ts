import { LeadingZero } from './../../src/pipes/leading-zero.pipe';


describe('ArethmeticSignPipe', () => {
    // This pipe is a pure, stateless function so no need for BeforeEach
    let pipe = new LeadingZero();

    it('should transforms "1" to "01"', () => {
        expect(pipe.transform(1)).toBe('01');
    });

    it('should transforms "10" to "10"', () => {
        expect(pipe.transform(10)).toBe('10');
    });

});