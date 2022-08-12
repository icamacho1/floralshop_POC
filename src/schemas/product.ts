import { ProductType } from "../@types/product"

export type FertilizerType = 'nitrogen' | 'phosphorus' 

export class ProductSchema {
    id: string
    name: string
    binomialName: string
    price: number
    imgUrl: string
    wateringsPerWeek: number
    fertilizerType: FertilizerType
    heightInCm: number

    constructor (props: ProductType | {}) {
        this.id = 'id' in props ? props.id : ''
        this.name = 'name' in props ? props.name : ''
        this.binomialName = 'binomialName' in props ? props.binomialName : ''
        this.price = 'price' in props ? props.price : 0
        this.imgUrl = 'imgUrl' in props ? props.imgUrl : 'https://www.vuescript.com/wp-content/uploads/2018/11/Show-Loader-During-Image-Loading-vue-load-image.png'
        this.wateringsPerWeek = 'wateringsPerWeek' in props ? props.wateringsPerWeek : 1
        this.fertilizerType = 'fertilizerType' in props ? props.fertilizerType : 'nitrogen'
        this.heightInCm = 'heightInCm' in props ? props.heightInCm : 0
    }

}