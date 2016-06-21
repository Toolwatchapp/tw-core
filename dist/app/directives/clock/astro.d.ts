export declare class Astro {
    protected PI: number;
    protected sin: (x: number) => number;
    protected cos: (x: number) => number;
    protected tan: (x: number) => number;
    protected asin: (x: number) => number;
    protected atan: (y: number, x: number) => number;
    protected acos: (x: number) => number;
    protected rad: number;
    protected dayMs: number;
    protected J1970: number;
    protected J2000: number;
    protected e: number;
    protected illum: {
        fraction: number;
        phase: number;
        angle: number;
    };
    protected pos: {
        azimuth: number;
        altitude: number;
        distance: number;
        parallacticAngle: number;
    };
    protected angleMoon: number;
    protected toJulian(date: any): number;
    protected fromJulian(j: any): Date;
    protected toDays(date: any): number;
    protected rightAscension(l: any, b: any): number;
    protected declination(l: any, b: any): number;
    protected azimuth(H: any, phi: any, dec: any): number;
    protected altitude(H: any, phi: any, dec: any): number;
    protected solarMeanAnomaly(d: any): number;
    protected siderealTime(d: any, lw: any): number;
    protected astroRefraction(h: any): number;
    protected eclipticLongitude(M: any): any;
    protected sunCoords(d: any): {
        dec: number;
        ra: number;
    };
    protected moonCoords(d: any): {
        ra: number;
        dec: number;
        dist: number;
    };
    protected getMoonPosition(date: any, lat: any, lng: any): {
        azimuth: number;
        altitude: number;
        distance: number;
        parallacticAngle: number;
    };
    /**
     *  calculations for illumination parameters of the moon,
  // based on http://idlastro.gsfc.nasa.gov/ftp/pro/astro/mphase.pro formulas and
  // Chapter 48 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
     * @param {[type]} date [description]
     */
    protected getMoonIllumination(date: any): {
        fraction: number;
        phase: number;
        angle: number;
    };
}
