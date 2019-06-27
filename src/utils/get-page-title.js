import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Petshop Maurício'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
