import sum from "./sum.js";
import opr from "./operation.js"

describe("test for multiple cases", () => {

    test("adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(1, 12)).toBe(13);
    });

    test("add -1 + -10", () => {
        expect(sum(-1, -10)).toBe(-11); 
    })
    
    test("multiply 2 * 2 " , () =>
    {
        expect(opr(10,2)).toBe(20);
    })

})

