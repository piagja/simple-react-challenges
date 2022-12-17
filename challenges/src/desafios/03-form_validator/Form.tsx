import React from 'react'
import './styles.css'

const Form = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [message, setMessage] = React.useState('')

  const timeoutRef = React.useRef()

  const findErrors = () => {
    const errors = []
    const emailRegexExp =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    const testEmail = emailRegexExp.test(email)

    if (!email || !password || !confirmPassword)
      errors.push('Todos os campos devem ser preenchidos')

    if (!testEmail) errors.push('Email com formato inválido')

    if (password.length < 8)
      errors.push('A senha precisa ter ao menos 8 caracteres')

    if (password !== confirmPassword) errors.push('As senhas não conferem')

    return errors
  }

  const handleSubmit = e => {
    e.preventDefault()

    const errors = findErrors()
    setMessage(errors.length ? errors.join('\n') : 'Usuário registrado!')

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setMessage('')
    }, 4000)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            onChange={({ target }) => setEmail(target.value)}
            onFocus={focus}
            type='text'
            name='email'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            onChange={({ target }) => setPassword(target.value)}
            type='password'
            name='password'
          />
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            onChange={({ target }) => setConfirmPassword(target.value)}
            type='password'
            name='confirmPassword'
          />
        </div>
        <span className='error-span'>{message}</span>

        <div>
          <button type='submit'>Register</button>
        </div>
      </form>
    </section>
  )
}

export default Form
