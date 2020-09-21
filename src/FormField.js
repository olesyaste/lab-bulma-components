import React from 'react'

export default function FormField(props) {
    return (
<div className="field">
    <label className="label">{props.lable}</label>
    <div className="control">
    <input className="input" type={props.type} placeholder={props.placeholder} />
    </div>
</div>
    );
};
