//code your solution here//
 let headquaters = 42 
 let blocks = (43)
function distanceFromHqInBlocks(blocks){
    if(blocks < 42){
        return headquaters - blocks 
    }else{
        return blocks - headquaters
    }
}
function distanceFromHqInFeet(blocks) {
  distanceFromHqInBlocks(blocks);
  if(blocks < 42){
    return headquaters * 264 - blocks * 264
}else{
    return blocks * 264 - headquaters * 264
}
}

function distanceTravelledInFeet(start, destination){
   return  Math.abs((destination - start)*264)
}
let distance 
function calculatesFarePrice(start, destination){
    distance =  Math.abs((destination - start)*264)
    if (distance < 400){
        return 0
    }else if(distance > 400 && distance < 2000) {
        return (distance - 400)/50
    }else if (distance > 2000 && distance < 2500) {
        return 25
    }else {
        return 'cannot travel that far'
    }
        


    


}

