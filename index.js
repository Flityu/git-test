function throttled(fn, delay=500) {
  let timer = null
  return (...args) => {
    if(!timer){
      timer = setTimeout(() => {
        console.log(this)
        fn.apply(this,args)
      },delay);
    }
  }
}
//test
export default throttled
