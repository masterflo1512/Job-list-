import parseDescription from '../utils/parse-description'



describe('parseDescription', () => {
    const desc = "\n  Consequat ipsum ut laborum consectetur. Qui deserunt non amet consequat cupidatat. Et adipisicing esse deserunt duis qui in ea pariatur qui reprehenderit mollit. Esse anim irure qui labore consectetur deserunt in non et.\n  \n  Responsopilities:\n    Fugiat commodo dolor id mollit ipsum pariatur minim consequat velit enim ea ad veniam. Elit cupidatat voluptate culpa aliquip pariatur ea commodo tempor Lorem dolor aute magna. Et ex esse adipisicing excepteur laborum culpa veniam id cillum do.\n  \nCompensation & Benefits:\n\t    Eiusmod ea officia deserunt voluptate occaecat dolore ullamco veniam laborum est anim irure quis. Magna do enim velit duis officia est aliqua sit ea id. Cillum excepteur elit incididunt ullamco ad ullamco minim.\n\n";

  test('returns object with required properties', () => {
    expect(parseDescription(desc)).toHaveProperty('description')
    expect(parseDescription(desc)).toHaveProperty('responsibilities')
    expect(parseDescription(desc)).toHaveProperty('benefits')
  })

  test('parses description as a string', () => {
    expect(parseDescription(desc).description).toBe('Consequat ipsum ut laborum consectetur. Qui deserunt non amet consequat cupidatat. Et adipisicing esse deserunt duis qui in ea pariatur qui reprehenderit mollit. Esse anim irure qui labore consectetur deserunt in non et.')
  })

  test('parses responsibilities as a string', () => {
    expect(parseDescription(desc).responsibilities).toBe('Fugiat commodo dolor id mollit ipsum pariatur minim consequat velit enim ea ad veniam. Elit cupidatat voluptate culpa aliquip pariatur ea commodo tempor Lorem dolor aute magna. Et ex esse adipisicing excepteur laborum culpa veniam id cillum do.')
  })

  test('parses compensation as an array', () => {
    expect(parseDescription(desc).benefits).toEqual([
        'Eiusmod ea officia deserunt voluptate occaecat dolore ullamco veniam laborum est anim irure quis',
        'Magna do enim velit duis officia est aliqua sit ea id',
        'Cillum excepteur elit incididunt ullamco ad ullamco minim'
    ])
  })
})