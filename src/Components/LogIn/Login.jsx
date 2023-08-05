import './Login.css'
import { BiSolidHide} from 'react-icons/bi'

const Login = () => {
    return (
        <>
            <main className='loginMain'>
                <section id='section'>
                    <div className='login'>
                        <div className='logCon'>
                            <h1 className='title'>Log in</h1>
                        </div>

                        <div className='inputs'>
                            <input type="text" placeholder='Email or username' />
                        </div>
                        <div className="inputPassword">
                        <input type="text" placeholder='password' />
                       <div className='passwordIcon'> <BiSolidHide/> </div>

                        </div>


                        <div className='forgPassword'>
                            <p className='LoginParagh'>Don't have an account? <span style={{color: "blue", cursor: "pointer"}}>Sign Up</span></p>
                            <p className='LoginParagh' style={{ cursor: "pointer"}}>Forget password?</p>
                        </div>

                        <div className='loginButton'>
                            <button className='loginBut'>Log in</button>
                        </div>



                    </div>


                </section>
            </main>
        </>
    )
}

export default Login;