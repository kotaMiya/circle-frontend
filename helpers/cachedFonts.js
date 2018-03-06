import { Font } from 'expo'

export const cacheFonts = fonts => 
    fonts.map(font => Font.loadAsync(font));

