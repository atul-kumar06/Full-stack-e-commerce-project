// API KEY = rzp_test_SqnZXhRo2p4so7
// TEST KEY SECRET = 428LQHolvo2tz3OkSZSV6uMT

const RazorpayButton = ({ amount, shippingAddress, onSuccess, onError }) => {
  const handlePayment = () => {
    const options = {
      key: import.meta.env.VITE_RAZOR_PAY_ID, // paste your key here
      amount: amount * 100, // convert to paise (₹195 → 19500)
      currency: "INR",
      name: "Your Store",
      description: "Order Payment",
      handler: function (response) {
        // payment successful
        console.log(response);
        onSuccess(response);
      },
      prefill: {
        name: `${shippingAddress.firstname} ${shippingAddress.lastname}`,
        contact: shippingAddress.phone || "9999999999",
      },
      theme: {
        color: "#000000",
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response) {
      onError(response.error);
    });

    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-black text-white py-3 rounded"
    >
      Pay ₹{amount}
    </button>
  );
};

export default RazorpayButton;
