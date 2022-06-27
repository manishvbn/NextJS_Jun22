const { readData, writeData } = require("./file-handler");

exports.getAllEmployees = function () {
    return new Promise((resolve, reject) => {
        readData().then(data => {
            resolve(data);
        }, err => {
            reject("Employees not Found");
        });
    });
}

exports.getEmployee = function (id) {
    return new Promise((resolve, reject) => {
        readData().then(data => {
            resolve(data.find(e => e.id === Number(id)));
        }, err => {
            reject("No Employees available");
        });
    });
}