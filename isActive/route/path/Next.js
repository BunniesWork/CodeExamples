import { useRouter } from 'next/router'
import Link from 'next/link'

const ActivePath = () => {

  const router = useRouter()

  function isActive(route){
          if(route === router.pathname){
              return "active"
          }
          else ""
      } 
      
  return (
          <div>     
              <Link href='/'> <a className={isActive('/')}> Home </a></Link>
              <Link href='/second'> <a className={`class-example ${isActive('/')}`}> second path with class </a></Link>
              <Link href='/disabled'> <a> disabled </a></Link>
          </div>
  )
}

export default ActivePath
