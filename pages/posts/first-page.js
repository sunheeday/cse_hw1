import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h1>Let me introduce myself !</h1> 
            <h2>My name : Kim Seunghee</h2>
            
            <h2>My hobby </h2>
            
            watching a movie
            <br></br>
            drawing
            <br></br>
            watching a baseball game
            
            <h2>My birthday : 1st April 2004</h2>
            <br></br>
            If you want to know more about me, click <Link href="/">here!</Link> 
            <h2>교수님, 과제 열심히 했어요</h2>

            
        </div>
    )
}