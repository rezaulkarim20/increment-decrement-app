import PropType from "prop-types";

const Increment = ({ count, onCountIncrement, onCountDecrement }) => {
  return (
    <div>
      <h2 className="w-fit h-18 items-center mx-auto p-1.5 text-white bg-amber-950 mb-1 mt-1">
        Count in Child: {count}{" "}
      </h2>
      <div className="flex gap-2 items-center w-full mx-auto justify-center mt-3 ">
        <button
          className="bg-amber-300 p-1.5 rounded-md "
          onClick={onCountIncrement}
        >
          Increment Child(+)
        </button>
        <button
          className="bg-green-500 p-1.5 rounded-md"
          onClick={onCountDecrement}
        >
          Decrement Count (-)
        </button>
      </div>
    </div>
  );
};

Increment.propTypes = {
  count: PropType.number.isRequired,
  onCountIncrement: PropType.func.isRequired,
  onCountDecrement: PropType.func.isRequired,
};

export default Increment;
