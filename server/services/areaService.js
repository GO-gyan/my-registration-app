import mongoose from 'mongoose';

const Area = mongoose.model('area');

function getAllArea() {
    return Area.find({})
      .then(area => {
        return new Promise((resolve, reject) => {
          if(!area)
            reject('No area found!'); 
          resolve(area);
        })
    })
}

function addArea({areaCode, areaLabel}) {
    const area = new Area({ areaCode, areaLabel });
    if (!areaCode || !areaLabel) { throw new Error('You must provide an area code and area label.'); }
  
    return Area.findOne({ areaCode })
      .then(existingCode => {
        if (existingCode) { throw new Error('Area code is in use'); }
        return area.save();
      })
      .then(area => {
        return new Promise((resolve, reject) => {
          /*req.logIn(user, (err) => {
            if (err) { reject(err); }
            resolve(user);
          });*/
          resolve(area);
        });
      });
}

export default {
    getAllArea,
    addArea
}