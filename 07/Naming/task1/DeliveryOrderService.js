const NotDeliverableOrderError = require('./lib/NotDeliverableOrderError');

module.exports = class DeliveryOrderService {
    constructor(deliveryService, orderFulfillmentService) {
        this.deliveryService = deliveryService;
        this.orderFulfillmentService = orderFulfillmentService;
    }

    makeOrder(order) {
        if (this.deliveryService.isAvailableForDelivery(order)) {
            const products = order.getProducts();
            this.orderFulfillmentService.makeOrder(products);
        } else {
            throw new NotDeliverableOrderError();
        }
    }

    setDeliveryService(deliveryService) {
        this.deliveryService = deliveryService;
    }

    setOrderFulfillmentService(orderFulfillmentService) {
        this.orderFulfillmentService = orderFulfillmentService;
    }
};
