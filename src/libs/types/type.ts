import { ReactNode } from "react";

export interface Chart {
    children?: ReactNode,
    className?: string
    onClick?: () => void
}

export interface ItemSearch {
    id: string
    title: string;
    price?: {
        size?: string;
        price: number
    }
    imageUrl: string
    priseForSearch?: number
    type: string

}

export interface PizzaCard {
    id: string; // Уникальный идентификатор пиццы
    name: string; // Название пиццы
    className?: string
    price: [{
        size: string; // Размер пиццы (например, "Small", "Medium", "Large")
        price: number; // Цена для данного размера
    }]; // Массив с ценами для разных размеров
    discription: string; // Описание пиццы
    imageUrl: string; // URL изображения пиццы
    priseForSearch: number
    type: string
    onClick: () => void
}
export interface Pros{
    id:string;
    name:string
}
export interface Ingridients {
    id: string; // Уникальный идентификатор пиццы
    price: number // Массив с ценами для разных размеров
    imageUrl: string; // URL изображения пиццы
}