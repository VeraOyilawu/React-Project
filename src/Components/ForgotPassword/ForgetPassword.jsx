import './ForgetPassword.css'

const ForgetPassword = () => {
    return (
        <>
            <main>
                <div className='ForgetPassword'>
                    <div className='mainContainer'>
                        <section className='ForgetpasswordText'>
                            <h1 className='forgetPasswordH1'>Forget Password</h1>
                        </section>
                        <div className='inputTextCon'>
                            <div className='input'>
                                <input type="" placeholder='Username' className='forgetPasswordInput' />
                            </div>
                        </div>
                        <div className='fogpasButton'>
                            <button className='mainButton'><p className='forgetPasswordP'>send</p></button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ForgetPassword