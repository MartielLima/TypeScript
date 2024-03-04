// Component
export abstract class ProductComponent {
    abstract getPrice(): number;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    add(product: ProductComponent | ProductComponent[]): void {}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
    constructor(
        public nome: string,
        public price: number,
    ) {
        super();
    }

    getPrice(): number {
        return this.price;
    }
}

// Composite
export class ProductComposite extends ProductComponent {
    private children: ProductComponent[] = [];

    add(...products: ProductComponent[]): void {
        products.forEach((product: ProductComponent) => {
            this.children.push(product);
        });
    }

    remove(product: ProductComponent): void {
        const productIndex = this.children.indexOf(product);

        if (productIndex !== -1) {
            this.children.splice(productIndex, 1);
        }
    }

    getPrice(): number {
        return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
    }
}

// Client code

const camiseta = new ProductLeaf('Camiseta', 40);
const calça = new ProductLeaf('calça', 120);
const bermuda = new ProductLeaf('bermuda', 60);
const bone = new ProductLeaf('bone', 30);

const shopCart = new ProductComposite();

shopCart.add(camiseta, calça, bermuda, bone);

const cordãoDeOuro = new ProductLeaf('Cordão de ouro', 1_200);
const anelDePrata = new ProductLeaf('Anel de Prata', 110);

const jewelry = new ProductComposite();
jewelry.add(cordãoDeOuro, anelDePrata);

shopCart.add(jewelry);

console.log(shopCart.getPrice());
