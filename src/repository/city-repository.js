const {city}=require('../models/index');

class CityRepository{
    async createcity({name}){
        try{
            const city=await city.create({name});
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deletecity({cityid}){
        try{
            await city.destroy({
                where:{
                    id: cityid
                }
            });
            return true;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async updatecity(cityid,data){
        try{
            const city = await city.update(data,{
                where:{
                    id:cityid
                }
            });
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async getcity(cityid){

        try{
            const city=await city.findByPk(cityid);
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
}

module.exports=CityRepository;