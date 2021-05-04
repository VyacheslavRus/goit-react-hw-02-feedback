import React, { Component } from 'react'
import Btn from '../btn/Btn';
import Section from '../section/Section';
import Statistics from '../ststistics/Statistics';
import { FeedbackStyled } from './FeedbackStyled';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }


    onClickBtn = (e) => {
        let name = e.target.name;
        this.setState((prevState) => ({
            [name]: prevState[name] + 1,
        }));
    };

    totalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    positiveFeedback = () => (this.totalFeedback() ? (this.state.good / this.totalFeedback()) * 100 : 0);


    render() {
        return (
            <FeedbackStyled>
                <Section title='Please leave feedback'>
                    <Btn onClickBtn={this.onClickBtn} />
                </Section>

                <Section title="Statistics">
                    {this.totalFeedback() ? (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.totalFeedback()}
                            positive={this.positiveFeedback().toFixed(1)}
                        />
                    ) : (
                        <p>"No feedback given"</p>
                    )}
                </Section>
            </FeedbackStyled>
        );
    }
}

export default Feedback;

