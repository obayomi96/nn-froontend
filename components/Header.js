import headerStyles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Nubian</span> Nature
      </h1>
      <p className={headerStyles.description}>keep up to date with the latest health care news from Nubian Nature</p>
    </div>
  )
}
