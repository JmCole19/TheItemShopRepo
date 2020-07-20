"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var shippingSchema = {
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
};
var paymentSchema = {
  paymentMethod: {
    type: String,
    required: true
  }
};
var orderItemSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: false
  },
  qty: {
    type: Number,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: false
  },
  product: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
});
var orderSchema = new _mongoose["default"].Schema({
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderItems: [orderItemSchema],
  shipping: shippingSchema,
  payment: paymentSchema,
  itemsPrice: {
    type: Number
  },
  taxPrice: {
    type: Number
  },
  shippingPrice: {
    type: Number
  },
  totalPrice: {
    type: Number
  },
  isPaid: {
    type: Boolean,
    "default": false
  },
  paidAt: {
    type: Date
  },
  isDelivered: {
    type: Boolean,
    "default": false
  },
  deliveredAt: {
    type: Date
  }
}, {
  timestamps: true
});

var orderModel = _mongoose["default"].model("Order", orderSchema);

var _default = orderModel;
exports["default"] = _default;