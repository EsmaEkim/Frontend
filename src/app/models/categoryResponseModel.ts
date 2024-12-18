import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryResposeModel extends ResponseModel{
    data:Category[]
}