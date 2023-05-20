// @ts-ignore
import {catchError, from, map, mergeMap, of} from "rxjs";
// @ts-ignore
import {ofType} from "redux-observable";

import {
    getAllProductFailedAction,
    getAllProductRequestAction,
    getAllProductSuccessAction,
} from "../reducer/allProductSlice";

const responseData = {
    "data": {
        "result": [{
            "name": "Canada",
            "description": "Dominion of Canada",
            "name_en": "Canada",
            "nationality": "Canadian"
        }, {
            "name": "USA",
            "description": "United States of America",
            "name_en": "USA",
            "nationality": "American"
        }], "isSuccessful": true, "isResult": true, "errorMessages": []
    }
};

export const allProductRequestEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(getAllProductRequestAction),
        mergeMap((action: any) =>
            from(
                responseData.data.result
            ).pipe(
                map((response: any) => {
                    if (response.data) {
                        return getAllProductSuccessAction(response.data);
                    } else {
                        throw response;
                    }
                }),
                catchError((err) => {
                    let result = {
                        message: err
                    }
                    return of();
                })
            )
        )
    );
};