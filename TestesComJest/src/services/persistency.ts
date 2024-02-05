import { PersistencyProtocol } from '../classes/interfaces/PersistencyProtocol';

export class Persistency implements PersistencyProtocol {
   saveOrder(): void {
      console.log('Pedido efetuado com sucesso.');
   }
}
