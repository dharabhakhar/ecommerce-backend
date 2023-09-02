const { news } = require("../model/news");

module.exports.all_news = async(req,res)=>{
 var all_news_data = await news.find();

 res.json(all_news_data);
}

module.exports.create_news = async(req,res)=>{
 var news_data = await news.create(req.body);

 res.json(news_data);
}
module.exports.single_news = async(req,res)=>{
 var single_news_data = await news.findById(req.params.id);

 res.json(single_news_data);
}