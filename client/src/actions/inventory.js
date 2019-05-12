import axios from "../axios/axios";

const _addInventory = (inventory) => ({
  type: "ADD_INVENTORY",
  inventory
})

export const addInventory = (inventoryData = {
  vendor: "",
  date: "",
  po: "",
  material: "",
  quantity: 0
}) => {
  return (dispatch) => {
    const inventory = {
      vendor: inventoryData.vendor,
      date: inventoryData.date,
      po: inventoryData.po,
      material: inventoryData.material,
      quantity: inventoryData.quantity
    };

    return axios.post("inventory/create", inventory).then(result => {
      dispatch(_addInventory(result.data));
    });
  };

};

const _removeInventory = ({ id } = {}) -> ({
  type: "REMOVE_INVENTORY",
  id
});

export const removeInventory = ({ id } = {}) => {
  return (dispatch) => {
    return axios.delete(`inventory/${id}`).then(() => {
      dispatch(_removeInventory({ id }));
    })
  }
};

const _editInventory = (id, updates) => ({
  type: "EDIT_INVENTORY",
  id,
  updates
});

export const editInventory = (id, updates) => {
  return (dispatch) => {
    return axios.put(`inventory/${id}`, updates).then(() => {
      dispatch(_editInventory(id, updates));
    });
  }
};

const _getInventory = (inventory) => ({
  type: "GET_INVENTORY",
  inventory
});

export const getInventory = () => {
  return (dispatch) => {
    return axios.get("books").then(result=> {
      const inventory = [];

      result.data.forEach(item => {
        inventory.push(item);
      });

      dispatch(_getInventory(inventory));
    });
  };
};