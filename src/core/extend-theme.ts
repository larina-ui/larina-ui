import theme, { Theme } from "./theme";

export function  extendTheme(newTheme: Theme){

    return {
        ...theme,
        ...newTheme
    }
}