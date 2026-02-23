function categorySeparator(allProducts, category){
    return allProducts.filter((product)=>{

        if(product.category === category){
            return true;
        }else{
            return false;
        }
        
    })

}
export default categorySeparator;