import React from 'react'
import './Home.scss'
import {Link} from 'react-router-dom'
export const Home = () => {
    const pollId=1
    return (
        <div className="content">
                    <div className="category">
                        <h2 className="category__title">Public Polls</h2>
                        <p className="category__subtitle">Below are the public polls from admin</p>
                    </div>

                    <div className="card__container">
                        <div className="card__item">
                            <Link to={`/polls/${pollId}`}>
                                <div className="vote__container"><p className="votes">85 Votes</p></div>
                                <div className="homecard">
                                    <div className="homecard__body">
                                        <p className="sub_title">VACCINATION</p>
                                        <h3 className="">Are you agree that vaccination for sarc cov-2 virus is compulsory for the state ? </h3>
                                        <p className="poll__age">About 5 hours ago</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="card__item">
                            <Link to={`/polls/${pollId}`}>
                                <div className="vote__container"><p className="votes">85 Votes</p></div>
                                <div className="homecard">
                                    <div className="homecard__body">
                                        <p className="sub_title">VACCINATION</p>
                                        <h3 className="">Are you agree that vaccination for sarc cov-2 virus is compulsory for the state ? </h3>
                                        <p className="poll__age">About 5 hours ago</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="card__item">
                            <Link to={`/polls/${pollId}`}>
                                <div className="vote__container"><p className="votes">85 Votes</p></div>
                                <div className="homecard">
                                    <div className="homecard__body">
                                        <p className="sub_title">VACCINATION</p>
                                        <h3 className="">Are you agree that vaccination for sarc cov-2 virus is compulsory for the state ? </h3>
                                        <p className="poll__age">About 5 hours ago</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="card__item">
                            <Link to={`/polls/${pollId}`}>
                                <div className="vote__container"><p className="votes">85 Votes</p></div>
                                <div className="homecard">
                                    <div className="homecard__body">
                                        <p className="sub_title">VACCINATION</p>
                                        <h3 className="">Are you agree that vaccination for sarc cov-2 virus is compulsory for the state ? </h3>
                                        <p className="poll__age">About 5 hours ago</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="card__item">
                            <Link to={`/polls/${pollId}`}>
                                <div className="vote__container"><p className="votes">85 Votes</p></div>
                                <div className="homecard">
                                    <div className="homecard__body">
                                        <p className="sub_title">VACCINATION</p>
                                        <h3 className="">Are you agree that vaccination for sarc cov-2 virus is compulsory for the state ? </h3>
                                        <p className="poll__age">About 5 hours ago</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="card__item">
                            <Link to={`/polls/${pollId}`}>
                                <div className="vote__container"><p className="votes">85 Votes</p></div>
                                <div className="homecard">
                                    <div className="homecard__body">
                                        <p className="sub_title">VACCINATION</p>
                                        <h3 className="">Are you agree that vaccination for sarc cov-2 virus is compulsory for the state ? </h3>
                                        <p className="poll__age">About 5 hours ago</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
    )
}
