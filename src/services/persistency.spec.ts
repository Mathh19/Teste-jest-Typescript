import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // sut = System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBe(undefined);
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleJest = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleJest).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleJest = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleJest).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
