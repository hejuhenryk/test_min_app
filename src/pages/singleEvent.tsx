import SinglePage from '../Components/page'
import logo from '../logo.svg'

export const SingleEvent = (): JSX.Element => {

    const id = window.location.href.split('/').pop()

    return <SinglePage logo={logo} header={`Event page ${(id && +id < 1000) ? id : "do not exist"}`} />
}