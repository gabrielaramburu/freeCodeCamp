function whatIsInAName(collection, source) {
    var arr = [];

    let sourceProps = Object.keys(source);

    arr =
        collection.filter(itemColl => {
            return sourceProps.every(sourceProp => {

                if (itemColl[sourceProp] === source[sourceProp]) {
                    return true;
                }
                return false;
            });
        });

    return arr;
}