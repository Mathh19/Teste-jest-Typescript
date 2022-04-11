import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer(
      'Matheus',
      'Freitas',
      '111-111-111.11',
    );
    expect(sut).toHaveProperty('firstName', 'Matheus');
    expect(sut).toHaveProperty('lastName', 'Freitas');
    expect(sut).toHaveProperty('cpf', '111-111-111.11');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer(
      'Matheus',
      'Freitas',
      '111-111-111.11',
    );
    expect(sut.getName()).toBe('Matheus Freitas');
    expect(sut.getIDN()).toBe('111-111-111.11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Company', '09.088.201/0001-67');
    expect(sut).toHaveProperty('name', 'Company');
    expect(sut).toHaveProperty('cnpj', '09.088.201/0001-67');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Company', '09.088.201/0001-67');
    expect(sut.getName()).toBe('Company');
    expect(sut.getIDN()).toBe('09.088.201/0001-67');
  });
});
