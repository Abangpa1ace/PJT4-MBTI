type FilterType = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'saturate' | 'sepia' | 'url' 

type ThemeColorType = 'purple' | 'green' | 'yellow'
type ScreenType = 'mm' | 'ml' | 'tm' | 'tl' | 'ds' | 'dm' | 'dl'

type ThemeType = { [k in ThemeColorType | string]: string[] }
type MediaType = { [k in ScreenType]: string }
