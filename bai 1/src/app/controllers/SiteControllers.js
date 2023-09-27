const Courses = require('../models/Courses')
const {multipleMongooseToObject} = require('../../util/mongoose')


class SiteControllers {
  home(req, res) {

// Courses.find({}, function(err, course)  {
//   if (!err){
//      res.json(course);
//   }
//   else {
//       res.status(400).json({error:"erroorr"})
//   }
// })


    const getCourse = async () => {
      try {
        const items = await Courses.find({})
        return  items;
      }catch (e) {

      }
    }
    getCourse().then((foundItems)=>{
      res.render('home', {
        foundItems: multipleMongooseToObject(foundItems)
      })
      // res.json(foundItems)
      console.log(foundItems)
    }).catch((err)=>{
      console.log("loi roi em oi: " )
      console.log(err)
    })



    // res.render('home');
  }

  list(req, res) {
    res.render('list');
  }

  detail(req, res) {
    res.render('detail');
  }
}
module.exports = new SiteControllers();
