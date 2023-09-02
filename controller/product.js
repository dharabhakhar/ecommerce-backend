const { default: slugify } = require("slugify");
const { product } = require("../model/product");

module.exports.create_product = async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const new_product = await product.create(req.body);

        res.json(new_product);
    } catch (error) {
        res.json(error);
    }
}

module.exports.update_product = async (req, res) => {
    var id = req.params.id;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const update_product_data = await product.findByIdAndUpdate(id, req.body, { new: true });

        res.json(update_product_data);
    } catch (error) {
        res.json(error);
    }
}

module.exports.delete_product = async (req, res) => {
    try {
        var id = req.params.id;
        const delete_product_data = await product.findByIdAndDelete(id);

        res.json(delete_product_data);
    } catch (error) {
        res.json(error);
    }
}

module.exports.single_product = async (req, res) => {
    try {
        var id = req.params.id;
        var single_product_data = await product.findById(id);

        res.json(single_product_data);
    } catch (error) {
        res.json(error)
    }
}

module.exports.all_product = async (req, res) => {
    console.log(req.query);
    try {
        var limit = 10;
        var page_no = req.query.page_no;
        if (page_no == undefined) {
            page_no = 1;
        }

        var start = (page_no - 1) * limit;

        var data = await product.find().skip(start).limit(limit);

        var total_record = await product.find().count();
        var totalpage = Math.ceil(total_record / 8)
        res.status(200).json({
            status: "Success",
            data,
            totalpage,
            total_record, limit, page_no
        })
    } catch (error) {
        res.json(error)
    }
}
module.exports.special_product = async (req, res) => {
    try {
        var special_product_data = await product.find().skip(9);

        res.json(special_product_data);
    } catch (error) {
        res.json(error)
    }
}
module.exports.popular_product = async (req, res) => {
    try {
        var popular_product_data = await product.find().skip(11).limit(4);

        res.json(popular_product_data);
    } catch (error) {
        res.json(error)
    }
}
module.exports.category = async (req, res) => {
    try {
        var product_category = await product.distinct("category1");

        res.json(product_category);
    } catch (error) {
        res.json(error)
    }
}
/* search product by name and category */

module.exports.search_product = async (req,res) => {
    try {
      var data = await product.find({
         "$or":[
            {
               tital :{ $regex: req.params.key, $options:'i' }
            },
            { 
               category:{ $regex: req.params.key, $options:'i' }
            }
         ]
      })
     
      res.status(200).json({
         status:"success",
         data
      })
    } catch (error) {
     res.status(200).json({
      error
     })
    }
    }
    