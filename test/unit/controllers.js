const sinon = require('sinon');
const { expect } = require('chai');

const productsServices = require('../../services/products');
const productsControllers = require('../../controllers/products');
const salesServices = require('../../services/sales');
const salesControllers = require('../../controllers/sales');

describe('Products .create()', () => {
  const res = {};
  const req = {};
  const data = { name: 'produto', quantity: 10 };

  describe('Passando o valor para o create', () => {
    before(() => {
      req.body = data;
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsServices, 'create').resolves(data);
    });

    after(() => {
      productsServices.create.restore();
    });

    it('é chamado com o código 201', async () => {
      await productsControllers.create(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });

    it('returna um objeto', async () => productsControllers.create(req, res)
      .then(() => expect(res.json.calledWith(data)).to.be.equal(true)));
  });
});

describe('Product .getAll()', () => {
  const res = {};
  const req = {};
  const data = [
    { _id: '604cb554311d68f491ba5781', name: 'Product_ONE', quantity: 10 },
    { _id: '604cb554311d68f491ba5781', name: 'Product_TWO', quantity: 10 }
  ];

  before(() => {
    req.body = {};
  
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'getAll').resolves(data);
  });

  after(() => {
    productsServices.getAll.restore();
  });

  it('é chamado com o código 200', () => productsControllers.getAll(req, res)
    .then(() => expect(res.status.calledWith(200)).to.be.equal(true)));

  it('retorna um objeto', () => productsControllers.getAll(req, res)
    .then(() => expect(res.json.calledWith(sinon.match.object)).to.be.equal(true)));
});

describe('Product .getById()', () => {
  const res = {};
    const req = {};
    const data = { name: 'Product_ONE', quantity: 10 };

    before(() => {
      req.body = {};

      req.params = { id: '5f43cbf4c45ff5104986e81d' };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsServices, 'getById').resolves(data);
    });

    after(() => {
      productsServices.getById.restore();
    });

    it('é chamado com o código 200', () => productsControllers.getById(req, res)
      .then(() => expect(res.status.calledWith(200)).to.be.equal(true)));

    it('retorna um objeto', () => productsControllers.getById(req, res)
      .then(() => expect(res.json.calledWith(sinon.match.object)).to.be.equal(true)));
});

describe('Products .updateById()', () => {
  const res = {};
  const req = {};
  const data = { name: 'Product_ONE', quantity: 10 };

  before(() => {
    req.body = data;

    req.params = { id: '5f43cbf4c45ff5104986e81d' };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'updateById').resolves(data);
  });

  after(() => {
    productsServices.updateById.restore();
  });

  it('é chamado com o código 200', () => productsControllers.updateById(req, res)
    .then(() => expect(res.status.calledWith(200)).to.be.equal(true)));

  it('retorna um objeto', () => productsControllers.updateById(req, res)
    .then(() => expect(res.json.calledWith(sinon.match.object)).to.be.equal(true)));
});

describe('Products .deleteById()', () => {
  const res = {};
  const req = {};
  const data = {};

  before(() => {
    req.body = {};

    req.params = { id: '5f43cbf4c45ff5104986e81d' };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'deleteById').resolves(data);
  });

  after(() => {
    productsServices.deleteById.restore();
  });

  it('é chamado com o código 200', () => productsControllers.deleteById(req, res)
    .then(() => expect(res.status.calledWith(200)).to.be.equal(true)));

  it('retorna um objeto', () => productsControllers.deleteById(req, res)
    .then(() => expect(res.json.calledWith(sinon.match.object)).to.be.equal(true)));
});

describe('Sales .create()', () => {
    const res = {};
    const req = {};
    const data = [{ productId: '5f43cbf4c45ff5104986e81d', quantity: 2 }];

    before(() => {
      req.body = data;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesServices, 'create').resolves(data);
    });

    after(() => {
      salesServices.create.restore();
    });

    it('returns HTTP status 200', () => salesControllers.create(req, res)
      .then(() => expect(res.status.calledWith(200)).to.be.equal(true)));

    it('returns an array', () => salesControllers.create(req, res)
      .then(() => expect(res.json.calledWith(sinon.match.array)).to.be.equal(true)));
});

describe('Get All Sales', () => {
    const res = {};
    const req = {};
    const data = [
      { _id: '604cb554311d68f491ba5781', itensSold: [{ productId: '5f43cbf4c45ff5104986e81d', quantity: 1 }] },
      { _id: '604cb554311d68f491ba5781', itensSold: [{ productId: '5f43cbf4c45ff5104986e81d', quantity: 2 }] }
    ];

    before(() => {
      req.body = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(data);
      sinon.stub(salesServices, 'getAll').resolves(data);
    });

    after(() => {
      salesServices.getAll.restore();
    });

    it('returns HTTP status 200', () => salesControllers.getAll(req, res)
      .then(() => expect(res.status.calledWith(200)).to.be.equal(true)));

    it('returns an object', () => salesControllers.getAll(req, res)
      .then(() => expect(res.json.calledWith(sinon.match.object)).to.be.equal(true)));
});

describe('Get one Sale By "Id"', () => {
    const res = {};
    const req = {};
    const data = [
      { _id: '604cb554311d68f491ba5781', itensSold: [{ productId: '5f43cbf4c45ff5104986e81d', quantity: 1 }] },
      { _id: '604cb554311d68f491ba5781', itensSold: [{ productId: '5f43cbf4c45ff5104986e81d', quantity: 2 }] }
    ];

    before(() => {
      req.body = {};
      req.params = { id: '5f43cbf4c45ff5104986e81d' };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(data);
      sinon.stub(salesServices, 'getById').resolves(data);
    });

    after(() => {
      salesServices.getById.restore();
    });

    it('returns HTTP status 200', () => salesControllers.getById(req, res)
      .then(() => expect(res.status.calledWith(200)).to.be.equal(true)));

    it('returns an array', () => salesControllers.getById(req, res)
      .then(() => expect(res.json.calledWith(sinon.match.array)).to.be.equal(true)));
  });

describe('Update one Sale', () => {
    const res = {};
    const req = {};
    const data = [{ productId: '5f43cbf4c45ff5104986e81d', quantity: 2 }];

    before(() => {
      req.body = [{ productId: '5f43cbf4c45ff5104986e81d', quantity: 2 }];
      req.params = { id: '5f43cbf4c45ff5104986e81d' };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(data);
      sinon.stub(salesServices, 'updateById').resolves(data);
    });

    after(() => {
      salesServices.updateById.restore();
    });

    it('returns HTTP status 200', () => salesControllers.updateById(req, res)
      .then(() => expect(res.status.calledWith(200)).to.be.equal(true)));

    it('returns an object', () => salesControllers.updateById(req, res)
      .then(() => expect(res.json.calledWith(sinon.match.object)).to.be.equal(true)));
  });

describe('Remove one Sale', () => {

    const res = {};
    const req = {};
    const data = {};

    before(() => {
      req.body = {};
      req.params = { id: '5f43cbf4c45ff5104986e81d' };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(data);
      sinon.stub(salesServices, 'deleteById').resolves(data);
    });

    after(() => {
      salesServices.deleteById.restore();
    });

    it('returns HTTP status 200', () => salesControllers.deleteById(req, res)
      .then(() => expect(res.status.calledWith(200)).to.be.equal(true)));

    it('returns an object', () => salesControllers.deleteById(req, res)
      .then(() => expect(res.json.calledWith(sinon.match.object)).to.be.equal(true)));
  });

