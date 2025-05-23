import {Link} from 'react-router-dom'
const Btn = ({ title="Login", styl='', loc='/' }) => {
  return (
    <Link to={loc} className={`cursor-pointer font-medium py-2 px-6 rounded-full capitalize ${styl} transition-all ease-in-out duration-300`}> {title} </Link>
  )
}

export default Btn
