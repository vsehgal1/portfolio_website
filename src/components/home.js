import React from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './myAvatar.png'

export default class Home extends React.Component {
    render() {
        return (
            <div
            className="mainDiv"
            style={{width:'100%', margin: 'auto', height:'100%'}}>
                <Grid className='homeGrid'style={{height:'100%'}}>
                    <Cell col={12} style={{height:'100%'}}>
                        <img 
                        src={logo} 
                        alt='avatar'
                        className='avatarImage'></img>
                        <div className='homeText'>
                            <h1>Software Developer</h1>
                            <hr/>
                            <div className='paraText'>
                            <p
                            style={{fontSize:'30px'}}>
                                Computer Science - University of Maryland College Park</p>
                            <p>Python | Java | JavaScript | ReactJS | NodeJS | HTML/CSS </p>
                            </div>
                            <div className='socialMedia'>
                                {/* LinkedIn*/}
                                <a 
                                href='https://www.linkedin.com/in/vikram-sehgal-31144214b/'
                                target='_blank'
                                rel="noopener noreferrer">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/*GitHub*/}
                                <a 
                                href='https://github.com/vsehgal1/'
                                target='_blank'
                                rel="noopener noreferrer">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/*Email*/}
                                <a href = "mailto: vikramsehgal99@gmail.com"
                                target='_blank'
                                rel="noopener noreferrer">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}