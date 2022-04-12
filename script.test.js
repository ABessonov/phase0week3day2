const sumOfPositive = require('./1.js');
const oppositeNumber = require('./2.js');
const removeFirstLast = require('./3.js');
const repeatStr = require('./4.js');

test('Sum of positive',()=>{
  expect(sumOfPositive([0,2,4])).toBe(6);
  expect(sumOfPositive([])).toBe(0);
  expect(sumOfPositive("")).toBe(0);
})

test('OppositeNumber',()=>{
  expect(oppositeNumber(10)).toBe(-10);
  expect(oppositeNumber(-10.803)).toBe(10.803);
  expect(oppositeNumber(0)).toBe(0);
})

test('RemoveFirstLast',()=>{
  expect(removeFirstLast('Mama')).toBe('am');
  expect(removeFirstLast('am')).toBe('');
})

test('RepeatStr',()=>{
  expect(repeatStr(3,'am')).toBe('amamam');
  expect(repeatStr(1,' ')).toBe(' ');
  expect(repeatStr(5,'')).toBe('');
})


