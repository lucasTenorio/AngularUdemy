import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/throw'
import {Response} from '@angular/http'

export class ErrorHandler{
    static handlerError(error:Response | any) {
        let errorMessage: string
        if (error instanceof Response)
        {
            errorMessage = `Error ${error.status} ao obter a URL ${error.url} - ${error.statusText}`
        }
        else
        {
            errorMessage = error.toString();
        }
        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}