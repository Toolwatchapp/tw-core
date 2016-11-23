// import {async, TestBed} from '@angular/core/testing';
// import {KFormatter} from './k-formatter.pipe';

// describe('KFormatterPipe:', () => {
//     let pipe: KFormatter;

//     beforeEach(() => {
//         pipe = new KFormatter();
//     });

//     it('should do nothing', () => {
//         let result = pipe.transform("+2.1");
//         expect(result).toBe("+2.1");
//     });

// 		it('should add .0', () => {
//         let result = pipe.transform("+2");
//         expect(result).toBe("+2.0");
//     });

// 		it('should remove floating point', () => {
//         let result = pipe.transform("+200.21231");
//         expect(result).toBe("+200");
//     });

//     it('should add a k sign', () => {
//         let result = pipe.transform("-2000.25");
//         expect(result).toBe("-2k");
//     });

// });