import { Domain } from '../src/index'

test('add', () => {
  const d: Domain = [['a', '=', 1]];
  expect(d.length).toBe(1);
  expect(d[0].length).toBe(3);
})

// test('toString', () => {
//   expect(new Num(5).toString()).toBe('5')
// })

// test('addAll', () => {
//   expect(Num.addAll([new Num(5), new Num(2), new Num(13)]).val()).toBe(20)
// })
