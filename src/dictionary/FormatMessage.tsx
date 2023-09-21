import enLocale from './en'

const FormatMessage = (id: string) => {
  if (enLocale[id]) return enLocale[id]
  else return '???'
}

export default FormatMessage
