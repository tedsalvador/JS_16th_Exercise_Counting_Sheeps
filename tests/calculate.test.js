import { describe, expect, it } from 'vitest';
import { calculate } from "/js/calculate.js";

describe('Se deberán testear los siguientes casos de uso:', () => {
    
    it('Array list = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ] should return : There are 17 sheep in total', () => {
        //Aceptance Criteria
        // Given
        const list = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ]
        //When - Action
        const result = calculate(list)
        //Then
        console.log(result);
        expect(result).toBe('There are 17 sheep in total')
    });

    it('Array list = [ false, false, false ] should return : UPS!!! Wolfs eaten Sheeps', () => {
        //Aceptance Criteria
        // Given
        const list = [ false, false, false ]
        //When - Action
        const result = calculate(list)
        //Then
        console.log(result);
        expect(result).toBe('UPS!!! Wolfs eaten Sheeps')
    });
});