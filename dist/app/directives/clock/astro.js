"use strict";
var Astro = (function () {
    function Astro() {
        this.PI = Math.PI;
        this.sin = Math.sin;
        this.cos = Math.cos;
        this.tan = Math.tan;
        this.asin = Math.asin;
        this.atan = Math.atan2;
        this.acos = Math.acos;
        this.rad = this.PI / 180;
        this.dayMs = 1000 * 60 * 60 * 24;
        this.J1970 = 2440588;
        this.J2000 = 2451545;
        this.e = this.rad * 23.4397;
    }
    Astro.prototype.toJulian = function (date) { return date.valueOf() / this.dayMs - 0.5 + this.J1970; };
    Astro.prototype.fromJulian = function (j) { return new Date((j + 0.5 - this.J1970) * this.dayMs); };
    Astro.prototype.toDays = function (date) { return this.toJulian(date) - this.J2000; };
    Astro.prototype.rightAscension = function (l, b) { return this.atan(this.sin(l) * this.cos(this.e) - this.tan(b) * this.sin(this.e), this.cos(l)); };
    Astro.prototype.declination = function (l, b) { return this.asin(this.sin(b) * this.cos(this.e) + this.cos(b) * this.sin(this.e) * this.sin(l)); };
    Astro.prototype.azimuth = function (H, phi, dec) { return this.atan(this.sin(H), this.cos(H) * this.sin(phi) - this.tan(dec) * this.cos(phi)); };
    Astro.prototype.altitude = function (H, phi, dec) { return this.asin(this.sin(phi) * this.sin(dec) + this.cos(phi) * this.cos(dec) * this.cos(H)); };
    Astro.prototype.solarMeanAnomaly = function (d) { return this.rad * (357.5291 + 0.98560028 * d); };
    Astro.prototype.siderealTime = function (d, lw) { return this.rad * (280.16 + 360.9856235 * d) - lw; };
    Astro.prototype.astroRefraction = function (h) {
        if (h < 0)
            h = 0; // if h = -0.08901179 a div/0 would occur.
        // formula 16.4 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
        // 1.02 / tan(h + 10.26 / (h + 5.10)) h in degrees, result in arc minutes -> converted to rad:
        return 0.0002967 / this.tan(h + 0.00312536 / (h + 0.08901179));
    };
    Astro.prototype.eclipticLongitude = function (M) {
        var C = this.rad * (1.9148 * this.sin(M) + 0.02 * this.sin(2 * M) + 0.0003 * this.sin(3 * M)), // equation of center
        P = this.rad * 102.9372; // perihelion of the Earth
        return M + C + P + this.PI;
    };
    Astro.prototype.sunCoords = function (d) {
        var M = this.solarMeanAnomaly(d), L = this.eclipticLongitude(M);
        return {
            dec: this.declination(L, 0),
            ra: this.rightAscension(L, 0)
        };
    };
    Astro.prototype.moonCoords = function (d) {
        var L = this.rad * (218.316 + 13.176396 * d), // ecliptic longitude
        M = this.rad * (134.963 + 13.064993 * d), // mean anomaly
        F = this.rad * (93.272 + 13.229350 * d), // mean distance
        l = L + this.rad * 6.289 * this.sin(M), // longitude
        b = this.rad * 5.128 * this.sin(F), // latitude
        dt = 385001 - 20905 * this.cos(M); // distance to the moon in km
        return {
            ra: this.rightAscension(l, b),
            dec: this.declination(l, b),
            dist: dt
        };
    };
    Astro.prototype.getMoonPosition = function (date, lat, lng) {
        var lw = this.rad * -lng, phi = this.rad * lat, d = this.toDays(date), c = this.moonCoords(d), H = this.siderealTime(d, lw) - c.ra, h = this.altitude(H, phi, c.dec), 
        // formula 14.1 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
        pa = this.atan(this.sin(H), this.tan(phi) * this.cos(c.dec) - this.sin(c.dec) * this.cos(H));
        h = h + this.astroRefraction(h); // altitude correction for refraction
        return {
            azimuth: this.azimuth(H, phi, c.dec),
            altitude: h,
            distance: c.dist,
            parallacticAngle: pa
        };
    };
    ;
    /**
     *  calculations for illumination parameters of the moon,
  // based on http://idlastro.gsfc.nasa.gov/ftp/pro/astro/mphase.pro formulas and
  // Chapter 48 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
     * @param {[type]} date [description]
     */
    Astro.prototype.getMoonIllumination = function (date) {
        var d = this.toDays(date), s = this.sunCoords(d), m = this.moonCoords(d), sdist = 149598000, // distance from Earth to Sun in km
        phi = this.acos(this.sin(s.dec) * this.sin(m.dec) + this.cos(s.dec) * this.cos(m.dec) * this.cos(s.ra - m.ra)), inc = this.atan(sdist * this.sin(phi), m.dist - sdist * this.cos(phi)), angle = this.atan(this.cos(s.dec) * this.sin(s.ra - m.ra), this.sin(s.dec) * this.cos(m.dec) -
            this.cos(s.dec) * this.sin(m.dec) * this.cos(s.ra - m.ra));
        return {
            fraction: (1 + this.cos(inc)) / 2,
            phase: 0.5 + 0.5 * inc * (angle < 0 ? -1 : 1) / Math.PI,
            angle: angle
        };
    };
    ;
    return Astro;
}());
exports.Astro = Astro;
//# sourceMappingURL=astro.js.map