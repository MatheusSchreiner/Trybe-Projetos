const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const products = require('../../models/products');
const sales = require('../../models/sales');

describe('Testes no Models', () => {
  before(async () => {
    const DBServer = new MongoMemoryServer();
    const URLMock = await DBServer.getUri();
    const OPTIONS = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const connectionMock = await MongoClient.connect(URLMock, OPTIONS)
      // .then((conn) => conn.db('model_example'));

    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    sinon.restore();
    // await DBServer.stop();
  });

  describe('Products model', () => {

    describe('.create(), insere um novo produto no banco de dados', () => {
      const name = 'Product';
      const quantity = 10;

      it('retorna um objeto', async () => {
        const { ops: [newProduct] } = await products.create(name, quantity);
        expect(newProduct).to.be.an('object');
      });

      it('objeto tem propriedades "_id", "name" e "quantity"', async () => {
        const { ops: [newProduct] } = await products.create(name, quantity);
        expect(newProduct).to.have.all.keys('_id', 'name', 'quantity');
      });

      it('propriedades "name" e "quantity" têm os valores passados', async () => {
        const { ops: [newProduct] } = await products.create(name, quantity);
        expect(newProduct.name).to.be.equal(name);
        expect(newProduct.quantity).to.be.equal(quantity);
      });
    });
    
    describe('.getAll() retorna todos os produtos cadastrados', () => {

      it('retorna um array', async () => products.getAll()
        .then((response) => expect(response).to.be.an('array')));

      it('array não esta vazio', async () => products.getAll()
        .then((response) => expect(response).not.to.be.empty));

      it('os itens do array são objetos', async () => products.getAll()
        .then(([response]) => expect(response).to.be.an('object')));
      
      it('o objeto deve ter as keys "id", "name" and "quantity"', async () => products.getAll()
        .then(([response]) => expect(response).to.include.all.keys('_id', 'name', 'quantity')));
    });

    describe('.getById() retorna um produto pelo ID', () => {
      const name = 'Produto Id';
      const quantity = 10;
      let id;
      
      before( async () => {
        await products.create(name, quantity).then((data) => id = data.ops[0]._id);
      });

      after( async () => {
        await products.deleteById(id);
      });

      it('return um objeto', async () => products.getById(id)
        .then((response) => expect(response).to.be.an('object')));

      it('o objeto deve ter as keys "id", "name" and "quantity"', async () => products.getById(id)
        .then((response) => expect(response).to.include.all.keys('_id', 'name', 'quantity')));
    });

    describe('.getByName() retorna um produto pelo nome', () => {
      const name = 'Produto Id';
      const quantity = 10;
      let id;
      
      before( async () => {
        await products.create(name, quantity).then((data) => id = data.ops[0]._id);
      });

      after( async () => {
        await products.deleteById(id);
      });

      it('return um objeto', async () => products.getByName(name)
        .then((response) => expect(response).to.be.an('object')));

      it('o objeto deve ter as keys "id", "name" and "quantity"', async () => products.getByName(name)
        .then((response) => expect(response).to.include.all.keys('_id', 'name', 'quantity')));
    });

    describe('updateById() atualiza produtos', () => {
      const name = 'Produto Id';
      const novoNome = 'Produto Dois'
      const quantity = 10;
      let id;
      
      before( async () => {
        await products.create(name, quantity).then((data) => id = data.ops[0]._id);
      });

      after( async () => {
        await products.deleteById(id);
      });
  
      it('não atualiza quando passado id inválido', async () => products.updateById(1, name, quantity)
        .then((response) => expect(response.modifiedCount).to.be.equal(0)));

      it('atualiza quando passado id válido', async () => products.updateById(id, novoNome, quantity)
        .then((response) => expect(response.modifiedCount).to.be.equal(1)));
    });

    describe('.deleteById() deleta produtos', () => {
      const name = 'Produto Id';
      const quantity = 10;
      let id;
      
      before( async () => {
        await products.create(name, quantity).then((data) => id = data.ops[0]._id);
      });

      after( async () => {
        await products.deleteById(id);
      });

      it('remove o produto', async () => products.deleteById(id)
        .then((res) => expect(res.deletedCount).to.be.equal(1)));
    });
  });


  describe('Sales models', () => {

    describe('.create(), insere um novo produto no banco de dados', () => {
      const itensSoldTest = { productId: '5f43cbf4c45ff5104986e81d', quantity: 2 };

      it('retorna um objeto', async () => {
        const { ops: [newProduct] } = await sales.create(itensSoldTest);
        expect(newProduct).to.be.an('object');
      });

      it('objeto tem propriedades "productId" e "quantity"', async () => {
        const { ops: [{ itensSold }] } = await sales.create(itensSoldTest);
        expect(itensSold).to.have.all.keys('productId', 'quantity');
      });
    });
    
    describe('.getAll() retorna todos os produtos cadastrados', () => {

      it('retorna um array', async () => sales.getAll()
        .then((response) => expect(response).to.be.an('array')));

      it('array não esta vazio', async () => sales.getAll()
        .then((response) => expect(response).not.to.be.empty));

      it('os itens do array são objetos', async () => sales.getAll()
        .then(([response]) => expect(response).to.be.an('object')));
      
      it('o objeto deve ter as keys "productId" and "quantity"', async () => sales.getAll()
        .then(([{ itensSold }]) => expect(itensSold).to.include.all.keys('productId', 'quantity')));
    });

    describe('.getById() retorna um produto pelo ID', () => {
      const itensSoldTest = { productId: '5f43cbf4c45ff5104986e81d', quantity: 2 };
      let id;

      before( async () => {
        await sales.create(itensSoldTest).then((data) => id = data.ops[0]._id);
      });

      after( async () => {
        await sales.deleteById(id);
      });

      it('return um objeto', async () => sales.getById(id)
        .then((response) => expect(response).to.be.an('object')));

      it('o objeto deve ter as keys "productId" and "quantity"', async () => sales.getById(id)
        .then(({ itensSold }) => expect(itensSold).to.include.all.keys('productId', 'quantity')));
    });

    describe('updateById() atualiza produtos', () => {
      const itensSoldTest = { productId: '5f43cbf4c45ff5104986e81d', quantity: 2 };
      const itensSoldTestNew = { productId: '5f43cbf4c45ff5104986e81d', quantity: 4 };
      let id;

      before( async () => {
        await sales.create(itensSoldTest).then((data) => id = data.ops[0]._id);
      });

      after( async () => {
        await sales.deleteById(id);
      });
  
      it('não atualiza quando passado id inválido', async () => sales.updateById(1, itensSoldTest)
        .then((response) => expect(response.modifiedCount).to.be.equal(0)));

      it('atualiza quando passado id válido', async () => sales.updateById(id, itensSoldTestNew)
        .then((response) => expect(response.modifiedCount).to.be.equal(1)));
    });

    describe('.deleteById() deleta produtos', () => {
      const itensSoldTest = { productId: '5f43cbf4c45ff5104986e81d', quantity: 2 };
      let id;
      
      before( async () => {
        await sales.create(itensSoldTest).then((data) => id = data.ops[0]._id);
      });

      after( async () => {
        await sales.deleteById(id);
      });

      it('remove o produto', async () => sales.deleteById(id)
        .then((res) => expect(res.deletedCount).to.be.equal(1)));
    });
  });
});
