import { StringHelper } from './../../src/helpers/string.helper';

describe('String helper', () => {

    it("should compute the levenshtein distance", () => {

        expect(StringHelper.levenshtein("cartier", "csrtie")).toEqual(2);
        expect(StringHelper.levenshtein("cartier", null)).toEqual(7);
        expect(StringHelper.levenshtein(null, "cartier")).toEqual(7);
    });

    it("should replace all", () => {

        expect(StringHelper.replaceAll("abbaaab", "b", "c")).toEqual("accaaac");
    });

});