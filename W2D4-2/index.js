/*2A
const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
   
  const getCarBrand = car.getBrand;
   
  getCarBrand();   // This heeft betrekking op const car, dus undifined */
/*2B
  const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
  const getCarBrand = car.getBrand.bind(car);
  getCarBrand();   // output: Nu zal door de verbindende factor .bind wel Nissan zien */

 /* <button id="btn" type="button">Get the car's brand</button>
 
const car = {
  brand: "Nissan",
  getBrand: function(){
    console.log(this.brand);
  }
};
 
const el = document.getElementById("btn");
el.addEventListener("click", car.getBrand);*/

const car = {
    brand: "Nissan",
    getBrand: function(){
      const self = this;
      const printBrandName = function(){
        console.log(self.brand);
      };
      return printBrandName();
    }
  };
   
  car.getBrand();   // output: .......? 