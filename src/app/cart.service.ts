import { Injectable, signal, computed } from '@angular/core';
import { Product } from './products';
export interface CartItem { product:Product; quantity:number; }
@Injectable({providedIn:'root'}) export class CartService {
 readonly items=signal<CartItem[]>(this.read());
 readonly count=computed(()=>this.items().reduce((n,x)=>n+x.quantity,0));
 readonly subtotal=computed(()=>this.items().reduce((n,x)=>n+x.product.price*x.quantity,0));
 readonly savings=computed(()=>this.items().reduce((n,x)=>n+(x.product.original-x.product.price)*x.quantity,0));
 coupon=signal('');
 readonly discount=computed(()=>this.coupon()==='QUICK10'?Math.round(this.subtotal()*.1):this.coupon()==='SAVE50'&&this.subtotal()>=299?50:0);
 readonly total=computed(()=>this.subtotal()-this.discount());
 private read():CartItem[]{try{return JSON.parse(localStorage.getItem('quickora-cart')||'[]') as CartItem[]}catch{return []}}
 private save(){localStorage.setItem('quickora-cart',JSON.stringify(this.items()))}
 add(p:Product){this.items.update(a=>{const x=a.find(i=>i.product.id===p.id);return x?a.map(i=>i.product.id===p.id?{...i,quantity:i.quantity+1}:i):[...a,{product:p,quantity:1}]});this.save()}
 change(id:number,d:number){this.items.update(a=>a.map(i=>i.product.id===id?{...i,quantity:i.quantity+d}:i).filter(i=>i.quantity>0));this.save()}
 remove(id:number){this.items.update(a=>a.filter(i=>i.product.id!==id));this.save()}
 clear(){this.items.set([]);this.save();this.coupon.set('')}
 applyCoupon(code:string){const c=code.trim().toUpperCase();if(c==='QUICK10'||(c==='SAVE50'&&this.subtotal()>=299)){this.coupon.set(c);return true}return false}
}
