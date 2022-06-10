import moment from 'moment';
import React from 'react';
import Currency from 'react-currency-formatter';
function Order({ order }) {
  return (
    <div>
      <div className="flex relative items-center rounded-md my-5 px-5 py-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <h3 className="font-semibold text-sm">ORDER PLACED</h3>
          <p>{moment.unix(order.timestamp).format('DD MMM yy')}</p>
        </div>
        <div className="ml-10 flex-grow">
          <h3 className="font-semibold text-sm">TOTAL</h3>
          <p>
            <Currency quantity={order.amount} currency="usd" /> - Next day
            shipping <Currency quantity={order.amountShipping} currency="usd" />
          </p>
        </div>
        <h1 className="font-semibold sm:text-md pt-3">
          {order.items.length} ITEMS
        </h1>
        <p className="absolute text-xs font-semibold top-2 right-2 w-40 sm:w-[400px] truncate">
          ORDER | <span className="font-normal">{order.id}</span>
        </p>
      </div>
      <div className="flex items-center space-x-10 border py-5 pl-5 overflow-x-scroll">
        {order.images.map((image) => (
          <img className="w-[80px] sm:w-[100px]" src={image} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Order;
