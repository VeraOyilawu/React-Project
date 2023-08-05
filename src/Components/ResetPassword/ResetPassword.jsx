import './ResetPassword.css'

const ResetPassword = () => {
    return (
        <>
            <main>
                <div className='ResetPassword'>
                    <div className='ResetPasswordCon'>
                        <section>
                            <h1>Reset Password</h1>
                        </section>
                        <div className='inputTextCon'>
                            <div className='input'>
                                <input type="" placeholder='Password' className='resetPasswordInput' />
                                <input type="" placeholder='Confirm Password' className='resetPasswordInput' />
                            </div>
                        </div>
                        <div className='fogpasButton'>
                            <button><p>send</p></button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ResetPassword