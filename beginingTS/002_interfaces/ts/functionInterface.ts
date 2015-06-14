enum Transmission{automatic,munual,hydrid};

interface Accelerate{
  (currSpeed:number, trLevel?:number):number;
}

class Car{
  
  //properties
  model:string;
  regNo:string;
  cc:number;
  transmission:Transmission;
  // static speed:number=0;
  speed:number=0;
  
  constructor(m:string,r:string,c:number,t:Transmission){
    this.model=m;
    this.regNo=r;
    this.cc=c;
    this.transmission=t;
    this.speed=0;
  }
  
  // method
  accelerate:Accelerate=(currSpeed:number,level:number)=>{
    if(level==undefined)
      return (currSpeed * 0.10);
    else{
      if(level==1)
        return (currSpeed * 0.1);
      else if(level==2)
        return (currSpeed * 0.15);
      else if(level==3)
        return (currSpeed * 0.2);
      else if(level==4)
        return (currSpeed * 0.3);
    }
  }
  
}

class Scoter implements Car{
   model:string;
  regNo:string;
  cc:number;
  transmission:Transmission;
  // static speed:number=0;
  speed:number=0;
  
  constructor(m:string,r:string,c:number,t:Transmission){
    this.model=m;
    this.regNo=r;
    this.cc=c;
    this.transmission=t;
    this.speed=0;
  }
  accelerate:Accelerate=(currSpeed:number,level:number)=>{
    if(level==undefined)
      return (currSpeed * 0.08);
    else{
      if(level==1)
        return (currSpeed * 0.1);
      else if(level==2)
        return (currSpeed * 0.2);
      else if(level==3)
        return (currSpeed * 0.25);
      else if(level==4)
        return (currSpeed * 0.4);
    }
  }
}

var hondaCity = new Car("vxii","AL322",1600,Transmission.automatic);
console.log(hondaCity.accelerate(25,2));

var honda50 = new Scoter("50","GN372",50,Transmission.automatic);
console.log(honda50.accelerate(25,2));