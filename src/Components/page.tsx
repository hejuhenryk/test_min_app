import '../App.css';
type Props = {
    logo: any
    header?: string
    children?: JSX.Element | JSX.Element[]
}

const Page = ({ logo, header = "Standar tekst", children }: Props): JSX.Element => {
    return <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                {header}
            </p>
            {children}
        </header>
    </div>
}

export default Page