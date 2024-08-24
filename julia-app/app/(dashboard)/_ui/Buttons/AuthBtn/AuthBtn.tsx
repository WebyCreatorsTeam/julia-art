"use client";

import React from 'react'
import { useFormStatus } from 'react-dom';
import "../../../_style/_ui/AuthBtn/_auth.btn.scss"

const AuthBtn = ({btnText}:{btnText: string}) => {
    const { pending } = useFormStatus();
    return (
        <button className="authBtn" disabled={pending}>{pending ? "פרטים נשלחים..." : btnText}</button>
    )
}

export default AuthBtn