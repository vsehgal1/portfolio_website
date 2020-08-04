import React from 'react';
import { Tabs, Tab } from 'react-mdl';
import Home from './home'
import Project from './project';
import Experience from './experience';
import Resume from './resume';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Home></Home>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <Experience></Experience>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <Project></Project>
            )
        }
        else{
            return(
                <Resume></Resume>
            )
        }
    }

    render() {
        return (
            <div>
                <div className='categoryTabs'>
                    <Tabs
                        activeTab={this.state.activeTab}
                        onChange={(tabId) => this.setState({ activeTab: tabId })}
                        ripple>
                        <Tab >Home</Tab>
                        <Tab>Experience</Tab>
                        <Tab>Projects</Tab>
                        <Tab>Resume</Tab>
                    </Tabs>
                </div>
                <section className='homeGrid'>
                    {this.toggleCategories()}
                </section>
            </div>

        )
    }
}