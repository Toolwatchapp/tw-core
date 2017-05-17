import { KFormatter } from './../../src/pipes/k-formatter.pipe';


describe('KFormatterPipe', () => {
    // This pipe is a pure, stateless function so no need for BeforeEach
    let pipe = new KFormatter();

    it('should transforms "+1.75" to "+1.8"', () => {
        expect(pipe.transform("+1.75")).toBe('+1.8');
    });

    it('should transforms "-2.12" to "+1.8"', () => {
        expect(pipe.transform("-2.12")).toBe('-2.1');
    });

    it('should transforms "-112.98" to "-113"', () => {
        expect(pipe.transform('-112.98')).toBe('-113');
    });

    it('should transforms "+3054.57" to "+3k"', () => {
        expect(pipe.transform('+3054.57')).toBe('+3k');
    });
});