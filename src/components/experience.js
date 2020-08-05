import React from 'react';

export default class Experience extends React.Component {
    render() {
        return (
            <div style={{marginBottom:'5em', marginTop:'1em'}}>
                <h1 style={{fontWeight:"bold", color:"#947240", opacity:".8", marginTop:"0px"}}>Work Experience</h1>
                <div className='experienceTextMain'>
                    <h1>Markalon</h1>
                    <div className='paraText' style={{paddingBottom:'1em'}}>
                        <p style={{ fontSize: '30px' }}>
                            Web Developer
                </p>
                        <p style={{ fontSize: '25px' }}>August 2020 - November 2020</p>
                        <a href="https://markalon.com/" style={{ fontSize: '25px' }}>Visit Website</a>
                    </div>
                </div>
                <div className='experienceText'>
                    <h1>HCL Technologies</h1>
                    <div className='paraText' style={{paddingBottom:'1em'}}>
                        <p style={{ fontSize: '30px' }}>
                            Software Engineer Intern
                    </p>
                        <p style={{ fontSize: '25px' }}>June 2019 - August 2019</p>
                        <a href="https://www.hcltech.com/" style={{ fontSize: '25px' }}>Visit Website</a>
                    </div>
                </div>
                <div className='experienceText'>
                    <h1>Zlott</h1>
                    <div className='paraText' style={{paddingBottom:'1em'}}>
                        <p style={{ fontSize: '30px' }}>
                            Data Science Intern
                        </p>
                        <p style={{ fontSize: '25px' }}>June 2018 - August 2018</p>
                        <a href="https://www.crunchbase.com/organization/zlott" style={{ fontSize: '25px' }}>Visit Website</a>
                    </div>
                </div>
                <div className='experienceText'>
                    <h1>Youth for Seva</h1>
                    <div className='paraText' style={{paddingBottom:'1em'}}>
                        <p style={{ fontSize: '30px' }}>
                            Management Intern
                        </p>
                        <p style={{ fontSize: '25px' }}>June 2016 - July 2016</p>
                        <a href="https://www.youthforseva.org/" style={{ fontSize: '25px'}}>Visit Website</a>
                    </div>
                </div>
            </div>
        )
    }
}