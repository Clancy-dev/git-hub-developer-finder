import React from 'react'

export default function page() {
  return (
    <div className='main-container'>

        <div className="above-header">
            <h1>devfinder</h1>

        </div>
        <div className="header">
        <input type="text" placeholder="Search Github username.." className="placeholder"/>
        <button>
            Search
        </button>

        </div>
        <div className="main-body">
            <section className='section-one'>
                <div className="logo-container">
                    <img src="/logox.jpg" alt="logo" />


                </div>
                <div className="starter-details">
                    <h2>The Octocat</h2>
                    <h3>actocat</h3>
                    <p>Joined 25 Jan 2011</p>

                </div>

            </section>
            <section className='section-two'>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quas, neque dolorum soluta itaque commodi, accusamus ipsa eius iste at delectus consequatur officiis ex voluptatibus quod ab voluptates provident veritatis?</h4>
                
            </section>
            <section className='section-three'>
                <div className="partition-one">
                <p>Repos</p>
                <h2>8</h2>

                </div>
                <div className="partition-two">
                <p>Followers</p>
                <h2>3938</h2>

                </div>
                <div className="partition-three">
                <p>Following</p>
                <h2>9</h2>

                </div>
                
            </section>
            <section className='section-four'>
                <div className="division-one">
                    <h3>San Fransisco</h3>
                    <h3>https://github.blog</h3>
                    

                </div>
                <div className="division-two">
                    <h3>Not Available</h3>
                    <h3>agithub</h3>
               

                </div>
            </section>

        </div>


    
    </div>
  )
}

