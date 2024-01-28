const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  abbreviation: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["headphones", "earphones", "speakers"],
    required: true,
    message: "Invalid category field",
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
  },
  comesWith: [
    {
      quantity: {
        type: Number,
        required: true,
      },
      item: {
        type: String,
        required: true,
      },
    },
  ],
  alt: {
    type: String,
    required: true,
  },
  cartImg: {
    type: String,
    required: true,
  },
  categoryImg: {
    mobile: {
      type: String,
      required: true,
    },
    tablet: {
      type: String,
      required: true,
    },
    desktop: {
      type: String,
      required: true,
    },
  },
  productImg: {
    mobile: {
      type: String,
      required: true,
    },
    tablet: {
      type: String,
      required: true,
    },
    desktop: {
      type: String,
      required: true,
    },
  },
  galleryImages: {
    mobile: [
      {
        url: {
          type: String,
          required: true,
        },
        alt: {
          type: String,
          required: true,
        },
      },
    ],
    tablet: [
      {
        url: {
          type: String,
          required: true,
        },
        alt: {
          type: String,
          required: true,
        },
      },
    ],
    desktop: [
      {
        url: {
          type: String,
          required: true,
        },
        alt: {
          type: String,
          required: true,
        },
      },
    ],
  },
  price_Id: {
    type: String,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
