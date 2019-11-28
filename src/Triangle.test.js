//import React from 'react';
//import ReactDOM from 'react-dom';
import Triangle from './Triangle';

// it('should run tests', () => {
//   //const div = document.createElement('div');
//   expect(true).toEqual(true);
// });

//describe('', () => {});

let getType = Triangle.getType;

describe('Triangle', () => {
  describe('getType', () => {
    it('should accept valid triangle input when valid mixed number types are used', () => {
      expect(getType(1, 1.0, 1.00)).toEqual('equilateral');
    });
    it('should display Equilateral message when sides X, Y, and Z match', () => {
      expect(getType(4,4,4)).toEqual('equilateral');
    });
    it('should display Isosceles message when sides X and Y match', () => {
      expect(getType(4,4,5)).toEqual('isosceles');
    });
    it('should display Isosceles message when sides X and Z match', () => {
      expect(getType(4,5,4)).toEqual('isosceles');
    });
    it('should display Isosceles message when sides Y and Z match', () => {
      expect(getType(5,4,4)).toEqual('isosceles');
    });
    it('should display Scalene message when no sides match and triangle is valid', () => {
      expect(getType(3,4,5)).toEqual('scalene');
    });
  });
/*   //function processForm (elX, elY, elZ)
  describe('processForm', () => {
    // should __ when empty form submitted
    // should display error when any field contains '0'
    it('should display error when any field equals 0', () => {
      //let result = getType(1,1,0);
      //expect(result).toEqual(true);
    });
    // should display error when any field contains a negative number e.g. '-1'
    it('should', () => {
      expect(true).toEqual(true);
    });
    // should display error when any field contains text
    it('should', () => {
      expect(true).toEqual(true);
    });
    // 01, 001, 0.01
    it('should', () => {
      expect(true).toEqual(true);
    });
    // should display error when unit types are included e.g. 1cm, 5cm, 50mm
    it('should', () => {
      expect(true).toEqual(true);
    });
    // should display error when largest side is larger than sum of smaller sides (99, 1, 5)
    it('should', () => {
      expect(true).toEqual(true);
    });
    // should not highlight fields as invalid for a valid number e.g. '3.5'
    it('should', () => {
      expect(true).toEqual(true);
    });
  });
  //function validateSide (length)
  describe('validateSide', () => {

  }); */
});
