"use client";

import React from 'react'
import { useFormStatus, useFormState } from 'react-dom';

const AuthBtn = ({btnText}:{btnText: string}) => {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending}>{pending ? "פרטים נשלחים..." : btnText}</button>
    )
}

export default AuthBtn