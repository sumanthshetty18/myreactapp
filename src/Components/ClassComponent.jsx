import React from "react";
import '../Styles/ClassComponent.css';

export default class ClassComp extends React.Component {
    render() {
        return (
            <>
                <div className="card">
                    <h2>Class Component</h2>
                    <p>A class component must include the extends React.Component statement. This
                        statement creates an inheritance to React.Component, and gives your component
                        access to React.Component's functions. The component also requires a render()
                        method, this method returns HTML.</p>
                </div>

            </>
        )
    }
}