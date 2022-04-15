const { msg } = require('./lib/constants');

module.exports = class CollectOrderService {

    static INFO_NOTIFICATION_LEVEL_CRITICAL = 1;
    static INFO_NOTIFICATION_LEVEL_LOW = 4;

    constructor(orderService, customerService) {
        this.orderService = orderService;
        this.customerService = customerService;
    }

    notifyCustomer(order) {
        if (this.orderService.isEligibleForCollection(order)) {
            this.customerService.notifyCustomer(msg.READY_FOR_COLLECT, CollectOrderService.INFO_NOTIFICATION_LEVEL_LOW);
        } else {
            this.customerService.notifyCustomer(msg.IMPOSSIBLE_TO_COLLECT, CollectOrderService.INFO_NOTIFICATION_LEVEL_CRITICAL);
        }
    }

    setOrderService(service) {
        this.orderService = service;
    }

    setCustomerService(service) {
        this.customerService = service;
    }
};
