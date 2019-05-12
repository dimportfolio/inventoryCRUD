const db = require("../config/db.config");
const Inventory = db.inventory;

//post inventory
exports.create = (req, res) => {
  Inventory.create({
    vendor: req.body.vendor,
    date: req.body.date,
    po: req.body.po,
    material: req.body.material,
    quantity: req.body.quantity
  }).then(inventory => {
    res.send(inventory);
  }).catch(err => {
    res.status(500).send(`Error -> ${err}` );
  });
};
//get inventory
exports.findAll = (req, res) => {
  Inventory.findAll().then(inventory => {
    res.send(inventory);
  }).catch(err => {
    res.status(500).send(`Error -> ${err}`);
  });
};
//find inventory by id
exports.findById = (req, res) => {
  Inventory.findById(req.params.id).then(book => {
    res.send(inventory);
  }).catch(err => {
    res.status(500).send(`Error -> ${err}`);
  });
};
//update inventory
exports.update = (req, res) => {
  let inventory = req.body;
  const id = req.params.id;
  Inventory.update({
    vendor: req.body.vendor,
    date: req.body.date,
    po: req.body.po,
    material: req.body.material,
    quantity: req.body.quantity
  },
  {
    where: {
      id: id
    }
  }).then(() => {
    res.status(200).send(inventory);
  }).catch(err => {
    res.status(500).send(`Error -> ${err}`);
  });
};
//delete inventory by id
exports.delete = (req, res) => {
  const id = req.params.id;
  Inventory.destroy ({
    where: {
      id: id
    }
  }).then(() => {
    res.status(200).send(inventory);
  }).catch(err => {
    res.status(500).send(`Error -> ${err}`);
  });
};