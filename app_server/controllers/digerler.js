const hakkinda = function(req,res,next){
    res.render("hakkinda",{title:"Hakkinda sayfasi"})
};

module.exports.hakkinda=function(req,res){
    res.render('hakkinda',{'title':Hakkında})
};