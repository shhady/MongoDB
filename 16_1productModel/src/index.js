const express = require("express");
require("./db/mongoose");
const Product = require("./models/product");

const app = express();

const port = process.env.PORT || 4000;
app.use(express.json());

app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }

  //   product
  //     .save()
  //     .then(() => {
  //       res.status(201).send(product);
  //     })
  //     .catch((e) => {
  //       res.status(400).send(e);
  //     });
});
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (e) {
    res.status(500).send(e);
  }
  //   Product.find({})
  //     .then((products) => {
  //       res.send(products);
  //     })
  //     .catch((e) => {
  //       res.status(500).send(e);
  //     });
});

app.get("/products/:id", async (req, res) => {
  _id = req.params.id;
  try {
    const product = await Product.findById(_id);
    if (!product) {
      return res.status(404).send("product not found");
    }
    res.send(product);
  } catch (e) {
    res.status(500).send(e);
  }
  //   Product.findById(_id)
  //     .then((product) => {
  //       if (!product) {
  //         return res.status(404).send("product not found");
  //       }
  //       res.send(product);
  //     })
  //     .catch((e) => {
  //       res.status(500).send(e);
  //     });
});

app.get("/active", (req, res) => {
  Product.find({ isActive: true })
    .then((products) => {
      if (!products) {
        return res.status(404).send("product not found");
      }
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.get("/active", (req, res) => {
  //   const isactive = req.params.isactive;
  Product.find({ isActive: true })
    .then((products) => {
      if (!products) {
        return res.status(404).send("product not found");
      }
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.get("/range", (req, res) => {
  //   const isactive = req.params.isactive;
  Product.find({ "details.price": { $gte: 500, $lt: 1200 } })
    .then((products) => {
      if (!products) {
        return res.status(404).send("product not found");
      }
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.patch("/prdoducts/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "category",
    "isActive",
    "details.description",
    "details.price",
    "details.discount",
    "details.date",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).send();
    }

    res.send(product);
  } catch (e) {
    res.status(500).send();
  }
});

app.listen(port, () => {
  console.log("server is up");
});
