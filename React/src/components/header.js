//  rafce shortcut
import React from "react"
import ReactDOM from "react-dom"


function Header() {
    return (
        <div>
            <header>
                <nav className="mainNav">
                    <img src="./react-logo.png" alt="some-logo" width="40px" />
                    <ul className="navigation">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                </nav>
            </header>
        </div>
    )
}


function Content() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be
                    able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <div>
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}



ReactDOM.render(<Page />, document.getElementById("root"))



export default Page
