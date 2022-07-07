import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCats = createAsyncThunk(
    'cats/getCats',
    async (page) => {
        const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=20&page=${page}`).then(
            (data) => data.json()
        )
        return res
})

const catsSlice = createSlice({
    name: 'cats',
    initialState: {
        cards: [],
        favourites: [],
    },
    reducers: {
        like(state, action) {
            if(!state.favourites.includes(cards))
           console.log(action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(getCats.fulfilled, (state, { payload }) => {
                state.cards = [...state.cards, ...payload]
            })
    }
})

export default catsSlice.reducer;
export const { like } = catsSlice.actions;