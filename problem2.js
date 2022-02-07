const rent = (products, time) => {
  closeTime = 31556926000
  ans = 0
  products.forEach(item => {
  if (item.quantity>0){
  	if (time > Date.parse(item.start_at) & 
    time < Date.parse(item.end_at)){
    	timeDiff = Date.parse(item.end_at) - time
    	if (timeDiff<closeTime){
      	closeTime = timeDiff
        ans=item.id
      }
    }
  }
  })
  return (ans!=0)?ans:'nil'
}
