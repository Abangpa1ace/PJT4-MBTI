export const theme: ThemeType = {
  purple: ['#f4d1ff', '#e197f7', '#da5cff'],
  green: ['#d9fff7', '#50e3c2'],
  yellow: ['#fff1c7', '#ffca29'],
}

export const screen: MediaType = {
  mm: '375px',
  ml: '520px',
  tm: '768px',
  tl: '1024px',
  ds: '1280px',
  dm: '1440px',
  dl: '2560px',
}

export const media: MediaType = {
  mm: `(max-width: ${screen.mm})`,
  ml: `(max-width: ${screen.ml})`,
  tm: `(max-width: ${screen.tm})`,
  tl: `(max-width: ${screen.ml})`,
  ds: `(max-width: ${screen.ds})`,
  dm: `(max-width: ${screen.dm})`,
  dl: `(max-width: ${screen.dl})`,
}

