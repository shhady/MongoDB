const mongoose = require("mongoose");
// const validator = require("validator");

const Product = mongoose.model("product", {
  name: { type: String, required: true },
  category: { type: String, required: true },
  isActive: { type: Boolean },
  details: {
    description: { type: String, required: true, min: 10 },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    images: {
      type: [String],
      required: true,
      validate: {
        validator: (v) => v.length >= 2,
        message: (props) => `${props} has less than 2 images`,
      },
    },
    phoneNumber: {
      type: String,
      required: true,
      //   validate(value) {
      //     console.log(value);
      //     if (value.slice(0) !== 9) {
      //       throw new Error("number is not israeli");
      //     }
      //   },
      //    {
      // validator: (v) => v.slice(0, 2) === "972",
      // message: (props) => `${props} not israeli number`,
      //   },
    },
    dateAdded: { type: Date, immutable: true, default: new Date() },
  },
});

module.exports = Product;
