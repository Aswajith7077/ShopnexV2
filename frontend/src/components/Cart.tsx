import { Button } from './ui/button';

const TopComponent = () => {
  return (
    <div className="flex flex-col px-5">
      <h1 className="text-3xl font-bold">Your Items are ready</h1>
      <p>Your shopping cart is empty.</p>
    </div>
  );
};

const PaymentSummary = () => {
  return (
    <div className="w-[30%] flex flex-col p-5 rounded-lg">
      <h2 className="text-xl font-semibold">Payment Summary</h2>
      <p className="mt-2">Total Items: 0</p>
      <p className="mt-2">Total Price: $0.00</p>
      <p className="mt-2">Shipping: Free</p>
      <div className="flex flex-col">
        <p className="w-full flex items-center font-bold text-left justify-center">
          Grand Total
        </p>
        <p className="bg-gradient-to-br text-3xl items-center from-cyan-400 to-blue-600 bg-clip-text text-transparent mt-2 font-bold">
          0.00 USD
        </p>
      </div>
      <Button className="mt-4 px-4 py-2 rounded-md">Checkout</Button>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="flex flex-col p-5 w-full justify-between">
      <TopComponent />
      <div className="flex flex-row gap-4 w-full">
        <div className="w-[70%] flex flex-col">
          {/* Cart items will be displayed here */}
          <p className="text-lg">No items in the cart.</p>
        </div>
        <PaymentSummary />
      </div>
    </div>
  );
};

export default Cart;
