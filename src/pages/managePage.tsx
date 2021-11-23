import SinglePage from '../Components/page'
import logo from '../logo.svg'

export const ManagePage = (): JSX.Element => {
    const token = localStorage.getItem('accessToken' || undefined)
    const id = window.location.href.split('/').pop()
    return <SinglePage logo={logo} header={`Mange page for organzation id: ${id}, with ${token ?? 'NO'} token`} />
}