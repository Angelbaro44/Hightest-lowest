function highAndLow(numbers){
      let newlist = [0]
    newlist=numbers.split(' ').sort((a,b)=> b-a)
    return( newlist[0]+' '+newlist[newlist.length-1])
    
    }