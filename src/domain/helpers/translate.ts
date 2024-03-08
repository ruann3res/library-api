export type TranslateType = {
    [key in string]: string
}
export enum SystemObject {
    "PT" = "pt",
    "EN" = "en",
    "ES" = "es",
}

export const getTranslateText = (translateObj: TranslateType, lang: SystemObject = SystemObject.PT) => {
    try {
        return translateObj[lang] ?? translateObj.pt;
    } catch {
        return translateObj;
    }
}