import { atom } from "recoil";
import Map from "../components/Map/Map";

export const userAtom = atom({
    key: 'userAtom',
    default: null
})

export const displayPostsAtom = atom({
    key: 'displayPostsAtom',
    default: {
        type: 'map',
        payload: <Map/>
    }
})