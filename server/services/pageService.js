import mongoose from 'mongoose';

const Page = mongoose.model('page');

function getPages(areaCode) {
    return Page.find({areaCode})
            .then(page => {
                return new Promise((resolve, reject) => {
                    if(!page)
                      reject('No page found!'); 
                    resolve(page);
                })
            });
}

function addPage({areaCode, toPage, pageId}) {
    const page = new Page({ areaCode, toPage, pageId });
    if (!areaCode || toPage === undefined || toPage === null) { throw new Error('You must provide an area code and page.'); }
  
    return Page.findOne({ areaCode, toPage })
      .then(existingCode => {
        if (existingCode) { throw new Error('data is already exist!!'); }
        return page.save();
      })
      .then(page => {
        return new Promise((resolve, reject) => {
          
          resolve(page);
        });
      });
}

export default {
    getPages,
    addPage
}