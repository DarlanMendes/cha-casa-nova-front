import { api } from "../service/api-config";
import { Gift } from "../model/gift.model";
export class GiftRest{
    async getAllGifts():Promise<Array<Gift>>{
        return await api.get("/gift")
    }
    async addNewGift(body:any):Promise<any>{
        console.log(body

        )
        return await api.post("/gift", body)
    }

}