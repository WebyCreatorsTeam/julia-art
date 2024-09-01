"use client";

import React from 'react'
import { useFormStatus } from 'react-dom';
import "../../../_style/_ui/AuthBtn/_auth.btn.scss"

const AuthBtn = ({ btnText, btnType="button" }: { btnText: string, btnType?: string }) => {
    const { pending } = useFormStatus();
    return (
        <button type={btnType} className="authBtn" disabled={pending}>{pending ? "Ща все будет..." : btnText}</button>
    )
}

export default AuthBtn