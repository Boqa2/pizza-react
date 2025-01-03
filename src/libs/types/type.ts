import {  ReactNode } from "react";

export interface Chart {
    children?: ReactNode,
    className?: string
    onClick?:()=>void
}

export interface ItemSearch {
    id: string
    title: string;
    price?: {
        size?: string;
        price:number
    }
    imageUrl: string
    priseForSearch?:number
    type: string

}

export interface PizzaCard {
    id: string; // Уникальный идентификатор пиццы
    name: string; // Название пиццы
    price: [{
        size: string; // Размер пиццы (например, "Small", "Medium", "Large")
        price: number; // Цена для данного размера
    }]; // Массив с ценами для разных размеров
    description: string; // Описание пиццы
    imageUrl: string; // URL изображения пиццы
    priseForSearch:number
    type:string
}