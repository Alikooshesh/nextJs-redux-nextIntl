import {createSlice} from "@reduxjs/toolkit";

export interface Idata{
    id : number,
    data : string
}

const init:{dataList : Idata[]} = {
    dataList : []
}

const dataReducer = createSlice({
    name: 'dataReducer',
    initialState: init,
    reducers: {
        add: (state, action) => {
            state.dataList.push(action.payload.data)
        },
        remove: (state, action) => {
            state.dataList = state.dataList.filter(data => data.id !== action.payload.id)
        },
        editData: (state, action) => {
            const dataFinder: number = state.dataList.findIndex(data => data.id == action.payload.id)
            if (dataFinder >= 0)  {
                const editedData: Idata = {
                    id : +action.payload.id,
                    data : action.payload.data
                }
                state.dataList.splice(dataFinder,1,editedData)

            }

        }

    }
})

export const {add,remove,editData} = dataReducer.actions
export default dataReducer.reducer