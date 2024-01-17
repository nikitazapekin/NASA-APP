
import { NasaDatabaseState, NasaDatabaseAction, NasaDatabaseActionTypes } from "../../types/nasaDatabase";
const initialState: NasaDatabaseState = {
    data: {
        collection: {
            version: "",
            href: "",
            items:
                [

                    {
                        href: "",
                        data: [
                            {
                                center: "",
                                title: "",
                                keywords: [],
                                location: "",
                                nasa_id: "",
                                date_created: "",
                                media_type: "",
                                description: ""
                            }
                        ],
                        links: []

                    }
                ]
        }

    },
    limit: 10,
    page: 1,
    loading: false,
    error: null
}

export const NasaDatabaseReducer = (state = initialState, action: NasaDatabaseAction): NasaDatabaseState => {
    switch (action.type) {
        case NasaDatabaseActionTypes.FETCH_NASA_DATABASE:
            return { ...state, loading: true, error: null, data: initialState.data };

        case NasaDatabaseActionTypes.FETCH_NASA_DATABASE_SUCCESS:

            return { ...state, loading: false, error: null, data: action.payload }
        case NasaDatabaseActionTypes.FETCH_NASA_DATABASE_ERROR:
            return { ...state, loading: false, error: action.payload, data: initialState.data };
        case NasaDatabaseActionTypes.SET_NASA_DATABASE_PAGE:
            return { ...state, page: action.payload }
        default:
            return state;
    }
};
