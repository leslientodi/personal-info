import React from 'react'
import './App.css'

function InfoPage (){
  return (
    <>
      <img src='../src/images/personal.jpeg'></img>
      <div className='intro'>
        <h2>Nana Ntodi</h2>
        <p>Frontend Developer</p>

      </div>
      <div className='soc-buttons'>
        <button className='email'><img src='../src/images/email.jpeg' width='20px'></img>Email</button>
        <button className='linkedin'><img src='../src/images/bluelink.jpeg' width='20px'></img>LinkedIn</button>

      </div>
      <div className='self'>
        <h3>About</h3>
        <small>
          Hey there! I'm the epitome of cool. With an effortless swagger,
           I navigate life with confidence and charm.
            My style game is always on point, rocking the latest trends with my own unique flair.
             I've got this magnetic personality that draws people in 
              cracking jokes, making them laugh, and leaving a lasting impression.
        </small>
        <h3>Interests</h3>
        <small>
          I approach challenges with a calm demeanor,
           never letting stress get the best of me.
            Open-minded and always up for new experiences, 
            I thrive on adventure and inspire those around me to embrace the thrill of the unknown.
             Life's too short not to be cool, and I've got that covered in every aspect.
              Cheers to being effortlessly awesome!
        </small>
            
      </div>
      <footer>
        <a><img src='../src/images/fb.jpeg'></img></a>
        <a><img src='../src/images/insta.jpeg'></img></a>
        <a><img src='../src/images/linkedin.jpeg'></img></a>
        <a><img src='../src/images/whatsapp.jpeg'></img></a>

      </footer>
      



    </>
    
  )
}

export default InfoPage