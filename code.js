const myCar = ()=>{
	const cars =[{
    	type:"twoWheeler",
      	name:"BMW",
      	parts:["engine","wheel"]
    },{
      type:"electric",
      name:"Tata Nexon",
      parts:["motor","IC"]
    },{
      type:"sports",
      name:"porsche",
      parts:["turbo","spoiler"]
    }]
    const findCar =(type)=>{
    	let car = cars.find((item)=> item.type === type)
       	if(car && Object.keys(car).length){
       		return car;
       	}
      	return {type:"NotFound"}
    }
    const addCar = (car)=>{
    	if(Object.keys(car).length){
        	cars.push(car)
          return "Car is successfully added"
        }
      else{
      	return "invalid arguments"
      }
    }
    return [findCar,addCar];
}
const [findCar,addCar] = myCar();
console.log(findCar("sports"));
console.log(addCar({ type: "lala", name: "porsche", parts: Array ["turbo", "spoiler","lalla"]}))