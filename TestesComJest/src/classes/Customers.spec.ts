import { EnterpriseCustomer, IndividualCostumer } from './Customers';

// Test of Enterprise
const createEnterpriseSut = (name: string, cnpj: string): EnterpriseCustomer => {
   return new EnterpriseCustomer(name, cnpj);
};

describe('EnterpriseCustomer', () => {
   afterEach(() => jest.clearAllMocks());

   it('should have properties nome and cnpj', () => {
      const sut = createEnterpriseSut('Martiel', '61589667000166');
      expect(sut).toHaveProperty('name', 'Martiel');
      expect(sut).toHaveProperty('cnpj', '61589667000166');
   });

   it('should return the CNPJ into format default', () => {
      const sut = createEnterpriseSut('GP', '39668976000172');
      expect(sut.getIDN()).toBe('39.668.976/0001-72');
   });

   it('should return the name of enterprise', () => {
      const sut = createEnterpriseSut('Amazon', '56304312000143');
      expect(sut.getName()).toBe('Amazon');
   });
});

// Test of People

const createIndividualSut = (name: string, lastName: string, cpf: string): IndividualCostumer => {
   return new IndividualCostumer(name, lastName, cpf);
};

describe('IndividualCostumer', () => {
   afterEach(() => jest.clearAllMocks());

   it('should have properties nome, lastName and cpf', () => {
      const sut = createIndividualSut('Calie', 'dos Santos Lima', '11111111111');
      expect(sut).toHaveProperty('name', 'Calie');
      expect(sut).toHaveProperty('lastName', 'dos Santos Lima');
      expect(sut).toHaveProperty('cpf', '11111111111');
   });

   it('should return the CPF into format default', () => {
      const sut = createIndividualSut('Martiel', 'dos Santos Lima', '86196744550');
      expect(sut.getIDN()).toBe('861.967.445-50');
   });

   it('should return the name of client', () => {
      const sut = createIndividualSut('Laiz', 'de Oliveira Silva', '00000000000');
      expect(sut.getName()).toBe('Laiz de Oliveira Silva');
   });
});
