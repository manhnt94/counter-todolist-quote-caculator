import React from 'react';

export default function MyFooter(props) {
    return (
        <footer className={`mt-8 text-center text-xs leading-6 ${props.styles}`}>
            <p>{props.information}</p>
            <p>{props.description}</p>
            <p>{props.signature}</p>
        </footer>
    )
}