import { CartItem } from "./cart-item.model"
import { MenuItem } from "../menu-item/menu-item.model"
import { Injectable } from "@angular/core"
import { NotificationService } from "app/shared/messages/notification.service"

@Injectable()
export class ShoppingCartService 
{
    constructor(private notificationService : NotificationService){}
    
    items : CartItem[] = []

    clear()
    {
        this.items =  []
    }
    total(): number
    {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0)
    }
    addItem(item:MenuItem)
    {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if(foundItem)
        {
            this.increaseQty(foundItem)
        }
        else
        {
            this.items.push(new CartItem(item))
        }
        this.notificationService.notify(`Você adicionou um item ${item.name}`)
    }
    removeItem(item:any)
    {
        this.items.splice(this.items.indexOf(item),1)
        this.notificationService.notify(`Você removeu um item ${item.menuItem.name}`)

    }
    
    increaseQty(item : CartItem){
        item.quantity = item.quantity + 1
    }
    decreaseQty(item : CartItem){
        item.quantity = item.quantity - 1
        if( item.quantity === 0 )
        {
            this.removeItem( item )
        }
    }

}