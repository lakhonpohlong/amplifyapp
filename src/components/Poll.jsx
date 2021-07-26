import React from 'react'
import  './Poll.scss'

export const Poll = () => {
    return (
        <div>
            <div className="container">
                <div className="poll__upper"></div>
                <div className="poll__lower">
                    <div className="poll__item">
                    <p className="sub_title">VACCINATION</p>
                    <h3 className="">Are you agree that vaccination for sarc cov-2 virus is compulsory for the state ? </h3>
                        <div className="homecard">
                            <div className="homecard__body">
                                
                                <p className="poll__age">About 5 hours ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="left">ccc</div>
                </div>
            </div>
        </div>
    )
}
