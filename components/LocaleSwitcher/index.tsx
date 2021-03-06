
import React from 'react'
import { useRouter } from 'next/router'
import { locales, languageNames } from '../../translations/config'
import { LocaleContext } from '../../context/LocaleContext'
const LocaleSwitcher: React.FC = () => {
  const router = useRouter()
  const { locale } = React.useContext(LocaleContext)
  const handleLocaleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const regex = new RegExp(`^/(${locales.join('|')})`)
      router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`))
    },
    [router]
  );
  return (
    <>
      <select value={locale} onChange={handleLocaleChange}>
        {locales.map(locale => (
          <option key={locale} value={locale}>
            {languageNames[locale]}
          </option>
        ))}
      </select>
      <style jsx>
        {`
        select {
                 padding: 0.4rem 1rem;
                  width: 8rem;
                  margin: 0 auto 2rem auto;
          }
        `}
      </style>
    </>
  )
}
export default LocaleSwitcher
