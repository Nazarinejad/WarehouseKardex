import { HttpBaseService } from "sanhab-components-library";
import { IGetRequestBody } from "./models"
import { IWarehouseInqueryByPostalCode}  from "../../model/home/model"
import HttpBaseConstant from "../HttpBaseConstant"

class HomeApiRequest extends HttpBaseService {

    GetAllErrorTypes = (): Promise<any> => {
        return this.send.get("/Enum/GetAllErrorTypes")
    }
    
    WarehouseInqueryByPostalCode = (requestBody: IWarehouseInqueryByPostalCode): Promise<any> => {
        return this.send.post(`/WarehouseInqueryByPostalCode`, requestBody )
    }
    

   

}

export default new HomeApiRequest({ url: HttpBaseConstant.url })