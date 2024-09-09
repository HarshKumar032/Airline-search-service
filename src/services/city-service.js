const { where } = require('sequelize');
const {CityRepository}=require('../repository/index');

class cityservice{
    constructor(){
         this.cityRepository= new CityRepository();
    }

    async createcity(data){
        try{
            const city = await this.cityRepository.createcity(data);
        }
        catch{
            console.log("Something went wrong in service layer");
            throw{error};
        }
    }

    async deletecity(cityid){
        try{
            const response = await this.cityRepository.deletecity(cityid);
            return response;
        }
        catch{
            console.log("Something went wrong in service layer");
            throw{error};
        }
    }

    async updatecity(cityid,data){
        try {
            const city=await city.update(data,{
                where:{
                    id:cityid
                }
            });
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw{error};
        }
    }

    async getcity(cityid){
        try {
            const city=await city.findByPk(cityid);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw{error};
        }
    }
}

module.exports=cityRepository;