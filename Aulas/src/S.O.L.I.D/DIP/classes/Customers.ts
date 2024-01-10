import { CustomerOrder, EnterpriseCustomerProtocol, IndividualCustomerProtocol } from './interfaces/customer-protocol';

export class IndividualCostumer implements IndividualCustomerProtocol, CustomerOrder {
   name: string;
   lastName: string;
   cpf: string;

   constructor(name: string, lastName: string, cpf: string) {
      this.name = name;
      this.lastName = lastName;
      this.cpf = cpf;
   }

   CPFtoString(cpf: string): string {
      const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
      return cpf.replace(cpfRegex, '$1.$2.$3-$4');
   }

   getName(): string {
      return `${this.name} ${this.lastName}`;
   }

   getIDN(): string {
      return this.CPFtoString(this.cpf);
   }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
   name: string;
   cnpj: string;

   constructor(name: string, cnpj: string) {
      this.name = name;
      this.cnpj = cnpj;
   }

   CNPJtoString(cnpj: string): string {
      const cnpjRegex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/;
      return cnpj.replace(cnpjRegex, '$1.$2.$3/$4-$5');
   }

   getName(): string {
      return `${this.name}`;
   }

   getIDN(): string {
      return this.CNPJtoString(this.cnpj);
   }
}
