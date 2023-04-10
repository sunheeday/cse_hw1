import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h1>Let me introduce myself !</h1> 
            <h2>My name : Kim Seunghee</h2>
            <h2>My birthday : 1st April 2004</h2>
            <h2>My hobby </h2>
            <ul>
            <li>watching a movie</li>
            <li>drawing</li>
            <li>watching a baseball game</li>
            </ul>
            If you want to know more about me, click <Link href="/">here!</Link> 
        </div>
    )
}