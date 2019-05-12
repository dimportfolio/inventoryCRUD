module.exports = (sequelize, Sequelize => {
  const Inventory = sequelize.define("inventory", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    vendor: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATEONLY
    },
    po: {
      type: Sequelize.STRING
    },
    material: {
      type: Sequelize.STRING
    },
    quantity: {
      type: Sequelize.INTEGER
    }
    
  })

  return Inventory;
});