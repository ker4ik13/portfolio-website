export const renderViewPosts = (setFunction, countOfView, array) => {
    if(countOfView < array.length){
        setFunction(countOfView + 5)
    } else{
        return;
    }
}
export default renderViewPosts