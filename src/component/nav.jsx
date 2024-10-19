import '../App.css'
import '../index.css'


export default function Nav(){
return(
    <>
    <nav>
        <img src='../public/icons8-console-94.png' className='logo'/>

        <div>
          <ul className='navUl'>
            <li>Contact</li>
            <li>Service</li>
            <li>About us</li>
          </ul>
        </div>

        <button>Login</button>
      </nav>
      </>
)
}