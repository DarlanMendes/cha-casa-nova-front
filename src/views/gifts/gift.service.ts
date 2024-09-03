import { GiftRest } from "../../rest/gift.rest";

export class GiftService{
    
    constructor(private _giftRest = new GiftRest()){}

   getAllGifts():Promise<any>{
       return this._giftRest.getAllGifts().then((res:any)=>res.data)
    }
    addNewGift(body:any):Promise<any>{
        return this._giftRest.addNewGift(body).then((res:any)=>res.data)
    }

}