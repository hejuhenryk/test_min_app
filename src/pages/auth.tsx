import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Auth = (): JSX.Element => {
    const navigate = useNavigate()
    const storageKey = 'accessToken'
    const [auth, setAuth] = useState<string | undefined>(
        localStorage.getItem(storageKey) || undefined
    )

    const handleClick = (): void => {
        if (auth) localStorage.removeItem(storageKey)
        else {
            localStorage.setItem(
                storageKey,
                '__TESTTOKEN_ySEdYLS7YnQC2ZsNyRa95et__'
            )
            setAuth(localStorage.getItem(storageKey) || undefined)
        }
        navigate('/')
    }

    return (
        <button type="button" onClick={handleClick}>
            <h2>{auth ? 'Unauthorise me' : 'Authorise me'}</h2>
        </button>
    )
}
