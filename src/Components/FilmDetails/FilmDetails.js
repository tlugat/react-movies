import React from 'react'
import '../FilmDetails/FilmDetails.scss'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function FilmDetails() {
  return (
    <div>
      <Header />
      <div className='film'>
        <div className='film__poster'>
            <div>
              <h1>TAXI DRIVER</h1>
              <img src='https://cdn.discordapp.com/attachments/778274171318042636/779314930326306836/poster.png' alt=''/>
            </div>
            <div className='film__infos'>
              <ul>
                <li>Rating : 8.3/10</li>
                <li>Director : Martin Scorsese</li>
                <li>Producers: Mathew Philips, Julia Philips</li>
                <li>Actor : Robert De Niro, Jodie Foster, Cybill Sheperd</li>
                <li>Release : 1976</li>
                <li>Country : USA</li>
                <li>Language : English</li>
              </ul>
            </div>
          
        </div>
        <div className='film__synopsis'>
          <h2>Synopsis</h2>
          <p>A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.</p>
        </div>
        <div className='film__trailer'>
          <h2>Trailer :</h2>
          <img src='https://cdn.discordapp.com/attachments/778274171318042636/779320597221474304/Capture_decran_2020-11-18_a_15.36_1.png' alt=''/>
        </div>
        <div className='film__plus'>
          <h2>You may also like : </h2>
          <img src='https://cdn.discordapp.com/attachments/778274171318042636/779314930326306836/poster.png' alt=''/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default FilmDetails
