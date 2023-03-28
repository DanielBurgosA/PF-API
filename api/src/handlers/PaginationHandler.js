function paginateditems(page, limit, items){
    const startIndex = (page-1)*limit;
    const endIndex = page*limit;
    const results = {};
    if(endIndex<items.length){
      results.next ={
        page: page + 1,
        limit: limit
      }
    }
    if(startIndex>0){
      results.previous={
        page:page - 1,
        limit:limit
      }
    }
    if(!startIndex && !endIndex){
      return results.results = items;
    }else{
      results.results = items.slice(startIndex,endIndex);
      return results;
    }
  }

  module.exports= {paginateditems};