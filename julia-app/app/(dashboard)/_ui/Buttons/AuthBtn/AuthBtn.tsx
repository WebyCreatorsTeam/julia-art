"use client";

import { useFormStatus } from 'react-dom';
import "../../../_style/_ui/AuthBtn/_auth.btn.scss"

const AuthBtn = ({ btnText, btnType }: { btnText: string, btnType?: "button" | "submit" | "reset" | undefined }) => {
    const { pending } = useFormStatus();
    return (
        <button type={btnType ? btnType : "button"} className="authBtn" disabled={pending}>{pending ? "Ща все будет..." : btnText}</button>
    )
}

export default AuthBtn