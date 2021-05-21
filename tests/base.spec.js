import { filterByTerm, add } from '../src/utils/base'

describe('Filter Function', () => {
  test('it should filter by a search term (link)', () => {
    const inputs = [
      { id: 1, url: 'https://www.url1/dev' },
      { id: 2, url: 'https://www.url2/dev' },
      { id: 3, url: 'https://www.link3/dev' }
    ]

    const output = [{ id: 3, url: 'https://www.link3/dev' }]

    expect(filterByTerm(inputs, 'link')).toEqual(output)
  })

  test('returns the correct number', () => {
    expect(add(888, 12)).toBe(900)
  })
})
