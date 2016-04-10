import {Rectangular} from './rectangular';
import {RectangularService} from './rectangular.service';

describe('Rectangular Service', () => {
    const rectService: RectangularService = new RectangularService();
    const LitresRect: Rectangular = new Rectangular(1232,2451,2354,false,100);
    const CM3Rect: Rectangular = new Rectangular(1232,2451,2354,false,100);
    const GallonsRect: Rectangular = new Rectangular(1232,2451,2354,false,100);
    const USGallonsRect: Rectangular = new Rectangular(1232,2451,2354,false,100);

    it('calculates the volume of a standard rectangular tank (litres)', () =>  expect(rectService.calcFullVolume(LitresRect)).toBeCloseTo(7108, 0));
    it('calculates the volume of a standard rectangular tank (cubic metres)', () =>  expect(rectService.calcFullVolume(CM3Rect)).toBeCloseTo(7, 0));
    it('calculates the volume of a standard rectangular tank (gallons)', () =>  expect(rectService.calcFullVolume(GallonsRect)).toBeCloseTo(1564, 0));
    it('calculates the volume of a standard rectangular tank (us gallons)', () =>  expect(rectService.calcFullVolume(USGallonsRect)).toBeCloseTo(1878, 0));
    // it('calulates the volume of a tilted rectangular tank', () => expect(tiltedVol).toEqual(6000));
    // it('returns an array of increments', (rect) => expect(rectService.calcIncrements(rect)).to );
});
describe('Horizontal Cylindrical Dished  Service', () => {
    const vol = 10 * 30 * 40;
    const tiltedVol = 10 * 20 * 30;

    xit('calculates the volume of a standard horizontal cylindrical dished end tank', function() { expect(vol).toEqual(12000); });
    xit('calulates the volume of a tilted horizontal cylindrical dished end tank', () => expect(tiltedVol).toEqual(6000));
});

