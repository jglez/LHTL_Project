import { Route, Link, Switch } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <nav>
        <Link id='topics' to='/topics'>Topics <span>&#709;</span></Link>
        <Link to='/'>Learning How to Learn</Link>
        <Link to='/about'>About</Link>
      </nav>
    </>
  )
}