import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <div className={navStyles.nav}>
			<div>
				<ul>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/about'>About</Link>
					</li>
					<li>
						<Link href='/blogs'>Blogs</Link>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<Link href='/sign-up'>Sign Up</Link>
					</li>
					<li>
						<Link href='/sign-in'>Sign In</Link>
        	</li>
				</ul>
			</div>
    </div>
  )
}
