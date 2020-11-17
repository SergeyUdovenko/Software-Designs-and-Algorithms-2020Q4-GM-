module.exports = class CustomerContact {
    constructor(customerContactService) {
        this.customerContactService = customerContactService;
    }

    findById(id) {
        return this.customerContactService.findById(id);
    }

    update(details) {
        this.customerContactService.update(details);
    }
};
