import { Domain } from '../src/index'

test('domainLength', () => {
  const d3: Domain = [['a', '=', 1]];
  expect(d3.length).toBe(1);
  expect(d3[0].length).toBe(3);
  
  const d5: Domain = ['|', ['a', '=', 1], ['a', 'in', [1,2,3,4]], ['a', '=', 1], ['a', '=', 1]];
  expect(d5.length).toBe(5);
  expect(d5[1].length).toBe(3);
  expect(d5[2].length).toBe(3);
  expect(d5[3].length).toBe(3);
  expect(d5[4].length).toBe(3);
})