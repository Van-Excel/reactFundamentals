import profilepic from './assets/passportq.jpg'

export default function Card() {
  return (
    <div className="card">
        <img className='card-image'  alt="profile pic" src={profilepic}></img>
        <h2 className='card-title'>Vanexcels Channel</h2>
        <p className='card-text'>
            The home of the simplest trading videos. Come here and learn how to make money on dxy.

        </p>

    </div>
  )
}
